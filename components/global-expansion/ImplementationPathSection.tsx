import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const STEPS = [
  { label: "Model the organization", description: "Define group, legal entities, locations, ownership and implementation scope.", note: "Visual organization model + scope checklist." },
  { label: "Map source data", description: "Identify source systems or files, field mapping, duplicates, quality issues and retention decisions.", note: "Migration mapping preview. No one-click migration claim." },
  { label: "Configure global + local rules", description: "Set common defaults and deliberate entity or location variants.", note: "Configuration inheritance preview." },
  { label: "Validate access & workflows", description: "Test permissions, routing, approvals, employee and manager experiences and reports.", note: "Role-based acceptance checklist." },
  { label: "Roll out in controlled waves", description: "Pilot or stage launch by entity or location where appropriate; monitor readiness and exceptions.", note: "Readiness dashboard and rollout timeline concept." },
];

export function ImplementationPathSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-stretch">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Implementation &amp; migration
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Expand on a controlled implementation path.
              </h2>
            </Reveal>

            <div className="relative mt-8">
              <div aria-hidden className="absolute left-4 top-4 bottom-4 w-px bg-white/10" />
              {STEPS.map((step, i) => (
                <Reveal key={step.label} delay={0.04 + i * 0.05}>
                  <div className="flex gap-4 py-3.5 first:pt-0">
                    <span className="relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 border-primary bg-ink text-xs font-semibold text-primary">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{step.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/60">{step.description}</p>
                      <p className="mt-1 text-xs text-white/35">{step.note}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2} y={30} className="flex">
            <PlaceholderImage
              src="/images/global-expansion/implementation-path.png"
              alt="A team reviewing an implementation plan together at a table with laptops and tablets"
              label="A controlled implementation path"
              className="h-full min-h-[320px] w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
