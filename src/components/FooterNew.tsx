import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const servicesList = [
  "Digital Printing",
  "Offset Printing",
  "Branded Notebooks",
  "Rollup Banners",
  "Vinyl Stickers",
  "3D Signages",
  "Directional Signs",
  "Car Headrests",
  "Vinyl Banners",
  "Media Wall Banners",
  "Catalogue Stands",
  "S-banner stands",
  "Branded Mugs",
  "Branded Mousepads",
  "Nametags & Lanyards",
  "Presentation Folders",
  "Branded Tshirts",
  "Framed Photos",
  "Mounted Photos",
  "Pop-up Banners",
  "Door Frame Banners",
  "Custom Flags",
  "Teardrop Banners",
  "Telescopic banners",
  "A5 Flyers",
  "A4 Flyers",
  "Trifold Brochures",
  "Business Cards",
  "A5 Brochures",
  "A4 Brochures",
  "Posters",
  "Architectural Blueprints",
  "Receipt Books",
  "Document Printing",
  "PostCards",
  "Wedding Cards",
];

export const FooterNew = () => {
  return (
    <footer className="bg-white text-black py-12 relative overflow-hidden font-poppins text-xs md:text-sm">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <span className="text-orange-600 text-2xl ml-2 font-extrabold">MAR'S-</span>
            <span className="text-blue-600 text-xl">prints.brand.shop</span>
            <p className="text-blue-700 text-xs">
              Mars Printers brings your ideas to life with custom printing and branding solutions that make your brand unforgettable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-3 border-b border-[#05B45E]/40 pb-1">
              Quick Links
            </h4>
            <ul className="space-y-1">
              {[
                { name: "About Us", path: "/about" },
                { name: "Shop", path: "/shop" },
                { name: "Contact", path: "/contact" },
                { name: "Feedback", path: "/feedback" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-[#05B45E] transition-colors text-xs duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-3 border-b border-[#05B45E]/40 pb-1">
              Services
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-h-80 overflow-y-auto">
              {servicesList.map((service) => (
                <Link
                  key={service}
                  to="./shop"
                  className="hover:text-blue-600 text-xs transition-colors duration-200 block text-gray-800"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-3 border-b border-[#05B45E]/40 pb-1">
              Contact Us
            </h4>
            <ul className="space-y-1  text-xs text-black">
              <li>+254 717 037785</li>
              <li> marsprinters@gmail.com</li>
              <li>Mombasa, Kenya</li>
            </ul>

            <div className="flex space-x-3 mt-4">
              {[
                { Icon: Facebook, color: "#1877F2", link: "https://www.facebook.com/marsprintbrands" },
                { Icon: Instagram, color: "#E4405F", link: "https://www.instagram.com/marsprintbrands" },
                { Icon: Twitter, color: "#1DA1F2", link: "https://twitter.com/marsprintbrands" },
                { Icon: Linkedin, color: "#0A66C2", link: "https://www.linkedin.com/company/marsprintbrands" },
              ].map(({ Icon, color, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200"
                  style={{ color }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between gap-2 pt-4 border-t border-gray-200">
          <div className="text-center md:text-left text-xs text-blue-700">
            <p>
              &copy; {new Date().getFullYear()} <span className="font-medium">Mars  Custom Printing  & Branding Services</span>. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-black justify-center md:justify-end">
            <Link to="/privacy" className="hover:text-red-600 transition-colors text-xs">
              Privacy Policy
            </Link>
            <span className="text-red-600">|</span>
            <span className="hover:text-red-600 cursor-pointer">Terms of Use</span>
            <span className="text-red-600">|</span>
            <span className="hover:text-red-600 cursor-pointer">Return Policy</span>
            <span className="text-red-600">|</span>
            <span className="hover:text-red-600 cursor-pointer">Cookie Policy</span>
            <span className="text-red-600">|</span>
            <span className="hover:text-red-600 cursor-pointer">All Products</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
