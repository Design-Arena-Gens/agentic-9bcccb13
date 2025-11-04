import { discoveryHighlights } from "@/data/mock";
import { DiscoveryCard } from "./discovery-card";
import { SectionHeading } from "./section-heading";

export function DiscoverySection() {
  return (
    <section className="flex flex-col gap-4 px-4">
      <SectionHeading
        eyebrow="Featured tonight"
        title="Discovery spotlight"
        actionLabel="View all"
      />
      <div className="no-scrollbar flex gap-4 overflow-x-auto pb-1">
        {discoveryHighlights.map((experience) => (
          <DiscoveryCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}
