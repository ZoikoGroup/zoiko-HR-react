import { Container, Reveal } from "@/components/ui";

const STEPS = [
  { label: "Global foundation", description: "Common record model, core lifecycle structure, security baseline and shared operating conventions.", tag: "Global settings / organization model" },
  { label: "Entity & location structure", description: "Make legal entities, business units and operating locations explicit rather than implied in spreadsheets.", tag: "Entity directory / organization tree" },
  { label: "Controlled local configuration", description: "Apply supported policy, workflow, calendar, terminology or approval differences deliberately.", tag: "Inherited default + approved override" },
  { label: "Role-aware execution", description: "Route work to the correct employee, manager, HR team or approver.", tag: "Task / request / approval queue" },
  { label: "Local + group visibility", description: "Provide relevant operational views locally and consolidated insight at group level, within permissions.", tag: "Entity dashboard / group dashboard" },
];

export function OperatingModelStepsSection() {
  return (
    <section id="operating-model" className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Global HR operating model
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              One governed foundation. Multiple controlled contexts.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Inherited configuration must be visually distinguishable
              from an override. Every layer is labeled in words, not only
              by color.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-10">
          <div aria-hidden className="absolute left-4 top-4 bottom-4 w-px bg-white/10" />
          {STEPS.map((step, i) => (
            <Reveal key={step.label} delay={0.04 + i * 0.05}>
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 first:pt-0">
                <div className="flex gap-4">
                  <span className="relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{step.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">{step.description}</p>
                  </div>
                </div>
                <span className="ml-12 flex-none rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50 sm:ml-0">
                  {step.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
