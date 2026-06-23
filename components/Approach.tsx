import { approach, audiences } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function Approach() {
  return (
    <section className="bg-navy py-20 text-white sm:py-24">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              eyebrow="Better building brand"
              title="We do not just manage brands - we build systems."
              light
            />
            <div className="mt-10 rounded-md border border-white/15 bg-white/8 p-6">
              <h3 className="text-xl font-black">Who We Work With</h3>
              <ul className="mt-5 grid gap-3 text-slate-200 sm:grid-cols-2 lg:grid-cols-1">
                {audiences.map((audience) => (
                  <li key={audience} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {approach.map((item) => (
              <article
                key={item.step}
                className="rounded-md border border-white/15 bg-white/8 p-6 backdrop-blur"
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-gold">
                  {item.step}
                </p>
                <h3 className="mt-4 text-2xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-200">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
