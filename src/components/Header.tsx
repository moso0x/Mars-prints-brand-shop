import { useState, useEffect } from "react";
import {
  Search,
  Mail,
  Phone,
  Clock,
  MapPin,
  ChevronDown,
  User,
  LogOut,
  Heart,
  Menu,
  X,
} from "lucide-react";
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
import logo from "@/assets/logo.jpeg";

export const Header = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error signing out");
    } else {
      toast.success("Signed out successfully");
      navigate("/");
    }
  };

  return (
    <header className="bg-background shadow-lg border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* --- Top bar --- */}
        <div className="flex items-center justify-between py-3 border-b flex-wrap gap-2">
          <div className="flex items-center gap-4 md:gap-6 flex-wrap">
            <a
              href="tel:+254704904678"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Phone className="h-[22px] w-[22px] text-[#0056FF]" />
              <span className="hidden sm:inline font-semibold text-black">
            +254 704-904-678
                
              </span>
            </a>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-[22px] w-[22px] text-[#F15A24]" />
              <span className="hidden md:inline font-semibold text-black">
                Nairobi, Kenya
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-[22px] w-[22px] text-[#00FF63]" />
              <span className="hidden lg:inline font-semibold text-black">
                Mon - Sat: 8am - 6pm
              </span>
            </div>
          </div>

          {/* User + Cart + Heart */}
          <div className="flex items-center gap-3">
            {user ? (
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            ) : (
              <Button variant="ghost" size="sm" asChild>
                <Link to="/auth">
                  <User className="h-4 w-4 mr-1" />
                  <span className="hidden sm:inline">Login</span>
                </Link>
              </Button>
            )}
            <Cart />
            <Heart className="h-4 w-4 text-gray-600" />
          </div>
        </div>

        {/* --- Logo + Search + Menu --- */}
        <div className="flex items-center justify-between py-4 flex-wrap gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center justify-center"
          >
            <img
              src={logo}
              alt="Jelimo Creatives Logo"
              className="w-auto h-30 md:h-30 lg:h-40 object-contain max-w-[140px] md:max-w-[160px]"
            />
          </Link>

          {/* Search bar (hidden on mobile) */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Find a product... Cards, Flyers, Labels, Mugs, ..."
                className="pl-10 bg-secondary border-border rounded-lg"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* --- Navigation --- */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center md:justify-start gap-2 pb-3 md:pb-0 md:space-x-2 transition-all`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-green-700 text-primary-foreground hover:bg-green-800 w-full md:w-auto justify-between">
                <span>Shop by Categories</span>
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link to="/marketing-materials" className="w-full cursor-pointer">
                  Marketing Materials
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/cards" className="w-full cursor-pointer">
                  Business Cards
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/stationery" className="w-full cursor-pointer">
                  Business Stationery
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/mugs" className="w-full cursor-pointer">
                  Apparel & Accessories
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/banners" className="w-full cursor-pointer">
                  Outdoor Branding
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Nav links */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-1">
            <Link to="/">
              <Button variant="ghost" className="w-full md:w-auto">
                Home
              </Button>
            </Link>
            <Link to="/price-list">
              <Button variant="ghost" className="w-full md:w-auto">
                Price List
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="ghost" className="w-full md:w-auto">
                Shop
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" className="w-full md:w-auto">
                Contact Us
              </Button>
            </Link>
            <Link to="/feedback">
              <Button
                variant="ghost"
                className="text-green-700 font-semibold w-full md:w-auto whitespace-nowrap"
              >
                Feedback
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
