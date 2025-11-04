import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster as HotToaster } from "react-hot-toast";
import { CartProvider } from "@/contexts/CartContext";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MarketingMaterials from "./pages/ApparelWearables";
import Mugs from "./pages/Mugs";
import Banners from "./pages/Banners";
import VinylStickers from "./pages/VinylStickers";
import LabelStickers from "./pages/LabelStickers";
import Cards from "./pages/Cards";
import Calendars from "./pages/Calendars";
import Letterheads from "./pages/Letterheads";
import Stationery from "./pages/PackagingLabeling";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import PriceList from "./pages/PriceList";
import Shop from "./pages/Shop";
import Breadcrumbs from "@/components/Breadcrumbs"; 
import { ProductPage } from "@/components/ProductPage";
import { TicketsGallery } from "./pages/TicketsGallery";
import { PaymentPage } from "./pages/PaymentPage";


import SupportCause from "./pages/SupportCause";

import RouteChangeLoader from "@/components/RouteChangeLoader"; // Assuming you added it

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
     <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <CartProvider>
      <TooltipProvider>
        <div className="overflow-x-hidden">
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
      style: {
    
        color: 'green',
        border: '1px solid darkgreen',
      },
      iconTheme: {
        primary: 'white',
        secondary: 'green',
      },
    },
    warning: {
      style: {
        background: 'red',
        color: 'white',
        border: '1px solid darkred',
      },
      iconTheme: {
        primary: 'white',
        secondary: 'red',
      },
    },
  }}
/>

          <BrowserRouter>
            <RouteChangeLoader />
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
              <Route path="/shop" element={<Shop />} />
              <Route path="/support-cause" element={<SupportCause />} />
              <Route path="ticketsGallery" element={<TicketsGallery />} />
              <Route path="/payment/:id" element={<PaymentPage />} />
              <Route path="/product/:productSlug" element={<ProductPage />} />
           
              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </CartProvider>
     </ThemeProvider>
  </QueryClientProvider>
);

export default App;
