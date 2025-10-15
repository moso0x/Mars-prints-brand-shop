// components/RouteChangeLoader.tsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const RouteChangeLoader = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 300); // Delay to simulate loading

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div className="h-full bg-blue-600 animate-pulse transition-all" />
    </div>
  );
};

export default RouteChangeLoader;
