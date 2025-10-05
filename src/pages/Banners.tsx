import { Header } from "@/components/Header";
import { FooterNew } from "@/components/FooterNew";
import { ProductGrid } from "@/components/ProductGrid";

const Banners = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Banners</h1>
        <p className="text-muted-foreground mb-8">
          High-quality banners for events, promotions, and advertising.
        </p>
        <ProductGrid />
      </main>
      <FooterNew />
    </div>
  );
};

export default Banners;
