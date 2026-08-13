import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function MultiEntityContextSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Multi-entity & global record context
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Records carry entity, location, and jurisdiction context.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Record structure alone cannot guarantee local employment,
              privacy, tax, or payroll compliance — jurisdiction status
              and configuration remain visible.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <PlaceholderImage
            src="/images/employee-records/multi-entity-context.png"
            alt="Woman presenting to a team in a meeting"
            label="Entity, location, jurisdiction"
            fit="contain"
            className="mt-8 w-full rounded-2xl shadow-xl shadow-black/30"
          />
        </Reveal>
      </Container>
    </section>
  );
}
