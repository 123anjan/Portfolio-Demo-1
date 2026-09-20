import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="py-20">
        <Container>
          <SectionHeading
            eyebrow="PROJECTS"
            title="Concept Projects"
            description="These are concept examples presented to demonstrate the kinds of digital experiences Stackmorphic can design and build."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.id}
                className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80"
              >
                <div className="h-44 bg-gradient-to-br from-violet-500/20 via-slate-900 to-cyan-500/10 p-5">
                  <div className="flex h-full items-end justify-between rounded-[20px] border border-white/10 bg-slate-950/80 p-5">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        {project.category}
                      </div>
                      <div className="mt-2 text-xl font-semibold text-white">
                        {project.title}
                      </div>
                    </div>
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-200">
                      {project.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
