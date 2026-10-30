import { CheckIcon } from "@/components/icons";

const points = [
  "Trusted by fishmongers, hotel kitchens and distributors",
  "Direct sourcing from small-scale fleets across the archipelago",
  "Our own grading, filleting and freezing facility",
];

export function About() {
  return (
    <section id="story" className="py-20 md:py-28">
      <div className="shell grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative reveal">
          <div
            aria-hidden="true"
            className="absolute -inset-4 bg-mint rounded-[2.5rem] rotate-2"
          />
          <img
            src="/img/about-dock.jpg"
            alt="Fishermen unloading fresh catch at an Indonesian harbor in the morning"
            className="relative rounded-[2rem] w-full object-cover aspect-[4/3] shadow-soft"
          />
          <div className="absolute -bottom-6 -right-3 sm:right-6 bg-white rounded-2xl px-6 py-4 shadow-soft rotate-[-2deg]">
            <p className="font-display font-bold text-2xl text-aqua">12+ years</p>
            <p className="text-xs font-bold text-ink/50 uppercase tracking-widest">
              at the same dock
            </p>
          </div>
        </div>

        <div>
          <p className="eyebrow reveal">Our story</p>
          <h2 className="reveal reveal-d1 mt-4 font-display font-bold text-4xl sm:text-5xl leading-tight">
            A family dock with
            <br />
            export-grade standards.
          </h2>
          <p className="reveal reveal-d2 mt-6 text-ink/65 max-w-lg">
            PT Karya Maritim and PT Karya Maritim Indonesia grew from a single
            morning fish stall into a trading and processing house. We still buy
            from the same boats, but our fish now travels much further: local
            markets, restaurant chains and buyers abroad.
          </p>
          <ul className="reveal reveal-d3 mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckIcon className="w-6 h-6 text-aqua shrink-0 mt-0.5" />
                <span className="font-semibold text-ink/80">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
