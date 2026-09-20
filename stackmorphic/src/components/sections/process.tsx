import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understand business goals, audience and requirements.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description: "Plan information architecture and functionality.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description: "Create the visual experience.",
  },
  {
    number: "04",
    title: "Development",
    description: "Build the website or application.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Test responsiveness, accessibility, functionality and performance.",
  },
  {
    number: "06",
    title: "Launch",
    description: "Deploy and prepare the project for real users.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="PROCESS"
            title="A Clear Path From Idea To Launch"
            description="Every project follows a practical workflow built around communication, clarity and business goals."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08}>
              <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-3xl font-semibold text-violet-200">
                    {step.number}
                  </span>
                  <span className="rounded-full border border-white/10 bg-slate-950 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    Step
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
