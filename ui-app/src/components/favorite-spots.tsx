import { favoriteSpots } from "@/data/mock";
import { SectionHeading } from "./section-heading";

export function FavoriteSpots() {
  return (
    <section className="flex flex-col gap-4 px-4">
      <SectionHeading
        eyebrow="Saved moments"
        title="Return to favorites"
        actionLabel="Manage"
      />
      <div className="flex flex-col gap-3">
        {favoriteSpots.map((spot) => (
          <article
            key={spot.id}
            className="rounded-3xl bg-background/70 p-4 shadow-[0_16px_38px_color-mix(in_srgb,_var(--token-primary)_8%,_black_80%)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-lg text-neutral">{spot.name}</h3>
                <p className="text-xs text-neutral/70">{spot.note}</p>
              </div>
              <button className="rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
                {spot.eta}
              </button>
            </div>
            <p className="mt-3 text-sm text-neutral/70">Mood: {spot.mood}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
