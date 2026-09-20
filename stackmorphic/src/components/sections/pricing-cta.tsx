import Link from "next/link";
import { ArrowRight, MessageSquareText } from "lucide-react";
import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";

export function PricingCta() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-violet-500/15 via-slate-950 to-cyan-500/10 p-8 sm:p-10 lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-200">
                  PROJECTS
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Every Project Is Different
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  Whether you need a simple business website, a high-converting
                  landing page or a custom web application, we&apos;ll recommend
                  a solution based on your requirements.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                >
                  Request a Free Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/919330492466?text=Hello%20Stackmorphic%2C%20I%20would%20like%20to%20discuss%20a%20website%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:text-cyan-100"
                >
                  <MessageSquareText className="h-4 w-4" /> Discuss Your Project
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
