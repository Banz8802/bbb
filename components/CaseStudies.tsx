import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { caseStudies } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { RevealSection } from "./RevealSection";

export function CaseStudies() {
  return (
    <section id="work" className="bg-[#eef6fc] py-20 sm:py-28">
      <div className="section-shell">
        <RevealSection>
          <SectionHeader
            eyebrow="Proven results"
            title="Established brands with stronger digital visibility"
            copy="The portfolio highlights public figures and organizations where brand positioning, social presence, visibility, and engagement were strengthened."
          />
        </RevealSection>

        <div className="mt-14 space-y-8">
          {caseStudies.map((study, idx) => (
            <RevealSection key={study.name} delay={idx * 100}>
              <article className="group grid overflow-hidden rounded-2xl border border-white/80 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover lg:grid-cols-[0.78fr_1.22fr]">
                {/* Image panel */}
                <div className="relative min-h-64 overflow-hidden bg-[#252728] sm:min-h-72 lg:min-h-80">
                  <Image
                    src={study.image}
                    alt={`${study.name} — branding project`}
                    fill
                    className={`${
                      study.objectFit || "object-contain"
                    } transition-transform duration-700 group-hover:scale-105 ${
                      study.objectPosition || "object-center"
                    }`}
                  />
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252728]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Large metric — overlaid on image */}
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="font-display text-5xl font-black leading-none text-white sm:text-6xl">
                      {study.audience}
                    </span>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                      {study.audienceLabel}
                    </p>
                  </div>
                </div>

                {/* Content panel */}
                <div className="flex flex-col justify-between p-7 sm:p-8 lg:p-10">
                  <div>
                    <p className="eyebrow">{study.role}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">
                      {study.name}
                    </h3>

                    {study.feedback && (
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        <span className="text-sm font-bold text-navy">
                          {study.feedback}
                        </span>
                      </div>
                    )}

                    <div className="mt-7 grid gap-6 sm:grid-cols-2">
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.18em] text-navy">
                          What We Did
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {study.whatWeDid.map((point) => (
                            <li
                              key={point}
                              className="flex gap-2.5 text-sm leading-6 text-slate-600"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.18em] text-navy">
                          Impact
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {study.impact.map((point) => (
                            <li
                              key={point}
                              className="flex gap-2.5 text-sm leading-6 text-slate-600"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-steel" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {study.link && (
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link mt-8 inline-flex items-center gap-2 text-sm font-black text-navy"
                    >
                      <span className="border-b-2 border-gold pb-0.5 transition-colors group-hover/link:border-navy">
                        View Promotional e-book
                      </span>
                      <ExternalLink aria-hidden="true" size={15} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </article>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
