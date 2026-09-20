import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-100">
      <div className="max-w-lg text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-200">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">
          Page not found
        </h1>
        <p className="mt-4 text-base text-slate-300">
          The page you are looking for could not be found.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
