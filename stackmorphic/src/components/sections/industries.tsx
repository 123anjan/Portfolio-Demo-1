import {
  Building2,
  Gem,
  Handshake,
  Rocket,
  ShoppingCart,
  Sparkles,
  Store,
  UserRound,
  UtensilsCrossed,
  BriefcaseBusiness,
} from "lucide-react";
import { industries } from "@/data/industries";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

const iconMap = {
  Store,
  Rocket,
  ShoppingCart,
  UtensilsCrossed,
  Sparkles,
  Gem,
  Building2,
  BriefcaseBusiness,
  UserRound,
  Handshake,
};

export function IndustriesSection() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="INDUSTRIES"
            title="Web Solutions for Different Businesses"
            description="Professional, responsive design and practical functionality for businesses with different goals and customer journeys."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {industries.map((industry, index) => {
            const Icon =
              iconMap[industry.icon as keyof typeof iconMap] ?? Store;
            return (
              <Reveal key={industry.title} delay={index * 0.05}>
                <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {industry.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
