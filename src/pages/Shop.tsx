import { useState } from "react";
import { Header } from "@/components/Header";
import { FooterNew } from "@/components/FooterNew";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, LayoutGrid, List } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import shop_img from "@/assets/shop.jpg"
import totebags from "@/assets/tote-bags-hero.jpg";
import totebag1 from "@/assets/thumbnails/totebag1.jpg";
import totebag2 from "@/assets/thumbnails/totebag2.jpg";
import cap1 from "@/assets/thumbnails/cap1.jpg";
import cap2 from "@/assets/thumbnails/cap2.jpg";
import cap3 from "@/assets/thumbnails/cap3.jpg";
import cap4 from "@/assets/thumbnails/cap4.jpg";
import rollup1 from "@/assets/thumbnails/rollup1.jpg";
import rollup2 from "@/assets/thumbnails/rollup2.jpg"
import rollup3 from "@/assets/thumbnails/rollup3.jpg"
import mug1 from "@/assets/thumbnails/mug1.jpg";
import mug2 from "@/assets/thumbnails/mug2.jpg";
import mug3 from "@/assets/thumbnails/mug3.jpg";
import mug4 from "@/assets/thumbnails/mug4.jpg";
import mounted1 from "@/assets/thumbnails/mounted1.jpg"
import mounted2 from "@/assets/thumbnails/mounted2.jpg"
import hoodie1 from "@/assets/thumbnails/hoodie1.jpg"
import hoodie2 from "@/assets/thumbnails/hoodie2.jpg"
import hoodie3 from "@/assets/thumbnails/hoodie3.jpg"
import hoodie4 from "@/assets/thumbnails/hoodie4.jpg"
import custom_shirt from "@/assets/custom.jpg";
import flyers from "@/assets/a5flyer.jpg";
import flyer1 from "@/assets/thumbnails/flyer1.jpg";
import flyer2 from "@/assets/thumbnails/flyer2.jpg";
import shirt1 from "@/assets/thumbnails/shirt1.jpg";
import shirt2 from "@/assets/thumbnails/shirt2.jpg";
import shirt3 from "@/assets/thumbnails/shirt3.jpg";
import shirt4 from "@/assets/thumbnails/shirt4.jpg";
import rollup from "@/assets/rollup-banner.jpg";
import caps from "@/assets/caps.jpg";
import hoodie from "@/assets/hoodie.jpg";
import mounted from "@/assets/thumbnails/mounted1.jpg";
import corporate1 from "@/assets/thumbnails/corporate1.jpg";
import corporate2 from "@/assets/thumbnails/corporate2.jpg";
import corporate3 from "@/assets/thumbnails/corporate3.jpg";
import corporate4 from "@/assets/thumbnails/corporate4.jpg";
import corporate5 from "@/assets/thumbnails/corporate5.jpg";
import corporate from "@/assets/thumbnails/corporate.jpg";
import trifold from "@/assets/moreProducts-img/trifold.jpg";
import poppup from "@/assets/moreProducts-img/poupup-banner.jpg";
import reflectors from "@/assets/moreProducts-img/reflectors.jpg";
import reciept from "@/assets/moreProducts-img/receipt.jpg";
import bscards from "@/assets/moreProducts-img/bs-cards.jpg";

import weddingcards from "@/assets/moreProducts-img/weddingcards.jpg";
import babyshower from "@/assets/moreProducts-img/babyshower.jpg";
import adhesive from "@/assets/moreProducts-img/adhesive.jpg";
import teardrop from "@/assets/moreProducts-img/teardrop.jpg";
import umbrella from "@/assets/moreProducts-img/umbrella.jpg";


const categories = [
  "All Products",
  "Stationery",
  "Apparel",
  "Gift Sets",
  "Accessories",
  "Packaging",
  "Outdoor Branding",
  "Home and Living",
  "Business Services"
];

