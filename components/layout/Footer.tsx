import Link from "next/link";

const links = ["About", "Contact", "Shipping Policy", "Instagram", "Terms & Conditions"];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-forest/10 bg-forest text-pearl">
      <div className="luxury-container grid gap-10 py-14 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-serif text-4xl tracking-[0.14em]">AUREVA</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-pearl/72">
            Sleek. Simple. Aureva. Premium ethnic wear for women who prefer quiet
            luxury, graceful fabrics, and modern silhouettes.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {links.map((link) => (
            <Link
              href={link === "Instagram" ? "#" : `/${link.toLowerCase().replaceAll(" ", "-")}`}
              key={link}
              className="text-sm text-pearl/74 transition hover:text-gold"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
