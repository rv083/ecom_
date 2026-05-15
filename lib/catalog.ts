import { products } from "@/data/products";
import type { Product, ProductCategory, ProductSize } from "@/types/product";

export type SortKey = "newest" | "price-asc" | "price-desc" | "popular";

export interface ProductFilters {
  size?: ProductSize | "All";
  category?: ProductCategory | "All";
  availability?: "All" | "In stock" | "Out of stock";
  maxPrice?: number;
  sort?: SortKey;
}

export function filterProducts(filters: ProductFilters): Product[] {
  const filtered = products.filter((product) => {
    const currentPrice = product.discountPrice ?? product.price;
    const sizeMatch =
      !filters.size || filters.size === "All" || product.sizes.includes(filters.size);
    const categoryMatch =
      !filters.category ||
      filters.category === "All" ||
      product.category === filters.category;
    const availabilityMatch =
      !filters.availability ||
      filters.availability === "All" ||
      (filters.availability === "In stock" ? product.stock > 0 : product.stock === 0);
    const priceMatch = !filters.maxPrice || currentPrice <= filters.maxPrice;

    return sizeMatch && categoryMatch && availabilityMatch && priceMatch;
  });

  return [...filtered].sort((a, b) => {
    if (filters.sort === "price-asc") {
      return (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price);
    }
    if (filters.sort === "price-desc") {
      return (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price);
    }
    if (filters.sort === "popular") {
      return Number(b.popular) - Number(a.popular);
    }
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

// TODO: Replace mock catalog reads with Supabase queries from a product repository layer.
// TODO: After successful checkout, reduce stock per product and later per size in Supabase.
