import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-printing.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/30" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Transform Your Brand with
            <span className="block bg-gradient-primary bg-clip-text text-transparent mt-2">
              Betty Jelimo Printing
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Professional printing and branding services that bring your vision to life. 
            Quality you can see, service you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground group px-8 py-6 text-lg shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
