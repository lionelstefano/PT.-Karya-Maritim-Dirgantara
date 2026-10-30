import { FishIcon, SnowflakeIcon, ShipIcon, CheckIcon } from "@/components/icons";

const items = [
  { icon: FishIcon, text: "Same-day dock pickup" },
  { icon: SnowflakeIcon, text: "Unbroken cold chain" },
  { icon: ShipIcon, text: "Export paperwork handled" },
  { icon: CheckIcon, text: "EU-compliant processing" },
  { icon: FishIcon, text: "Fresh and frozen lines" },
  { icon: SnowflakeIcon, text: "Reefer container loading" },
];

export function Ticker() {
  const row = [...items, ...items];
  return (
    <div className="relative bg-aqua text-white overflow-hidden py-4 -rotate-1 scale-[1.02] my-6">
      <div className="flex w-max animate-marquee gap-0" aria-hidden="false">
        {row.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-8 text-sm font-bold uppercase tracking-[0.14em] whitespace-nowrap"
          >
            <item.icon className="w-4 h-4 opacity-80" />
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
