"use client";

import { useMemo, useState } from "react";
import { ArrowRight, RefreshCw } from "lucide-react";
import { javascriptDemos } from "@/data/javascript-demos";

const demoData = [
  {
    id: "dynamic-ui",
    title: "Dynamic UI",
    subtitle: "Interactive tabs and counters",
    value: 42,
  },
  {
    id: "api-interaction",
    title: "API Interaction",
    subtitle: "Async data flow",
    value: 18,
  },
  {
    id: "search-filter",
    title: "Search & Filtering",
    subtitle: "Live results",
    value: 9,
  },
  {
    id: "form-validation",
    title: "Form Validation",
    subtitle: "Real-time state",
    value: 5,
  },
];

export function JavaScriptShowcase() {
  const [activeTab, setActiveTab] = useState("dynamic-ui");
  const [counter, setCounter] = useState(58);
  const [status, setStatus] = useState("Ready");

  const activeDemo = useMemo(
    () =>
      javascriptDemos.find((demo) => demo.id === activeTab) ??
      javascriptDemos[0],
    [activeTab],
  );

  const handleApiInteraction = async () => {
    setStatus("Loading");
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("Response received");
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            JAVASCRIPT IN ACTION
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Real interactions, real data flow, real user experiences.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-5">
            <div className="flex flex-wrap gap-2">
              {javascriptDemos.map((demo) => (
                <button
                  key={demo.id}
                  type="button"
                  onClick={() => setActiveTab(demo.id)}
                  className={`rounded-full px-3 py-2 text-sm transition ${activeTab === demo.id ? "bg-violet-500 text-white" : "border border-white/10 bg-slate-950 text-slate-300"}`}
                >
                  {demo.title}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/80 p-5">
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
                <span>{activeDemo.category}</span>
                <span>{status}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {activeDemo.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {activeDemo.description}
              </p>

              {activeTab === "dynamic-ui" ? (
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900 p-4">
                    <span className="text-sm text-slate-300">Counter</span>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setCounter((value) => value - 1)}
                        className="rounded-lg border border-white/10 bg-slate-800 px-3 py-1.5 text-white"
                      >
                        -
                      </button>
                      <span className="min-w-12 text-center text-xl font-semibold text-white">
                        {counter}
                      </span>
                      <button
                        type="button"
                        onClick={() => setCounter((value) => value + 1)}
                        className="rounded-lg border border-white/10 bg-slate-800 px-3 py-1.5 text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span>Activity</span>
                      <span className="text-cyan-300">Active</span>
                    </div>
                    <div className="mt-3 h-2.5 rounded-full bg-white/5">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                    </div>
                  </div>
                </div>
              ) : null}

              {activeTab === "api-interaction" ? (
                <div className="mt-6 space-y-4">
                  <button
                    type="button"
                    onClick={handleApiInteraction}
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-medium text-cyan-100"
                  >
                    <RefreshCw className="h-4 w-4" /> Run request
                  </button>
                  <div className="rounded-2xl border border-white/10 bg-slate-900 p-4 text-sm text-slate-300">
                    <div className="flex items-center justify-between">
                      <span>Request</span>
                      <span className="text-cyan-300">{status}</span>
                    </div>
                    <div className="mt-4 space-y-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                      <div>Request → Loading → Response → Rendered Data</div>
                    </div>
                  </div>
                </div>
              ) : null}

              {activeTab === "search-filter" ? (
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {demoData.map((demo) => (
                      <button
                        key={demo.id}
                        type="button"
                        className="rounded-full border border-white/10 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-300"
                      >
                        {demo.title}
                      </button>
                    ))}
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {demoData.slice(0, 4).map((demo) => (
                      <div
                        key={demo.id}
                        className="rounded-2xl border border-white/10 bg-slate-900 p-4"
                      >
                        <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                          {demo.subtitle}
                        </div>
                        <div className="mt-3 text-3xl font-semibold text-white">
                          {demo.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {activeTab === "form-validation" ? (
                <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-4">
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-white outline-none"
                    />
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-4 py-2 text-sm font-medium text-white"
                    >
                      Validate form <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-5">
            <div className="text-xs uppercase tracking-[0.24em] text-violet-200">
              JavaScript capabilities
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Interactive Interfaces",
                "API Integration",
                "Dynamic Applications",
                "Form Experiences",
                "Responsive Interactions",
                "Performance-Conscious Applications",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
