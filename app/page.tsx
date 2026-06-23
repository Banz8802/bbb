import { Approach } from "@/components/Approach";
import { CaseStudies } from "@/components/CaseStudies";
import { CTA } from "@/components/CTA";
import { GraphicProjects } from "@/components/GraphicProjects";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <CaseStudies />
      <GraphicProjects />
      <Approach />
      <WhyChoose />
      <CTA />
    </main>
  );
}
