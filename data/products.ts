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
    name: "Soft Summer Ice Blue Kurta Set",
    description:
      "Elegant ice blue cotton kurta set with delicate white floral prints, tassel neckline detailing, and straight-fit pants. A perfect blend of comfort, grace, and everyday elegance.",
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
      "/pics/1000156552.jpg",
      "/pics/1000156555.jpg",
      "/pics/1000156558.jpg"
    ],
    featured: true,
    popular: true,
    createdAt: "2026-04-10"
  },
  {
    id: "forest-zari-set",
    name: "Minimalist Mocha Brown Straight Fit Kurta Set",
    description:
      "Elegant mocha brown straight-fit kurta with intricate white ethnic prints and a minimal silhouette, paired with subtle contrast bottoms for a timeless and graceful everyday look.",
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
      "/pics/1000156564.jpg",
      "/pics/1000156573.jpg",
      "/pics/1000156567.jpg"
    ],
    featured: true,
    popular: true,
    createdAt: "2026-04-24"
  },
  {
    id: "champagne-everyday-kurta",
    name: "Lime Grace Set",
    description:
      "Chic lime green sleeveless kurta set with elegant white ethnic motifs and delicate neckline detailing, offering a fresh, modern, and effortlessly graceful look.",
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
      "/pics/IMG_8472.png",
      "/pics/IMG_8471.png",
      "/pics/IMG_8469.png"
    ],
    featured: true,
    popular: false,
    createdAt: "2026-03-29"
  },
  {
    id: "pearl-embroidered-anarkali",
    name: "Ice Blue Pearl Set",
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
      "/pics/1000156552.jpg",
      "/pics/1000156555.jpg"
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
    name: "Elegant Sage Green Flared Kurta Set",
    description:
      "Graceful sage green flared kurta set with delicate white embroidery and soft gathers, designed for an elegant and effortlessly stylish look. Perfect for festive wear and special occasions.",
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
      "/pics/IMG_8473.png",
      "/pics/IMG_8474.png",
      "/pics/IMG_8476.png",
      "/pics/IMG_8477.png"
    ],
    featured: false,
    popular: true,
    createdAt: "2026-04-02"
  }
];

export const getProductById = (id: string) =>
  products.find((product) => product.id === id);
