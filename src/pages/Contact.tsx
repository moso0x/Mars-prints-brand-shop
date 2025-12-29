import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import FooterNew from "@/components/FooterNew";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import toast from "react-hot-toast";
import contact from "@/assets/contact-icon.jpg";
import { motion } from "framer-motion";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
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
      {loading ? (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="mt-2 text-gray-600 text-sm font-medium">Loading...</p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 18, stiffness: 120 }}
          className="min-h-screen bg-white"
        >
          <Header />

          {/* ICON */}
          <div className="flex justify-center py-4">
            <motion.img
              src={contact}
              className="w-20 rounded-xl shadow-sm border border-blue-100"
              alt="Contact illustration"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            />
          </div>

          <main className="container mx-auto px-4 py-8">
            <motion.h1 className="text-3xl font-bold mb-2 text-center text-blue-700">
              Contact Us
            </motion.h1>

            <motion.p className="text-center text-gray-600 text-xs max-w-xl mx-auto mb-8">
              Let’s Build Your Brand — Message Us
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* FORM CARD */}
              <motion.div
                className="bg-white shadow-md rounded-xl p-4 border border-blue-100"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 16 }}
              >
                <h2 className="text-lg font-semibold mb-3 text-blue-700 text-xs">
                  Your Details Help Us Connect
                </h2>

                <form className="space-y-3" onSubmit={handleSubmit}>
                  <div className="text-xs">
                    <Label htmlFor="contact-name text-xs">Name</Label>
                    <Input
                      id="contact-name"
                      placeholder="Your name"
                      className="placeholder:text-xs focus:ring-2 focus:ring-blue-500 placeholder:text-xs focus:border-blue-500"
                    />
                  </div>

                  <div className="text-xs">
                    <Label htmlFor="contact-email text-xs">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      className="placeholder:text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="text-xs">
                    <Label htmlFor="contact-phone text-xs">Phone</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="placeholder:text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="text-xs">
                    <Label htmlFor="contact-message  label:text-xs">Message</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="How can we help you?"
                      rows={4}
                      className="placeholder:text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-50%  py-2 text-xs rounded-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* CONTACT INFO CARD */}
              <motion.div
                className="bg-white shadow-md rounded-xl p-4 border border-blue-100"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 16 }}
              >
                <h2 className="text-lg font-semibold mb-3 text-blue-700">
                  Contact Information
                </h2>

                <div className="space-y-3 text-xs text-gray-700">
                  <div className="flex items-start gap-2">
                    <Mail className="h-4 w-4 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p>marsprinters@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p> +254 717 037785</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p>Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-xs text-gray-700">
                  <h3 className="font-semibold mb-2 text-blue-700">
                    Business Hours
                  </h3>
                  <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
                  <p>Saturday: 9:00 AM – 4:00 PM</p>
                  <p>Sunday: Closed</p>
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
