import { Header } from "@/components/Header";
import { FooterNew } from "@/components/FooterNew";
import { ProductGrid } from "@/components/ProductGrid";

const Calendars = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Calendars</h1>
        <p className="text-muted-foreground mb-8">
          Custom calendars for your business or personal use.
        </p>
        <ProductGrid />
      </main>
      <FooterNew />
    </div>
  );
};

export default Calendars;
