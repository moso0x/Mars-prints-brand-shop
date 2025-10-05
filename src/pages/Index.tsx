import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { AboutSection } from "@/components/AboutSection";
import { ProductGrid } from "@/components/ProductGrid";
import { FooterNew } from "@/components/FooterNew";
import { PageTransition } from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroCarousel />
          <AboutSection />
          <ProductGrid />
        </main>
        <FooterNew />
      </div>
    </PageTransition>
  );
};

export default Index;
