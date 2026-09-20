"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-100">
      <div className="max-w-lg text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-200">
          ERROR
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">
          Something went wrong
        </h1>
        <p className="mt-4 text-base text-slate-300">
          We could not complete this request right now. Please try again.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
