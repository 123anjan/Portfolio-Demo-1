import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

export function ProjectsSection() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="PROJECTS"
            title="Concept Projects"
            description="Because verified client projects were not provided, the following examples are clearly labeled concept projects for presentation and planning purposes."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <article className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80">
                <div className="h-40 bg-gradient-to-br from-violet-500/20 via-slate-900 to-cyan-500/10 p-5">
                  <div className="flex h-full items-end justify-between rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        {project.category}
                      </div>
                      <div className="mt-2 text-lg font-semibold text-white">
                        {project.title}
                      </div>
                    </div>
                    <div className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-200">
                      {project.tag}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>
                  <Link
                    href="/projects"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300"
                  >
                    View project <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
