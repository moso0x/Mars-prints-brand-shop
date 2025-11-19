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

import { ShoppingCart } from "lucide-react";
import totebags from "@/assets/tote-bags-hero.jpg";
import custom_shirt from "@/assets/custom.jpg";
import flyers from "@/assets/a5flyer.jpg";
import mounted from "@/assets/thumbnails/mounted1.jpg";
import rollup from "@/assets/rollup-banner.jpg";
import hoodie from "@/assets/hoodie.jpg";
import corporate from "@/assets/thumbnails/corporate.jpg";
import trifold from "@/assets/moreProducts-img/trifold.jpg";
import reciept from "@/assets/moreProducts-img/receipt.jpg";
import bscards from "@/assets/moreProducts-img/bs-cards.jpg";
import reflectors from "@/assets/moreProducts-img/reflectors.jpg";
import babyshower from "@/assets/moreProducts-img/babyshower.jpg";
import weddingcards from "@/assets/moreProducts-img/weddingcards.jpg";
import adhesive from "@/assets/moreProducts-img/adhesive.jpg";
import teardrop from "@/assets/moreProducts-img/teardrop.jpg";
import umbrella from "@/assets/moreProducts-img/umbrella.jpg";
import rollup1 from "@/assets/thumbnails/rollup1.jpg";
import shirt1 from "@/assets/thumbnails/shirt1.jpg";
import cap1 from "@/assets/thumbnails/cap1.jpg";
import mug1 from "@/assets/thumbnails/mug1.jpg";

// ------------------------------
// Categories
// ------------------------------
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

// ------------------------------
// All Products
// ------------------------------
const allProducts = [
  { title: "Tote, Craft & Jute bags", price: "From Ksh. 500", image: totebags, category: "Outdoor Branding" },
  { title: "Wedding Cards", price: "From Ksh. 150", image: weddingcards, category: "Stationery" },
  { title: "Baby showers cards", price: "From Ksh. 100", image: babyshower, category: "Stationery" },
  { title: "Reflectors", price: "From Ksh. 40", image: reflectors, category: "Apparel" },
  { title: "Business cards", price: "From Ksh. 12", image: bscards, category: "Stationery" },
  { title: "Caps", price: "From Ksh. 350", image: cap1, category: "Apparel" },
  { title: "Custom Mugs", price: "From Ksh. 200", image: mug1, category: "Outdoor Branding" },
  { title: "Flyers", price: "From Ksh. 50", image: trifold, category: "Stationery" },
  { title: "Reciepts book", price: "From Ksh. 500", image: reciept, category: "Stationery" },
  { title: "Bookmarks printing", price: "Starting at Ksh. 25", image: shirt1, category: "Stationery" },
  { title: "2026 Calendar printing", price: "From Ksh. 200", image: rollup, category: "Stationery" },
  { title: "Postcards printing", price: "From Ksh. 25", image: hoodie, category: "Stationery" },
  { title: "A5 Flyers printing", price: "From Ksh. 15", image: mounted, category: "Stationery" },
  { title: "Receipt books printing", price: "From Ksh. 500", image: corporate, category: "Stationery" },
  { title: "Roll up Banner printing", price: "From Ksh. 6,000", image: trifold, category: "Apparel" },
  { title: "New Baby Cards", price: "From Ksh. 25", image: flyers, category: "Gift Sets" },
  { title: "X-Banner Stands printing", price: "From Ksh. 5800", image: custom_shirt, category: "Outdoor Branding" },
  { title: "Envelopes printing", price: "From Ksh. 40", image: rollup1, category: "Stationery" },
  { title: "Mounted Photos printing", price: "From Ksh. 700", image: adhesive, category: "Home and Living" },
  { title: "Business Cards Printing", price: "From Ksh. 14", image: teardrop, category: "Business Services" },
  { title: "Branded T-shirt", price: "From Ksh. 580", image: umbrella, category: "Apparel" },
];

const Shop = () => {
  const { addToCart } = useCart();

  // STATES
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // LOAD MORE STATE
  const [visibleCount, setVisibleCount] = useState(10);

  // FILTER & SORT
  const filteredProducts = allProducts
    .filter(product => {
      const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") {
        const priceA = parseFloat(a.price.match(/[\d,]+/)?.[0]?.replace(/,/g, "") || "999999");
        const priceB = parseFloat(b.price.match(/[\d,]+/)?.[0]?.replace(/,/g, "") || "999999");
        return priceA - priceB;
      }
      if (sortBy === "price-high") {
        const priceA = parseFloat(a.price.match(/[\d,]+/)?.[0]?.replace(/,/g, "") || "0");
        const priceB = parseFloat(b.price.match(/[\d,]+/)?.[0]?.replace(/,/g, "") || "0");
        return priceB - priceA;
      }
      if (sortBy === "name") return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />

        {/* HERO */}
        <section className="relative h-20 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
          <div className="relative text-center text-primary-foreground">
            <h1 className="text-4xl font-bold">Shop</h1>
            <p className="text-lg">Home / Shop</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* SIDEBAR */}
            <aside className="lg:col-span-1">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Product Categories</h3>
                <ul className="space-y-2">
                  {categories.map(category => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded ${
                          selectedCategory === category
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-accent"
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </Card>
            </aside>

            {/* MAIN CONTENT */}
            <main className="lg:col-span-3">

              {/* SEARCH + FILTER */}
              <div className="mb-6 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between gap-4">

                  {/* SEARCH */}
                  <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  {/* VIEW MODE */}
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

                {/* SORT */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-muted-foreground">
                    Showing {Math.min(visibleCount, filteredProducts.length)} of {filteredProducts.length} results
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

              {/* PRODUCT GRID */}
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
                    : "space-y-4"
                }
              >
                {filteredProducts.slice(0, visibleCount).map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Card className={`overflow-hidden hover:shadow-lg transition-shadow group ${viewMode == "list" ? "flex" : ""}`}>
                      {/* IMAGE */}
                      <div className={`${viewMode === "list" ? "w-32" : "aspect-square"} overflow-hidden bg-gray-100`}>
                        <motion.img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      {/* DETAILS */}
                      <div className="p-3 flex-1">
                        <h3 className="font-semibold text-sm mb-1">{product.title}</h3>
                        <p className="text-black font-medium text-sm mb-2 text-red-400">{product.price}</p>

                        <Button
                          className="w-full bg-black hover:bg-[#e04e1e] text-white text-xs py-1 rounded-full"
                          onClick={() => addToCart(product)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-1" /> Add to Cart
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* LOAD MORE BUTTON */}
              {visibleCount < filteredProducts.length && (
                <div className="flex justify-center mt-10">
                  <Button
                    onClick={() => setVisibleCount(prev => prev + 10)}
                    className="px-6 py-2 text-xs bg-black text-white rounded-full hover:bg-[#e04e1e]"
                  >
                    Load More products...
                  </Button>
                </div>
              )}

              {/* EMPTY STATE */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No products found.</p>
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
