import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png"

export const FooterNew = () => {
  return (
    <footer className="bg-black text-blsck py-14 relative overflow-hidden">
      {/* Decorative splash glow */}
      <div className="absolute inset-0 bg- to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div>
          <img src={logo} alt="" className="w-[100px] h-[100px]"/>
            <p className="text-sm text-blue-100 leading-relaxed">
              Professional printing and branding services that transform your vision into reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-[#05B45E]/40 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-blue-100">
              {["About Us", "Services", "Contact", "Feedback"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-[#05B45E] transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-[#05B45E]/40 pb-2">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-blue-100">
              {[
                "Business Cards",
                "Flyers & Brochures",
                "Banners",
                "Mugs & Bottles",
                "T-shirts",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="hover:text-[#05B45E] transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-[#05B45E]/40 pb-2">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>📞 +254 704-904-678</li>
              <li>✉️ jelimocreatives@gmail.com</li>
              <li>📍 Nairobi, Kenya</li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              {[
                { Icon: Facebook, color: "#1877F2" },
                { Icon: Instagram, color: "#E4405F" },
                { Icon: Twitter, color: "#1DA1F2" },
                { Icon: Linkedin, color: "#0A66C2" },
              ].map(({ Icon, color }, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-blue-100 hover:scale-110 transition-transform duration-200"
                  style={{ color }}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-sm text-blue-100 border-t border-white/20 pt-6">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">Betty Jelimo Printing</span>
            . All rights reserved. Made with{" "}
            <span className="text-[#D26749]">❤️</span> by{" "}
            <a
              href="https://anansiwebworks.netlify.app"
              className="text-[#05B45E] hover:underline hover:text-white transition-colors"
            >
              Anansi Web Works
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
