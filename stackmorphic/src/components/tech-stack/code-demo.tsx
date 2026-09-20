"use client";

import { useState } from "react";

const initialCode = `const project = {
  design: "Modern",
  responsive: true,
  scalable: true
};

buildWebsite(project);`;

export function CodeDemo() {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("Output: Website build initiated");

  const handleRun = () => {
    setOutput(
      "Output: Modern website configured successfully. Responsive and scalable foundation ready.",
    );
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <button
                type="button"
                onClick={handleRun}
                className="rounded-full bg-violet-500 px-4 py-2 text-sm font-medium text-white"
              >
                Run Code
              </button>
            </div>
            <textarea
              value={code}
              onChange={(event) => setCode(event.target.value)}
              className="min-h-[260px] w-full resize-none bg-slate-950 p-5 font-mono text-sm leading-7 text-cyan-100 outline-none"
              aria-label="Simulated code demo"
            />
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 p-5">
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-200">
              Output
            </div>
            <div className="mt-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm leading-7 text-emerald-100">
              {output}
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950 p-4 text-sm leading-7 text-slate-300">
              <p>Project configuration ready for:</p>
              <ul className="mt-3 space-y-2 text-slate-200">
                <li>• responsive design</li>
                <li>• modern interaction patterns</li>
                <li>• scalable architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
