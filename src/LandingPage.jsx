import { Link } from "react-router-dom";
import heroImg from "./assets/hero.jpg"
const LandingPage = () => {

    return (
    <div className="bm-page">
  <style>{`
    :root{--bg:#F3F8F5;--surface:#FFFFFF;--ink:#0E2723;--muted:#4A625D;--line:#D6E4DD;--sun:#E5A82C;--teal:#0F766E}
    @media (prefers-color-scheme:dark){:root{--bg:#0B1B18;--surface:#12302B;--ink:#EAF5F1;--muted:#9DB8B1;--line:#21463F;--sun:#F0B93F;--teal:#5EEAD4}}
    .bm-page{background:var(--bg);color:var(--ink);font-family:'Instrument Sans',system-ui,sans-serif;min-height:100vh}
    .bm-display{font-family:'Bricolage Grotesque','Instrument Sans',system-ui,sans-serif;letter-spacing:-.03em}
    .bm-btn-grad{background:linear-gradient(90deg,#059669,#38BDF8);color:#04211c}
    .bm-btn-grad:hover{filter:brightness(1.06)}
    .bm-page :focus-visible{outline:3px solid var(--sun);outline-offset:3px}
    .bm-photo{border-radius:2.5rem 2.5rem 8rem 2.5rem}
    .bm-rise{animation:bm-rise .9s cubic-bezier(.2,.7,.2,1) both}
    @keyframes bm-rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
    @media (prefers-reduced-motion:reduce){.bm-rise{animation:none}}
  `}</style>

  <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
    <a href="#" className="bm-display text-xl font-extrabold">
      Better<span className="text-[var(--teal)]">Mart</span>
    </a>
    <nav className="hidden gap-8 text-sm font-medium text-[var(--muted)] md:flex" aria-label="Main">
      <a href="#shop" className="hover:text-[var(--ink)]">Shop</a>
      <a href="#why" className="hover:text-[var(--ink)]">Why us</a>
      <a href="#start" className="hover:text-[var(--ink)]">Sell with us</a>
    </nav>
    <a href="#start" className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-2 text-sm font-semibold">
      Sign in
    </a>
  </header>

  <main>
    {/* Hero */}
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-6 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:pb-24 lg:pt-12">
      <div className="bm-rise">
        <h1 className="bm-display mb-6 text-5xl font-extrabold leading-[1.02] md:text-6xl lg:text-7xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">BetterMart</span>{" "}
          Shop local, every day.
        </h1>
        <p className="max-w-xl text-lg font-normal leading-relaxed text-[var(--muted)] lg:text-xl">
          Here at BetterMart we connect shoppers with trusted local sellers, making everyday essentials easy to find,
          simple to buy and delivered to your door, while helping small businesses grow.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link to="/products" className="bm-btn-grad rounded-full px-8 py-4 text-base font-bold shadow-lg shadow-emerald-700/20 transition">
            Shop now
          </Link>
          <a href="#start" className="rounded-full border-2 border-[var(--teal)] px-8 py-4 text-base font-bold text-[var(--teal)] transition hover:bg-[var(--teal)] hover:text-[var(--bg)]">
            Open your store
          </a>
        </div>
        <p className="mt-6 text-sm text-[var(--muted)]">Everyday essentials from sellers in your community.</p>
      </div>

      <div className="relative bm-rise" style={{ animationDelay: ".15s" }}>
        <div className="absolute -inset-3 rounded-[3rem] bg-gradient-to-br from-emerald-600 to-sky-400 opacity-30 blur-2xl" aria-hidden="true" />
        <img
          className="bm-photo relative z-10 w-full object-cover shadow-2xl"
          src={heroImg}
          alt="A smiling woman in a mustard dress and teal scarf holding a boxed product in a well-stocked local shop"
          width="1000"
          height="664"
        />
        <div className="absolute -bottom-5 left-4 z-20 flex items-center gap-3 rounded-2xl bg-[var(--surface)] px-5 py-3 shadow-xl md:-left-6">
          <span className="h-3 w-3 rounded-full bg-gradient-to-r from-emerald-600 to-sky-400" />
          <span className="text-sm font-semibold">Shop local. Everyday essentials.</span>
        </div>
        <span className="absolute -top-3 right-5 z-20 rounded-full bg-[var(--sun)] px-4 py-2 text-sm font-bold text-[#3a2a00]">
          Local sellers
        </span>
      </div>
    </section>

    {/* Categories */}
    <section id="shop" className="mx-auto max-w-7xl px-5 pb-20 md:px-10">
      <h2 className="bm-display mb-8 text-3xl font-bold md:text-4xl">Stock up on what you use every day</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <a href="#" className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 transition hover:-translate-y-1">
          <div className="mb-10 h-2 w-12 rounded-full bg-[var(--sun)]" />
          <h3 className="bm-display text-xl font-bold">Groceries</h3>
          <p className="mt-1 text-sm text-[var(--muted)]">Pantry staples and fresh produce.</p>
        </a>
        <a href="#" className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 transition hover:-translate-y-1">
          <div className="mb-10 h-2 w-12 rounded-full bg-emerald-600" />
          <h3 className="bm-display text-xl font-bold">Home care</h3>
          <p className="mt-1 text-sm text-[var(--muted)]">Cleaning and household basics.</p>
        </a>
        <a href="#" className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 transition hover:-translate-y-1">
          <div className="mb-10 h-2 w-12 rounded-full bg-sky-400" />
          <h3 className="bm-display text-xl font-bold">Personal care</h3>
          <p className="mt-1 text-sm text-[var(--muted)]">Skin, hair and everyday wellness.</p>
        </a>
        <a href="#" className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 transition hover:-translate-y-1">
          <div className="mb-10 h-2 w-12 rounded-full bg-[var(--sun)]" />
          <h3 className="bm-display text-xl font-bold">Local brands</h3>
          <p className="mt-1 text-sm text-[var(--muted)]">Products made close to home.</p>
        </a>
      </div>
    </section>

    {/* Benefits */}
    <section id="why" className="mx-auto max-w-7xl px-5 pb-20 md:px-10">
      <div className="grid gap-10 rounded-[2.5rem] bg-gradient-to-br from-emerald-700 to-sky-600 p-8 text-white md:grid-cols-3 md:p-14">
        <div>
          <h3 className="bm-display text-2xl font-bold">Find it faster</h3>
          <p className="mt-2 text-white/85">Smarter search learns what you buy, so your usual items are always one tap away.</p>
        </div>
        <div>
          <h3 className="bm-display text-2xl font-bold">Back local sellers</h3>
          <p className="mt-2 text-white/85">Every order supports shops and makers in your community.</p>
        </div>
        <div>
          <h3 className="bm-display text-2xl font-bold">Grow with data</h3>
          <p className="mt-2 text-white/85">Sellers see what's selling and restock with confidence.</p>
        </div>
      </div>
    </section>

    {/* Call to action */}
    <section id="start" className="mx-auto max-w-4xl px-5 pb-24 text-center md:px-10">
      <h2 className="bm-display text-4xl font-extrabold md:text-5xl">Ready to start?</h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--muted)]">
        Create a free account to shop, or list your first product in minutes.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a href="#" className="bm-btn-grad rounded-full px-8 py-4 font-bold transition">Create account</a>
        <a href="#" className="rounded-full border-2 border-[var(--teal)] px-8 py-4 font-bold text-[var(--teal)]">Sell on BetterMart</a>
      </div>
    </section>
  </main>

  <footer className="border-t border-[var(--line)] px-5 py-8 text-center text-sm text-[var(--muted)]">
    © 2026 BetterMart. Shop local.
  </footer>
</div>
    )
}

export default LandingPage; 