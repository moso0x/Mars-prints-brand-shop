import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png"

export const FooterNew = () => {
  return (
    <footer className="bg-white text-black py-14 relative overflow-hidden font-poppins">
      {/* Decorative splash glow */}
      <div className="absolute inset-0 bg-to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div>
            <img src={logo} alt="" className="w-[200px] h-[200px]"/>
         
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4 border-b border-[#05B45E]/40 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-black">
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
            <h4 className="text-lg font-semibold text-black mb-4 border-b border-[#05B45E]/40 pb-2">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-black">
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
            <h4 className="text-lg font-semibold text-black mb-4 border-b border-[#05B45E]/40 pb-2">
              Contact Us
            </h4>
            <ul className="space-y-2 text-black text-sm">
              <li>+254 704-904-678</li>
              <li>jelimocreatives@gmail.com</li>
              <li>Mombasa, Kenya</li>
            </ul>

            {/* Social Icons */}
<div className="flex space-x-4 mt-6">
  {[
    { 
      Icon: Facebook, 
      color: "#1877F2",
      link: "https://www.facebook.com/Jelimo_creative" 
    },
    { 
      Icon: Instagram, 
      color: "#E4405F",
      link: "https://www.instagram.com/jelimo_creative" 
    },
    { 
      Icon: Twitter, 
      color: "#1DA1F2",
      link: "https://twitter.com/Jelimo_creative" 
    },
    { 
      Icon: Linkedin, 
      color: "#0A66C2",
      link: "https://www.linkedin.com/company/jelimo-creative" 
    },
  ].map(({ Icon, color, link }, i) => (
    <a
      key={i}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-black hover:scale-110 transition-transform duration-200"
      style={{ color }}
    >
      <Icon size={22} />
    </a>
  ))}
</div>

          </div>
        </div>

        {/* Bottom Bar */}
       <div className="flex gap-2 pt-6 text-sm"> 
        <div className="text-center text-xs text-black border-t border-white/20 ">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-black font-medium">Jelimo Creatives Custom Printing</span>
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
              <div className="flex gap-2 pt-6 text-xs justify-end text-black">
              <p className="hover:text-red-600 transition-colors cursor-pointer">Privacy Policy</p>
              <span className="text-red-600">|</span>

              <p className="hover:text-red-600 transition-colors cursor-pointer">Terms of Use</p>
              <span className="text-red-600">|</span>

              <p className="hover:text-red-600 transition-colors cursor-pointer">Return Policy</p>
              <span className="text-red-600">|</span>

              <p className="hover:text-red-600 transition-colors cursor-pointer">Cookie Policy</p>
              <span className="text-red-600">|</span>

              <p className="hover:text-red-600 transition-colors cursor-pointer">All Products</p>
            </div>

       
      </div>
    </footer>
  );
};

export default FooterNew;
