import type { Category, Product } from "@/types/product";

export const categories: Category[] = [
  {
    id: "kurtis",
    name: "Kurtis",
    description: "Fluid everyday silhouettes in refined fabrics.",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1100&q=80"
  },
  {
    id: "festive",
    name: "Festive Wear",
    description: "Soft shimmer, graceful cuts, occasion-ready elegance.",
    image:
      "https://images.unsplash.com/photo-1594739033447-80ab21e24b67?auto=format&fit=crop&w=1100&q=80"
  },
  {
    id: "daily",
    name: "Daily Wear",
    description: "Polished comfort for slow mornings and long days.",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1100&q=80"
  },
  {
    id: "premium",
    name: "Premium Collection",
    description: "Limited pieces with satin-like drape and detail.",
    image:
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1100&q=80"
  }
];

export const products: Product[] = [
  {
    id: "ivory-silk-kurti",
    name: "Ivory Silk Kurti",
    description:
      "A pearl-toned kurti with a clean neckline, relaxed fall, and soft gold detailing for understated occasions.",
    fabric: "Silk blend with satin finish",
    price: 4890,
    discountPrice: 4190,
    stock: 18,
    sizes: ["M", "L", "XL", "XXL"],
    sizeInventory: [
      { size: "M", stock: 5 },
      { size: "L", stock: 6 },
      { size: "XL", stock: 4 },
      { size: "XXL", stock: 3 }
    ],
    category: "Kurtis",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1622122201714-77da0ca8e5d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594739033447-80ab21e24b67?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: true,
    popular: true,
    createdAt: "2026-04-10"
  },
  {
    id: "forest-zari-set",
    name: "Forest Zari Co-ord",
    description:
      "Deep green festive co-ord with subtle zari accents and a structured yet feminine silhouette.",
    fabric: "Viscose silk with zari threadwork",
    price: 6890,
    discountPrice: 5990,
    stock: 10,
    sizes: ["M", "L", "XL", "XXL"],
    sizeInventory: [
      { size: "M", stock: 2 },
      { size: "L", stock: 3 },
      { size: "XL", stock: 4 },
      { size: "XXL", stock: 1 }
    ],
    category: "Festive Wear",
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: true,
    popular: true,
    createdAt: "2026-04-24"
  },
  {
    id: "champagne-everyday-kurta",
    name: "Champagne Everyday Kurta",
    description:
      "A breathable champagne kurta designed for repeat wear, gentle movement, and refined daily styling.",
    fabric: "Cotton modal",
    price: 3290,
    stock: 22,
    sizes: ["M", "L", "XL", "XXL"],
    sizeInventory: [
      { size: "M", stock: 7 },
      { size: "L", stock: 6 },
      { size: "XL", stock: 5 },
      { size: "XXL", stock: 4 }
    ],
    category: "Daily Wear",
    images: [
      "https://images.unsplash.com/photo-1622122201714-77da0ca8e5d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594739033447-80ab21e24b67?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: true,
    popular: false,
    createdAt: "2026-03-29"
  },
  {
    id: "pearl-embroidered-anarkali",
    name: "Pearl Embroidered Anarkali",
    description:
      "A premium anarkali with pearl embroidery, soft flare, and an heirloom mood made modern.",
    fabric: "Chanderi silk blend",
    price: 9290,
    discountPrice: 7990,
    stock: 7,
    sizes: ["M", "L", "XL", "XXL"],
    sizeInventory: [
      { size: "M", stock: 1 },
      { size: "L", stock: 2 },
      { size: "XL", stock: 2 },
      { size: "XXL", stock: 2 }
    ],
    category: "Premium Collection",
    images: [
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: true,
    popular: true,
    createdAt: "2026-05-01"
  },
  {
    id: "rose-gold-straight-kurti",
    name: "Rose Gold Straight Kurti",
    description:
      "A straight-cut kurti with a soft rose undertone, minimal trims, and a polished evening finish.",
    fabric: "Rayon silk",
    price: 3790,
    stock: 0,
    sizes: ["M", "L", "XL", "XXL"],
    sizeInventory: [
      { size: "M", stock: 0 },
      { size: "L", stock: 0 },
      { size: "XL", stock: 0 },
      { size: "XXL", stock: 0 }
    ],
    category: "Kurtis",
    images: [
      "https://images.unsplash.com/photo-1594739033447-80ab21e24b67?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: false,
    popular: false,
    createdAt: "2026-02-12"
  },
  {
    id: "soft-gold-festive-kurta",
    name: "Soft Gold Festive Kurta",
    description:
      "A luminous festive kurta with tone-on-tone embroidery and an airy satin-inspired sheen.",
    fabric: "Organza silk blend",
    price: 7190,
    discountPrice: 6590,
    stock: 13,
    sizes: ["M", "L", "XL", "XXL"],
    sizeInventory: [
      { size: "M", stock: 3 },
      { size: "L", stock: 4 },
      { size: "XL", stock: 3 },
      { size: "XXL", stock: 3 }
    ],
    category: "Festive Wear",
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: false,
    popular: true,
    createdAt: "2026-04-02"
  }
];

export const getProductById = (id: string) =>
  products.find((product) => product.id === id);
