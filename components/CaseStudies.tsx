import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { caseStudies } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function CaseStudies() {
  return (
    <section id="work" className="bg-[#eef6fc] py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Proven results"
          title="Established brands with stronger digital visibility"
          copy="The portfolio highlights public figures and organizations where brand positioning, social presence, visibility, and engagement were strengthened."
        />
        <div className="mt-12 grid gap-6">
          {caseStudies.map((study) => (
            <article
              key={study.name}
              className="grid overflow-hidden rounded-md border border-white bg-white shadow-soft lg:grid-cols-[0.82fr_1.18fr]"
            >
              <div className="relative min-h-72 bg-navy">
                <Image
                  src={study.image}
                  alt={`${study.name} project placeholder`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="eyebrow">{study.audience}</p>
                <h3 className="mt-3 text-2xl font-black text-navy sm:text-3xl">
                  {study.name}
                </h3>
                <p className="mt-1 font-semibold text-steel">{study.role}</p>
                {study.feedback ? (
                  <p className="mt-3 inline-flex rounded-md bg-gold px-3 py-2 text-sm font-black text-navy">
                    {study.feedback}
                  </p>
                ) : null}
                <div className="mt-7 grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-black text-navy">What We Did</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                      {study.whatWeDid.map((point) => (
                        <li key={point}>- {point}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-black text-navy">Impact</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                      {study.impact.map((point) => (
                        <li key={point}>- {point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {study.link ? (
                  <a
                    href={study.link}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-black text-navy underline decoration-gold decoration-4 underline-offset-4"
                  >
                    Promotional e-book
                    <ExternalLink aria-hidden="true" size={16} />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
