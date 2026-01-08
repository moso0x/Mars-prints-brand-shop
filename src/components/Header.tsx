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
import AdvertRibbon from "./AdvertRibbon";

/* ----------------------------- Product Images ----------------------------- */
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

/* -------------------------------- Products -------------------------------- */
const products = [
  { title: "Trifold Flyer Printing", image: trifold, link: "/product/trifold" },
  { title: "Popup Banner Printing", image: poppup, link: "/product/poppup" },
  { title: "Reflector Printing", image: reflectors, link: "/product/reflectors" },
  { title: "Receipt Printing", image: reciept, link: "/product/receipt" },
  { title: "Campaign Caps", image: caps, link: "/product/caps" },
  { title: "Business Cards", image: bscards, link: "/product/bscards" },
  { title: "Hoodies Printing", image: hoodie, link: "/product/hoodie" },
  { title: "Corporate Umbrellas", image: umbrella, link: "/product/umbrella" },
  { title: "Wedding Cards", image: weddingcards, link: "/product/weddingcards" },
  { title: "Baby Shower Cards", image: babyshower, link: "/product/babyshower" },
  { title: "Adhesive Stickers", image: adhesive, link: "/product/adhesive" },
  { title: "Teardrop Banners", image: teardrop, link: "/product/teardrop" },
];

export const Header = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  /* ------------------------------- Auth -------------------------------- */
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) toast.error("Error signing out");
    else {
      toast.success("Signed out");
      navigate("/");
    }
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
    setMenuOpen(false);
  };

  return (
    <header className="w-full text-xs">

      {/* ============================== TOP BAR ============================== */}
      <div className="bg-black py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-3 justify-between">
          <div className="flex gap-6 text-white font-bold">
            <span className="flex items-center gap-1 font-etrabold">
              <Phone className="w-4 h-4 text-sky-300 font-etrabold" />
              +254 717 037785
            </span>
            <span className="flex items-center gap-1 font-entrabold">
              <MapPin className="w-4 h-4 text-sky-300 font-entrabold " />
              Kimilili, Khamulati
            </span>
          </div>

          <div className=" md:block w-[600px]">
            <AdvertRibbon />
          </div>

          <div className="flex items-center gap-3 text-white">
            {user ? (
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-1" /> Logout
              </Button>
            ) : (
              <Link to="/auth">
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4 mr-1" /> Login
                </Button>
              </Link>
            )}
            <Cart />
            <Button variant="ghost">
              <Heart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* ============================== MAIN NAV ============================== */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between py-3">

          {/* Logo */}
          <Link to="/" className="font-bold text-xl">
            <span className=" text-4xl text-sky-600">MAR'S</span> 
            <span className="text-black-600">STUDIO</span>
          </Link>

          {/* --------------------------- DESKTOP NAV --------------------------- */}
          <nav className="hidden md:flex gap-4 flex-1 justify-center">
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Button className="bg-sky-600 text-white text-xs rounded-full">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </Button>

              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-[1100px] grid grid-cols-6 gap-4 p-4 bg-white shadow-xl rounded-lg"
                  >
                    {products.map((p) => (
                      <button
                        key={p.title}
                        onClick={() => navigate(p.link)}
                        className="border rounded-lg p-2 text-center hover:border-sky-500"
                      >
                        <img src={p.image} className="w-14 h-14 mx-auto mb-1" />
                        <span>{p.title}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {["Home", "Shop", "Contact", "About", "Feedback"].map((item) => (
              <Link key={item} to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                <span className="px-3 py-2 rounded-full hover:bg-sky-200">
                  {item}
                </span>
              </Link>
            ))}
          </nav>

          {/* Search Desktop */}
          <div className="hidden md:flex relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search products..."
              className="pl-9 rounded-full placeholder:text-xs"
            />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* ============================ MOBILE MENU ============================ */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="md:hidden border-t bg-white overflow-hidden"
            >
              <div className="p-4 space-y-4">

                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    placeholder="Search..."
                    className="pl-9 rounded-full"
                  />
                </div>

                {/* Products Accordion */}
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="flex justify-between w-full font-semibold"
                >
                  Products
                  <ChevronDown
                    className={`transition ${mobileProductsOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="grid grid-cols-2 gap-3"
                    >
                      {products.map((p) => (
                        <button
                          key={p.title}
                          onClick={() => {
                            navigate(p.link);
                            setMenuOpen(false);
                            setMobileProductsOpen(false);
                          }}
                          className="border rounded-lg p-2 text-center text-xs"
                        >
                          <img src={p.image} className="w-12 h-12 mx-auto mb-1" />
                          {p.title}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Links */}
                {["Home", "Shop", "Contact", "About","Photography & Videography", "Feedback"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`);
                      setMenuOpen(false);
                    }}
                    className="block text-left font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
