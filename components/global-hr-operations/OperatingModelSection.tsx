import { Container, Reveal } from "@/components/ui";

const LAYERS = [
  {
    number: "1",
    title: "Global foundation",
    description:
      "Common record model, core lifecycle structure, security baseline and shared operating conventions.",
    tag: "Global settings / organization model",
  },
  {
    number: "2",
    title: "Entity & location structure",
    description:
      "Make legal entities, business units and operating locations explicit rather than implied in spreadsheets.",
    tag: "Entity directory / organization tree",
  },
  {
    number: "3",
    title: "Controlled local configuration",
    description:
      "Apply supported policy, workflow, calendar, terminology or approval differences deliberately.",
    tag: "Inherited default + approved override",
  },
  {
    number: "4",
    title: "Role-aware execution",
    description:
      "Route work to the correct employee, manager, HR team or approver.",
    tag: "Task / request / approval queue",
  },
  {
    number: "5",
    title: "Local + group visibility",
    description:
      "Provide relevant operational views locally and consolidated insight at group level, within permissions.",
    tag: "Entity dashboard / group dashboard",
  },
];

export function OperatingModelSection() {
  return (
    <section id="operating-model" className="bg-[#040d18] py-24">
      <Container>
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
            Global HR Operating Model
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            One governed foundation. Multiple controlled contexts.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/50">
            Inherited configuration must be visually distinguishable from an
            override. Every layer is labeled in words, not only by color.
          </p>
        </Reveal>

        <div className="relative mt-16 ml-4 border-l border-white/10 pl-8">
          {LAYERS.map((layer, i) => (
            <Reveal key={layer.number} delay={0.1 + i * 0.06}>
              <div
                className={`relative ${i === LAYERS.length - 1 ? "" : "pb-10"}`}
              >
                <span className="absolute -left-[47.99px] flex size-8 items-center justify-center rounded-full bg-primary font-mono text-xs text-white">
                  {layer.number}
                </span>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-extrabold text-white">
                      {layer.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/60">
                      {layer.description}
                    </p>
                  </div>
                  <span className="inline-flex flex-none items-center whitespace-nowrap rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-medium text-white/40">
                    {layer.tag}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
