import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-pearl shadow-silk hover:bg-[#421d29] hover:shadow-luxury",
  secondary:
    "border border-forest/20 bg-pearl/80 text-forest hover:border-gold hover:bg-white/90",
  ghost: "text-forest hover:bg-forest/5"
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  href?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium tracking-[0.02em] transition duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
