import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { FooterNew } from "@/components/FooterNew";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import { TreePine, Recycle, Droplets, Leaf, Phone, Mail, User } from "lucide-react";
import { toast } from "react-hot-toast";

const causes = [
  {
    id: "tree",
    icon: TreePine,
    title: "Plant a Tree",
    description: "For every 100 prints, we plant a tree in partnership with local conservation groups.",
    suggestedAmount: 50,
    color: "text-green-600",
  },
  {
    id: "recycled",
    icon: Recycle,
    title: "Recycled Paper",
    description: "Choose 100% recycled paper for your prints and reduce environmental impact.",
    suggestedAmount: 30,
    color: "text-blue-600",
  },
  {
    id: "water",
    icon: Droplets,
    title: "Water Conservation",
    description: "Support water-saving printing technologies and sustainable ink production.",
    suggestedAmount: 40,
    color: "text-cyan-600",
  },
];

export default function SupportCause() {
  const navigate = useNavigate();
  const [selectedCause, setSelectedCause] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [customerName, setCustomerName] = useState<string>("");
  const [customerEmail, setCustomerEmail] = useState<string>("");
  const [customerPhone, setCustomerPhone] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedCause || !amount || !customerName || !customerPhone) {
      toast.error("Please fill in all required fields");
      return;
    }

    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum < 10) {
      toast.error("Amount must be at least Ksh. 10");
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would integrate with M-Pesa API
      // For now, we'll show a success message
      toast.success(`Thank you for supporting ${causes.find(c => c.id === selectedCause)?.title}! You'll receive M-Pesa prompt shortly.`);
      
      // Reset form
      setSelectedCause("");
      setAmount("");
      setCustomerName("");
      setCustomerEmail("");
      setCustomerPhone("");
      
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Leaf className="w-10 h-10 text-green-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Support Our Environmental Causes
              </h1>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose a cause that matters to you and make a difference. Every contribution helps us build a greener future.
            </p>
          </motion.div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Select Cause */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">Select a Cause</Label>
                <RadioGroup value={selectedCause} onValueChange={setSelectedCause}>
                  <div className="grid gap-4">
                    {causes.map((cause) => {
                      const Icon = cause.icon;
                      return (
                        <label
                          key={cause.id}
                          className={`flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            selectedCause === cause.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <RadioGroupItem value={cause.id} id={cause.id} className="mt-1" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Icon className={`w-5 h-5 ${cause.color}`} />
                              <h3 className="font-semibold">{cause.title}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {cause.description}
                            </p>
                            <p className="text-sm font-medium text-primary">
                              Suggested: Ksh. {cause.suggestedAmount}
                            </p>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </RadioGroup>
              </div>

              {/* Amount */}
              <div>
                <Label htmlFor="amount" className="text-lg font-semibold mb-2 block">
                  Donation Amount (Ksh.)
                </Label>
                <Input
                  id="amount"
                  type="number"
                  min="10"
                  step="1"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>

              {/* Customer Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Your Information</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">M-Pesa Phone Number *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0700000000"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    You'll receive an M-Pesa prompt on this number
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email (Optional)</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Payment Method: M-Pesa
                </h3>
                <p className="text-sm text-muted-foreground">
                  You will receive an M-Pesa STK push notification on your phone to complete the payment.
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/")}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white"
                >
                  {isSubmitting ? "Processing..." : "Support This Cause"}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </main>

      <FooterNew />
    </div>
  );
}
