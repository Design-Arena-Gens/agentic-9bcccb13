const items = [
  { id: "discover", label: "Discover", icon: "✨" },
  { id: "bookings", label: "Bookings", icon: "🗓" },
  { id: "orders", label: "Orders", icon: "📦" },
  { id: "profile", label: "You", icon: "🙂" }
];

export function ActionDock() {
  return (
    <nav className="fixed inset-x-0 bottom-4 z-50 mx-auto w-full max-w-md px-4">
      <div className="flex items-center justify-between rounded-3xl border border-neutral/10 bg-background/80 px-4 py-3 shadow-[0_24px_48px_color-mix(in_srgb,_var(--token-primary)_12%,_black_74%)] backdrop-blur">
        {items.map((item, index) => (
          <button
            key={item.id}
            className={`flex flex-1 flex-col items-center gap-1 text-xs font-semibold ${
              index === 0
                ? "text-primary"
                : "text-neutral/60 hover:text-neutral"
            }`}
          >
            <span className="text-lg" aria-hidden>
              {item.icon}
            </span>
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
