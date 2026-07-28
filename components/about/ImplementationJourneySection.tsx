import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const STEPS = [
  {
    kind: "stage",
    number: 1,
    title: "Discovery",
    description:
      "Organization, entities, jurisdictions, roles, users, systems, data, workflows, priorities, risks, and success measures.",
  },
  {
    kind: "note",
    number: 2,
    note: "Configuration record and customer approval.",
  },
  {
    kind: "stage",
    number: 3,
    title: "Data",
    description:
      "Mapping, cleansing, validation, import, reconciliation, exception handling, and retention decisions.",
  },
  {
    kind: "note",
    number: 4,
    note: "Integration test and security approval.",
  },
  {
    kind: "stage",
    number: 5,
    title: "Validation",
    description:
      "Permissions, workflows, data, reports, integrations, notifications, accessibility, localization, and failure states.",
  },
  {
    kind: "note",
    number: 6,
    note: "Launch authorization and operational handover.",
  },
  {
    kind: "stage",
    number: 7,
    title: "Adoption",
    description:
      "Usage, process completion, support trends, configuration effectiveness, and product updates and improvement opportunities.",
  },
] as const;

const SUPPORT_COLUMNS = [
  {
    title: "Help Center",
    description: "Common product guidance and troubleshooting.",
  },
  {
    title: "Documentation",
    description: "Administrator, employee, manager, and integration guidance.",
  },
  {
    title: "Product Updates",
    description: "Approved release notes, improvements, and customer actions.",
  },
  {
    title: "Service Status",
    description: "Current and historical service availability and notices.",
  },
  {
    title: "Customer Support",
    description: "Contracted support route and case handling.",
  },
];

export function ImplementationJourneySection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              How customers work with us
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              A controlled path from evaluation to long-term adoption.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Zoiko HR implementation is structured around the
              organization&apos;s workforce model, jurisdictions, data,
              roles, priority processes, integrations, and governance
              requirements.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-12 max-w-3xl">
          <div
            aria-hidden
            className="absolute left-[15px] top-2 bottom-2 w-px bg-slate-200"
          />
          <div className="space-y-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.05}>
                {step.kind === "stage" ? (
                  <div className="relative flex gap-6 pl-0">
                    <span className="relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 border-primary bg-white text-sm font-semibold text-primary">
                      {step.number}
                    </span>
                    <div>
                      <p className="font-semibold text-ink">{step.title}</p>
                      <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink/60">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="relative flex items-center gap-6">
                    <span className="relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 border-slate-200 bg-white text-sm font-semibold text-ink/40">
                      {step.number}
                    </span>
                    <p className="text-sm font-medium text-emerald-600">
                      {step.note}
                    </p>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-slate-200 pt-10 sm:grid-cols-3 lg:grid-cols-5">
          {SUPPORT_COLUMNS.map((col, i) => (
            <Reveal key={col.title} delay={i * 0.06}>
              <p className="font-semibold text-ink">{col.title}</p>
              <p className="mt-1.5 text-sm text-ink/60">{col.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <Link
            href="/resources/implementation-guide"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Explore Implementation
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
