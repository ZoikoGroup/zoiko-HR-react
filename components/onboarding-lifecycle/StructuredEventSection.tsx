import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function StructuredEventSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Every event is a structured object — not a checklist.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Identity, timing, ownership, plan, risk and audit attach to a
              single lifecycle event so context is never lost.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <PlaceholderImage
            src="/images/onboarding-lifecycle/structured-event.png"
            alt="Woman presenting to colleagues in a bright office"
            label="A single structured event"
            fit="contain"
            className="mt-8 w-full rounded-2xl shadow-xl shadow-slate-900/10"
          />
        </Reveal>
      </Container>
    </section>
  );
}
