const steps = [
  {
    n: "01",
    title: "Sourcing",
    desc: "We buy at the dock from 30+ partner vessels, mostly small-scale fleets that fish overnight and land before sunrise.",
    tint: "bg-mint",
  },
  {
    n: "02",
    title: "Grading",
    desc: "Every fish is sized, inspected and graded by hand. Only the top two grades ever leave the building.",
    tint: "bg-sun-soft",
  },
  {
    n: "03",
    title: "Processing",
    desc: "Filleting, portioning and freezing happen in a -35°C room hours after catch, never days after.",
    tint: "bg-coral-soft",
  },
  {
    n: "04",
    title: "Delivery",
    desc: "Reefer trucks for the frozen line, insulated vans for fresh. Export orders load into reefer containers at the port.",
    tint: "bg-foamdeep",
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow reveal">Cold chain, four doors</p>
            <h2 className="reveal reveal-d1 mt-4 font-display font-bold text-4xl sm:text-5xl leading-tight">
              From sea to kitchen
              <br />
              in four cold rooms.
            </h2>
          </div>
          <p className="reveal reveal-d2 max-w-sm text-ink/60">
            Freshness is a countdown. Our whole operation is built to shorten
            it at every step.
          </p>
        </div>

        <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`reveal reveal-d${i + 1} ${s.tint} rounded-[1.75rem] p-7 flex flex-col min-h-[15rem] transition-transform duration-300 hover:-translate-y-2`}
            >
              <span className="font-display font-bold text-5xl text-ink/15">{s.n}</span>
              <h3 className="mt-auto font-display font-bold text-2xl text-ink">{s.title}</h3>
              <p className="mt-3 text-sm text-ink/65 leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
