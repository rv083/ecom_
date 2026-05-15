"use client";

import { Minus, Plus, ShoppingBag, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/product/ProductCard";
import { useCartStore } from "@/store/cart-store";
import type { Product, ProductSize } from "@/types/product";
import { formatCurrency } from "@/utils/format";

interface ProductDetailClientProps {
  product: Product;
  related: Product[];
}

export function ProductDetailClient({ product, related }: ProductDetailClientProps) {
  const [image, setImage] = useState(product.images[0]);
  const [size, setSize] = useState<ProductSize>(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  const currentPrice = product.discountPrice ?? product.price;
  const sizeStock =
    product.sizeInventory.find((item) => item.size === size)?.stock ?? product.stock;
  const unavailable = product.stock <= 0 || sizeStock <= 0;

  const addToCart = () => addItem(product, size, quantity);

  return (
    <div className="luxury-container py-12">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid gap-4 md:grid-cols-[96px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:grid md:overflow-visible">
            {product.images.map((item) => (
              <button
                key={item}
                onClick={() => setImage(item)}
                className={`h-24 w-20 shrink-0 overflow-hidden rounded-xl border ${
                  item === image ? "border-gold" : "border-transparent"
                }`}
              >
                <img src={item} alt={product.name} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          <div className="group order-1 aspect-[4/5] overflow-hidden rounded-[2rem] bg-champagne/30 shadow-luxury md:order-2">
            <img
              src={image}
              alt={product.name}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>
        </div>
        <section className="rounded-[2rem] bg-pearl/70 p-6 shadow-sm md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {product.category}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight text-forest">{product.name}</h1>
          <div className="mt-5 flex items-center gap-3">
            <span className="text-2xl font-semibold">{formatCurrency(currentPrice)}</span>
            {product.discountPrice ? (
              <span className="text-moss/60 line-through">{formatCurrency(product.price)}</span>
            ) : null}
          </div>
          <p className="mt-6 leading-8 text-moss">{product.description}</p>
          <div className="mt-6 rounded-2xl bg-mist/70 p-5 text-sm leading-7 text-moss">
            <p><span className="font-semibold text-forest">Fabric:</span> {product.fabric}</p>
            <p><span className="font-semibold text-forest">Delivery:</span> Estimated shipping in 3-5 business days.</p>
            <p><span className="font-semibold text-forest">Stock:</span> {unavailable ? "Out of stock" : `${sizeStock} available in ${size}`}</p>
          </div>
          <div className="mt-7">
            <p className="mb-3 text-sm font-semibold">Select size</p>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((item) => (
                <button
                  key={item}
                  onClick={() => setSize(item)}
                  className={`h-12 min-w-16 rounded-full border px-5 font-semibold transition ${
                    item === size
                      ? "border-forest bg-forest text-pearl"
                      : "border-forest/12 bg-white text-forest hover:border-gold"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-7 flex items-center gap-4">
            <div className="flex items-center rounded-full border border-forest/10 bg-white">
              <button className="p-3" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                <Minus size={16} />
              </button>
              <span className="min-w-10 text-center">{quantity}</span>
              <button
                className="p-3"
                onClick={() => setQuantity(Math.min(sizeStock || 1, quantity + 1))}
              >
                <Plus size={16} />
              </button>
            </div>
            <span className="text-sm text-moss">Quantity</span>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Button disabled={unavailable} onClick={addToCart}>
              <ShoppingBag size={17} /> Add to cart
            </Button>
            <Button
              disabled={unavailable}
              variant="secondary"
              onClick={addToCart}
              href="/checkout"
            >
              <Zap size={17} /> Buy now
            </Button>
          </div>
        </section>
      </div>
      {related.length > 0 ? (
        <section className="mt-20">
          <h2 className="mb-8 font-serif text-4xl">Related pieces</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
