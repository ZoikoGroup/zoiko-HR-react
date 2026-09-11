import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const SCENARIOS = [
  { number: "01", title: "Entering a new country", description: "Add a new organizational context without building another HR silo.", note: "Extend the entity and location model, apply approved local configuration and preserve group standards." },
  { number: "02", title: "Creating another legal entity", description: "Separate ownership, access and reporting while maintaining group structure.", note: "Entity-level configuration and scoped operations." },
  { number: "04", title: "Scaling a distributed workforce", description: "Give remote and distributed teams appropriate employee and manager experiences across locations.", note: "Context-aware workflows, permissions and accessible self-service." },
  { number: "05", title: "Centralizing shared services", description: "Create common processes with local routes or exceptions where necessary.", note: "Global templates with governed variants and consolidated operational visibility." },
];

export function ExpansionScenariosSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Expansion scenarios
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Designed for more than one kind of international growth.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.3fr_1fr] lg:items-stretch">
          <div className="grid gap-4 sm:grid-cols-2">
            {SCENARIOS.map((scenario, i) => (
              <Reveal key={scenario.number} delay={0.06 + i * 0.06}>
                <div className="h-full rounded-2xl bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <span className="inline-flex rounded-md bg-primary-light px-2 py-0.5 text-xs font-semibold text-primary">
                    {scenario.number}
                  </span>
                  <p className="mt-3 font-semibold text-ink">{scenario.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{scenario.description}</p>
                  <p className="mt-3 border-t border-slate-200 pt-3 text-xs leading-relaxed text-ink/40">
                    {scenario.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} y={30} className="flex">
            <PlaceholderImage
              src="/images/global-expansion/expansion-scenarios.webp"
              alt="Colleagues reviewing information together on a tablet"
              label="More than one kind of growth"
              className="h-full min-h-[280px] w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
