import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function SharedStructureSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Shared structure, with controlled local variation.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              A global baseline template can carry approved entity,
              location, language and professional-review overlays without
              weakening governance.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <PlaceholderImage
            src="/images/onboarding-lifecycle/shared-structure.png"
            alt="Two colleagues talking near a bookshelf"
            label="Shared structure, local variation"
            fit="contain"
            className="mt-8 w-full rounded-2xl shadow-xl shadow-slate-900/10"
          />
        </Reveal>
      </Container>
    </section>
  );
}
