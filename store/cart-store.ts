"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product, ProductSize } from "@/types/product";

export interface CartItem {
  productId: string;
  name: string;
  image: string;
  size: ProductSize;
  price: number;
  quantity: number;
  stock: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, size: ProductSize, quantity?: number) => void;
  removeItem: (productId: string, size: ProductSize) => void;
  increase: (productId: string, size: ProductSize) => void;
  decrease: (productId: string, size: ProductSize) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      addItem: (product, size, quantity = 1) =>
        set((state) => {
          if (product.stock <= 0) return state;

          const existing = state.items.find(
            (item) => item.productId === product.id && item.size === size
          );
          const sizeStock =
            product.sizeInventory.find((item) => item.size === size)?.stock ??
            product.stock;

          if (existing) {
            return {
              isOpen: true,
              items: state.items.map((item) =>
                item.productId === product.id && item.size === size
                  ? {
                      ...item,
                      quantity: Math.min(item.quantity + quantity, sizeStock)
                    }
                  : item
              )
            };
          }

          return {
            isOpen: true,
            items: [
              ...state.items,
              {
                productId: product.id,
                name: product.name,
                image: product.images[0],
                size,
                price: product.discountPrice ?? product.price,
                quantity: Math.min(quantity, sizeStock),
                stock: sizeStock
              }
            ]
          };
        }),
      removeItem: (productId, size) =>
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.productId === productId && item.size === size)
          )
        })),
      increase: (productId, size) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId && item.size === size
              ? { ...item, quantity: Math.min(item.quantity + 1, item.stock) }
              : item
          )
        })),
      decrease: (productId, size) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.productId === productId && item.size === size
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0)
        })),
      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false })
    }),
    {
      name: "aureva-cart"
    }
  )
);

export const getCartSubtotal = (items: CartItem[]) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0);

export const getCartCount = (items: CartItem[]) =>
  items.reduce((total, item) => total + item.quantity, 0);
