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
import { Smartphone, CreditCard } from "lucide-react";

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
    address: "",
    city: "",
    county: "",
    notes: "",
  });

  const tillNumber = "8817976";

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast.error("Please login to proceed with checkout");
        navigate("/auth");
      } else {
        if (session.user.email) {
          setFormData(prev => ({ ...prev, email: session.user.email }));
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
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);
    try {
      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone,
          address: formData.address,
          city: formData.city,
          county: formData.county,
          delivery_notes: formData.notes,
          total_amount: getTotalPrice(),
          payment_method: paymentMethod,
          payment_status: "pending",
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
        .from("order_items")
        .insert(orderItems);

      if (itemsError) throw itemsError;

      toast.success("Order placed successfully!");
      clearCart();
      navigate("/");
    } catch (error) {
      console.error("Order error:", error);
      toast.error("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </PageTransition>
    );
  }

  if (items.length === 0) {
    return (
      <PageTransition>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow flex items-center justify-center px-4">
            <Card className="border-2 border-[#1E57F0] shadow-lg p-6 text-center max-w-md">
              <CardHeader>
                <CardTitle className="text-[#0D1B5E] text-lg">Your cart is empty</CardTitle>
                <CardDescription className="text-[#1E57F0] text-sm">
                  Add items to your cart before checking out
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => navigate('/')} 
                  className="bg-[#00FF66] text-black hover:bg-[#FF5B2E]"
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
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-6 flex-grow">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#0D1B5E] border-b-2 border-[#00FF66] inline-block">
            Checkout
          </h1>

          <div className="grid md:grid-cols-2 gap-6">
            {/* LEFT: FORM SECTIONS */}
            <div className="space-y-4">
              {/* Customer Info */}
              <Card className="border border-[#1E57F0]">
                <CardHeader className="py-2">
                  <CardTitle className="text-[#0D1B5E] text-lg">Customer Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input placeholder="Full Name" value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
                  <Input type="email" placeholder="Email" value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
                  <Input type="tel" placeholder="254712345678" value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}/>
                </CardContent>
              </Card>

              {/* Shipping Info */}
              <Card className="border border-[#1E57F0]">
                <CardHeader className="py-2">
                  <CardTitle className="text-[#0D1B5E] text-lg">Shipping</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input placeholder="Address" value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}/>
                  <div className="grid grid-cols-2 gap-3">
                    <Input placeholder="City" value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}/>
                    <Input placeholder="County" value={formData.county}
                      onChange={(e) => setFormData({ ...formData, county: e.target.value })}/>
                  </div>
                  <Input placeholder="Delivery notes (optional)" value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}/>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="border border-[#1E57F0]">
                <CardHeader className="py-2">
                  <CardTitle className="text-[#0D1B5E] text-lg">Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div
                      className="flex flex-col border rounded-lg p-3 hover:bg-[#00FF6610] transition"
                      onClick={() => setPaymentMethod("mpesa")}
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="mpesa" id="mpesa" />
                        <Label htmlFor="mpesa" className="flex items-center gap-2 cursor-pointer">
                          <Smartphone className="h-5 w-5 text-[#00FF66]" />
                          <span className="font-semibold text-[#0D1B5E]">M-Pesa</span>
                        </Label>
                      </div>

                      {paymentMethod === "mpesa" && (
                        <div className="mt-3 pl-5 text-sm space-y-3">
                          <div className="border-t border-dashed border-[#00FF66]/30 pt-2">
                            <p className="font-medium text-[#1E57F0] mb-2">
                              Choose Payment Option:
                            </p>
                            {/* STK Push */}
                            <div className="p-2 border rounded-md">
                              <p className="text-xs text-[#0D1B5E] mb-2">
                                Enter your phone number for STK Push:
                              </p>
                              <Input
                                type="tel"
                                placeholder="254712345678"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              />
                              <Button
                                size="sm"
                                className="mt-2 bg-[#00FF66] text-black hover:bg-[#FF5B2E]"
                                onClick={() => toast.success("STK push sent")}
                              >
                                Send STK Push
                              </Button>
                            </div>

                            {/* Till Number */}
                            <div className="p-2 border rounded-md mt-3 text-center">
                              <p className="text-xs text-[#1E57F0] mb-1">
                                Or pay via Till Number:
                              </p>
                              <p className="text-lg font-bold text-[#0D1B5E]">{tillNumber}</p>
                              <p className="text-xs text-[#1E57F0]">Betty Jelimo Ngetich</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Option Disabled */}
                    <div className="flex items-center space-x-2 p-3 border rounded-lg opacity-50 mt-2">
                      <RadioGroupItem value="card" id="card" disabled />
                      <Label htmlFor="card" className="flex items-center gap-2 cursor-not-allowed">
                        <CreditCard className="h-5 w-5 text-[#1E57F0]" />
                        <span className="font-semibold text-[#0D1B5E]">Card (coming soon)</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            {/* RIGHT: SUMMARY */}
            <div>
              <Card className="border border-[#00FF66]">
                <CardHeader className="py-2">
                  <CardTitle className="text-[#0D1B5E] text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  {items.map((item) => (
                    <div key={item.title} className="flex justify-between text-[#0D1B5E]">
                      <span>{item.title} x {item.quantity}</span>
                      <span>{item.price}</span>
                    </div>
                  ))}
                  <div className="border-t pt-3 flex justify-between font-bold text-[#0D1B5E] text-lg">
                    <span>Total</span>
                    <span>Ksh. {getTotalPrice().toLocaleString()}</span>
                  </div>
                  <Button
                    className="w-full bg-[#00FF66] text-black hover:bg-[#FF5B2E]"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Place Order"}
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
