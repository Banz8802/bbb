import { BarChart3, Megaphone, Palette, PenLine, Target, Workflow } from "lucide-react";
import { services } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

const icons = [Target, Megaphone, PenLine, BarChart3, Workflow, Palette];

export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="What we do"
          title="A complete brand growth engine"
          copy="We combine strategy, content, and paid advertising for authors, speakers, organizations, businessmen, and service-based teams."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <article
                key={service.title}
                className="rounded-md border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-skyglass hover:shadow-soft"
              >
                <div className="grid h-12 w-12 place-items-center rounded-md bg-navy text-gold">
                  <Icon aria-hidden="true" size={24} />
                </div>
                <h3 className="mt-5 text-xl font-black text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-700">
                  {service.description}
                </p>
                {service.points.length > 0 ? (
                  <ul className="mt-5 space-y-2 text-sm font-semibold text-slate-700">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
