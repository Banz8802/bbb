import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { GraphicProjects } from "@/components/GraphicProjects";
import { Approach } from "@/components/Approach";
import { Testimonials } from "@/components/Testimonials";
import { WhyChoose } from "@/components/WhyChoose";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <GraphicProjects />
        <Approach />
        <Testimonials />
        <WhyChoose />
        <CTA />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
