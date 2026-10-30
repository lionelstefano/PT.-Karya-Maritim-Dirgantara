import { ShipIcon, CheckIcon } from "@/components/icons";

const certs = [
  "Health certificates issued per shipment",
  "Catch documentation and traceability",
  "Halal certification on request",
  "Reefer container loading supervised in person",
];

const markets = ["Japan", "Singapore", "Malaysia", "China", "Hong Kong", "UAE", "USA", "Netherlands"];

export function Export() {
  return (
    <section id="export" className="py-20 md:py-28 bg-white">
      <div className="shell grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <p className="eyebrow reveal">
            <ShipIcon className="w-4 h-4" />
            Import and export
          </p>
          <h2 className="reveal reveal-d1 mt-4 font-display font-bold text-4xl sm:text-5xl leading-tight">
            Export-ready,
            <br />
            paperwork included.
          </h2>
          <p className="reveal reveal-d2 mt-6 text-ink/65 max-w-lg">
            Buying seafood across borders is mostly paperwork. We handle the
            certificates, the cold chain and the container, so your consignment
            clears the port and reaches your buyer in spec.
          </p>
          <ul className="reveal reveal-d3 mt-8 space-y-4">
            {certs.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <CheckIcon className="w-6 h-6 text-aqua shrink-0 mt-0.5" />
                <span className="font-semibold text-ink/80">{c}</span>
              </li>
            ))}
          </ul>

          <p className="reveal reveal-d3 mt-10 text-xs font-bold uppercase tracking-[0.18em] text-ink/40">
            Regular lanes
          </p>
          <ul className="reveal reveal-d3 mt-3 flex flex-wrap gap-2.5">
            {markets.map((m) => (
              <li
                key={m}
                className="bg-foamdeep border border-aqua/20 text-ink/70 text-sm font-bold px-4 py-2 rounded-full"
              >
                {m}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative reveal reveal-d1">
          <div
            aria-hidden="true"
            className="absolute -inset-4 bg-sun-soft rounded-[2.5rem] -rotate-2"
          />
          <img
            src="/img/export-ship.jpg"
            alt="Container ship leaving an Indonesian port at pastel dawn"
            className="relative rounded-[2rem] w-full object-cover aspect-[3/2] shadow-soft"
          />
          <div className="absolute -bottom-6 left-6 bg-white rounded-2xl px-6 py-4 shadow-soft rotate-2">
            <p className="font-display font-bold text-2xl text-aqua">48h</p>
            <p className="text-xs font-bold text-ink/50 uppercase tracking-widest">
              port-to-port cold handover
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
