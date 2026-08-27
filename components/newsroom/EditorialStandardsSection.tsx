import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function EditorialStandardsSection() {
  return (
    <section className="bg-[#F5F8FF] py-16 sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Verification, corrections &amp; editorial standards.
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-2 text-ink/50">
            Content governance and editorial policy for all published Newsroom
            items.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0.12}>
            <div className="h-full rounded-2xl border border-black/10 bg-white p-6">
              <p className="font-heading text-base font-bold text-ink">
                Official source
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                This Newsroom publishes Zoiko HR-authored and approved company
                news. Content is source-governed through the News Item Registry
                with required approval, publication state, and rights checks.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18} className="sm:col-span-2">
            <PlaceholderImage
              src="/images/newsroom/editorial-standards.png"
              alt="Colleagues reviewing and marking up printed documents"
              label="Editorial standards"
              className="h-full min-h-56 w-full rounded-2xl border border-black/10"
            />
          </Reveal>

          <Reveal delay={0.24}>
            <div className="h-full rounded-2xl border border-black/10 bg-white p-6">
              <p className="font-heading text-base font-bold text-ink">
                External attribution
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Third-party coverage is labeled &apos;External coverage&apos;
                and attributed to the outlet. Zoiko HR does not copy article
                body or claim authorship of third-party reporting.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <p className="mt-6 text-center text-sm italic leading-relaxed text-ink/40">
            No corrections are currently published. Correction notices appear on
            affected articles when material changes occur.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
