"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-satin">
      <div className="luxury-container grid min-h-[calc(100vh-80px)] items-center gap-12 py-12 md:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-gold">
            Sleek. Simple. Aureva.
          </p>
          <h1 className="max-w-3xl font-serif text-6xl leading-[0.95] text-forest md:text-8xl">
            AURÉVA
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-moss">
            Premium women&apos;s ethnic wear shaped by silk-like textures, ivory calm,
            and modern feminine ease.
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
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85"
              alt="Aureva ivory ethnic wear"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 h-[48%] w-[52%] overflow-hidden rounded-[1.5rem] border-8 border-pearl shadow-silk">
            <img
              src="https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=85"
              alt="Aureva festive silk detail"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
