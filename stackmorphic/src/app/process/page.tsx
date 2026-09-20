import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

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

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="py-20">
        <Container>
          <SectionHeading
            eyebrow="PROCESS"
            title="A Clear Path From Idea To Launch"
            description="Every project follows a practical workflow built around clarity, communication and business needs."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6"
              >
                <div className="text-4xl font-semibold text-violet-200">
                  {step.number}
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-white">
                  {step.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
