import { Search, Mail, Phone, Clock, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Cart } from "@/components/Cart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="flex items-center justify-between py-3 border-b">
          <div className="flex items-center gap-4 md:gap-6 flex-wrap">
            <a href="tel:+254746174084" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+254 746 174 084</span>
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="hidden md:inline">Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="hidden lg:inline">Mon - Sat: 8am - 6pm</span>
            </div>
          </div>
          <Cart />
        </div>

        {/* Main header with logo and search */}
        <div className="flex items-center gap-4 py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-xl">BJ</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              Betty<span className="text-accent">Jelimo</span>
            </h1>
          </div>

          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Find a product...Cards, Flyers, Labels, Mugs, ...."
                className="pl-10 bg-secondary border-border"
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-2 pb-3 overflow-x-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <span>Shop by Categories</span>
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link to="/marketing-materials" className="w-full cursor-pointer">Marketing Materials</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/cards" className="w-full cursor-pointer">Business Cards</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/stationery" className="w-full cursor-pointer">Business Stationery</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/mugs" className="w-full cursor-pointer">Apparel & Accessories</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/banners" className="w-full cursor-pointer">Outdoor Branding</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/">
            <Button variant="ghost" className="whitespace-nowrap">Home</Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost" className="whitespace-nowrap">Contact Us</Button>
          </Link>
          <Link to="/feedback">
            <Button variant="ghost" className="text-accent whitespace-nowrap">Feedback</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
