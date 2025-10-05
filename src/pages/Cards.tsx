import { Header } from "@/components/Header";
import { FooterNew } from "@/components/FooterNew";
import { ProductGrid } from "@/components/ProductGrid";

const Cards = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Cards</h1>
        <p className="text-muted-foreground mb-8">
          Business cards, greeting cards, and invitation cards.
        </p>
        <ProductGrid />
      </main>
      <FooterNew />
    </div>
  );
};

export default Cards;
