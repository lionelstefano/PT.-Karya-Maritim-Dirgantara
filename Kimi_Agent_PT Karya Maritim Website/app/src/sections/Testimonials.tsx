import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "@/components/icons";

const quotes = [
  {
    text: "The tuna arrives at my counter before the ice has even thought about melting. My sashimi supplier of five years.",
    name: "Rendra Wijaya",
    role: "Executive chef, Jakarta",
    tint: "bg-mint",
    rotate: "md:-rotate-2",
  },
  {
    text: "I buy frozen shrimp by the container. Their grading is honest, which is rarer than you would think in this trade.",
    name: "Mei Lin Tan",
    role: "Importer, Singapore",
    tint: "bg-sun-soft",
    rotate: "md:rotate-2",
  },
  {
    text: "They rebuilt their packing spec around our menu. The fillets come in exactly the portions my line needs.",
    name: "Bagus Prasetyo",
    role: "F&B manager, Bali resort",
    tint: "bg-coral-soft",
    rotate: "md:-rotate-1",
  },
  {
    text: "As a wholesaler I care about one thing: consistency week after week. Karya Maritim has never missed a spec sheet.",
    name: "Sari Amelia",
    role: "Distributor, Surabaya",
    tint: "bg-foamdeep",
    rotate: "md:rotate-1",
  },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const w = card ? card.offsetWidth + 24 : 340;
    track.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="shell flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow reveal">Word from the dockside</p>
          <h2 className="reveal reveal-d1 mt-4 font-display font-bold text-4xl sm:text-5xl leading-tight">
            People who cook with us,
            <br className="hidden sm:block" /> twice a week.
          </h2>
        </div>
        <div className="reveal reveal-d2 flex gap-3">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous testimonials"
            className="w-12 h-12 rounded-full border border-ink/15 bg-white flex items-center justify-center text-ink hover:border-ink/40 transition-colors cursor-pointer active:scale-95"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next testimonials"
            className="w-12 h-12 rounded-full bg-ink text-white flex items-center justify-center hover:bg-aqua-deep transition-colors cursor-pointer active:scale-95"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-12 flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-5 sm:px-8 pb-4"
        style={{ scrollPaddingLeft: "1.25rem" }}
      >
        {quotes.map((q) => (
          <figure
            key={q.name}
            data-card
            className={`reveal snap-start shrink-0 w-[20rem] sm:w-[24rem] ${q.tint} ${q.rotate} rounded-[1.75rem] p-8 shadow-soft transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}
          >
            <blockquote className="text-lg font-semibold text-ink/85 leading-relaxed">
              &ldquo;{q.text}&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-ink text-white font-display font-bold flex items-center justify-center">
                {q.name.charAt(0)}
              </span>
              <span>
                <span className="block font-bold text-ink">{q.name}</span>
                <span className="block text-sm text-ink/55">{q.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
