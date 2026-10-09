import heroImg from "./assets/hero.jpg";
import { ShoppingCart, Package } from "lucide-react";
import { Link } from "react-router-dom";

const prices = { Laptop: 850, Mouse: 25, Keyboard: 45, Headphones: 60, Monitor: 200 };

const Cart = ({ cart = {} }) => {
  const entries = Object.entries(cart);
  const itemCount = entries.reduce((sum, [, qty]) => sum + qty, 0);
  const total = entries.reduce((sum, [name, qty]) => sum + (prices[name] ?? 0) * qty, 0);

  return (
    <div className="bm-page bm-warm relative isolate overflow-hidden">
      <style>{`
        .bm-warm{--bg:#FDF3E3;--surface:#FFFBF5;--line:#F0D6B2;--peach:#F6D3A2;--sun:#E5A82C}
        @media (prefers-color-scheme:dark){.bm-warm{--bg:#1C1410;--surface:#2A1E16;--line:#4A3626;--peach:#4A3220;--sun:#F0B93F}}
        .bm-page{background:transparent}
        .bm-veil{background:color-mix(in srgb,var(--bg) 58%,transparent)}
        .bm-glass{background:color-mix(in srgb,var(--surface) 78%,transparent);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px)}
      `}</style>

      {/* Photo backdrop */}
      <div className="fixed inset-0 -z-20" aria-hidden="true" style={{ background: "var(--bg)" }} />
      <div
        className="fixed inset-0 -z-10 scale-125 bg-cover bg-center blur-3xl"
        aria-hidden="true"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="bm-veil fixed inset-0 -z-10" aria-hidden="true" />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <Link href="/" className="bm-display text-xl font-extrabold">
          Better<span className="text-[var(--teal)]">Mart</span>
        </Link>
        <nav className="bm-glass hidden gap-8 rounded-full border border-[var(--line)] px-8 py-3 text-sm font-medium text-[var(--muted)] md:flex" aria-label="Main">
          <Link href="/products" className="hover:text-[var(--ink)]">Shop</Link>
          <a href="#" className="hover:text-[var(--ink)]">Why us</a>
          <a href="#" className="hover:text-[var(--ink)]">Sell with us</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/cart" className="rounded-full bg-[var(--sun)] px-5 py-2 text-sm font-bold text-[#3a2a00]">Cart</Link>
          <a href="#" className="bm-glass hidden rounded-full border border-[var(--line)] px-5 py-2 text-sm font-semibold sm:block">Sign in</a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
        {/* Photo banner */}
        <section
          className="bm-rise relative mb-10 mt-4 overflow-hidden rounded-[2.5rem] bg-cover bg-center px-6 py-14 shadow-2xl md:rounded-[2.5rem_2.5rem_8rem_2.5rem] md:px-14 md:py-24"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2b1605]/90 via-[#2b1605]/60 to-transparent" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-200">Checkout</p>
            <h1 className="bm-display text-4xl font-extrabold leading-[1.05] text-white md:text-6xl">
              Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-emerald-300">cart</span>
            </h1>
            <p className="mt-4 text-lg text-white/90">Review your items before you check out.</p>
          </div>
        </section>

        {/* Cart */}
        <section
          aria-label="Cart"
          className="bm-glass min-h-[320px] rounded-[2.5rem] border border-[var(--line)] p-5 md:p-8"
        >
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="shrink-0 text-[var(--teal)]">
              <ShoppingCart size={220} strokeWidth={1.25} aria-hidden="true" />
            </div>

            <div className="w-full flex-1 space-y-5">
              {/* Cart list */}
              <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] shadow-sm">
                {entries.length === 0 ? (
                  <p className="p-6 text-[var(--muted)]">No items in the cart</p>
                ) : (
                  <ul role="list" className="space-y-3 divide-y divide-[var(--line)] p-6">
                    {entries.map(([item, quantity]) => (
                      <li key={item} className="flex items-center justify-between pb-3 last:pb-0">
                        <div className="flex items-center text-[var(--ink)]">
                          <Package className="me-2 h-5 w-5 shrink-0 text-[var(--teal)]" aria-hidden="true" />
                          <span>{item} × {quantity}</span>
                        </div>
                        <span className="bm-display font-bold text-[var(--ink)]">
                          ${(prices[item] ?? 0) * quantity}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Total price */}
              <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-sm">
                <div className="flex items-center justify-between text-sm text-[var(--muted)]">
                  <span>Items</span>
                  <span>{itemCount}</span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-[var(--line)] pt-4">
                  <span className="bm-display text-lg font-extrabold">Total</span>
                  <span className="bm-display text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    ${total}
                  </span>
                </div>
                <button
                  type="button"
                  className="bm-btn-grad mt-6 w-full rounded-full px-8 py-4 text-base font-bold shadow-lg shadow-emerald-700/20 transition active:scale-95"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bm-glass border-t border-[var(--line)] px-5 py-8 text-center text-sm text-[var(--muted)]">
        © 2026 BetterMart. Shop local.
      </footer>
    </div>
  );
};

export default Cart;