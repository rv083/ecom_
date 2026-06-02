"use client";

import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { getCartCount, useCartStore } from "@/store/cart-store";
import {
  getWishlistCount,
  useWishlistStore,
} from "@/store/wishlist-store";
const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const items = useCartStore((state) => state.items);
  const openCart = useCartStore((state) => state.openCart);

  const count = getCartCount(items);
  const wishlistItems = useWishlistStore(
  (state) => state.items
);

const wishlistCount =
  getWishlistCount(wishlistItems);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b transition duration-300 ${
          scrolled
            ? "border-forest/10 bg-pearl/78 shadow-sm backdrop-blur-xl"
            : "border-transparent bg-pearl/45 backdrop-blur-md"
        }`}
      >
        <nav className="luxury-container flex h-20 items-center justify-between">
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-3xl tracking-[0.16em] text-forest">
              AURÉVA
            </span>

            <span className="text-sm font-medium tracking-[0.07em] text-forest">
              fashion
            </span>
          </Link>

          <div className="hidden items-center gap-9 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-forest/78 transition hover:text-forest"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              aria-label="Search"
              className="rounded-full p-3 transition hover:bg-forest/5"
            >
              <Search size={19} />
            </button>

            <Link
  href="/wishlist"
  className="relative rounded-full p-3 transition hover:bg-forest/5"
>
  <Heart size={19} />

  {wishlistCount > 0 && (
    <span className="absolute right-1 top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[11px] font-bold text-forest">
      {wishlistCount}
    </span>
  )}
</Link>

            <button
              aria-label="Cart"
              onClick={openCart}
              className="relative rounded-full p-3 transition hover:bg-forest/5"
            >
              <ShoppingBag size={19} />

              {count > 0 ? (
                <span className="absolute right-1 top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[11px] font-bold text-forest">
                  {count}
                </span>
              ) : null}
            </button>
          </div>

          <button
            className="rounded-full p-3 md:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu />
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9999] bg-white md:hidden">
          <div className="flex items-center justify-between border-b border-black/5 p-6">
            <Link href="/" className="flex flex-col">
              <span className="font-serif text-3xl tracking-[0.16em] text-forest">
                AURÉVA
              </span>

              <span className="text-sm font-medium tracking-[0.1em] text-forest">
                fashion
              </span>
            </Link>

            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="rounded-full p-2"
            >
              <X size={26} className="text-forest" />
            </button>
          </div>

          <div className="relative z-[10000] mt-12 flex flex-col gap-8 px-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-4xl text-forest"
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => {
                openCart();
                setMenuOpen(false);
              }}
              className="mt-4 flex items-center gap-3 text-lg text-forest"
            >
              <ShoppingBag />
              Cart ({count})
            </button>
          </div>
        </div>
      )}
    </>
  );
}