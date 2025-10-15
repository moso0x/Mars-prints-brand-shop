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
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop",
    category: "Outdoor Branding",
    description: "Want more walk-ins? Make your storefront stand out."
  },
  {
    title: "A4 Size Flyer Printing",
    price: "From Ksh. 40",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=300&fit=crop",
    category: "Stationery"
  },
  {
    title: "Acrylic Sign",
    price: "From Ksh. 2,500",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop",
    category: "Outdoor Branding"
  },
  {
    title: "Bookmarks printing",
    price: "Starting at Ksh. 25",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop",
    category: "Stationery"
  },
  {
    title: "2026 Calendar printing",
    price: "From Ksh. 90 per piece",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=300&h=300&fit=crop",
    category: "Stationery"
  },
  {
    title: "Postcards printing",
    price: "From Ksh. 25 per card",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop",
    category: "Stationery"
  },
  {
    title: "A5 Flyers printing",
    price: "From Ksh. 15 per flyer",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=300&fit=crop",
    category: "Stationery"
  },
  {
    title: "Receipt books printing",
    price: "From Ksh. 500 per book",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=300&fit=crop",
    category: "Business Services"
  },
  {
    title: "Roll up Banner printing",
    price: "From Ksh. 6,000 per piece",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop",
    category: "Outdoor Branding"
  },
  {
    title: "New Baby Cards",
    price: "From Ksh. 25 per piece",
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=300&h=300&fit=crop",
    category: "Gift Sets"
  },
  {
    title: "X-Banner Stands printing",
    price: "From Ksh. 5800 per piece",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop",
    category: "Outdoor Branding"
  },
  {
    title: "Envelopes printing",
    price: "From Ksh. 40 per piece",
    image: "https://images.unsplash.com/photo-1526048598645-62b31f82c7a6?w=300&h=300&fit=crop",
    category: "Stationery"
  },
  {
    title: "Mounted Photos printing",
    price: "from Ksh. 700",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop",
    category: "Home and Living"
  },
  {
    title: "Business Cards Printing",
    price: "From Ksh. 14 per card",
    image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?w=300&h=300&fit=crop",
    category: "Business Services"
  },
  {
    title: "Branded T-shirt",
    price: "From Ksh. 580",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=400&fit=crop')] bg-cover bg-center opacity-20"></div>
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
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "space-y-6"
              }>
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {/* <Card className={`overflow-hidden hover:shadow-lg transition-shadow group ${
                      viewMode === "list" ? "flex flex-row" : ""
                    }`}> */}
                      {/* <div className={`${viewMode === "list" ? "w-48" : "aspect-square"} overflow-hidden bg-secondary`}>
                        <motion.img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div> */}
                      {/* <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                        <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                        {product.description && viewMode === "list" && (
                          <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                        )}
                        <p className="text-primary font-semibold text-sm mb-4">{product.price}</p>
                        <Button 
                          className="w-full"
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </Button>
                    //   </div> */}
                    {/* // </Card> */}
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
