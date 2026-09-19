import { reasons } from "@/data/portfolio";
import { RevealSection } from "./RevealSection";

export function WhyChoose() {
  return (
    <section className="bg-[#eef6fc] py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left — bold statement */}
          <RevealSection>
            <div>
              <p className="eyebrow">Why choose us</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-[1.05] text-navy sm:text-5xl lg:text-6xl">
                Results-driven.
                <br />
                <em className="font-display italic text-steel">
                  Not aesthetics alone.
                </em>
              </h2>
              <p className="mt-6 max-w-sm text-base leading-7 text-slate-600 sm:text-lg">
                The agency focuses on ROI, communication, scalability, and
                practical growth systems — not just making things look pretty.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center rounded-md bg-navy px-6 py-3.5 text-sm font-black text-white transition-all duration-200 hover:bg-ink hover:shadow-soft"
              >
                Work With Us
              </a>
            </div>
          </RevealSection>

          {/* Right — reasons */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, idx) => (
              <RevealSection key={reason.title} delay={idx * 80}>
                <div className="group flex flex-col gap-3 rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-card">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-2xl font-black tabular-nums text-gold shrink-0 sm:text-3xl">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-black text-navy leading-snug sm:text-lg">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600">
                    {reason.detail}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
