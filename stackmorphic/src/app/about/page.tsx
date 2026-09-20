import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="py-20">
        <Container>
          <SectionHeading
            eyebrow="ABOUT"
            title="A Web Studio Built Around Business Goals"
            description="Stackmorphic focuses on creating modern digital experiences that are easy to use, easy to maintain and aligned with business growth."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8 text-slate-300">
              <p className="text-lg leading-8">
                The goal is simple: help businesses communicate clearly online,
                present their offer professionally and convert more visitors
                into real enquiries and customers.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8 text-slate-300">
              <p className="text-lg leading-8">
                Stackmorphic blends design thinking, modern web development and
                product-focused execution to build websites and web experiences
                that work in the real world.
              </p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
