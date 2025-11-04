import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductGrid } from "@/components/ProductGrid";
import { RatingsSection } from "@/components/RatingsSection";
import { EcoFriendlySection } from "@/components/EcoFriendlySection";
import { FooterNew } from "@/components/FooterNew";
import { PageTransition } from "@/components/PageTransition";
import CitiesWeDeliver from "@/components/CitiesWeDeliver";
import { Accordion}  from "@/components/ui/accordion";
import { TicketsCarousel } from "@/components/TicketsCarousel";




const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroCarousel />
          <FeaturesSection />
          <ProductGrid />
          <TicketsCarousel />
         
          <EcoFriendlySection />
          <AboutSection />
           
          <CitiesWeDeliver/>
           <Accordion/>
            <RatingsSection />
        </main>
       
        <FooterNew />
      </div>
    </PageTransition>

  );
};

export default Index;
