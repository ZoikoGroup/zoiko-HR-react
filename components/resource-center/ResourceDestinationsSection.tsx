import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const DESTINATIONS = [
  {
    number: "01",
    title: "Product Tour",
    body: "No-signup self-guided platform tour.",
    audience: "For: All evaluators",
    action: "Take the Tour →",
    href: "/product-tour",
  },
  {
    number: "02",
    title: "HR Guides",
    body: "Practical HR operations and platform guidance.",
    audience: "For: HR teams, Admins",
    action: "Open HR Guides →",
    href: "/hr-guides",
  },
  {
    number: "03",
    title: "Implementation Guide",
    body: "Discovery, configuration, data, integration, validation and launch.",
    audience: "For: Implementation teams",
    action: "Open Guide →",
    href: "/implementation-guide",
  },
  {
    number: "04",
    title: "Compare Zoiko HR",
    body: "Factual, dated and source-governed comparison pages.",
    audience: "For: Procurement, Legal",
    action: "Compare →",
    href: "/compare",
  },
];

export function ResourceDestinationsSection() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Resource Destinations
          </span>
          <h2 className="mt-3 max-w-[480px] font-heading text-3xl font-bold leading-10">
            Four resources, in sequence — choose where to go next.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[repeat(2,minmax(0,1fr))_416px]">
          {DESTINATIONS.map((destination, i) => (
            <Reveal
              key={destination.number}
              delay={0.06 + i * 0.05}
              className="h-full"
            >
              <Link
                href={destination.href}
                className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900 px-7 pb-6 pt-7 transition-colors hover:border-white/25"
              >
                <p className="font-heading text-4xl font-black leading-9 text-primary/25">
                  {destination.number}
                </p>
                <p className="mt-4 font-heading font-bold text-white">
                  {destination.title}
                </p>
                <p className="mt-2 flex-1 text-xs leading-5 text-slate-400">
                  {destination.body}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-xs leading-4 text-slate-500">
                    {destination.audience}
                  </span>
                  <span className="text-xs font-semibold leading-4 text-indigo-400">
                    {destination.action}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={0.2} className="h-full lg:col-start-3 lg:row-start-1 lg:row-span-2">
            <PlaceholderImage
              src="/images/resource-center/resource-destinations.png"
              alt="Colleagues working together at a shared desk"
              label="Resource destinations"
              className="h-full min-h-72 w-full rounded-2xl border border-white/10 bg-slate-900"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
