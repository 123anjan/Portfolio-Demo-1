import Link from "next/link";
import {
  ArrowRight,
  Code2,
  LayoutGrid,
  Paintbrush,
  ShoppingBag,
  Target,
  Wrench,
} from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

const iconMap = {
  LayoutGrid,
  Code2,
  ShoppingBag,
  Target,
  Paintbrush,
  Wrench,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="SERVICES"
            title="What We Build"
            description="Modern digital solutions designed to help businesses communicate clearly, sell better and function smoothly online."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon =
              iconMap[service.icon as keyof typeof iconMap] ?? LayoutGrid;
            return (
              <Reveal key={service.id} delay={index * 0.06}>
                <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/80 p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-400/50 hover:bg-slate-900">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-semibold text-violet-200/70">
                      0{service.id}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
