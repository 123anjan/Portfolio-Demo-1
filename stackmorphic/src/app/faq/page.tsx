import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { faqItems } from "@/data/faq";

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Common questions about scope, pricing, timelines and ongoing support."
          />
          <div className="mt-12 space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-white/10 bg-slate-900/80 p-5"
              >
                <h2 className="text-lg font-semibold text-white">
                  {item.question}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
