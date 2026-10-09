const Product = ({name,price,image,onAddToCart}) =>{

    return (
        <article className="group flex flex-col overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-700/15">
      {/* Image area (shows a placeholder until you add an image) */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[var(--peach)] to-[var(--sun)]/60">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[#3a2a00]/40" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="h-16 w-16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 7h12l1 13H5L6 7z" />
              <path d="M9 7a3 3 0 0 1 6 0" />
            </svg>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="bm-display line-clamp-2 text-lg font-bold leading-snug">{name}</h3>
        <p className="bm-display mt-1 text-xl font-extrabold text-[var(--teal)]">{price}</p>

        <button
          type="button"
          onClick={onAddToCart}
          className="bm-btn-grad mt-5 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-md shadow-emerald-700/20 transition active:scale-95"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="9" cy="20" r="1.5" />
            <circle cx="18" cy="20" r="1.5" />
            <path d="M2 3h3l2.7 11.4a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 7H6" />
          </svg>
          Add to cart
        </button>
      </div>
    </article>
  );


    


}

export default Product;