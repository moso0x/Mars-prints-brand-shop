import { useState, useEffect } from "react";
import {
  Search,
  Phone,
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

import trifold from "@/assets/moreProducts-img/trifold.jpg";
import poppup from "@/assets/moreProducts-img/poupup-banner.jpg";
import reflectors from "@/assets/moreProducts-img/reflectors.jpg";
import reciept from "@/assets/moreProducts-img/receipt.jpg";
import bscards from "@/assets/moreProducts-img/bs-cards.jpg";
import caps from "@/assets/moreProducts-img/caps.jpg";
import hoodie from "@/assets/moreProducts-img/hoodie.jpg";
import weddingcards from "@/assets/moreProducts-img/weddingcards.jpg";
import babyshower from "@/assets/moreProducts-img/babyshower.jpg";
import adhesive from "@/assets/moreProducts-img/adhesive.jpg";
import teardrop from "@/assets/moreProducts-img/teardrop.jpg";
import umbrella from "@/assets/moreProducts-img/umbrella.jpg";

const products = [
  { title: "Trifold Flyer Printing both sides", price: "Starting at Ksh. 300", image: trifold, link: "/product/trifold" },
  { title: "Poppup Banner Printing", price: "From Ksh. 100 per piece", image: poppup, link: "/product/poppup" },
  { title: "Custom Reflector Printing", price: "From Ksh. 250 per card", image: reflectors, link: "/product/reflectors" },
  { title: "All Sizes receipt Printing", price: "From Ksh. 150 per flyer", image: reciept, link: "/product/receipt" },
  { title: "Campaign Custom Caps Printing", price: "From Ksh. 200 per piece", image: caps, link: "/product/caps" },
  { title: "Custom Business Cards Printing", price: "From Ksh. 2000 per piece", image: bscards, link: "/product/bscards" },
  { title: "Custom All kinds of Hoodies Printing", price: "From Ksh. 500 per piece", image: hoodie, link: "/product/hoodie" },
  { title: "Custom Corporate Umbrella Printing", price: "From Ksh. 1000", image: umbrella, link: "/product/umbrella" },
  { title: "Wedding & Events Invitation cards", price: "From Ksh. 150 per piece", image: weddingcards, link: "/product/weddingcards" },
  { title: "Baby Shower invitation Cards", price: "From Ksh. 200", image: babyshower, link: "/product/babyshower" },
  { title: "Custom Adhesive Stickers", price: "From Ksh. 400 per mug", image: adhesive, link: "/product/adhesive" },
  { title: "Tear Drop Banners Printing", price: "From Ksh. 580", image: teardrop, link: "/product/teardrop" },
];

export const Header = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const COLORS = {
    primaryGray: "#57595B",
    primaryDark: "#A0E4CB",
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
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
    <header className="w-full font-sans text-xs">
      {/* Top Bar */}
      <div className="bg-black border-b border-gray-200 py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-3">
          <div className="flex gap-6">
            <a href="tel:+254704904678" className="flex items-center gap-1 text-white" >
              <Phone className="w-4 h-4 text-green-400" /> +254 717 037785
            </a>
            <div className="flex items-center gap-1 text-white" >
              <MapPin className="w-4 h-4 " />Kimilili, Khamulati. 
            </div>
          </div>

          <div className="w-[600px] mx-auto bg-[#CFF5E7]">
            <AdvertRibbon />
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-1 text-black" /> <span className="text-white">Logout</span>
              </Button>
            ) : (
              <Button variant="ghost" size="sm" asChild>
                <Link to="/auth">
                  <User className="w-4 h-4 mr-1" /> <span className="text-xs text-gray-900 hover:text-orange-500 text-white">Login</span> 
                </Link>
              </Button>
            )}
            <Cart />
            <Button variant="ghost" className="p-0">
              <Heart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between py-3">
          <Link to="/" className="">
          <span className="text-orange-600 text-2xl ml-2 font-extrabold">MAR'S-</span>
          <span className="text-blue-600 text-2xl">prints.brand.shop</span>
            
          </Link>

          <nav className="hidden md:flex items-center gap-4 flex-1 justify-center">
            {/* Categories */}
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              
              <Button
                className="
                  bg-blue-600 text-white text-xs
                  border border-blue-600
                  hover:bg-white hover:text-blue-600
                  transition-all rounded-full
                "
              >
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>

              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-[1100px] grid grid-cols-8 gap-4 p-4 bg-white rounded-lg shadow-xl"
                  >
                                          {products.map((product) => (
                                  <div
                                    key={product.title}
                                    className="
                                      flex flex-col items-center text-center p-2 rounded-lg
                                      border border-gray-200 hover:border-blue-400
                                      hover:shadow-md transition-all
                                    "
                                  >
                                    <img src={product.image} className="w-16 h-16 rounded mb-1" />
                                    <span className="font-medium">{product.title}</span>
                                    <span className="text-[0.65rem]">{product.price}</span>

                                    <Button
                                      variant="outline"
                                      className="
                                        mt-1 text-xs rounded-full
                                        border-blue-500 text-blue-600
                                        hover:bg-blue-600 hover:text-white
                                        transition-all px-1
                                      "
                                      onClick={() => navigate(`/product/${product.link.split("/").pop()}`)}
                                    >
                                      View Details
                                    </Button>
                                  </div>
                                ))}

                  

                   
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {["Home", "Shop", "Contact", "About", "Feedback"].map((item) => (
              <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} key={item}>
                <span className="px-3 py-2 hover:bg-gray-100 rounded-full text-xs">
                  {item}
                </span>
              </Link>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden md:flex relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search products..."
              className="pl-9 placeholder:text-xs rounded-full text-xs"
            />
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
};
