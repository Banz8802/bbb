import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

export function CTA() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="overflow-hidden rounded-md bg-navy text-white shadow-soft">
          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.72fr_1.28fr] lg:p-12">
            <Logo />
            <div>
              <p className="eyebrow text-gold">Ready to build better?</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-normal sm:text-4xl">
                Transform attention into trust, and trust into consistent
                conversions.
              </h2>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:hello@buildingbetterbrands.example"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-navy transition hover:bg-white"
                >
                  Contact the Team
                  <ArrowRight aria-hidden="true" size={18} />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center rounded-md border border-white/25 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:border-white hover:bg-white/10"
                >
                  Review Portfolio
                </a>
              </div>
              <p className="mt-5 text-sm text-slate-300">
                Replace this email in `components/CTA.tsx` with the live company
                contact address before launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
