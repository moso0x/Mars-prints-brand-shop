import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12">
            Get in touch with us today and let's create something amazing together
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm">
              <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-primary-foreground mb-2">Phone</h3>
              <p className="text-primary-foreground/80">+254 712 345 678</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm">
              <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-primary-foreground mb-2">Email</h3>
              <p className="text-primary-foreground/80">info@bettyjelimo.com</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm">
              <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-primary-foreground mb-2">Location</h3>
              <p className="text-primary-foreground/80">Nairobi, Kenya</p>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-lg shadow-xl"
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};
