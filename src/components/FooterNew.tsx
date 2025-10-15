import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from "lucide-react";

export const FooterNew = () => {
  return (
    <footer className="bg-white text-gray-700 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
           Jelimo Creatives
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Professional printing and branding services that transform your vision into reality.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Feedback</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Business Cards</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Flyers & Brochures</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Banners</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Mugs & Bottles</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">T-shirts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>Phone: +254 704-904-678</li>
              <li>Email: jelimocreatives@gmail.com</li>
              <li>Location: Nairobi, Kenya</li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-sky-500 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-700 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 border-t pt-6">
          <p>&copy; {new Date().getFullYear()} Betty Jelimo Printing. All rights reserved. made with ❤️ by <a href="anansi.tech" className="hover:text-blue-500 transition-colors">Anansi Web Works</a></p>
          
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
