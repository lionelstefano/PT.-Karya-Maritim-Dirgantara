const products = [
  {
    img: "/img/product-tuna.jpg",
    alt: "Whole fresh yellowfin tuna on crushed ice",
    tag: "Fresh",
    tint: "bg-mint",
    tagTint: "bg-aqua text-white",
    name: "Whole Yellowfin Tuna",
    desc: "Line-caught and iced within hours. Sashimi and steak cuts available on request.",
    spec: "10 to 60 kg per fish",
  },
  {
    img: "/img/product-snapper.jpg",
    alt: "Fresh red snapper on ice with lime",
    tag: "Fresh",
    tint: "bg-sun-soft",
    tagTint: "bg-sun text-ink",
    name: "Red Snapper",
    desc: "Reef-caught snapper with bright skin and firm flesh. Built for the grill whole.",
    spec: "300 g to 1.5 kg per fish",
  },
  {
    img: "/img/product-shrimp.jpg",
    alt: "Raw shrimp arranged on crushed ice",
    tag: "Frozen",
    tint: "bg-foamdeep",
    tagTint: "bg-aqua-deep text-white",
    name: "Vannamei Shrimp",
    desc: "IQF frozen at source, so every piece separates cleanly. Sizes 31/40 up to 16/20.",
    spec: "10 x 1 kg retail or bulk",
  },
  {
    img: "/img/product-fillet.jpg",
    alt: "Premium white fish fillet portions on parchment",
    tag: "Frozen",
    tint: "bg-coral-soft",
    tagTint: "bg-coral text-white",
    name: "White Fish Fillets",
    desc: "Skinless, boneless portions from snapper, grouper and mahi. Vacuum packed flat.",
    spec: "5 kg cartons, custom cuts",
  },
];

export function Products() {
  return (
    <section id="catch" className="py-20 md:py-28 bg-white relative">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow reveal">What we sell</p>
          <h2 className="reveal reveal-d1 mt-4 font-display font-bold text-4xl sm:text-5xl leading-tight">
            The catch, sorted by
            <br />
            what your kitchen needs.
          </h2>
          <p className="reveal reveal-d2 mt-5 text-ink/65">
            Every product below ships fresh within the city or frozen anywhere
            in the country. Ask about custom grading, sizing and packaging.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <article
              key={p.name}
              className={`reveal reveal-d${(i % 3) + 1} group ${p.tint} rounded-[1.75rem] p-4 pb-6 flex flex-col transition-transform duration-300 hover:-translate-y-2`}
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={p.img}
                  alt={p.alt}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute top-3 left-3 ${p.tagTint} text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full`}
                >
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-5 font-display font-bold text-xl text-ink">{p.name}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{p.desc}</p>
              <p className="mt-4 pt-4 border-t border-ink/10 text-xs font-bold uppercase tracking-widest text-ink/45">
                {p.spec}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
