import { Facebook, Instagram, Twitter, Linkedin, X } from "lucide-react";
import { useState } from "react";
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

// Primary Green [#AAC832]
// Dark Green   [#468C1E]
export const FooterNew = () => {
  const [showDeveloper, setShowDeveloper] = useState(false);

  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden font-poppins text-xs md:text-sm">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="" className="bg-white w-60 h-60 rounded-full" />
         
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3 border-b border-[#AAC832]/40 pb-1">
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
                    className="hover:text-[#AAC832] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-3 border-b border-[#AAC832]/40 pb-1">
              Services
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-h-80 overflow-y-auto">
              {servicesList.map((service) => (
                <Link
                  key={service}
                  to="/shop"
                  className="hover:text-[#AAC832] transition-colors duration-200 block"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-lg font-semibold mb-3 border-b border-[#AAC832]/40 pb-1">
              Contact Us
            </h4>
            <ul className="space-y-1">
              <li>+254 717 037785</li>
              <li>marsprinters@gmail.com</li>
              <li>Kimilili, Kenya</li>
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
                  className="hover:scale-110 transition-transform"
                  style={{ color }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between gap-2 pt-4 border-t border-gray-700">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-medium">
              Mars Custom Printing & Branding Services
            </span>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap gap-2 items-center">
            <Link to="/privacy" className="hover:text-red-600">
              Privacy Policy
            </Link>
            <span className="text-red-600">|</span>

            <button className="hover:text-red-600">Terms of Use</button>
            <span className="text-red-600">|</span>

            <button className="hover:text-red-600">Return Policy</button>
            <span className="text-red-600">|</span>

            <button className="hover:text-red-600">Cookie Policy</button>
            <span className="text-red-600">|</span>

            {/* Developer Button */}
            <button
              onClick={() => setShowDeveloper(true)}
              className="hover:text-[#AAC832] underline underline-offset-4 transition"
            >
              Developer
            </button>
          </div>
        </div>
      </div>

      {/* Developer Pop Card */}
      {showDeveloper && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => setShowDeveloper(false)}
          />

          {/* Card */}
          <div className="fixed bottom-6 right-6 z-50 w-80 bg-white text-black rounded-2xl shadow-2xl p-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-sky-600">
                For App and Websites Needs!
              </h3>
              <button onClick={() => setShowDeveloper(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="space-y-2 text-sm">
                 <h3 className="text-lg font-semibold text-sky-600">
              Contact:
              </h3>
              <p>
                <span className="font-medium">Name:</span> Moses Mulumia
               
              </p>
              <p> <span className="font-medium">Tel :</span> +254 742606050 </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:mosesmulumia@gmail.com"
                  className="text-sky-600 hover:underline"
                >
                  mosesmulumia@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">Address:</span> Nairobi, Kenya
              </p>
            </div>
          </div>
        </>
      )}
    </footer>
  );
};

export default FooterNew;
