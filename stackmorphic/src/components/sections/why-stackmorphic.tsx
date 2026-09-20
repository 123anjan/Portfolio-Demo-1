import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  MessageSquareText,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

const items = [
  {
    title: "Business-First Thinking",
    description: "Focus on what the website needs to achieve.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Custom Solutions",
    description: "Solutions based on actual project requirements.",
    icon: Code2,
  },
  {
    title: "Responsive by Default",
    description: "Designed for phones, tablets and desktops.",
    icon: MonitorSmartphone,
  },
  {
    title: "Performance Focused",
    description: "Efficient implementation and optimized user experience.",
    icon: Rocket,
  },
  {
    title: "Modern Technology",
    description: "Current web-development practices.",
    icon: ShieldCheck,
  },
  {
    title: "Direct Communication",
    description: "Clear communication throughout the project.",
    icon: MessageSquareText,
  },
];

export function WhyStackmorphic() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="WHY STACKMORPHIC"
            title="Why Businesses Choose Stackmorphic"
            description="A practical, business-aware web studio focused on creating a usable and professional experience that supports your goals."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 transition hover:border-violet-400/40 hover:bg-slate-900/95">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-300">
                    <span>Value</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
