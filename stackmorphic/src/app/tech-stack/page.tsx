import type { Metadata } from "next";
import { ArchitectureDiagram } from "@/components/tech-stack/architecture-diagram";
import { CodeDemo } from "@/components/tech-stack/code-demo";
import { JavaScriptShowcase } from "@/components/tech-stack/javascript-showcase";
import { TechnologyExplorer } from "@/components/tech-stack/technology-explorer";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tech Stack",
  description:
    "Explore the modern frontend, backend, database and development technologies Stackmorphic uses to build responsive websites and full-stack web applications.",
};

export default function TechStackPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                TECHNOLOGY & ENGINEERING
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                The Technology Behind Better Digital Experiences.
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                We combine modern frontend, backend, database and development
                technologies to build responsive websites and scalable web
                applications.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white"
                >
                  Start a Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <TechnologyExplorer />
        <JavaScriptShowcase />
        <ArchitectureDiagram />
        <CodeDemo />
      </main>
      <Footer />
    </div>
  );
}
