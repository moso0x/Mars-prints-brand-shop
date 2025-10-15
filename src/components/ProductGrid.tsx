import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import totebags from "@/assets/tote-bags-hero.jpg";
import calenders from "@/assets/calenders.jpg"
import custom_shirt from "@/assets/custom.jpg"
import flyers from "@/assets/a5flyer.jpg"
import rollup from "@/assets/rollup-banner.jpg"
import caps from "@/assets/caps.jpg"
import hoodie from "@/assets/hoodie.jpg"
import mounted from "@/assets/mounted-photo.jpg"
import corporate from "@/assets/corporate.jpg"
import mug from "@/assets/mugs.jpg"

const products = [
  {
    title: "Tote Bags Printing",
    price: "Starting at Ksh. 300",
    image: totebags, // tote bag
  },
  {
    title: "2026 Calendar Printing",
    price: "From Ksh. 100 per piece",
    image: calenders
  },
  {
    title: "custom shirt Printing",
    price: "From Ksh. 250 per card",
    image: custom_shirt
  },
  {
    title: "A5 Flyers Printing",
    price: "From Ksh. 150 per flyer",
    image:flyers, // flyers
  },
  {
    title: "Caps Printing",
    price: "From Ksh. 200 per book",
    image: caps, // receipt books
  },
  {
    title: "Roll-up Banner Printing",
    price: "From Ksh. 2000 per piece",
    image: rollup, // roll-up banner
  },
  // {
  //   title: "New Baby Cards",
  //   price: "From Ksh. 25 per piece",
  //   image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=300&fit=crop", // baby card
  // },
  {
    title: "Hoodies Printing",
    price: "From Ksh. 500 per piece",
    image:hoodie, // X-banner
  },

  {
    title: "Mounted Photos Printing",
    price: "From Ksh. 700",
    image: mounted, // mounted photo
  },
  {
    title: "Custom mugs  Printing",
    price: "From Ksh. 14 per card",
    image:mug, // business cards
  },
  {
    title: "Corpotate Gifts",
    price: "From Ksh. 580",
    image: corporate, // T-shirt
  },
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
            From custom tote bags to elegant business cards, explore top-quality print products crafted to make your brand stand out.
          </p>
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
              <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-square overflow-hidden bg-secondary">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.price}</p>
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
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
