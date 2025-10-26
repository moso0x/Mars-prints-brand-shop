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

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.", {
      icon: "📧",
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-[#fdfbff] via-[#f4f9f9] to-[#fff]">
        <Header />

        <div className="flex justify-center py-6">
          <img
            src={contact}
            className="w-[280px] rounded-2xl shadow-lg border-2 border-[#6C63FF]/30"
            alt="Contact illustration"
          />
        </div>

        <main className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4 bg-[#6C63FF] via-[#00BFA6] to-[#FF6B6B] bg-clip-text text-transparent text-center">
            Contact Us
          </h1>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Get in touch with us for any inquiries or custom printing needs.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form Section */}
            <div className="bg-white shadow-xl rounded-2xl p-8 border border-[#6C63FF]">
              <h2 className="text-2xl font-semibold mb-6 text-[#6C63FF]">
                Send us a message
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
                  className="w-full bg-gradient-to-r from-[#6C63FF] via-[#00BFA6] to-[#FF6B6B] text-white font-medium hover:opacity-90 transition"
                  type="submit"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information Section */}
            <div className="bg-white shadow-xl rounded-2xl p-8 border border-[#6C63FF]/10">
              <h2 className="text-2xl font-semibold mb-6 text-[#00BFA6]">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-[#6C63FF] mt-1" />
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
                <h3 className="font-semibold mb-4 text-[#6C63FF]">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <FooterNew />
      </div>
    </PageTransition>
  );
};

export default Contact;
