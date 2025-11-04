import { quickFilters } from "@/data/mock";

export function SearchPanel() {
  return (
    <section className="flex flex-col gap-4 px-4">
      <div className="rounded-3xl bg-surface p-4 shadow-[0_16px_36px_color-mix(in_srgb,_var(--token-primary)_10%,_black_78%)]">
        <label className="flex items-center gap-3 rounded-2xl bg-background/60 px-4 py-3 text-sm text-neutral/70">
          <span className="text-lg text-primary" aria-hidden>
            🔍
          </span>
          <input
            placeholder="Find ramen, rooftop tastings, chefs"
            className="w-full bg-transparent text-base font-medium text-neutral placeholder:text-neutral/50 focus:outline-none"
            type="search"
          />
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            24 open
          </span>
        </label>
        <div className="mt-3 flex items-center justify-between text-xs text-neutral/60">
          <button className="flex items-center gap-2 text-neutral/70">
            <span aria-hidden>📍</span>
            <span>Near me</span>
          </button>
          <button className="flex items-center gap-2 text-neutral/70">
            <span aria-hidden>🗓</span>
            <span>This week</span>
          </button>
          <button className="flex items-center gap-2 text-neutral/70">
            <span aria-hidden>⚡️</span>
            <span>Instant book</span>
          </button>
        </div>
      </div>
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4">
        {quickFilters.map((filter) => (
          <button
            key={filter}
            className="whitespace-nowrap rounded-full border border-neutral/15 bg-background/70 px-4 py-2 text-sm font-medium text-neutral shadow-[0_10px_24px_color-mix(in_srgb,_var(--token-primary)_8%,_black_82%)]"
          >
            {filter}
          </button>
        ))}
        <button className="flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-semibold text-background shadow-[0_12px_32px_color-mix(in_srgb,_var(--token-primary)_30%,_black_65%)]">
          Refine
          <span aria-hidden>⌘K</span>
        </button>
      </div>
    </section>
  );
}
