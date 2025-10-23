import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import totebags from "@/assets/tote-bags-hero.jpg";
import calenders from "@/assets/calenders.jpg";
import custom_shirt from "@/assets/custom.jpg";
import flyers from "@/assets/a5flyer.jpg";
import rollup from "@/assets/rollup-banner.jpg";
import caps from "@/assets/caps.jpg";
import hoodie from "@/assets/hoodie.jpg";
import mounted from "@/assets/mounted-photo.jpg";
import corporate from "@/assets/corporate.jpg";
import mug from "@/assets/mugs.jpg";

const products = [
  { title: "Tote Bags Printing", price: "Starting at Ksh. 300", image: totebags },
  { title: "2026 Calendar Printing", price: "From Ksh. 100 per piece", image: calenders },
  { title: "Custom Shirt Printing", price: "From Ksh. 250 per card", image: custom_shirt },
  { title: "A5 Flyers Printing", price: "From Ksh. 150 per flyer", image: flyers },
  { title: "Caps Printing", price: "From Ksh. 200 per piece", image: caps },
  { title: "Roll-up Banner Printing", price: "From Ksh. 2000 per piece", image: rollup },
  { title: "Hoodies Printing", price: "From Ksh. 500 per piece", image: hoodie },
  { title: "Mounted Photos Printing", price: "From Ksh. 700", image: mounted },
  { title: "Custom Mugs Printing", price: "From Ksh. 400 per mug", image: mug },
  { title: "Corporate Gifts", price: "From Ksh. 580", image: corporate },
    { title: "Custom Mugs Printing", price: "From Ksh. 400 per mug", image: mug },
  { title: "Corporate Gifts", price: "From Ksh. 580", image: corporate },
];

export const ProductGrid = () => {
  const { addToCart } = useCart();

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
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Featured Printed Materials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From custom tote bags to elegant business cards, explore top-quality print
            products crafted to make your brand stand out.
          </p>
        </motion.div>

        {/* Adjusted Grid — 5 columns on large screens */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow group rounded-lg">
                <div className="overflow-hidden bg-secondary">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-36 md:h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm md:text-base mb-1">{product.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-3">
                    {product.price}
                  </p>
                  <Button
                    size="sm"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-xs md:text-sm"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
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
