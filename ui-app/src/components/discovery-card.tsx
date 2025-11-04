import type { Experience } from "@/data/mock";

export function DiscoveryCard({ experience }: { experience: Experience }) {
  return (
    <article className="flex min-w-[16rem] flex-col gap-3 rounded-3xl bg-surface px-4 pb-4 pt-5 shadow-[0_20px_48px_color-mix(in_srgb,_var(--token-primary)_12%,_black_74%)]">
      <div className="relative flex h-36 items-end overflow-hidden rounded-2xl bg-gradient-to-br from-primary/18 via-primary/6 to-background/60 p-4">
        <div className="flex flex-col gap-1 text-left text-neutral">
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral/70">
            {experience.category}
          </span>
          <h3 className="font-display text-xl text-neutral">
            {experience.name}
          </h3>
          <p className="text-xs text-neutral/70">{experience.timeLabel}</p>
        </div>
        <div className="absolute right-4 top-4 flex flex-col items-end gap-1 text-right">
          <span className="rounded-full bg-background/70 px-3 py-1 text-xs font-semibold text-primary">
            {experience.priceTag}
          </span>
          <span className="rounded-full bg-background/50 px-3 py-1 text-xs text-neutral/70">
            ⭐ {experience.rating.toFixed(1)}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs text-neutral/70">
        <span>{experience.distance}</span>
        <button className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-background">
          View slots
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {experience.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-background/70 px-3 py-1 text-xs text-neutral/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
