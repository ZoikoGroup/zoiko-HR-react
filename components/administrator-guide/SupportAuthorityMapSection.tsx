import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const DESTINATIONS = [
  {
    title: "Help Center",
    description: "Support discovery and issue-oriented routing.",
    linkLabel: "Open Help Center",
    href: "/help-center",
  },
  {
    title: "Documentation",
    description: "General product concepts, setup and workflows.",
    linkLabel: "Open Documentation",
    href: "/resources",
  },
  {
    title: "Product Updates",
    description: "Release chronology and change communication.",
    linkLabel: "View Product Updates",
    href: "/resources",
  },
  {
    title: "Service Status",
    description: "Live availability and incident state.",
    linkLabel: "View Service Status",
    href: "/help-center#service-status",
  },
];

export function SupportAuthorityMapSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Support authority map.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Each destination owns distinct volatile detail. This guide routes to
            it rather than duplicating it.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-2">
          <div className="grid gap-5 sm:grid-cols-2">
            {DESTINATIONS.map((destination, i) => (
              <Reveal key={destination.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-sm font-bold text-ink">
                    {destination.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {destination.description}
                  </p>
                  <Link
                    href={destination.href}
                    className="mt-auto pt-4 text-xs font-semibold text-primary hover:text-primary-dark"
                  >
                    {destination.linkLabel} →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.14}>
            <PlaceholderImage
              src="/images/administrator-guide/support-authority.png"
              alt="Two colleagues reviewing a tablet together"
              label="Support authority map"
              className="aspect-[16/9] w-full rounded-xl border border-slate-200 bg-slate-50 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
