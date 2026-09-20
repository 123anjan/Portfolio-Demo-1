import {
  ArrowUpRight,
  Gauge,
  LayoutTemplate,
  Smartphone,
  Target,
} from "lucide-react";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

const cards = [
  {
    title: "Modern Design",
    description:
      "Professional interfaces designed around your brand and audience.",
    icon: LayoutTemplate,
  },
  {
    title: "Responsive Experience",
    description: "Designed for mobile, tablet and desktop.",
    icon: Smartphone,
  },
  {
    title: "Performance",
    description: "Fast and optimized experiences.",
    icon: Gauge,
  },
  {
    title: "Business Focused",
    description: "Every page is designed around real business goals.",
    icon: Target,
  },
];

export function ValueProposition() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="WHY IT MATTERS"
            title="Built for the Modern Web"
            description="From business websites to custom web applications, Stackmorphic combines thoughtful design, modern development and performance-focused engineering to create digital experiences built around your business goals."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.09}>
              <article className="group rounded-3xl border border-white/10 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-violet-400/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
                  <span>Focus</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
