import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const STEPS = [
  {
    number: "01",
    label: "Discover",
    description:
      "Business goals, organization scope, data, systems, stakeholders, policies, privacy/security, reporting, and success criteria.",
  },
  {
    number: "02",
    label: "Design",
    description:
      "Organization model, employee-record model, roles, permissions, workflows, lifecycle events, integrations, reports, and localization.",
  },
  {
    number: "03",
    label: "Prepare data",
    description:
      "Source inventory, ownership, mapping, quality, sensitivity, effective dates, retention, and migration decisions.",
  },
  {
    number: "04",
    label: "Configure and connect",
    description:
      "Approved configuration, integrations, identity, environments, controls, notifications, and support routes.",
  },
  {
    number: "05",
    label: "Validate",
    description:
      "Role testing, data validation, workflow testing, reconciliation, privacy/security/accessibility review, and acceptance evidence.",
  },
  {
    number: "06",
    label: "Launch",
    description:
      "Controlled scope, communications, training, support, issue triage, and rollback/recovery criteria.",
  },
  {
    number: "07",
    label: "Adopt and improve",
    description:
      "Usage, service operations, data quality, workflow health, support, updates, and approved expansion.",
  },
];

export function ImplementationAdoptionSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Section 16 — Implementation & adoption
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A controlled path from discovery through adoption.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-6 max-w-2xl rounded-xl border border-amber-400/30 bg-amber-400/5 px-5 py-3.5 text-center text-sm text-amber-200">
            Scope and timing vary by contract, complexity, readiness,
            configuration, and jurisdiction.
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.label} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:bg-white/[0.08]">
                <span className="text-xs font-semibold text-primary">
                  Step {step.number}
                </span>
                <p className="mt-1.5 font-semibold">{step.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={STEPS.length * 0.05} y={30}>
            <PlaceholderImage
              src="/images/global-hr/implementation.png"
              alt="HR administrator walking a colleague through implementation steps"
              label="Guided implementation"
              fit="contain"
              className="h-full w-full rounded-2xl border border-white/10"
            />
          </Reveal>
        </div>

        <Reveal delay={0.5}>
          <div className="mt-8 text-center">
            <Link
              href="/implementation-guide"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
            >
              View the Implementation Guide
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
