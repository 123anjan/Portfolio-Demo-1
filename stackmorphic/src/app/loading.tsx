export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-100">
      <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.24em] text-violet-200">
        <span className="h-3 w-3 animate-pulse rounded-full bg-violet-400" />
        Loading
      </div>
    </main>
  );
}
