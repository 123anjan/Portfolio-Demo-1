import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";

export function FinalCta() {
  return (
    <section className="pb-20 pt-8">
      <Container>
        <Reveal>
          <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  START YOUR PROJECT
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                  Need a site that helps your business grow?
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:translate-y-[-1px]"
              >
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
