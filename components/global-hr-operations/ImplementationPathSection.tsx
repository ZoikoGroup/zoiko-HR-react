import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const STAGES = [
  {
    number: "1",
    title: "Model the organization",
    description:
      "Define group, legal entities, locations, ownership and implementation scope.",
    note: "Visual organization model + scope checklist.",
  },
  {
    number: "2",
    title: "Map source data",
    description:
      "Identify source systems or files, field mapping, duplicates, quality issues and retention decisions.",
    note: "Migration mapping preview. No one-click migration claim.",
  },
  {
    number: "3",
    title: "Configure global + local rules",
    description:
      "Set common defaults and deliberate entity or location variants.",
    note: "Configuration inheritance preview.",
  },
  {
    number: "4",
    title: "Validate access & workflows",
    description:
      "Test permissions, routing, approvals, employee and manager experiences and reports.",
    note: "Role-based acceptance checklist.",
  },
  {
    number: "5",
    title: "Roll out in controlled waves",
    description:
      "Pilot or stage launch by entity or location where appropriate; monitor readiness and exceptions.",
    note: "Readiness dashboard and rollout timeline concept.",
  },
];

export function ImplementationPathSection() {
  return (
    <section className="bg-[#040d18] py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
                Implementation & Migration
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                Expand on a controlled implementation path.
              </h2>
            </Reveal>

            <div className="relative mt-12 ml-3.5 border-l border-white/10 pl-8">
              {STAGES.map((stage, i) => (
                <Reveal key={stage.number} delay={0.1 + i * 0.06}>
                  <div
                    className={`relative ${i === STAGES.length - 1 ? "" : "pb-8"}`}
                  >
                    <span className="absolute -left-[43.99px] flex size-7 items-center justify-center rounded-full border border-white/20 bg-[#0c2036] font-mono text-xs text-primary">
                      {stage.number}
                    </span>
                    <h3 className="text-sm font-semibold text-white">
                      {stage.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/55">
                      {stage.description}
                    </p>
                    <p className="mt-1.5 text-xs text-white/30">
                      {stage.note}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2} y={30}>

            <PlaceholderImage
              src="/images/global-hr-operations/implementation-path.png"
              alt="HR team validating workflows on a laptop during implementation"
              label="A controlled implementation path"
              fit="cover"
              className="aspect-[359/573] w-full rounded-xl border border-white/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
