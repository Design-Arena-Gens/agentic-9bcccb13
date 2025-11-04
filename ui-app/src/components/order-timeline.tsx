import { liveOrder } from "@/data/mock";
import { SectionHeading } from "./section-heading";

export function OrderTimeline() {
  return (
    <section className="flex flex-col gap-4 px-4 pb-24">
      <SectionHeading
        eyebrow="Live request"
        title="Follow the flow"
        actionLabel="View history"
      />
      <div className="rounded-3xl bg-surface p-4 shadow-[0_20px_48px_color-mix(in_srgb,_var(--token-primary)_12%,_black_74%)]">
        <header className="mb-4 flex items-center justify-between text-sm text-neutral">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wide text-neutral/60">
              Chef Rivera Omakase
            </span>
            <span className="font-display text-xl">Tonight • 19:30</span>
          </div>
          <button className="rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-background">
            Share status
          </button>
        </header>
        <ol className="relative flex flex-col gap-4">
          {liveOrder.map((checkpoint, index) => {
            const isLast = index === liveOrder.length - 1;
            const stateColor =
              checkpoint.status === "done"
                ? "bg-primary"
                : checkpoint.status === "active"
                ? "bg-secondary"
                : "bg-neutral/30";

            return (
              <li key={checkpoint.id} className="flex gap-3">
                <div className="relative flex flex-col items-center">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-background ${stateColor}`}
                  >
                    {index + 1}
                  </span>
                  {!isLast && (
                    <span className="mt-1 h-full w-px bg-neutral/20" aria-hidden />
                  )}
                </div>
                <div className="flex-1 rounded-2xl bg-background/60 p-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-base text-neutral">
                      {checkpoint.title}
                    </h3>
                    {checkpoint.time && (
                      <span className="text-xs font-semibold text-neutral/60">
                        {checkpoint.time}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-neutral/70">
                    {checkpoint.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
