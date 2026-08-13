import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const STEPS = [
  "Discover",
  "Assess",
  "Design",
  "Prepare",
  "Configure",
  "Test",
  "Accept",
  "Launch/stabilize",
  "Operate/improve",
];

export function IntegrationsImplementationSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Implementation & acceptance
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Discovery through operational handover.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Timeline, effort, and outcomes vary by scope, contract,
              readiness, and jurisdiction.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-stretch">
          <div className="flex flex-col divide-y divide-white/10 lg:flex-1">
            {STEPS.map((step, i) => (
              <Reveal key={step} delay={i * 0.04}>
                <div className="flex items-center gap-4 py-3.5">
                  <span className="font-serif text-sm italic text-primary/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold">{step}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} y={30} className="flex lg:flex-1">
            <PlaceholderImage
              src="/images/integrations/implementation.png"
              alt="Two colleagues shaking hands in front of a city skyline"
              label="Discovery to handover"
              className="h-full min-h-[280px] w-full rounded-2xl shadow-xl shadow-black/30"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
