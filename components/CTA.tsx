import Image from "next/image";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { RevealSection } from "./RevealSection";

const WHATSAPP_NUMBER = "639084306132";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function CTA() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-navy py-24 text-white sm:py-32"
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-navy via-[#1a2d52] to-[#17233d]"
      />
      {/* Decorative gold glows */}
      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl"
      />

      <div className="section-shell relative">
        <RevealSection>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:items-center">
            {/* Left Column — Logo & Brand Showcase Card */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Corner gold glow accent */}
              <div
                aria-hidden="true"
                className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-gold/20 blur-xl"
              />

              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-8 shadow-card backdrop-blur-md sm:p-10">
                {/* Top border accent line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/40 via-gold to-gold/40" />

                <div className="flex flex-col items-start gap-6">
                  {/* Logo Image */}
                  <div className="relative grid h-24 w-24 shrink-0 place-items-center rounded-2xl border border-gold/30 bg-navy/80 p-2 shadow-soft ring-4 ring-white/10">
                    <Image
                      src="/images/logo.png"
                      alt="Building Better Brands"
                      width={80}
                      height={80}
                      className="h-full w-full rounded-xl object-contain"
                      priority
                    />
                  </div>

                  {/* Brand Titles */}
                  <div>
                    <h3 className="font-display text-2xl font-black text-white sm:text-3xl">
                      BUILDING BETTER BRANDS
                    </h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-gold">
                      Social Media Agency
                    </p>
                  </div>

                  <p className="text-sm leading-6 text-slate-300">
                    Turning ordinary businesses into influential, recognizable market leaders through strategy, content, paid ads, and scalable systems.
                  </p>

                  {/* Quick Contact Links */}
                  <div className="w-full space-y-3 border-t border-white/10 pt-6">
                    <a
                      href="mailto:bbb.socialmediaworks@gmail.com"
                      className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-200 transition-colors hover:text-gold"
                    >
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gold/15 text-gold">
                        <Mail size={16} />
                      </div>
                      <span className="truncate">bbb.socialmediaworks@gmail.com</span>
                    </a>

                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-200 transition-colors hover:text-[#25D366]"
                    >
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#25D366]/15 text-[#25D366]">
                        <Phone size={16} />
                      </div>
                      <span>+63 908 430 6132</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column — Headline, Copy & CTAs */}
            <div className="flex flex-col text-left">
              {/* Eyebrow */}
              <p className="eyebrow text-gold">Ready to build better?</p>

              {/* Headline */}
              <h2 className="mt-4 font-display text-3xl font-black leading-[1.08] text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                Transform attention into trust, and trust into consistent conversions.
              </h2>

              {/* Supporting copy */}
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                Let&apos;s build a brand strategy that works — and systems that scale. Your next chapter starts here.
              </p>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:bbb.socialmediaworks@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-navy transition-all duration-200 hover:bg-white hover:shadow-lg"
                >
                  Let&apos;s Build Your Brand
                  <ArrowRight aria-hidden="true" size={17} />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center rounded-md border border-white/25 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10"
                >
                  View Our Work
                </a>
              </div>

              {/* Trust stats row */}
              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                {[
                  { number: "3+", label: "Established Clients" },
                  { number: "96%", label: "Recommendation Rate" },
                  { number: "150K+", label: "Total Followers Built" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="font-display text-2xl font-black text-gold sm:text-3xl lg:text-4xl">
                      {stat.number}
                    </span>
                    <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400 sm:text-xs">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
