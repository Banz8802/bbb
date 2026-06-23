import { CheckCircle2 } from "lucide-react";
import { reasons } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function WhyChoose() {
  return (
    <section className="bg-[#eef6fc] py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="Why choose us"
            title="Structured execution for brands that need measurable growth"
            copy="The agency focuses on ROI, communication, scalability, and practical growth systems rather than aesthetics alone."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex gap-4 rounded-md border border-white bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-1 shrink-0 text-gold" size={22} />
                <p className="font-bold leading-7 text-navy">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
