import { Container, Reveal } from "@/components/ui";

const PILLARS = [
  {
    title: "Structured information",
    description:
      "Consistent employee, position, organization, document, and lifecycle records.",
  },
  {
    title: "Controlled operations",
    description:
      "Roles, permissions, approvals, effective dates, ownership, evidence, and auditability.",
  },
  {
    title: "Connected experiences",
    description:
      "Employee, manager, HR, reporting, integration, implementation, and support pathways.",
  },
];

export function PlatformWhatIsSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              What is Zoiko HR?
            </span>
            <p className="mt-4 text-2xl font-bold leading-snug tracking-tight text-ink sm:text-3xl">
              Zoiko HR is a global HR management platform for organizing
              employee and organizational information, coordinating
              onboarding and workforce changes, routing approvals,
              supporting authorized employee and manager access, and
              connecting people operations.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-xs text-ink/40">
              Specific capabilities depend on the approved plan, contract,
              configuration, integration, and jurisdiction.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.14 + i * 0.08}>
              <div className="border-t-2 border-primary pt-4">
                <p className="font-semibold text-ink">{pillar.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
