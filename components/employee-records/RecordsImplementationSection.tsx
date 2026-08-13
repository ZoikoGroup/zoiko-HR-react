import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const STEPS = [
  { label: "Discover", description: "Field, source, and ownership inventory." },
  { label: "Map", description: "Authoritative source and mapping decisions." },
  { label: "Validate", description: "Format, chronology, and permission checks." },
  { label: "Migrate", description: "Controlled import with error handling." },
  { label: "Accept", description: "Role, data, and workflow acceptance evidence." },
  { label: "Adopt", description: "Training, support, and ongoing data quality." },
];

export function RecordsImplementationSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Implementation & record readiness
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              A controlled path to trustworthy records.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Discovery, mapping, validation, migration, acceptance, and
              adoption vary by contract, complexity, readiness, and
              jurisdiction.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.label} delay={i * 0.06}>
              <div className="border-t-2 border-primary pt-4">
                <p className="font-semibold text-ink">{step.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <Link
            href="/resources/implementation-guide"
            className="group mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            View the Implementation Guide
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
