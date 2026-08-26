import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function ReportingVisibilitySection() {
  return (
    <section className="bg-slate-100 py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-sky-950">
              Administrative visibility, never financial consolidation.
            </h2>
            <p className="mt-3.5 leading-6 text-slate-600">
              Every cross-entity metric names its included and excluded
              entities, aggregation rule, freshness and owner.
            </p>
            <Link
              href="/reporting"
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              View reporting proof
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>

          <Reveal delay={0.12} y={30}>
            <PlaceholderImage
              src="/images/multi-entity-enterprises/reporting-visibility.png"
              alt="Two people reviewing a report together on a laptop"
              label="Cross-entity reporting"
              className="h-60 w-full rounded-xl border border-slate-200 bg-white"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
