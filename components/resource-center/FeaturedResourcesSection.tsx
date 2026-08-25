import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

/**
 * The Figma clips these four titles inside a fixed-width box, so the full
 * strings are not recoverable from the design. They are rendered here exactly
 * as far as the design shows them, pending the complete copy.
 */
const FEATURED = [
  {
    type: "Explainer",
    reviewed: "Reviewed Jul 2024",
    title: "Global org structure and legal entity conc",
    topic: "Global HR",
    href: "/global-hr-management",
  },
  {
    type: "Guide",
    reviewed: "Reviewed Aug 2024",
    title: "Approval workflow routing and escalation",
    topic: "Workflows",
    href: "/workflows-approvals",
  },
  {
    type: "FAQ",
    reviewed: "Reviewed Jun 2024",
    title: "What integration categories does Zoiko H",
    topic: "Integrations",
    href: "/integrations",
  },
  {
    type: "Guide",
    reviewed: "Reviewed Aug 2024",
    title: "Implementation discovery and stakehold",
    topic: "Implementation",
    href: "/implementation-guide",
  },
];

export function FeaturedResourcesSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-96">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Featured &amp; Recently Reviewed
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold leading-10 text-slate-900">
                Current resources — curated by task, not chronology.
              </h2>
            </div>
            <Link
              href="#search-discover"
              className="text-xs font-semibold leading-5 text-primary hover:text-primary-dark"
            >
              View all resources →
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_400px]">
          <Reveal delay={0.1} className="h-full min-w-0">
            <PlaceholderImage
              src="/images/resource-center/featured-resources.png"
              alt="Colleagues talking around a table"
              label="Featured resources"
              className="h-full min-h-64 w-full rounded-xl bg-white"
            />
          </Reveal>

          <div className="flex min-w-0 flex-col gap-4">
            {FEATURED.map((item, i) => (
              <Reveal
                key={item.title}
                delay={0.12 + i * 0.05}
                className="h-full min-w-0"
              >
                <Link
                  href={item.href}
                  className="flex h-full w-full items-center justify-between gap-3 overflow-hidden rounded-xl border border-black/10 bg-white px-5 py-4 transition-colors hover:border-primary/40"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold leading-4">
                      <span className="text-primary">{item.type}</span>
                      <span className="text-slate-400"> · {item.reviewed}</span>
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-900">
                      {item.title}
                    </p>
                    <p className="text-xs leading-4 text-slate-400">
                      {item.topic}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[9px] font-semibold leading-3 text-emerald-500">
                    Current
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
