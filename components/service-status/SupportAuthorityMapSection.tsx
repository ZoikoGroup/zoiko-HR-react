import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const DESTINATIONS = [
  {
    label: "Help Center",
    description: "Support discovery and issue-oriented routing.",
    linkLabel: "Open Help Center",
    href: "/help-center",
  },
  {
    label: "Documentation",
    description: "General product concepts, setup and workflows.",
    linkLabel: "Open Documentation",
    href: "/documentation",
  },
  {
    label: "Product Updates",
    description: "Release chronology and change communication.",
    linkLabel: "View Product Updates",
    href: "/product-updates",
  },
  {
    label: "Service Status",
    description: "Live operational state and incident history.",
    current: true,
  },
];

export function SupportAuthorityMapSection() {
  return (
    <section className="bg-slate-100 py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Support authority map.
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
            Service Status owns live operational state and incident history —
            each other destination owns distinct volatile detail.
          </p>
        </Reveal>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {DESTINATIONS.map((destination, i) => (
              <Reveal key={destination.label} delay={Math.min(i * 0.06, 0.3)}>
                <div
                  className={`flex h-full flex-col rounded-xl border bg-white p-5 ${
                    destination.current
                      ? "border-teal-600"
                      : "border-slate-200"
                  }`}
                >
                  <p className="text-sm font-bold text-ink">
                    {destination.label}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {destination.description}
                  </p>
                  {destination.current ? (
                    <span className="mt-3 inline-flex self-start rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-teal-600">
                      Current page
                    </span>
                  ) : (
                    <Link
                      href={destination.href!}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark"
                    >
                      {destination.linkLabel} <span aria-hidden>→</span>
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.14}>
            <PlaceholderImage
              src="/images/service-status/authority-map.png"
              alt="A shop owner reviewing task updates on a tablet"
              label="Reviewing updates on a tablet"
              className="w-full rounded-xl border border-slate-200 bg-white"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
