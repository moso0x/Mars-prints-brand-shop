export const FooterNew = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Betty Jelimo Printing</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Professional printing and branding services that transform your vision into reality.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Feedback</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Business Cards</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Flyers & Brochures</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Banners</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Mugs & Bottles</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">T-shirts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Phone: 0746174084</li>
              <li>Email: info@bettyjelimo.com</li>
              <li>Location: Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Betty Jelimo Printing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
