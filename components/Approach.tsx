import Image from "next/image";
import { approach, audiences } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { RevealSection } from "./RevealSection";

export function Approach() {
  return (
    <section
      id="process"
      className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28"
    >
      {/* Background Graph Image */}
      <Image
        src="/images/graph-bg.webp"
        alt=""
        fill
        className="absolute inset-0 -z-20 object-cover object-right opacity-70"
      />

      {/* Left-to-Right Overlay Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/35"
      />

      <div className="section-shell relative">
        {/* Header */}
        <RevealSection>
          <div className="max-w-2xl">
            <SectionHeader
              eyebrow="Our proven process"
              title="We don't just manage accounts — we build predictable growth engines."
              light
            />
          </div>
        </RevealSection>

        {/* Process steps */}
        <div className="relative mt-16">
          {/* Connecting line — desktop */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-gold/30 via-gold/60 to-gold/30 lg:block"
            style={{ top: "2.5rem" }}
          />

          <div className="grid gap-8 lg:grid-cols-4 lg:gap-6">
            {approach.map((item, index) => (
              <RevealSection key={item.step} delay={index * 120}>
                <article className="relative">
                  {/* Step number */}
                  <div className="relative mb-6 flex items-center gap-4 lg:flex-col lg:items-start">
                    <div className="relative z-10 grid h-20 w-20 shrink-0 place-items-center rounded-full border border-gold/30 bg-navy ring-4 ring-navy">
                      <span className="font-display text-2xl font-black text-gold">
                        {item.step}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white lg:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.copy}</p>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>

        {/* Who We Work With */}
        <RevealSection delay={200} className="mt-20">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_1px_1fr]">
              <div>
                <p className="eyebrow text-gold">Who We Work With</p>
                <p className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                  Built for brands that are ready to grow deliberately.
                </p>
              </div>

              {/* Vertical divider — desktop */}
              <div
                aria-hidden="true"
                className="hidden w-px bg-white/10 lg:block"
              />

              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {audiences.map((audience, idx) => (
                  <li key={audience} className="flex items-center gap-4">
                    <span className="font-display tabular-nums text-sm font-bold text-gold/60">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-semibold text-slate-100">
                      {audience}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
