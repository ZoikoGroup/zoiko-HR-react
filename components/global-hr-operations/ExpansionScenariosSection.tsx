import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const SCENARIOS = [
  {
    number: "01",
    title: "Entering a new country",
    summary: "Add a new organizational context without building another HR silo.",
    detail:
      "Extend the entity and location model, apply approved local configuration and preserve group standards.",
  },
  {
    number: "02",
    title: "Creating another legal entity",
    summary:
      "Separate ownership, access and reporting while maintaining group structure.",
    detail: "Entity-level configuration and scoped operations.",
  },
  {
    number: "04",
    title: "Scaling a distributed workforce",
    summary:
      "Give remote and distributed teams appropriate employee and manager experiences across locations.",
    detail: "Context-aware workflows, permissions and accessible self-service.",
  },
  {
    number: "05",
    title: "Centralizing shared services",
    summary:
      "Create common processes with local routes or exceptions where necessary.",
    detail:
      "Global templates with governed variants and consolidated operational visibility.",
  },
];

export function ExpansionScenariosSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
            Expansion Scenarios
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Designed for more than one kind of international growth.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1fr_413px]">
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {SCENARIOS.map((scenario, i) => (
              <Reveal key={scenario.number} delay={0.12 + i * 0.06}>
                <div className="flex h-full flex-col rounded-xl border border-ink/10 bg-[#f8fafc] p-6">
                  <span className="w-fit rounded bg-primary/[0.08] px-2 py-1 font-mono text-xs text-primary">
                    {scenario.number}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-ink">
                    {scenario.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink/50">
                    {scenario.summary}
                  </p>
                  <p className="mt-3 border-t border-ink/[0.08] pt-3 text-xs leading-relaxed text-ink/70">
                    {scenario.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/global-hr-operations/expansion-scenarios.png"
              alt="Colleagues reviewing expansion plans together on a laptop"
              label="More than one kind of growth"
              fit="cover"
              className="aspect-[413/428] h-full w-full rounded-xl border border-ink/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
