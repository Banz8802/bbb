import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/logo.png"
        alt="Building Better Brands — Social Media Agency"
        width={46}
        height={46}
        className="rounded-full shrink-0"
        priority
      />
      <div className="flex flex-col">
        <span className="font-display text-xs sm:text-sm font-bold tracking-wider text-white leading-tight">
          BUILDING BETTER BRANDS
        </span>
        <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-gold uppercase leading-tight">
          Social Media Agency
        </span>
      </div>
    </div>
  );
}
