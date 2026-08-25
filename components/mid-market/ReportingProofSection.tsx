import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function ReportingProofSection() {
  return (
    <section className="bg-slate-100 py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="font-heading text-3xl font-extrabold text-sky-950">
                Reporting built on defined data, not decorative charts.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-4 leading-6 text-slate-600">
                Every number traces to a definition, dataset, filter and
                owner. Exports are governed data releases, not just files.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <Link
                href="/reporting-insights"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                View reporting proof
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.12} y={36}>
            <PlaceholderImage
              src="/images/mid-market-organizations/reporting.png"
              alt="Executives reviewing reports around a boardroom table"
              label="Reporting built on defined data"
              fit="contain"
              className="w-full rounded-xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
