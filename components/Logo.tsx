import { TrendingUp } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-md border border-white/25 bg-white/10 text-gold shadow-sm backdrop-blur">
        <TrendingUp aria-hidden="true" size={25} strokeWidth={2.5} />
      </div>
      <div className="leading-tight">
        <p className="text-sm font-black uppercase tracking-[0.16em]">
          Building
          <br />
          Better Brands
        </p>
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
          Social Media Agency
        </p>
      </div>
    </div>
  );
}
