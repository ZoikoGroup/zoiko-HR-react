import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function RelationshipMeaningSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            What a Zoiko HR partner relationship means.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink/60">
            A partner relationship at Zoiko HR describes an approved connection
            — not automatic certification, exclusive endorsement, or service
            warranty. Each public record includes a relationship type, verified
            capabilities, and a review date.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0.14}>
            <div className="h-full rounded-2xl border border-black/10 border-t-2 bg-white p-7">
              <p className="font-heading text-base font-bold text-ink">
                Clear Relationship Labels
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                Every partner record shows the exact approved relationship type.
                Labels come from the Partner Relationship Registry, not from
                marketing proximity.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="sm:col-span-2">
            <PlaceholderImage
              src="/images/partners/relationship-meaning.png"
              alt="Two people shaking hands in an office lounge"
              label="Partner relationships"
              className="h-full min-h-56 w-full rounded-2xl border border-black/10"
            />
          </Reveal>

          <Reveal delay={0.26}>
            <div className="h-full rounded-2xl border border-black/10 border-t-2 bg-white p-7">
              <p className="font-heading text-base font-bold text-ink">
                Third-Party Responsibility
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                Third-party services are subject to the partner&apos;s own
                terms, security practices, and delivery commitments unless an
                approved agreement explicitly states otherwise.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
