import { Header } from "@/components/Header";
import { FooterNew } from "@/components/FooterNew";
import { PageTransition } from "@/components/PageTransition";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import tag from "@/assets/tag.png";

const PriceList = () => {
  const categories = [
    {
      title: "Business Cards",
      description: "Professional business cards that make lasting impressions",
      items: [
        { name: "Standard Business Cards (500pcs)", price: "Ksh. 2,500", features: ["Matt/Gloss Finish", "Single Sided", "Standard Size"] },
        { name: "Premium Business Cards (500pcs)", price: "Ksh. 4,000", features: ["Matt/Gloss Finish", "Double Sided", "Premium Quality"] },
        { name: "Luxury Business Cards (500pcs)", price: "Ksh. 6,500", features: ["Embossed Finish", "Double Sided", "Premium Card Stock"] },
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />

        <main className="container mx-auto px-4 py-4">
          {/* ✅ Swinging Tag Icon */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ rotate: 0 }}
            animate={{
              rotate: [0, 15, -10, 10, -5, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            <img src={tag} alt="Tag Icon" className="w-[200px]" />
          </motion.div>

          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1b75bc]">
              Our Price List
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for premium quality printing services. All prices include design support.
            </p>
          </div>

          {/* 💡 Call to Action */}
          <Card className="mt-12 bg-[#f3faff] border-[#1b75bc]/30 animate-fade-in">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-[#00a651]">Need a Custom Quote?</h3>
                <p className="text-muted-foreground">
                  Have a special project in mind? Contact us for a personalized quote tailored to your specific needs.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-[#1b75bc] hover:bg-[#155f9b] text-white"
                    asChild
                  >
                    <Link to="/contact">Get Custom Quote</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#00a651] text-[#00a651] hover:bg-[#00a651]/10"
                    asChild
                  >
                    <Link to="/feedback">Request a Callback</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 💬 Info Cards */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 animate-fade-in">
            {[
              {
                title: "Volume Discounts",
                text: "Order in bulk and save! We offer attractive discounts for large quantity orders.",
              },
              {
                title: "Fast Turnaround",
                text: "Most orders are completed within 3-5 business days. Rush services available.",
              },
              {
                title: "Quality Guarantee",
                text: "100% satisfaction guaranteed. We'll reprint if you're not completely happy.",
              },
            ].map((info) => (
              <Card key={info.title} className="hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-[#1b75bc]">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{info.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>

        <FooterNew />
      </div>
    </PageTransition>
  );
};

export default PriceList;
