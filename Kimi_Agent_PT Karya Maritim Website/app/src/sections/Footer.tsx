import { WaveMark, FishIcon, SnowflakeIcon, ShipIcon } from "@/components/icons";

const nav = [
  { label: "The catch", href: "#catch" },
  { label: "Our story", href: "#story" },
  { label: "Process", href: "#process" },
  { label: "Export", href: "#export" },
  { label: "Contact", href: "#contact" },
];

const lines = [
  { icon: FishIcon, label: "Fresh fish, daily" },
  { icon: SnowflakeIcon, label: "Frozen products, IQF" },
  { icon: ShipIcon, label: "Import and export" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/70 border-t border-white/10">
      <div className="shell py-14 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <a href="#top" className="flex items-center gap-2.5 font-display font-bold text-lg text-white">
            <WaveMark />
            Karya Maritim
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            PT Karya Maritim and PT Karya Maritim Indonesia. Trading and
            processing of fresh and frozen seafood for local markets and
            export.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">Explore</p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-semibold hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">What we move</p>
          <ul className="mt-4 space-y-2.5">
            {lines.map((l) => (
              <li key={l.label} className="flex items-center gap-2.5 text-sm font-semibold">
                <l.icon className="w-4 h-4 text-aqua" />
                {l.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-white/40">
          <p>© 2026 PT Karya Maritim. All rights reserved.</p>
          <p>Surabaya, East Java, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
