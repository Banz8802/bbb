import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { RevealSection } from "./RevealSection";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#f8fafc] py-20 sm:py-28">
      <div className="section-shell">
        <RevealSection>
          <SectionHeader
            eyebrow="Client Testimonials"
            title="Trusted by ambitious leaders across Australia & Asia-Pacific"
            copy="Discover how our strategic brand positioning, content systems, and Meta ad campaigns drive measurable growth for market leaders."
          />
        </RevealSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <RevealSection key={item.name} delay={idx * 80}>
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-card-hover sm:p-8">
                {/* Decorative quote mark watermark */}
                <Quote
                  aria-hidden="true"
                  className="absolute -right-2 -top-2 h-20 w-20 text-slate-100 transition-colors group-hover:text-gold/10"
                />

                <div className="relative">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-gold">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-gold text-gold"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Quote Body */}
                  <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="relative mt-8 flex items-center gap-3.5 border-t border-slate-100 pt-5">
                  {/* Avatar Initials Badge */}
                  <div
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br ${item.avatarBg} text-sm font-black text-white shadow-sm ring-2 ring-slate-100`}
                  >
                    {item.initials}
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className="truncate font-display text-base font-bold text-navy">
                      {item.name}
                    </span>
                    <span className="truncate text-xs font-medium text-slate-500">
                      {item.role} &bull; {item.company}
                    </span>
                    <span className="mt-1 inline-flex w-fit items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                      📍 {item.location}
                    </span>
                  </div>
                </div>
              </article>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
