import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Leaf, TreePine, Recycle, Droplets } from "lucide-react";
import { useNavigate } from "react-router-dom";

const causes = [
  {
    icon: TreePine,
    title: "Plant a Tree",
    description: "For every 100 prints, we plant a tree in partnership with local conservation groups.",
    amount: "Add Ksh. 50",
    color: "text-green-600",
  },
  {
    icon: Recycle,
    title: "Recycled Paper",
    description: "Choose 100% recycled paper for your prints and reduce environmental impact.",
    amount: "Add Ksh. 30",
    color: "text-blue-600",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Support water-saving printing technologies and sustainable ink production.",
    amount: "Add Ksh. 40",
    color: "text-cyan-600",
  },
];

export const EcoFriendlySection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Print with Purpose
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Make your prints count! Support environmental causes while getting high-quality printing services.
            Every choice makes a difference for our planet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {causes.map((cause, index) => {
            const Icon = cause.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-4 bg-secondary rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-8 h-8 ${cause.color}`} />
                    </div>
                    <h3 className="font-bold text-xl mb-3">{cause.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {cause.description}
                    </p>
                    <div className="w-full">
                      <p className="text-sm font-semibold text-primary mb-3">
                        {cause.amount}
                      </p>
                      <Button 
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white"
                        onClick={() => navigate('/contact')}
                      >
                        Support This Cause
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="p-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-200 dark:border-green-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Our Environmental Commitment</h3>
                <p className="text-muted-foreground">
                  We are Venturing in promoting Environmental conservation  <span className="font-bold text-green-600">through our eco-friendly initiatives.</span> 
                  saved <span className="font-bold text-blue-600"></span>
                </p>
              </div>
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8"
                onClick={() => navigate('/contact')}
              >
                Learn More
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
