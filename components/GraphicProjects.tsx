import Image from "next/image";
import { graphicProjects } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { RevealSection } from "./RevealSection";

export function GraphicProjects() {
  // First item is featured (full width), rest are 3-up grid
  const [featured, ...rest] = graphicProjects;

  return (
    <section id="graphic-work" className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <RevealSection>
          <SectionHeader
            eyebrow="Other work"
            title="Graphic design projects built for launches, events, and campaigns"
            copy="High-impact event displays, digital ads, packaging, seasonal sales campaigns, and service promotion creatives designed to elevate brand authority."
          />
        </RevealSection>

        {/* Featured project — full width */}
        <RevealSection delay={100} className="mt-12">
          <article className="group relative overflow-hidden rounded-2xl bg-navy">
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image
                src={featured.image || "/images/event-bbb.webp"}
                alt={`${featured.title} — ${featured.category}`}
                fill
                className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              {/* gradient always present */}
              <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/30 to-transparent" />
            </div>
            {/* Overlay text — pinned to bottom-left */}
            <div className="pointer-events-none absolute bottom-0 left-0 p-7 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
                {featured.category}
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
                {featured.title}
              </h3>
            </div>
          </article>
        </RevealSection>

        {/* Supporting 6 — 3-column grid */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, index) => (
            <RevealSection key={project.title} delay={index * 60 + 150}>
              <article className="group overflow-hidden rounded-xl border border-slate-200 bg-navy">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || `/images/graphic-${index + 2}.svg`}
                    alt={`${project.title} — ${project.category}`}
                    fill
                    className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Label strip — below the image, NOT overlaid */}
                <div className="bg-navy px-5 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                    {project.category}
                  </p>
                  <h3 className="mt-0.5 text-sm font-black text-white">
                    {project.title}
                  </h3>
                </div>
              </article>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
