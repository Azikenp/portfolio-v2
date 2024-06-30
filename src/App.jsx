import React, { useEffect, useState } from "react";
import LeftSide from "./components/sides/LeftSide";
import RightSide from "./components/sides/RightSide";
import { motion } from "framer-motion";
import AppProvider from "./context/AppContext";

const App = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  // console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.pageY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <AppProvider>
      <div className="flex flex-col lg:flex-row px-7 lg:px-24 py-12 lg:py-24 bg-slate-900 text-slate-400 relative">
        <motion.div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
          style={{
            backgroundImage: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 60%)`,
          }}
        ></motion.div>
        <LeftSide />
        <RightSide />
      </div>
    </AppProvider>
  );
};

export default App;
