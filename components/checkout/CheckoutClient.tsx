"use client";

import { CreditCard, Gift } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getCartSubtotal, useCartStore } from "@/store/cart-store";
import { formatCurrency } from "@/utils/format";

const inputClass =
  "min-h-12 rounded-full border border-forest/10 bg-white px-5 outline-none transition focus:border-gold";

export function CheckoutClient() {
  const items = useCartStore((state) => state.items);
  const subtotal = getCartSubtotal(items);
  const shipping = subtotal > 5000 || subtotal === 0 ? 0 : 180;

  return (
    <div className="luxury-container py-14">
      <h1 className="font-serif text-5xl">Checkout</h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_420px]">
        <form className="grid gap-8">
          <section className="rounded-[2rem] bg-pearl/75 p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl">Shipping Details</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <input className={inputClass} placeholder="Full name" />
              <input className={inputClass} placeholder="Email address" type="email" />
              <input className={inputClass} placeholder="Phone number" />
              <input className={inputClass} placeholder="City" />
              <input className={`${inputClass} md:col-span-2`} placeholder="Address" />
              <input className={inputClass} placeholder="State" />
              <input className={inputClass} placeholder="Pincode" />
            </div>
          </section>
          <section className="rounded-[2rem] bg-pearl/75 p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl">Payment Method</h2>
            <div className="mt-5 grid gap-3">
              <label className="flex items-center gap-3 rounded-2xl border border-gold bg-mist/70 p-4">
                <input type="radio" name="payment" defaultChecked />
                <CreditCard size={19} /> Card / UPI placeholder
              </label>
              <label className="flex items-center gap-3 rounded-2xl border border-forest/10 bg-white p-4">
                <input type="radio" name="payment" />
                Cash on delivery
              </label>
            </div>
            <p className="mt-4 text-sm text-moss">
              Payment gateway integration is intentionally left ready for a future provider.
            </p>
          </section>
        </form>
        <aside className="h-fit rounded-[2rem] bg-forest p-7 text-pearl shadow-luxury">
          <h2 className="font-serif text-3xl">Order Summary</h2>
          <div className="mt-5 grid gap-4">
            {items.length === 0 ? (
              <p className="text-sm text-pearl/70">No items selected yet.</p>
            ) : (
              items.map((item) => (
                <div key={`${item.productId}-${item.size}`} className="flex justify-between gap-3 text-sm">
                  <span>{item.name} x {item.quantity}</span>
                  <span>{formatCurrency(item.price * item.quantity)}</span>
                </div>
              ))
            )}
          </div>
          <div className="mt-6 flex gap-2 rounded-full bg-pearl/10 p-2">
            <Gift className="ml-2 mt-3" size={18} />
            <input placeholder="Coupon code" className="min-h-11 flex-1 bg-transparent text-sm outline-none placeholder:text-pearl/55" />
            <button className="rounded-full bg-pearl px-4 text-sm font-semibold text-forest">Apply</button>
          </div>
          <div className="mt-6 grid gap-3 border-t border-pearl/15 pt-5 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Complimentary" : formatCurrency(shipping)}</span></div>
            <div className="flex justify-between text-base font-semibold"><span>Total</span><span>{formatCurrency(subtotal + shipping)}</span></div>
          </div>
          <Button className="mt-7 w-full bg-pearl text-forest hover:bg-champagne" disabled={items.length === 0}>
            Place order
          </Button>
          <p className="mt-4 text-xs leading-5 text-pearl/62">
            TODO: On successful backend checkout, create order rows and reduce inventory in Supabase.
          </p>
        </aside>
      </div>
    </div>
  );
}
