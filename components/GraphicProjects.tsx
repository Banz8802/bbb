import Image from "next/image";
import { graphicProjects } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function GraphicProjects() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Other work"
          title="Graphic design projects built for launches, events, and campaigns"
          copy="The PDF includes event displays, ads, packaging, sale campaigns, and service promotion creatives. These placeholders are ready to replace with final project images."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {graphicProjects.map((project, index) => (
            <article
              key={project}
              className="group overflow-hidden rounded-md border border-slate-200 bg-slate-50"
            >
              <div className="relative aspect-[4/3] bg-navy">
                <Image
                  src={`/images/graphic-${index + 1}.svg`}
                  alt={`${project} placeholder`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-black text-navy">{project}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
