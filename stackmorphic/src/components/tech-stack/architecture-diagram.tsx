"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const nodes = [
  {
    id: "Frontend",
    label: "FRONTEND",
    details: "HTML / CSS / JavaScript / React / Tailwind",
  },
  { id: "Backend", label: "BACKEND", details: "Python / Django / REST API" },
  { id: "Database", label: "DATABASE", details: "SQL / MongoDB" },
  {
    id: "Studio",
    label: "STACKMORPHIC",
    details: "Design, strategy and delivery",
  },
];

export function ArchitectureDiagram() {
  const [active, setActive] = useState(nodes[0]);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-200">
            ARCHITECTURE
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Full-stack architecture built around business needs.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-slate-900/80 p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.08),_transparent_50%)]" />
            <div className="relative flex min-h-[440px] items-center justify-center">
              <motion.div
                layout
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-violet-400/40 bg-violet-500/10 px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.24em] text-violet-100"
              >
                {active.label}
              </motion.div>

              {nodes.map((node, index) => {
                const positions = [
                  { top: "15%", left: "50%" },
                  { top: "50%", left: "16%" },
                  { top: "50%", right: "16%" },
                  { bottom: "15%", left: "50%" },
                ];

                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setActive(node)}
                    className={`absolute rounded-2xl border px-4 py-3 text-sm font-medium transition ${active.id === node.id ? "border-cyan-400/60 bg-cyan-500/10 text-white" : "border-white/10 bg-slate-950/80 text-slate-300"}`}
                    style={positions[index]}
                  >
                    {node.label}
                  </button>
                );
              })}

              <div className="absolute left-1/2 top-[15%] h-[70%] w-px -translate-x-1/2 bg-gradient-to-b from-violet-500/60 to-cyan-500/60" />
              <div className="absolute left-[20%] top-1/2 h-px w-[60%] bg-gradient-to-r from-violet-500/60 to-cyan-500/60" />
              <div className="absolute left-1/2 bottom-[15%] h-[70%] w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/60 to-violet-500/60" />
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6">
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-200">
              Selected layer
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              {active.label}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {active.details}
            </p>
            <div className="mt-8 space-y-3 text-sm text-slate-200">
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-3">
                Design and user experience
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-3">
                Frontend logic and responsiveness
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-3">
                Secure backend and business logic
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