const allProducts = [
  {
    title: "A-frame Signs",
    price: "Get a Quote",
    image: totebags,
    category: "Outdoor Branding",
    description: "Want more walk-ins? Make your storefront stand out."
  },
  {
    title: "A4 Size Flyer Printing",
    price: "From Ksh. 40",
    image: cap1 ,
    category: "Stationery"
  },
  {
    title: "Acrylic Sign",
    price: "From Ksh. 2,500",
    image: mug1,
    category: "Outdoor Branding"
  },
  {
    title: "Bookmarks printing",
    price: "Starting at Ksh. 25",
    image: shirt1,
    category: "Stationery"
  },
  {
    title: "2026 Calendar printing",
    price: "From Ksh. 90 per piece",
    image: rollup,
    category: "Stationery"
  },
  {
    title: "Postcards printing",
    price: "From Ksh. 25 per card",
    image: hoodie,
    category: "Stationery"
  },
  {
    title: "A5 Flyers printing",
    price: "From Ksh. 15 per flyer",
    image: mounted,
    category: "Stationery"
  },
  {
    title: "Receipt books printing",
    price: "From Ksh. 500 per book",
    image: corporate,
    category: "Business Services"
  },
  {
    title: "Roll up Banner printing",
    price: "From Ksh. 6,000 per piece",
    image: corporate3,
    category: "Outdoor Branding"
  },
  {
    title: "New Baby Cards",
    price: "From Ksh. 25 per piece",
    image: flyers,
    category: "Gift Sets"
  },
  {
    title: "X-Banner Stands printing",
    price: "From Ksh. 5800 per piece",
    image:  custom_shirt ,
    category: "Outdoor Branding"
  },
  {
    title: "Envelopes printing",
    price: "From Ksh. 40 per piece",
    image: rollup1 ,
    category: "Stationery"
  },
  {
    title: "Mounted Photos printing",
    price: "from Ksh. 700",
    image:  adhesive ,
    category: "Home and Living"
  },
  {
    title: "Business Cards Printing",
    price: "From Ksh. 14 per card",
    image: teardrop,
    category: "Business Services"
  },
  {
    title: "Branded T-shirt",
    price: "From Ksh. 580",
    image: umbrella,
    category: "Apparel"
  }
];

const Shop = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = allProducts
    .filter(product => {
      const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") {
        const priceA = parseFloat(a.price.match(/[\d,]+/)?.[0]?.replace(/,/g, '') || '999999');
        const priceB = parseFloat(b.price.match(/[\d,]+/)?.[0]?.replace(/,/g, '') || '999999');
        return priceA - priceB;
      }
      if (sortBy === "price-high") {
        const priceA = parseFloat(a.price.match(/[\d,]+/)?.[0]?.replace(/,/g, '') || '0');
        const priceB = parseFloat(b.price.match(/[\d,]+/)?.[0]?.replace(/,/g, '') || '0');
        return priceB - priceA;
      }
      if (sortBy === "name") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative h-64 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
          <div className="absolute inset-0 bg-cover bg-center opacity-20"></div>
          <div className="relative text-center text-primary-foreground">
            <h1 className="text-5xl font-bold mb-2">Shop</h1>
            <p className="text-lg">Home / Shop</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Product Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded transition-colors ${
                          selectedCategory === category
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-accent'
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </Card>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3">
              {/* Search and Filter Bar */}
              <div className="mb-6 space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="flex gap-2">
                      <Button
                        variant={viewMode === "grid" ? "default" : "outline"}
                        size="icon"
                        onClick={() => setViewMode("grid")}
                      >
                        <LayoutGrid className="h-4 w-4" />
                      </Button>
                      <Button
                        variant={viewMode === "list" ? "default" : "outline"}
                        size="icon"
                        onClick={() => setViewMode("list")}
                      >
                        <List className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-muted-foreground">
                    Showing 1–{filteredProducts.length} of {filteredProducts.length} results
                  </p>
                  
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full sm:w-64">
                      <SelectValue placeholder="Default sorting" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default sorting</SelectItem>
                      <SelectItem value="name">Sort by name</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Products Grid/List */}
<div className={viewMode === "grid" 
  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" 
  : "space-y-4"
}>
  {filteredProducts.map((product, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
    >
      <Card className={`overflow-hidden hover:shadow-lg transition-shadow group ${viewMode === "list" ? "flex flex-row" : ""}`}>
        <div className={`${viewMode === "list" ? "w-32" : "aspect-square"} overflow-hidden bg-gray-100`}>
          <motion.img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className={`p-3 ${viewMode === "list" ? "flex-1" : ""}`}>
          <h3 className="font-semibold text-sm mb-1">{product.title}</h3>
          {product.description && viewMode === "list" && (
            <p className="text-xs text-gray-500 mb-1">{product.description}</p>
          )}
          <p className="text-[#FF5C26] font-medium text-sm mb-2">{product.price}</p>
          <Button
            className="w-full bg-black hover:bg-[#e04e1e] text-white text-sm py-1 rounded-full"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </div>
      </Card>
    </motion.div>
  ))}
</div>


              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
                </div>
              )}
            </main>
          </div>
        </div>

        <FooterNew />
      </div>
    </PageTransition>
  );
};

export default Shop;
