import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <header
      className="relative isolate min-h-screen overflow-hidden bg-navy text-white"
      id="hero"
    >
      {/* Background image */}
      <Image
        src="/images/bbb-hero-background.webp"
        alt=""
        fill
        priority
        className="absolute inset-0 -z-20 object-cover object-center opacity-60"
      />

      {/* Dark blue gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/65" />

      {/* Decorative gold accent — top left */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-40 h-80 w-80 rounded-full bg-gold/5 blur-3xl"
      />
      {/* Decorative gold accent — bottom right */}
      <div
        aria-hidden="true"
        className="absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-gold/8 blur-3xl"
      />

      {/* Content grid */}
      <div className="section-shell grid min-h-screen items-center gap-12 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24">
        {/* Left — headline block */}
        <div className="max-w-3xl">
          <p
            className="eyebrow animate-fade-in text-gold opacity-0"
            style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
          >
            Social Media &amp; Branding Agency
          </p>

          <h1
            className="animate-fade-up mt-5 font-display text-5xl font-black leading-[0.95] tracking-tight opacity-0 sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
            style={{ animationDelay: "120ms", animationFillMode: "forwards" }}
          >
            Turn ordinary businesses into{" "}
            <em className="font-display not-italic text-gold">brands people</em>{" "}
            remember.
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-2xl text-lg leading-8 text-slate-200 opacity-0 sm:text-xl"
            style={{ animationDelay: "260ms", animationFillMode: "forwards" }}
          >
            We help businesses and personal brands transform into influential,
            recognizable market leaders that attract attention, build trust, and convert
            consistently.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col gap-3 opacity-0 sm:flex-row"
            style={{ animationDelay: "380ms", animationFillMode: "forwards" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-navy transition-all duration-200 hover:bg-white hover:shadow-lg"
            >
              Let&apos;s Build Your Brand
              <ArrowRight aria-hidden="true" size={17} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-md border border-white/25 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10"
            >
              View Our Results
            </a>
          </div>

          {/* Social proof strip */}
          <div
            className="animate-fade-up mt-12 flex flex-wrap gap-6 opacity-0"
            style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
          >
            {[
              { number: "58K+", label: "Followers Built" },
              { number: "52K+", label: "Community Reached" },
              { number: "96%", label: "Recommendation Rate" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-2xl font-black text-gold sm:text-3xl">
                  {stat.number}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — focus card */}
        <div
          className="animate-scale-in relative mx-auto w-full max-w-lg opacity-0 lg:ml-auto"
          style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
        >
          {/* Gold corner accents */}
          <div aria-hidden="true" className="absolute -left-3 -top-3 h-16 w-16 bg-gold sm:h-20 sm:w-20" />

          <div className="relative border-2 border-white/20 bg-white/5 p-1 shadow-soft backdrop-blur-sm">
            <div className="border border-white/10 bg-navy/60 p-7 backdrop-blur-md sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
                What We Focus On
              </p>
              <p className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                Strategy, content, paid advertising, and systems that drive
                real goals.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Brand positioning & messaging",
                  "Social media growth & content",
                  "Paid advertising (Meta Ads)",
                  "Digital product scaling",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="shrink-0 text-gold" size={18} />
                    <span className="text-sm font-semibold text-slate-100">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div aria-hidden="true" className="absolute -bottom-3 -right-3 h-16 w-16 bg-gold sm:h-20 sm:w-20" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </header>
  );
}
