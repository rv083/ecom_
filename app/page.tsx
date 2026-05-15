import { Gem, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { ProductCard } from "@/components/product/ProductCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { categories, products } from "@/data/products";

const reasons = [
  { icon: Gem, title: "Premium Fabric", copy: "Silk blends, modal cottons, and fluid finishes." },
  { icon: Sparkles, title: "Elegant Designs", copy: "Modern cuts with subtle festive detailing." },
  { icon: Truck, title: "Fast Delivery", copy: "Carefully packed pieces shipped with tracking." },
  { icon: ShieldCheck, title: "Secure Payments", copy: "Checkout UI prepared for trusted gateways." }
];

export default function HomePage() {
  const featured = products.filter((product) => product.featured).slice(0, 4);

  return (
    <>
      <Hero />
      <section className="luxury-container py-20">
        <SectionHeader eyebrow="Curated edits" title="Featured Categories" />
        <div className="grid gap-5 md:grid-cols-4">
          {categories.map((category) => (
            <a
              href={`/shop?category=${encodeURIComponent(category.name)}`}
              key={category.id}
              className="group relative min-h-[320px] overflow-hidden rounded-2xl shadow-silk"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/72 via-forest/12 to-transparent" />
              <div className="absolute bottom-0 p-6 text-pearl">
                <h3 className="font-serif text-3xl">{category.name}</h3>
                <p className="mt-2 text-sm text-pearl/78">{category.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="bg-mist/70 py-20">
        <div className="luxury-container">
          <SectionHeader
            eyebrow="Aureva selection"
            title="Featured Products"
            copy="Soft textures, refined colors, and shapes made for graceful movement."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <section className="luxury-container py-20">
        <div className="grid gap-5 md:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="satin-panel rounded-2xl p-6">
              <reason.icon className="text-gold" />
              <h3 className="mt-5 font-serif text-2xl">{reason.title}</h3>
              <p className="mt-2 text-sm leading-6 text-moss">{reason.copy}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="luxury-container pb-20">
        <div className="satin-panel grid gap-6 rounded-[2rem] p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Private notes
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Join the Aureva list</h2>
            <p className="mt-3 max-w-xl text-moss">
              Receive collection previews, styling edits, and first access to limited drops.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:min-w-[380px] sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="min-h-12 flex-1 rounded-full border border-forest/10 bg-pearl/80 px-5 outline-none transition focus:border-gold"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </>
  );
}
