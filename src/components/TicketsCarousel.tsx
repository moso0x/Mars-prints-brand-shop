import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { eventsData } from "@/data/eventsData";
import { Button } from "@/components/ui/button";

export const TicketsCarousel = () => {
  const tickets = eventsData.map((event) => ({
    id: event.id,
    image: event.image,
  }));

  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;

    const animateLoop = async () => {
      const cardWidth = 288; // w-72 = 288px
      const gap = 24; // gap-6 = 24px
      const moveDistance = (cardWidth + gap) * 1; // Move 3 cards at a time

      while (true) {
        if (!isPaused) {
          // Move left
          await controls.start({
            x: `-${moveDistance}px`,
            transition: { duration: 2, ease: "easeInOut" },
          });
          
          // Pause for 2 seconds
          await new Promise((resolve) => setTimeout(resolve, 2000));
          
          // Reset to start
          await controls.start({
            x: "0px",
            transition: { duration: 0 },
          });
          
          // Short pause before next cycle
          await new Promise((resolve) => setTimeout(resolve, 1000));
        } else {
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }
    };

    animateLoop();
  }, [controls, started, isPaused]);

  return (
    <div className="overflow-hidden w-full py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Upcoming Events
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover and book tickets for exciting upcoming events
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex overflow-hidden w-full justify-center">
          <motion.div 
            className="flex gap-6 cursor-pointer" 
            animate={controls}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {tickets.concat(tickets).map((ticket, idx) => (
              <div key={idx} className="flex-shrink-0 w-72 h-72 group">
                <div className="relative bg-card rounded-xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:scale-105">
                  <img
                    src={ticket.image}
                    alt={`Event ${ticket.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-[var(--shadow-hover)] transition-all duration-300"
        >
          Explore and Book Ticket Events
        </Button>
      </div>
    </div>
  );
};
