import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const STEPS = [
  { number: "01", label: "Discover", description: "Scope organizations, populations, objects, fields, sources, owners, purposes, and sensitivity." },
  { number: "02", label: "Model", description: "Define person, employment, position, organization, and document model with identifiers and effective dates." },
  { number: "03", label: "Map", description: "Source-to-target mapping, authoritative source, transformations, exclusions, retention, and history." },
  { number: "04", label: "Cleanse", description: "Resolve duplicates, missing data, conflicts, invalid references, date overlaps, and ownership gaps." },
  { number: "05", label: "Configure", description: "Roles, permissions, workflows, validation rules, organization, documents, integrations, and notifications." },
  { number: "06", label: "Migrate", description: "Load in controlled stages, validate counts, fields, and relationships; resolve errors; retain evidence." },
  { number: "07", label: "Validate", description: "Role testing, privacy/security/accessibility checks, integrations, reports, acceptance, and controlled cutover." },
  { number: "08", label: "Adopt", description: "Training, self-service, data stewardship, issue resolution, updates, support, and approved expansion." },
];

export function CoreHrImplementationSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Section 23 — Implementation
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                A controlled path from discovery to adoption.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-white/60">
                Eight governed stages — each with owner, evidence, criteria,
                and approval before advancing. No automated readiness score
                without governed inputs.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-6 rounded-xl border border-amber-400/30 bg-amber-400/5 p-5">
                <p className="text-sm leading-relaxed text-amber-200">
                  Timing, services, migration history, data quality, support,
                  scope, and outcomes vary by contract, readiness,
                  configuration, and jurisdiction.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <Link
                href="/resources/implementation-guide"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
              >
                View Implementation Guide
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {STEPS.map((step, i) => (
              <Reveal key={step.label} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:bg-white/[0.08]">
                  <span className="text-xs font-semibold text-primary">
                    {step.number}
                  </span>
                  <p className="mt-1.5 font-semibold">{step.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/50">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
