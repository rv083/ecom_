"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/store/cart-store";
import type { Product } from "@/types/product";
import { formatCurrency } from "@/utils/format";
import { ImageCarousel } from "./ImageCarousel";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const currentPrice = product.discountPrice ?? product.price;
  const discount = product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;
  const isOut = product.stock <= 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="group"
    >
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative">
          <ImageCarousel images={product.images} alt={product.name} />
          {discount > 0 ? (
            <span className="absolute left-4 top-4 rounded-full bg-pearl/90 px-3 py-1 text-xs font-semibold text-forest shadow-sm">
              {discount}% off
            </span>
          ) : null}
          <button
            aria-label="Add to wishlist"
            onClick={(event) => event.preventDefault()}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-pearl/88 shadow-sm transition hover:text-rose"
          >
            <Heart size={18} />
          </button>
        </div>
      </Link>
      <div className="pt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href={`/products/${product.id}`}>
              <h3 className="font-serif text-2xl text-forest transition group-hover:text-gold">
                {product.name}
              </h3>
            </Link>
            <p className="mt-1 text-sm text-moss">{product.category}</p>
          </div>
          <span
            className={`mt-1 whitespace-nowrap text-xs font-semibold ${
              isOut ? "text-rose" : "text-moss"
            }`}
          >
            {isOut ? "Out of stock" : `${product.stock} left`}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold text-forest">{formatCurrency(currentPrice)}</span>
          {product.discountPrice ? (
            <span className="text-moss/60 line-through">{formatCurrency(product.price)}</span>
          ) : null}
        </div>
        <div className="mt-3 flex gap-2 text-xs text-moss">
          {product.sizes.map((size) => (
            <span key={size} className="rounded-full border border-forest/10 px-2 py-1">
              {size}
            </span>
          ))}
        </div>
        <Button
          className="mt-4 w-full"
          disabled={isOut}
          onClick={() => addItem(product, product.sizes[0])}
        >
          <ShoppingBag size={16} /> {isOut ? "Unavailable" : "Quick add"}
        </Button>
      </div>
    </motion.article>
  );
}
