import { curatedCollections } from "@/data/mock";
import { SectionHeading } from "./section-heading";

export function CollectionGrid() {
  return (
    <section className="flex flex-col gap-4 px-4">
      <SectionHeading
        eyebrow="Curated by Flare"
        title="Collections to book"
        actionLabel="See more"
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {curatedCollections.map((collection) => (
          <article
            key={collection.id}
            className="rounded-3xl bg-surface p-4 shadow-[0_18px_42px_color-mix(in_srgb,_var(--token-primary)_10%,_black_78%)]"
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-2">
                <span className="rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {collection.items} spots
                </span>
                <h3 className="font-display text-xl text-neutral">
                  {collection.title}
                </h3>
              </div>
              <button className="rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-background">
                Jump in
              </button>
            </div>
            <p className="mt-3 text-sm text-neutral/70">{collection.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
