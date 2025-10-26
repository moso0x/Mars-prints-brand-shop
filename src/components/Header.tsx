import { useState, useEffect } from "react";
import {
  Search,
  Phone,
  Clock,
  MapPin,
  ChevronDown,
  User,
  LogOut,
  Menu,
  X,
  Heart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Cart } from "@/components/Cart";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "react-hot-toast";
import type { User as SupabaseUser } from "@supabase/supabase-js";
import logo from "@/assets/logo.png";
import AdvertRibbon from "./AdvertRibbon";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Header = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // ✅ Jelimo Creatives brand colors
  const COLORS = {
    brightBlue: "#1E57F0",
    lightBlue: "#7DB9FF",
    limeGreen: "#00FF66",
    orange: "#FF5B2E",
    deepNavy: "#0D1B5E",
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) toast.error("Error signing out");
    else {
      toast.success("Signed out successfully");
      navigate("/");
    }
  };

  return (
    <header className="w-full font-sans">
      {/* --- Top Bar --- */}
      <div className="bg-white border-b border-gray-200 py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-gray-800">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8">
            <a
              href="tel:+254704904678"
              className="flex items-center gap-1 hover:opacity-80"
            >
              <Phone className="text-black w-4 h-4 md:w-5 md:h-5" />
              <span className="font-medium">+254 704-904-678</span>
            </a>

            <div className="flex items-center gap-1">
              <MapPin className="text-black w-4 h-4 md:w-5 md:h-5" />
              <span className="font-medium">Mombasa, Kenya</span>
            </div>

            <div className="flex items-center gap-1">
              <Clock className="text-black w-4 h-4 md:w-5 md:h-5" />
              <span className="font-medium">Mon - Sat: 8am - 6pm</span>
            </div>
          </div>

          {/* Advertisement Ribbon */}
          <div className="w-[400px] mx-auto md:mx-0">
            <AdvertRibbon />
          </div>

          {/* User Controls */}
          <div className="flex items-center justify-center md:justify-end gap-3">
            {user ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-[#FF5B2E]"
              >
                <LogOut className="h-5 w-5 mr-1 text-[#FF5B2E]" />
                Logout
              </Button>
            ) : (
              <Button variant="ghost" size="sm" asChild className="text-black">
                <Link to="/auth">
                  <User className="h-5 w-5 mr-1 text-[#FF5B2E]" />
                  Login
                </Link>
              </Button>
            )}
            <ThemeToggle />
            <Cart />
            <Button variant="ghost" className="p-0">
              <Heart className="h-5 w-5 text-[#FF5B2E]" />
            </Button>
          </div>
        </div>
      </div>

      {/* --- Main Navigation --- */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg"
      >
        <div className="container mx-auto px-4 flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center justify-center">
            <motion.img
              src={logo}
              alt="Jelimo Creatives Logo"
              className="h-[100px] sm:h-[120px] object-contain"
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          {/* Desktop Nav */}
          <motion.nav
            layout
            className="hidden md:flex items-center gap-3 flex-1 justify-center text-[1rem] font-medium"
          >
            <div
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Button
                className="text-white flex items-center overflow-hidden relative"
                style={{ backgroundColor: COLORS.orange }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.span
                  whileHover={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  Shop by Categories
                </motion.span>
                <motion.div
                  animate={{ rotate: isHovered ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-4 w-4 ml-2" />
                </motion.div>
              </Button>

              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-0 mt-2 w-60 rounded-lg shadow-xl z-[9999]"
                    style={{ backgroundColor: COLORS.lightBlue }}
                  >
                    {[
                      ["Apparel & Wearables", "/marketing-materials"],
                      ["Packaging & Labeling", "/cards"],
                      ["Promotional & Corporate Gifts", "/stationery"],
                      ["Marketing & Advertising Materials", "/mugs"],
                      ["Merchandise & Lifestyle Items", "/banners"],
                      ["Eco-Friendly Branding", "/banners"],
                      ["Creative & Digital Design Services", "/banners"],
                      ["Specialty & Custom Finishes", "/banners"],
                    ].map(([label, link]) => (
                      <Link
                        key={label}
                        to={link}
                        className="block px-4 py-2 text-sm hover:bg-blue-200 transition-all relative group"
                      >
                        {label}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5  transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Static Nav Links */}
            {[
              ["Home", "/"],
              ["Price List", "/price-list"],
              ["Shop", "/shop"],
              ["Contact Us", "/contact"],
              ["Feedback", "/feedback"],
            ].map(([label, link]) => (
              <Link to={link} key={label} className="relative group">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: COLORS.lightBlue,
                    transition: { duration: 0.3 },
                  }}
                  className="px-3 py-2 rounded-lg"
                >
                  <motion.span
                    whileHover={{ scale: 0.9 }}
                    className="transition"
                    style={{
                      color:
                        label === "Feedback"
                          ? COLORS.limeGreen
                          : COLORS.deepNavy,
                    }}
                  >
                    {label}
                  </motion.span>
                </motion.div>
              </Link>
            ))}
          </motion.nav>

   {/* Search */}
            <motion.div layout className="hidden md:flex max-w-sm w-full relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5"
                style={{ color: COLORS.deepNavy }}
              />
              <Input
                placeholder="Find a product... Cards, Flyers, Labels, Mugs, ..."
                className="pl-10 italic text-[1rem] rounded-full border border-gray-200 focus:ring-0 focus:outline-none"
                style={{
                  borderColor: COLORS.lightBlue,
                  boxShadow: "none",
                }}
              />
            </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-black"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* --- Mobile Menu --- */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-lg flex flex-col items-center gap-2 pb-4"
            >
              {[
                ["Home", "/"],
                ["Price List", "/price-list"],
                ["Shop", "/shop"],
                ["Contact Us", "/contact"],
                ["Feedback", "/feedback"],
              ].map(([label, link]) => (
                <Link
                  key={label}
                  to={link}
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center py-2 font-medium hover:bg-gray-100 transition"
                >
                  {label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};
