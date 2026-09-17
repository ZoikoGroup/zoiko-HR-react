import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

type Route = { tag: string; title: string; body: string; href: string };

const LEFT: Route[] = [
  {
    tag: "Product",
    title: "Platform Overview",
    body: "Authoritative high-level product scope, capability boundaries, and evaluation model.",
    href: "/platform",
  },
  {
    tag: "Commercial",
    title: "Pricing",
    body: "Commercial evidence: published model, plan qualifiers, and entitlement scope.",
    href: "/pricing",
  },
];

/**
 * The design labels these /trust and /implementation; the site's real routes
 * are used instead so the shown path matches where the card goes.
 */
const RIGHT: Route[] = [
  {
    tag: "Trust",
    title: "Trust Center",
    body: "Security controls, privacy routes, assurance evidence, and AI governance documentation.",
    href: "/trust-center",
  },
  {
    tag: "Implementation",
    title: "Implementation Guide",
    body: "Discovery, migration, configuration, testing, training, launch, and support responsibilities.",
    href: "/Implementation-guide",
  },
];

function RouteCard({ route }: { route: Route }) {
  return (
    <Link
      href={route.href}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-primary/60"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-primary/25 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-indigo-300">
          {route.tag}
        </span>
        <span aria-hidden className="text-slate-500 transition-colors group-hover:text-white">
          →
        </span>
      </div>
      <h3 className="mt-3 text-base font-semibold leading-6 text-white">{route.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">{route.body}</p>
      <p className="mt-3 text-xs leading-4 text-slate-500">{route.href}</p>
    </Link>
  );
}

export function AuthorityRoutesSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container>
        <SectionHeading tone="dark" title="Compare product scope with the authority visible.">
          Zoiko HR comparison claims point to these canonical authority routes.
          When a source changes, the comparison record is updated or moved to Under
          review.
        </SectionHeading>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,389px)_minmax(0,1fr)]">
          <div className="grid gap-4">
            {LEFT.map((route, i) => (
              <Reveal key={route.title} delay={i * 0.06}>
                <RouteCard route={route} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="order-last md:col-span-2 xl:order-none xl:col-span-1 xl:h-full">
            <PlaceholderImage
              src="/images/compare-zoikohr/authority-routes.png"
              alt="A smiling adviser in conversation across a table"
              label="Adviser in conversation"
              loading="lazy"
              className="aspect-video w-full rounded-2xl xl:aspect-auto xl:h-full"
            />
          </Reveal>

          <div className="grid gap-4">
            {RIGHT.map((route, i) => (
              <Reveal key={route.title} delay={i * 0.06}>
                <RouteCard route={route} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
