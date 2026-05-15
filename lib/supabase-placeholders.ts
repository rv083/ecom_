import type { OrderDraft, Product } from "@/types/product";

export interface ProductRepository {
  listProducts: () => Promise<Product[]>;
  getProduct: (id: string) => Promise<Product | null>;
  updateStock: (productId: string, quantity: number) => Promise<void>;
}

export interface OrderRepository {
  createOrder: (order: OrderDraft) => Promise<{ id: string }>;
}

// TODO: Implement these repositories with Supabase client calls when backend is connected.
// TODO: Add storage bucket helpers for admin multi-image uploads.
// TODO: Add row-level security policies for products, orders, and inventory tables.
