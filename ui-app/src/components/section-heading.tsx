import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  actionLabel?: string;
  actionHref?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  actionLabel,
  actionHref = "#",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex items-end justify-between", className)}>
      <div className="flex flex-col gap-1">
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral/60">
            {eyebrow}
          </span>
        )}
        <h2 className="font-display text-2xl text-neutral">{title}</h2>
      </div>
      {actionLabel && (
        <a
          href={actionHref}
          className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary"
        >
          {actionLabel}
        </a>
      )}
    </div>
  );
}
