"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useCartStore } from "@/store/cart-store";

export function CartNotice() {
  const notice = useCartStore((state) => state.notice);
  const clearNotice = useCartStore((state) => state.clearNotice);

  useEffect(() => {
    if (!notice) return;

    const timeout = setTimeout(() => {
      clearNotice();
    }, 2200);

    return () => clearTimeout(timeout);
  }, [clearNotice, notice]);

  return (
    <AnimatePresence>
      {notice ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.24 }}
          className="fixed bottom-5 left-1/2 z-[70] flex -translate-x-1/2 items-center gap-3 rounded-full border border-gold/30 bg-[#fff8ec]/95 px-5 py-3 text-sm font-medium text-forest shadow-[0_14px_34px_rgba(97,57,25,0.16)] backdrop-blur-md"
        >
          <span className="grid h-6 w-6 place-items-center rounded-full bg-gold/15 text-gold">
            <Check size={14} />
          </span>
          <span>{notice}</span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
