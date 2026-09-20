"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { technologies } from "@/data/technologies";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";

const categories = [
  "All",
  ...Array.from(new Set(technologies.map((tech) => tech.category))),
];

export function TechnologyExplorer() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(technologies[0]);

  const filtered = useMemo(() => {
    return technologies.filter((tech) => {
      const matchesCategory =
        selectedCategory === "All" || tech.category === selectedCategory;
      const matchesSearch =
        `${tech.name} ${tech.description} ${tech.useCases.join(" ")}`
          .toLowerCase()
          .includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="TECHNOLOGY EXPLORER"
          title="The Tools Behind Better Digital Experiences"
          description="Select a technology to explore how it fits into a modern website and full-stack project."
        />

        <div className="mt-10 rounded-[28px] border border-white/10 bg-slate-900/80 p-4 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-3 py-2 text-sm transition ${selectedCategory === category ? "bg-violet-500 text-white" : "border border-white/10 bg-slate-950 text-slate-300 hover:text-white"}`}
                >
                  {category}
                </button>
              ))}
            </div>

            <label className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950 px-3 py-2 text-sm text-slate-300">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search technologies"
                className="w-full bg-transparent text-white outline-none placeholder:text-slate-500 sm:w-52"
                aria-label="Search technologies"
              />
            </label>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4 md:grid-cols-2">
              {filtered.length > 0 ? (
                filtered.map((tech) => (
                  <button
                    key={tech.name}
                    type="button"
                    onClick={() => setActive(tech)}
                    className={`rounded-2xl border p-4 text-left transition ${active.name === tech.name ? "border-violet-400/60 bg-violet-500/10" : "border-white/10 bg-slate-950/70 hover:border-white/20"}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-lg font-semibold text-white">
                        {tech.name}
                      </span>
                      <span className="rounded-full border border-white/10 bg-slate-900 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                        {tech.category}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {tech.description}
                    </p>
                  </button>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-white/10 bg-slate-950/70 p-6 text-slate-300 md:col-span-2">
                  No technologies match your current filter.
                </div>
              )}
            </div>

            <aside className="rounded-[26px] border border-white/10 bg-slate-950/80 p-6">
              <div className="text-[10px] uppercase tracking-[0.24em] text-violet-200">
                Selected technology
              </div>
              <h3 className="mt-3 text-3xl font-semibold text-white">
                {active.name}
              </h3>
              <div className="mt-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-200">
                {active.category}
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                {active.description}
              </p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Use cases
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  {active.useCases.map((useCase) => (
                    <li key={useCase} className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
