import { ActionDock } from "@/components/action-dock";
import { BrandHeader } from "@/components/brand-header";
import { CollectionGrid } from "@/components/collection-grid";
import { DiscoverySection } from "@/components/discovery-section";
import { FavoriteSpots } from "@/components/favorite-spots";
import { OrderTimeline } from "@/components/order-timeline";
import { SearchPanel } from "@/components/search-panel";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 pb-32 pt-2">
      <div className="mx-auto w-full max-w-xl rounded-[40px] border border-neutral/8 bg-background/70 pb-24 shadow-[0_40px_80px_color-mix(in_srgb,_var(--token-primary)_10%,_black_80%)] backdrop-blur sm:max-w-4xl">
        <BrandHeader />
        <SearchPanel />
        <DiscoverySection />
        <CollectionGrid />
        <FavoriteSpots />
        <OrderTimeline />
      </div>
      <ActionDock />
    </main>
  );
}
