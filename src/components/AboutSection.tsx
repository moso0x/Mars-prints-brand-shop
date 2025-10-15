import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

import color from "@/assets/colors.jpg";
import customer_1 from "@/assets/customer1.jpg";
import customer_2 from "@/assets/customer2.jpg";
import customer_7 from "@/assets/customer7.jpg";
import customer_4 from "@/assets/customer4.jpg";
import customer_5 from "@/assets/customer5.jpg";
import customer_9 from "@/assets/customer9.jpg";
import customer_8 from "@/assets/customer8.jpg";

// Customer product images
const productImages = [
  customer_1,
  customer_2,
  customer_7,
  customer_4,
  customer_5,
  customer_9,
  customer_8,
];

export const AboutSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <img
            src={color}
            alt="Printing Services"
            className="mx-auto mb-6 w-32 h-32 object-cover border-accent"
          />
          <h1 className="text-4xl font-bold mb-4">
            Printing Services in Kenya | Affordable & High Quality printing.
          </h1>
          <h3 className="text-xl text-muted-foreground mb-2">
            We print Flyers, Cards, Mugs, Adhesive Labels, Banners, Books...and much more!
          </h3>
          <p className="text-lg text-accent font-semibold">
            Place order, we deliver to major parts of Kenya.
          </p>
        </div>

        <Card className="p-8 max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4">Betty Jelimo | Printing and Branding Services</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Welcome to Betty Jelimo Printing, where we've got your printing needs covered!
              From business cards to banners and everything in between, we're here to make sure your prints pop!
            </p>
            <p>
              Our team is always ready to bring your ideas to life. We deliver high-quality prints that are sure to impress.
              So, whether you need to promote your business or create personalized gifts, we've got you covered!
            </p>
            <p>
              At Betty Jelimo Printing, we believe that every print job is unique. That's why we offer personalized printing services to cater to your specific needs.
              Our creative team will create designs that are as individual as you are.
            </p>
            <p>
              We understand that time is of the essence, which is why we pride ourselves on our fast turnaround times.
              Need those flyers printed and delivered fast? No problem! We'll get them done in a flash, without compromising on quality.
            </p>
            <p>
              And the best part? Our printing services won't break the bank! We offer competitive pricing to suit all budgets.
              From bold and colorful to sleek and sophisticated, we've got a design to match every style.
              We're not just about delivering great prints. We're all about providing awesome customer service too!
              Our team is friendly, approachable, and always ready to help you out. Get in touch with us today and let's get printing!
            </p>
          </div>
        </Card>

        <div className="bg-card rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Get plain and customized T-shirts, Jerseys</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  100% Cotton
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Locally Made
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Sizes from S to 2XL
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Round Neck T-shirts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  V-neck T-shirts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Polo T-shirts
                </li>
              </ul>
            </div>
          </div>
          <Button className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
            See price List
          </Button>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">We deliver to:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-card rounded-lg">Nairobi</div>
            <div className="p-4 bg-card rounded-lg">Mombasa</div>
            <div className="p-4 bg-card rounded-lg">Nakuru</div>
            <div className="p-4 bg-card rounded-lg">Eldoret</div>
            <div className="p-4 bg-card rounded-lg">Kisumu</div>
            <div className="p-4 bg-card rounded-lg">Thika</div>
            <div className="p-4 bg-card rounded-lg">Kitale</div>
            <div className="p-4 bg-card rounded-lg">Kakamega</div>
          </div>
        </div>

        {/* MARQUEE SECTION WITH MOTION */}
        <div className="mt-20 space-y-6">
          {/* Row 1: left to right */}
          <motion.div
            className="marquee-container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="marquee">
              {productImages.concat(productImages).map((src, idx) => (
                <img
                  key={`marquee-1-${idx}`}
                  src={src}
                  alt={`Product ${idx}`}
                  className="w-40 h-40 object-cover mx-4 rounded-lg shadow"
                />
              ))}
            </div>
          </motion.div>

          {/* Row 2: right to left */}
          <motion.div
            className="marquee-container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* <div className="marquee reverse">
              {productImages.concat(productImages).map((src, idx) => (
                <img
                  key={`marquee-2-${idx}`}
                  src={src}
                  alt={`Product ${idx}`}
                  className="w-40 h-40 object-cover mx-4 rounded-lg shadow"
                />
              ))}
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
