import { useEffect, useState } from "react";
import { WaveMark } from "@/components/icons";

const links = [
  { label: "Catch", href: "#catch" },
  { label: "Story", href: "#story" },
  { label: "Process", href: "#process" },
  { label: "Export", href: "#export" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-foam/85 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="shell flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2.5 font-display font-bold text-lg text-ink">
          <WaveMark />
          <span className="leading-none">
            Karya Maritim
            <span className="block text-[10px] font-body font-bold uppercase tracking-[0.22em] text-ink/50">
              Fresh &amp; Frozen Seafood
            </span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-bold text-ink/70 hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary hidden sm:inline-flex !px-6 !py-2.5 text-sm">
            Get a quote
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex flex-col justify-center items-center gap-1.5 w-11 h-11 rounded-full border border-ink/15 bg-white cursor-pointer"
          >
            <span
              className={`block w-5 h-0.5 bg-ink rounded transition-transform ${
                open ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-ink rounded transition-transform ${
                open ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-foam/95 backdrop-blur-md border-t border-ink/10">
          <ul className="shell py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-2 font-bold text-ink/80 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
