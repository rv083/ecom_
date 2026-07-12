import Link from "next/link";

const links = ["About", "Contact", "Shipping Policy", "Instagram", "Terms & Conditions"];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-gold/20 bg-[linear-gradient(135deg,#6f402c_0%,#8a5a34_42%,#b88952_100%)] text-[#fff8ec]">
      <div className="luxury-container grid gap-10 py-14 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-serif text-4xl tracking-[0.14em] text-[#fff3de]">KOTA KARIGARI</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-[#f8e8c8]/85">
            Sleek. Simple. KOTA KARIGARI. Premium ethnic wear for women who prefer quiet
            luxury, graceful fabrics, and modern silhouettes.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {links.map((link) => (
            <Link
              href={link === "Instagram" ? "#" : `/${link.toLowerCase().replaceAll(" ", "-")}`}
              key={link}
              className="text-sm text-[#f8e8c8]/88 transition hover:text-white"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
