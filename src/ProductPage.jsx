import heroImg from "./assets/hero.jpg"
import Product from "./Product";
import { Link } from "react-router-dom"


const ProductPage = ({products,onAddToCart}) =>{
    return (
        <div className="bm-page bm-warm relative isolate overflow-hidden">
  <style>{`
    .bm-warm{--bg:#FDF3E3;--surface:#FFFBF5;--line:#F0D6B2;--peach:#F6D3A2;--sun:#E5A82C}
    @media (prefers-color-scheme:dark){.bm-warm{--bg:#1C1410;--surface:#2A1E16;--line:#4A3626;--peach:#4A3220;--sun:#F0B93F}}
    .bm-page{background:transparent}
    .bm-veil{background:color-mix(in srgb,var(--bg) 58%,transparent)}
    .bm-glass{background:color-mix(in srgb,var(--surface) 78%,transparent);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px)}
  `}</style>

  {/* Rich backdrop made from the hero photo */}
  <div className="fixed inset-0 -z-20" aria-hidden="true" style={{ background: "var(--bg)" }} />
  <div
    className="fixed inset-0 -z-10 scale-125 bg-cover bg-center blur-3xl"
    aria-hidden="true"
    style={{ backgroundImage: `url(${heroImg})` }}
  />
  <div className="bm-veil fixed inset-0 -z-10" aria-hidden="true" />

  <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
    <Link to="/" className="bm-display text-xl font-extrabold">
      Better<span className="text-[var(--teal)]">Mart</span>
    </Link>
    <nav className="bm-glass hidden gap-8 rounded-full border border-[var(--line)] px-8 py-3 text-sm font-medium text-[var(--muted)] md:flex" aria-label="Main">
      <Link href="/products" className="font-semibold text-[var(--ink)]">Shop</Link>
      <a href="#" className="hover:text-[var(--ink)]">Why us</a>
      <a href="#" className="hover:text-[var(--ink)]">Sell with us</a>
    </nav>
    <div className="flex items-center gap-3">
      <Link to="/cart" className="bm-glass rounded-full border border-[var(--line)] px-5 py-2 text-sm font-semibold">Cart</Link>
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
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-200">Shop</p>
        <h1 className="bm-display text-4xl font-extrabold leading-[1.05] text-white md:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-emerald-300">Everyday</span>{" "}
          essentials
        </h1>
        <p className="mt-4 text-lg text-white/90">
          Browse products from trusted local sellers in your community.
        </p>
      </div>
    </section>

    {/* Search and sort */}
    <section className="flex flex-col gap-4 pb-6 md:flex-row md:items-center">
      <div className="relative flex-1">
        <label htmlFor="search" className="sr-only">Search products</label>
        <input
          id="search"
          type="search"
          placeholder="Search products"
          className="bm-glass w-full rounded-full border border-[var(--line)] px-6 py-4 text-base text-[var(--ink)] placeholder:text-[var(--muted)]"
        />
      </div>
      <div>
        <label htmlFor="sort" className="sr-only">Sort products</label>
        <select
          id="sort"
          className="bm-glass w-full rounded-full border border-[var(--line)] px-6 py-4 text-base font-medium text-[var(--ink)] md:w-auto"
        >
          <option>Sort: Featured</option>
          <option>Price: Low to high</option>
          <option>Price: High to low</option>
          <option>Newest</option>
        </select>
      </div>
    </section>

    {/* Category chips */}
    <section className="flex gap-3 overflow-x-auto pb-8" aria-label="Categories">
      <button className="shrink-0 rounded-full bg-[var(--sun)] px-6 py-3 text-sm font-bold text-[#3a2a00]">All</button>
      <button className="bm-glass shrink-0 rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold hover:border-[var(--sun)]">Groceries</button>
      <button className="bm-glass shrink-0 rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold hover:border-[var(--sun)]">Home care</button>
      <button className="bm-glass shrink-0 rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold hover:border-[var(--sun)]">Personal care</button>
      <button className="bm-glass shrink-0 rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold hover:border-[var(--sun)]">Local brands</button>
    </section>

    {/* Product grid: render your <Product /> components here */}
    <section aria-label="Products" className="bm-glass min-h-[320px] rounded-[2.5rem] border border-[var(--line)] p-5 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product)=>(
                <Product name={product.name}  price={product.price} image={product.image} onAddToCart={()=>onAddToCart(product.name)}/>

            ))}
      </div>
    </section>

    {/* Pagination */}
    <nav className="mt-14 flex items-center justify-center gap-3" aria-label="Pagination">
      <button className="bm-glass rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold">Previous</button>
      <button className="rounded-full bg-[var(--sun)] px-6 py-3 text-sm font-bold text-[#3a2a00]">1</button>
      <button className="bm-glass rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold">2</button>
      <button className="bm-glass rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold">Next</button>
    </nav>
  </main>

  <footer className="bm-glass border-t border-[var(--line)] px-5 py-8 text-center text-sm text-[var(--muted)]">
    © 2026 BetterMart. Shop local.
  </footer>
</div>
        
    )


}

export default ProductPage;