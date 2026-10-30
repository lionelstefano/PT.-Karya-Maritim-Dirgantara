import { useEffect, useRef } from "react";
import { ArrowRight, FishIcon } from "@/components/icons";

export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);

  // Gentle parallax: the 3D fish and shrimp drift with the pointer.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: PointerEvent) => {
      const r = stage.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      stage.style.setProperty("--px", String(dx * 22));
      stage.style.setProperty("--py", String(dy * 18));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24">
      {/* Soft pastel blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-40 w-[34rem] h-[34rem] rounded-full bg-mint blur-3xl opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute top-64 -left-48 w-[26rem] h-[26rem] rounded-full bg-sun-soft blur-3xl opacity-60"
      />

      <div className="shell relative grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-6 items-center">
        <div>
          <p className="eyebrow reveal">
            <FishIcon className="w-4 h-4" />
            Fresh from Indonesian waters
          </p>

          <h1 className="reveal reveal-d1 mt-5 font-display font-bold text-ink text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.4rem]">
            From our boats
            <br />
            to your kitchen,{" "}
            <span className="text-aqua">still cold.</span>
          </h1>

          <p className="reveal reveal-d2 mt-6 max-w-xl text-lg text-ink/65">
            PT Karya Maritim trades and processes premium seafood. We supply
            chefs, wholesalers and exporters with fresh fish and frozen
            products, handled cold from the very first hour.
          </p>

          <div className="reveal reveal-d3 mt-9 flex flex-wrap items-center gap-4">
            <a href="#catch" className="btn-primary">
              See the catch
              <ArrowRight />
            </a>
            <a href="#export" className="btn-ghost">
              Export with us
            </a>
          </div>

          <dl className="reveal reveal-d3 mt-12 grid grid-cols-3 max-w-md gap-6">
            {[
              ["30+", "partner vessels"],
              ["-35°C", "processing line"],
              ["8", "export markets"],
            ].map(([num, label]) => (
              <div key={label}>
                <dt className="font-display font-bold text-3xl text-ink">{num}</dt>
                <dd className="text-sm font-bold text-ink/50 mt-1">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Floating 3D stage */}
        <div
          ref={stageRef}
          className="relative h-[24rem] sm:h-[30rem] lg:h-[34rem]"
          style={{ "--px": 0, "--py": 0 } as React.CSSProperties}
        >
          <div
            aria-hidden="true"
            className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-mint via-foamdeep to-sun-soft rotate-3"
          />
          <div
            className="absolute w-[78%] left-1/2 top-1/2"
            style={{ transform: "translate(calc(-50% + var(--px) * 1px), calc(-62% + var(--py) * 1px))" }}
          >
            <img
              src="/img/hero-fish.png"
              alt="3D illustration of a fresh silver tuna"
              className="w-full drop-shadow-2xl animate-drift"
            />
          </div>
          <div
            className="absolute w-[34%] right-2 bottom-6"
            style={{ transform: "translate(calc(var(--px) * -1.4px), calc(var(--py) * -1.2px))" }}
          >
            <img
              src="/img/hero-shrimp.png"
              alt="3D illustration of a pink shrimp"
              className="w-full drop-shadow-xl animate-driftAlt"
            />
          </div>
          <span className="absolute left-4 bottom-10 bg-white rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest text-aqua-deep shadow-soft rotate-[-4deg]">
            Sashimi grade
          </span>
          <span className="absolute right-8 top-6 bg-coral-soft text-coral rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-soft rotate-[3deg]">
            Iced within hours
          </span>
        </div>
      </div>
    </section>
  );
}
