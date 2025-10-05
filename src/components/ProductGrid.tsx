import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const products = [
  {
    title: "Bookmarks printing",
    price: "Starting at Ksh. 25",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop",
  },
  {
    title: "2026 Calendar printing",
    price: "From Ksh. 90 per piece",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=300&h=300&fit=crop",
  },
  {
    title: "Postcards printing",
    price: "From Ksh. 25 per card",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop",
  },
  {
    title: "A5 Flyers printing",
    price: "From Ksh. 15 per flyer",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=300&fit=crop",
  },
  {
    title: "Receipt books printing",
    price: "From Ksh. 500 per book",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=300&fit=crop",
  },
  {
    title: "Roll up Banner printing",
    price: "From Ksh. 6,000 per piece",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop",
  },
  {
    title: "New Baby Cards",
    price: "From Ksh. 25 per piece",
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=300&h=300&fit=crop",
  },
  {
    title: "X-Banner Stands printing",
    price: "From Ksh. 5800 per piece",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop",
  },
  {
    title: "Envelopes printing",
    price: "From Ksh. 40 per piece",
    image: "https://images.unsplash.com/photo-1526048598645-62b31f82c7a6?w=300&h=300&fit=crop",
  },
  {
    title: "Mounted Photos printing",
    price: "from Ksh. 700",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop",
  },
  {
    title: "Business Cards Printing",
    price: "From Ksh. 14 per card",
    image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?w=300&h=300&fit=crop",
  },
  {
    title: "Branded T-shirt",
    price: "From Ksh. 580",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
  },
];

export const ProductGrid = () => {
  const handleOrderClick = (productTitle: string) => {
    toast.success(`${productTitle} added to cart!`, {
      icon: '🛒',
    });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Featured Printed Materials</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-square overflow-hidden bg-secondary">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.price}</p>
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => handleOrderClick(product.title)}
                  >
                    Order Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
