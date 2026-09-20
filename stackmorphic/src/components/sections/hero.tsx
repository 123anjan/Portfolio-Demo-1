import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Database,
  Globe2,
  MessageCircle,
  MonitorSmartphone,
  ServerCog,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";

const techPills = [
  "Business websites",
  "Custom applications",
  "Modern frontend",
  "Scalable architecture",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.2),_transparent_30%),radial-gradient(circle_at_right,_rgba(34,211,238,0.15),_transparent_30%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-violet-200">
            FULL-STACK WEB DEVELOPMENT STUDIO
          </p>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            We Build Digital Experiences That Move Businesses Forward.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Modern websites and web solutions designed to help your business
            stand out, connect with customers, and grow online.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:translate-y-[-1px]"
            >
              Start Your Project <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-slate-900/70 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:text-cyan-100"
            >
              <MessageCircle className="h-4 w-4" /> Talk on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Responsive • Performance-Focused • Business-Driven
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {techPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="relative ml-auto w-full max-w-xl">
          <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-3 shadow-[0_30px_80px_rgba(17,24,39,0.8)] backdrop-blur-xl">
            <div className="rounded-[20px] border border-white/10 bg-slate-950 p-4">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-slate-900 p-4">
                  <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-violet-200">
                    <span>Dashboard</span>
                    <span>Live</span>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-xl bg-white/5 p-3">
                      <div className="mb-2 h-2.5 w-20 rounded-full bg-cyan-400/80" />
                      <div className="h-16 rounded-lg bg-gradient-to-r from-violet-500/30 via-cyan-400/10 to-slate-800" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {["12k", "96%", "24 ms"].map((item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-white/10 bg-slate-900/80 p-2 text-center"
                        >
                          <div className="text-lg font-semibold text-white">
                            {item}
                          </div>
                          <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-400">
                            Metric
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                    <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                      <Code2 className="h-3.5 w-3.5 text-cyan-300" /> API
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 rounded-full bg-white/10">
                        <div className="h-2 w-3/4 rounded-full bg-cyan-400" />
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div className="h-2 w-2/3 rounded-full bg-violet-400" />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                    <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                      <Database className="h-3.5 w-3.5 text-violet-300" /> Data
                    </div>
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="flex justify-between">
                        <span>Users</span>
                        <span>1.4k</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Traffic</span>
                        <span>+28%</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-4">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-200">
                      <ServerCog className="h-3.5 w-3.5" /> Stack
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                      <span className="rounded-full border border-white/10 bg-slate-900 px-2 py-1">
                        React
                      </span>
                      <span className="rounded-full border border-white/10 bg-slate-900 px-2 py-1">
                        Django
                      </span>
                      <span className="rounded-full border border-white/10 bg-slate-900 px-2 py-1">
                        SQL
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl shadow-violet-500/20">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 p-2 text-white">
                <Globe2 className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Website
                </div>
                <div className="text-sm font-medium text-white">
                  Built for business growth
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-2 top-10 rounded-2xl border border-white/10 bg-slate-900/90 p-3 shadow-2xl shadow-cyan-500/20">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <MonitorSmartphone className="h-4 w-4 text-cyan-300" />
              Responsive everywhere
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
