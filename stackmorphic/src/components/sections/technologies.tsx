import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

const stacks = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  { title: "Backend", items: ["Python", "Django", "REST APIs"] },
  { title: "Database", items: ["Oracle SQL", "SQL", "MongoDB"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Postman"] },
];

export function TechnologyOverview() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="TECHNOLOGY"
            title="Modern Tools, Thoughtful Execution"
            description="Stackmorphic uses a balanced stack of frontend, backend and tooling to build experiences that are maintainable, responsive and practical for business goals."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stacks.map((stack, index) => (
            <Reveal key={stack.title} delay={index * 0.08}>
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-white">
                  {stack.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-950 px-3 py-1.5 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/tech-stack"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20"
          >
            Explore Our Tech Stack <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
