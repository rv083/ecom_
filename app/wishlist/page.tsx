"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { useWishlistStore } from "@/store/wishlist-store";

export default function WishlistPage() {
  const items = useWishlistStore(
    (state) => state.items
  );

  return (
    <section className="luxury-container py-16">
      <div className="mb-10">
        <h1 className="font-serif text-5xl text-forest">
          Wishlist
        </h1>

        <p className="mt-3 text-moss">
          Your saved favourites.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="rounded-3xl border border-forest/10 p-12 text-center">
          <Heart
            size={48}
            className="mx-auto text-moss/40"
          />

          <h2 className="mt-4 text-xl font-semibold">
            No favourites yet
          </h2>

          <p className="mt-2 text-moss">
            Save products you love and view them here.
          </p>

          <Link
            href="/shop"
            className="mt-6 inline-flex rounded-full bg-forest px-6 py-3 text-pearl"
          >
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
}