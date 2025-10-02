import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Betty Jelimo Printing
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-accent transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium">
              About
            </a>
            <a href="#testimonials" className="text-foreground hover:text-accent transition-colors font-medium">
              Testimonials
            </a>
            <Button className="bg-gradient-primary text-accent-foreground hover:opacity-90">
              Contact Us
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
