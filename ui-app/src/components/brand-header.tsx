export function BrandHeader() {
  return (
    <header className="flex items-center justify-between px-4 pt-6 pb-4">
      <div className="flex flex-col gap-1">
        <span className="font-display text-sm uppercase tracking-[0.35em] text-neutral/60">
          Flare
        </span>
        <span className="font-display text-3xl leading-none text-primary">
          Feast
        </span>
        <p className="max-w-[18rem] text-sm text-neutral/70">
          Curated food journeys nearby, ready when you are.
        </p>
      </div>
      <button className="flex h-12 w-12 items-center justify-center rounded-full bg-surface shadow-[0_18px_48px_color-mix(in_srgb,_var(--token-primary)_12%,_black_74%)]">
        <span aria-hidden className="text-lg leading-none text-primary">
          ☰
        </span>
        <span className="sr-only">Open actions</span>
      </button>
    </header>
  );
}
