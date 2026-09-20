import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { services } from "@/data/services";
import {
  ArrowRight,
  Code2,
  LayoutGrid,
  Paintbrush,
  ShoppingBag,
  Target,
  Wrench,
} from "lucide-react";

const iconMap = { LayoutGrid, Code2, ShoppingBag, Target, Paintbrush, Wrench };

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="py-20">
        <Container>
          <SectionHeading
            eyebrow="SERVICES"
            title="Web Solutions Built for Real Business Requirements"
            description="From business websites to custom online products, each engagement is designed around the needs of the business and the audience it serves."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon =
                iconMap[service.icon as keyof typeof iconMap] ?? LayoutGrid;
              return (
                <article
                  key={service.id}
                  className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-semibold text-violet-200">
                      0{index + 1}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h2 className="mt-7 text-2xl font-semibold text-white">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {service.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
