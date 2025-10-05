import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
