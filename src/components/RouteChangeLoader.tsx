import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const RouteChangeLoader = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); // simulate load time
    return () => clearTimeout(timer);
  }, [location]);

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
          {/* CSS Loader */}
          <div className="loader" />

          <motion.p
            className="mt-6 text-xs font-medium text-gray-700 dark:text-gray-200 tracking-wide"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Please wait, Loading...
          </motion.p>

          {/* CSS styles */}
          <style>{`
         .loader {
  width: 50px;
  height: 28px;
  --_g: no-repeat radial-gradient(farthest-side,#000 94%,#0000);
  background:
    var(--_g) 50%  0,
    var(--_g) 100% 0;
  background-size: 6px 6px;
  position: relative;
  animation: l23-0 1.5s linear infinite;
}
.loader:before {
  content: "";
  position: absolute;
  height: 6px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #0905f7ff;
  left:0;
  top:0;
  animation: 
    l23-1 1.5s linear infinite,
    l23-2 0.5s cubic-bezier(0,200,.8,200) infinite;
}
@keyframes l23-0 {
  0%,31%  {background-position: 50% 0   ,100% 0}
  33%     {background-position: 50% 100%,100% 0}
  43%,64% {background-position: 50% 0   ,100% 0}
  66%     {background-position: 50% 0   ,100% 100%}
  79%     {background-position: 50% 0   ,100% 0}
  100%    {transform:translateX(calc(-100%/3))}
}
@keyframes l23-1 {
  100% {left:calc(100% + 7px)}
}
@keyframes l23-2 {
  100% {top:-0.1px}
}
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RouteChangeLoader;

/* HTML: <div class="loader"></div> */
