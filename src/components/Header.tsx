import { Search, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Cart } from "@/components/Cart";

export const Header = () => {
  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="flex items-center justify-between py-3 border-b">
          <div className="flex items-center gap-6">
            <a href="mailto:info@bettyjelimo.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@bettyjelimo.com</span>
            </a>
            <a href="tel:+254712345678" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">0746174084</span>
            </a>
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
        <nav className="flex items-center gap-1 pb-3 overflow-x-auto">
          <Link to="/marketing-materials">
            <Button variant="ghost" className="whitespace-nowrap">Marketing Materials</Button>
          </Link>
          <Link to="/mugs">
            <Button variant="ghost" className="whitespace-nowrap">Mugs & Water Bottles</Button>
          </Link>
          <Link to="/banners">
            <Button variant="ghost" className="whitespace-nowrap">Banners</Button>
          </Link>
          <Link to="/vinyl-stickers">
            <Button variant="ghost" className="whitespace-nowrap">Vinyl Stickers</Button>
          </Link>
          <Link to="/label-stickers">
            <Button variant="ghost" className="whitespace-nowrap">Label Stickers</Button>
          </Link>
          <Link to="/cards">
            <Button variant="ghost" className="whitespace-nowrap">Cards</Button>
          </Link>
          <Link to="/calendars">
            <Button variant="ghost" className="whitespace-nowrap">Calendars</Button>
          </Link>
          <Link to="/letterheads">
            <Button variant="ghost" className="whitespace-nowrap">Letterheads</Button>
          </Link>
          <Link to="/stationery">
            <Button variant="ghost" className="whitespace-nowrap">Stationery</Button>
          </Link>
          <Link to="/feedback">
            <Button variant="ghost" className="text-accent whitespace-nowrap">Feedback</Button>
          </Link>
          <Link to="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
              Contact us
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
