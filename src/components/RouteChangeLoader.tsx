import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const RouteChangeLoader = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); // simulate load time
    return () => clearTimeout(timer);
  }, [location]);

  const colors = ["#FF6B00", "#1E1E2E", "#00C4B3"];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 dark:bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Pendulum Dots */}
          <div className="flex gap-4">
            {colors.map((color, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color }}
                animate={{
                  rotate: [15, -15, 15], // swing angle
                  y: [0, -10, 0],        // small vertical motion for pendulum effect
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <motion.p
            className="mt-6 text-lg font-medium text-gray-700 dark:text-gray-200 tracking-wide"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Please wait, Loading...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RouteChangeLoader;
