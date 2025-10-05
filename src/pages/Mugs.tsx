import { Header } from "@/components/Header";
import { FooterNew } from "@/components/FooterNew";
import { ProductGrid } from "@/components/ProductGrid";

const Mugs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Mugs & Water Bottles</h1>
        <p className="text-muted-foreground mb-8">
          Custom printed mugs and water bottles for your brand.
        </p>
        <ProductGrid />
      </main>
      <FooterNew />
    </div>
  );
};

export default Mugs;
