import Link from "next/link";
import { siteConfig, navItems } from "@/lib/constants";

const serviceLinks = [
  "Business Websites",
  "Web Applications",
  "E-Commerce",
  "Landing Pages",
  "Website Redesign",
  "Maintenance",
];

const techLinks = [
  "JavaScript",
  "React",
  "Python",
  "Django",
  "REST APIs",
  "SQL",
  "MongoDB",
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-violet-500/30">
              S
            </div>
            <span className="text-lg font-semibold text-white">
              Stackmorphic
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
            Full-stack web development solutions for modern businesses.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {serviceLinks.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Technology
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {techLinks.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 mt-4 border-t border-white/10 pt-8 text-sm text-slate-400">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p>{siteConfig.phone}</p>
              <p className="mt-2">{siteConfig.address}</p>
            </div>
            <p>© 2026 Stackmorphic. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
