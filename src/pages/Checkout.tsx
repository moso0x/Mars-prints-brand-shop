import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { FooterNew } from "@/components/FooterNew";
import { PageTransition } from "@/components/PageTransition";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { supabase } from "@/integrations/supabase/client";
import { Smartphone, CreditCard, Wallet } from "lucide-react";

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast.error("Please login to proceed with checkout");
        navigate("/auth");
      } else {
        if (session.user.email) {
          setFormData(prev => ({
            ...prev,
            email: session.user.email,
          }));
        }
        setCheckingAuth(false);
      }
    };
    checkAuth();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone,
          total_amount: getTotalPrice(),
          payment_method: paymentMethod,
          payment_status: 'pending',
        })
        .select()
        .single();

      if (orderError) throw orderError;

      const orderItems = items.map(item => ({
        order_id: order.id,
        product_title: item.title,
        product_price: item.price,
        quantity: item.quantity,
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      if (paymentMethod === 'mpesa') {
        toast.success('Order placed! You will receive an M-Pesa prompt on your phone.', { duration: 5000 });
      } else {
        toast.success('Order placed successfully! We will contact you shortly.', { duration: 5000 });
      }

      clearCart();
      navigate('/');
    } catch (error) {
      console.error('Order error:', error);
      toast.error('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <PageTransition>
        <div className="min-h-screen">
          <Header />
          <main className="container mx-auto px-4 py-12 flex items-center justify-center">
            <p className="text-muted-foreground">Loading...</p>
          </main>
          <FooterNew />
        </div>
      </PageTransition>
    );
  }

  if (items.length === 0) {
    return (
      <PageTransition>
        <div className="min-h-screen">
          <Header />
          <main className="container mx-auto px-4 py-12">
            <Card className="border-2 border-[#1E57F0] shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#0D1B5E]">Your cart is empty</CardTitle>
                <CardDescription className="text-[#1E57F0]">
                  Add some items to your cart before checking out
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => navigate('/')} 
                  className="bg-[#00FF66] text-black hover:bg-[#FF5B2E] transition"
                >
                  Continue Shopping
                </Button>
              </CardContent>
            </Card>
          </main>
          <FooterNew />
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#F8FAFC]">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-[#0D1B5E] border-b-4 border-[#00FF66] inline-block">
            Checkout
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card className="border-2 border-[#1E57F0] shadow-md">
                <CardHeader>
                  <CardTitle className="text-[#0D1B5E]">Customer Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="focus:border-[#00FF66]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="focus:border-[#00FF66]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="254712345678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="focus:border-[#00FF66]"
                      />
                    </div>
                  </form>
                </CardContent>
              </Card>

              <Card className="mt-6 border-2 border-[#1E57F0]">
                <CardHeader>
                  <CardTitle className="text-[#0D1B5E]">Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg mb-2 cursor-pointer hover:bg-[#00FF6610]">
                      <RadioGroupItem value="mpesa" id="mpesa" />
                      <Label htmlFor="mpesa" className="flex items-center gap-2 flex-1 cursor-pointer">
                        <Smartphone className="h-5 w-5 text-[#00FF66]" />
                        <div>
                          <div className="font-semibold text-[#0D1B5E]">M-Pesa</div>
                          <div className="text-sm text-[#1E57F0]">Pay via M-Pesa</div>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg mb-2 opacity-50">
                      <RadioGroupItem value="card" id="card" disabled />
                      <Label htmlFor="card" className="flex items-center gap-2 flex-1 cursor-not-allowed">
                        <CreditCard className="h-5 w-5 text-[#1E57F0]" />
                        <div>
                          <div className="font-semibold text-[#0D1B5E]">Credit/Debit Card</div>
                          <div className="text-sm text-[#1E57F0]">Coming soon</div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-2 border-[#00FF66] shadow-md">
                <CardHeader>
                  <CardTitle className="text-[#0D1B5E]">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {items.map((item) => (
                    <div key={item.title} className="flex justify-between text-sm text-[#0D1B5E]">
                      <span>{item.title} x {item.quantity}</span>
                      <span>{item.price}</span>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg text-[#0D1B5E]">
                      <span>Total</span>
                      <span>Ksh. {getTotalPrice().toLocaleString()}</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-[#00FF66] text-black hover:bg-[#FF5B2E] transition"
                    size="lg"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : 'Place Order'}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <FooterNew />
      </div>
    </PageTransition>
  );
};

export default Checkout;
