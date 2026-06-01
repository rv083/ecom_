"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✏️ Replace these with your real banner image paths later
const banners = [
  { id: 1, image: "/banners/banner1.jpg", alt: "Aureva new collection" },
  { id: 2, image: "/banners/banner2.jpg", alt: "Aureva festive edit" },
  { id: 3, image: "/banners/banner3.jpg", alt: "Aureva daily wear" },
];

export function BannerSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % banners.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/6" }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={banners[index].id}
          src={banners[index].image}
          alt={banners[index].alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-pearl" : "w-2 bg-pearl/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}