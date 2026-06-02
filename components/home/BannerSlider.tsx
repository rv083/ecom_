"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✏️ Replace these with your real banner image paths later
const desktopBanners = [
  { id: 1, image: "/banners/desktop/banner1.jpg" },
  { id: 2, image: "/banners/desktop/banner2.jpg" },
  { id: 3, image: "/banners/desktop/banner3.jpg" },
];

const mobileBanners = [
  { id: 1, image: "/banners/mobile/banner1.jpg" },
  { id: 2, image: "/banners/mobile/banner2.jpg" },
  { id: 3, image: "/banners/mobile/banner3.jpg" },
];

export function BannerSlider() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const banners = isMobile ? mobileBanners : desktopBanners;

  useEffect(() => {
  const update = () => {
    setIsMobile(window.innerWidth < 768);
  };

  update();

  window.addEventListener("resize", update);

  return () => window.removeEventListener("resize", update);
}, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % banners.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
  className="
    relative
    w-full
    overflow-hidden
    h-[100svh]
    md:h-auto
  "
  style={
    !isMobile
      ? { aspectRatio: "16/6" }
      : undefined
  }
>
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