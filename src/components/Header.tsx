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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "react-hot-toast";
import type { User as SupabaseUser } from "@supabase/supabase-js";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Jelimo Creatives color palette
  const COLORS = {
    blue: "#597CEB",
    neonGreen: "#05B45E",
    orange: "#D26749",
    deepBlue: "#0433E1",
    lightBlue: "#B9C4EF",
  };

  // Auth session
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

  // Scroll shadow behavior
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-1 bg-white/95 shadow-lg backdrop-blur-md" : "py-3 shadow-md"
      }`}
      style={{
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <div className="container mx-auto px-4 font-sans">
        {/* --- Top Bar --- */}
        <div
          className={`flex items-center justify-between border-b border-gray-300/50 pb-2 flex-wrap gap-2 transition-all duration-300 ${
            scrolled ? "text-sm text-gray-800" : "text-base text-gray-900"
          }`}
        >
          {/* Contact Info */}
          <div className="flex items-center gap-4 md:gap-8 flex-wrap">
            <a
              href="tel:+254704904678"
              className="flex items-center gap-2 hover:opacity-80"
            >
              <Phone className="md:h-[50px] md:w-[50px] w-[20px] text-[#05B45E]"  />
              <span className="font-medium text-black text-lg">+254 704-904-678</span>
            </a>

            <div className="flex items-center gap-2">
              <MapPin className="md:h-[50px] md:w-[50px] w-[20px] text-[#05B45E]" />
              <span className="font-medium text-black text-lg">Mombasa, Kenya</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="md:h-[50px] md:w-[50px] w-[20px] text-[#05B45E]"  />
              <span className="font-medium text-black text-lg">Mon - Sat: 8am - 6pm</span>
            </div>
          </div>

          {/* User, Cart & Wishlist */}
          <div className="flex items-center gap-4">
            {user ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="transition-colors text-[#D26749]"
              >
                <LogOut className="h-6 w-6 mr-1 text-[#D26749]" />
                <span className="text-lg font-medium">Logout</span>
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="transition-colors text-black"
              >
                <Link to="/auth">
                  <User className="h-6 w-6 mr-1 text-[#D26749]" />
                  <span className="text-lg font-medium">Login</span>
                </Link>
              </Button>
            )}

            <Cart />
            <Button variant="ghost" className="text-black p-0">
              <Heart className="h-6 w-6 text-[#D26749]" />
            </Button>
          </div>
        </div>

        {/* --- Logo + Navigation --- */}
        <motion.div
          layout
          className={`flex items-center justify-between py-4 flex-wrap gap-4 transition-all ${
            scrolled ? "py-2" : "py-4"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center justify-center"
          >
            <motion.img
              src={logo}
              alt="Jelimo Creatives Logo"
              className={`object-contain transition-all drop-shadow-md ${
                scrolled
                  ? "h-[150px] sm:h-[150px] md:[150px] lg:[150px]"
                  : "h-[150px] sm:[150px] md:[150px] lg:[150px]"
              }`}
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          {/* Nav Links */}
          <motion.nav
            layout
            className="hidden md:flex items-center gap-3 flex-1 justify-center text-[1rem] font-medium"
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="text-white"
                  style={{
                    backgroundColor: COLORS.orange,
                  }}
                >
                  <span>Shop by Categories</span>
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-white text-[#05B45E] hover-">
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
                  <DropdownMenuItem asChild key={label}>
                    <Link to={link} className="w-full cursor-pointer">
                      {label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {[
              ["Home", "/"],
              ["Price List", "/price-list"],
              ["Shop", "/shop"],
              ["Contact Us", "/contact"],
              ["Feedback", "/feedback"],
            ].map(([label, link]) => (
              <Link to={link} key={label}>
                <Button
                  variant="ghost"
                  className="transition text-[1rem]"
                  style={{
                    color:
                      label === "Feedback"
                        ? COLORS.neonGreen
                        : COLORS.deepBlue,
                  }}
                >
                  {label}
                </Button>
              </Link>
            ))}
          </motion.nav>

          {/* Search Bar */}
          <motion.div layout className="hidden md:flex max-w-sm w-full relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5"
              style={{ color: COLORS.deepBlue }}
            />
            <Input
              placeholder="Find a product... Cards, Flyers, Labels, Mugs, ..."
              className="pl-10 border rounded-lg text-[1rem] focus:ring-2"
              style={{
                borderColor: COLORS.lightBlue,
                outlineColor: COLORS.blue,
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
        </motion.div>

        {/* --- Mobile Navigation --- */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col md:hidden gap-2 pb-4 text-[1rem]"
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="text-white w-full justify-between"
                    style={{ backgroundColor: COLORS.orange }}
                  >
                    <span>Shop by Categories</span>
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-full">
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
                    <DropdownMenuItem asChild key={label}>
                      <Link to={link}>{label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {[
                ["Home", "/"],
                ["Price List", "/price-list"],
                ["Shop", "/shop"],
                ["Contact Us", "/contact"],
                ["Feedback", "/feedback"],
              ].map(([label, link]) => (
                <Link to={link} key={label}>
                  <Button
                    variant="ghost"
                    className="w-full transition text-[1rem]"
                    style={{
                      color:
                        label === "Feedback"
                          ? COLORS.neonGreen
                          : COLORS.deepBlue,
                    }}
                  >
                    {label}
                  </Button>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
