import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function PlatformIntegrationsSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Integrations
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Connect HR information and workflows to approved business
              systems.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              For each field or event, the platform identifies which system
              creates, approves, owns, and updates the authoritative value.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <PlaceholderImage
            src="/images/platform/integrations.png"
            alt="Workflow automation dashboard next to a smiling team member"
            label="Connected to approved systems"
            fit="contain"
            className="mt-8 w-full rounded-2xl shadow-xl shadow-slate-900/10"
          />
        </Reveal>
      </Container>
    </section>
  );
}
