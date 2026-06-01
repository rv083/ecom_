"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
// add this import at the top
import { HeroScrollStrip } from "./HeroScrollStrip";
import { BannerSlider } from "./BannerSlider";


export function Hero() {
  return (
  <>
    <BannerSlider />
    <section className="relative overflow-hidden bg-satin">
      <div className="luxury-container grid min-h-[calc(100vh-80px)] items-center gap-12 py-12 md:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-gold">
            Exquisite. Elegant. Enchanting.
          </p>
          <div className="flex flex-col">
            <h1 className="max-w-3xl font-serif text-6xl leading-[0.95] text-forest md:text-8xl">
              AURÉVA
            </h1>
            <p className="text-2xl font-medium text-forest tracking-[0.07em] mt-1">fashion</p>
          </div>
          <p className="mt-6 max-w-xl text-lg leading-8 text-moss">
            A contemporary ethnic and Indo-western fashion brand offering elegant, comfort-driven apparel in breathable fabrics like cotton, Kota doriya and Mal cotton, blending traditional Indian craftsmanship with modern style.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/shop">
              Shop Collection <ArrowRight size={17} />
            </Button>
            <Button href="/shop?sort=newest" variant="secondary">
              New Arrivals
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative min-h-[420px] md:min-h-[620px]"
        >
          <div className="absolute right-0 top-0 h-[86%] w-[74%] overflow-hidden rounded-[2rem] shadow-luxury">
            <img
              src="/pics/IMG-20260512-WA0295.jpg"
              alt="Aureva ivory ethnic wear"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="absolute bottom-0 left-0 h-[48%] w-[52%] overflow-hidden rounded-[1.5rem] border-8 border-pearl shadow-silk">
            <img
              src="/pics/pic_1.jpeg"
              alt="Aureva festive silk detail"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
      <div className="border-t border-forest/8">
        <HeroScrollStrip />
      </div>
    </section>
  </>
);
}