export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Betty Jelimo Printing
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Professional printing and branding services that transform your vision into reality.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Business Cards</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Flyers & Brochures</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Banners & Signage</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Branding Packages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Our Work</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>+254 712 345 678</li>
              <li>info@bettyjelimo.com</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Betty Jelimo Printing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
