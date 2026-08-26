import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function ReportingVisibilitySection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Process visibility, not employee surveillance.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                Reporting is scoped to service operations, process health,
                completion, exceptions and data quality — never individual
                scoring.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <Link
                href="/product-tour"
                className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                View reporting proof
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/onboarding-lifecycle/reporting-visibility.png"
              alt="Two colleagues walking and talking in a glass corridor"
              label="Process health, not surveillance"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
