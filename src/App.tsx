import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster as HotToaster } from "react-hot-toast";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MarketingMaterials from "./pages/MarketingMaterials";
import Mugs from "./pages/Mugs";
import Banners from "./pages/Banners";
import VinylStickers from "./pages/VinylStickers";
import LabelStickers from "./pages/LabelStickers";
import Cards from "./pages/Cards";
import Calendars from "./pages/Calendars";
import Letterheads from "./pages/Letterheads";
import Stationery from "./pages/Stationery";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import PriceList from "./pages/PriceList";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HotToaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'hsl(var(--card))',
            color: 'hsl(var(--card-foreground))',
            border: '1px solid hsl(var(--border))',
          },
          success: {
            iconTheme: {
              primary: 'hsl(var(--accent))',
              secondary: 'hsl(var(--accent-foreground))',
            },
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/marketing-materials" element={<MarketingMaterials />} />
          <Route path="/mugs" element={<Mugs />} />
          <Route path="/banners" element={<Banners />} />
          <Route path="/vinyl-stickers" element={<VinylStickers />} />
          <Route path="/label-stickers" element={<LabelStickers />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/calendars" element={<Calendars />} />
          <Route path="/letterheads" element={<Letterheads />} />
          <Route path="/stationery" element={<Stationery />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/price-list" element={<PriceList />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
