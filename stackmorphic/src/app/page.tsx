import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ContactSection } from "@/components/sections/contact";
import { FaqSection } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { IndustriesSection } from "@/components/sections/industries";
import { PricingCta } from "@/components/sections/pricing-cta";
import { ProcessSection } from "@/components/sections/process";
import { ProjectsSection } from "@/components/sections/projects";
import { ServicesSection } from "@/components/sections/services";
import { TechnologyOverview } from "@/components/sections/technologies";
import { ValueProposition } from "@/components/sections/value-proposition";
import { WhyStackmorphic } from "@/components/sections/why-stackmorphic";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <ServicesSection />
        <WhyStackmorphic />
        <ProcessSection />
        <ProjectsSection />
        <TechnologyOverview />
        <IndustriesSection />
        <PricingCta />
        <FaqSection />
        <ContactSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
