import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <header className="relative isolate overflow-hidden bg-navy text-white">
      <Image
        src="/images/hero-architecture.svg"
        alt=""
        fill
        priority
        className="absolute inset-0 -z-20 object-cover opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy via-navy/92 to-[#223b62]/88" />
      <nav className="section-shell flex items-center justify-between py-5">
        <Logo />
        <a
          href="#contact"
          className="hidden rounded-md bg-gold px-5 py-3 text-sm font-extrabold text-navy transition hover:bg-white sm:inline-flex"
        >
          Start a Project
        </a>
      </nav>
      <div className="section-shell grid min-h-[calc(100vh-86px)] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold">Company Portfolio</p>
          <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
            Building Better Brands
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-2xl italic text-slate-100 sm:text-3xl">
            Turn ordinary businesses into brands people remember and buy from.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            We help business and personal brands transform into powerful,
            recognizable brands that attract attention, build trust, and convert
            consistently.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-navy transition hover:bg-white"
            >
              View Results
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-white/25 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:border-white hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="absolute -left-4 -top-4 h-24 w-24 bg-gold" />
          <div className="relative border-4 border-white/85 p-5 shadow-soft">
            <div className="bg-white/10 p-6 backdrop-blur-md">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">
                Focus
              </p>
              <p className="mt-3 text-3xl font-black leading-tight">
                Strategy, content, paid advertising, and systems that drive
                real goals.
              </p>
              <div className="mt-8 grid gap-4">
                {[
                  "Brand positioning",
                  "Social media growth",
                  "Content that converts",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-gold" size={20} />
                    <span className="font-semibold text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-gold" />
        </div>
      </div>
    </header>
  );
}
