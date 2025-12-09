import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { FooterNew } from "@/components/FooterNew";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import toast from "react-hot-toast";
import contact from "@/assets/contact-icon.jpg";

import { motion } from "framer-motion";

// Avalanche transition for page + image
const avalancheVariant = {
  hidden: { opacity: 0, y: -120, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, damping: 18, stiffness: 120 },
  },
};

// Scroll-based card appearance
const scrollVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 16 },
  },
};

const Contact = () => {
  const [loading, setLoading] = useState(true);

  // Simulated loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // <— adjust loading duration here

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.", {
      icon: "📧",
    });
  };

  return (
    <PageTransition>
      {/* LOADING SCREEN */}
      {loading ? (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-[#6C63FF] rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600 text-lg font-medium">Loading...</p>
        </div>
      ) : (
        // PAGE CONTENT (appears after loading)
        <motion.div
          initial="hidden"
          animate="visible"
          variants={avalancheVariant}
          className="min-h-screen bg-gradient-to-br from-[#fdfbff] via-[#f4f9f9] to-[#fff]"
        >
          <Header />

          <div className="flex justify-center py-6">
            <motion.img
              src={contact}
              variants={avalancheVariant}
              initial="hidden"
              animate="visible"
              className="w-[100px] rounded-2xl shadow-lg border-2 border-[#6C63FF]/30"
              alt="Contact illustration"
            />
          </div>

          <main className="container mx-auto px-4 py-12">
            <motion.h1
              className="text-4xl font-bold mb-4 text-center"
              variants={avalancheVariant}
              initial="hidden"
              animate="visible"
            >
              Contact Us
            </motion.h1>

            <motion.p
              className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
              variants={avalancheVariant}
              initial="hidden"
              animate="visible"
            >
              Let’s Build Your Brand—Message Us
            </motion.p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* FORM CARD */}
              <motion.div
                variants={scrollVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white shadow-xl rounded-2xl p-8 border border-[#FFEB3B]"
              >
                <h2 className="text-2xl font-semibold mb-6 text-[#0052CC]">
                  Your Details Help Us Connect
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <Label htmlFor="contact-name">Name</Label>
                    <Input
                      id="contact-name"
                      placeholder="Your name"
                      className="focus:ring-2 focus:ring-[#00BFA6] focus:border-[#00BFA6]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      className="focus:ring-2 focus:ring-[#00BFA6] focus:border-[#00BFA6]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-phone">Phone</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="focus:ring-2 focus:ring-[#00BFA6] focus:border-[#00BFA6]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="How can we help you?"
                      rows={5}
                      className="focus:ring-2 focus:ring-[#6C63FF] focus:border-[#6C63FF]"
                    />
                  </div>

                  <Button
                    className="rounded-full flex justify-center bg-[#FF5C26] text-white font-medium hover:bg-[#E53935] transition"
                    type="submit"
                  >
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* CONTACT INFO CARD */}
              <motion.div
                variants={scrollVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white shadow-xl rounded-2xl p-8 border border-[#6C63FF]/10"
              >
                <h2 className="text-2xl font-semibold mb-6 text-[#64B5F6]">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-[#64B5F6] mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">
                        jelimocreatives@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-[#00BFA6] mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600">+254 704-904-678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-[#FF6B6B] mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-gray-600">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold mb-4 text-[#0052CC]">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </main>

          <FooterNew />
        </motion.div>
      )}
    </PageTransition>
  );
};

export default Contact;
