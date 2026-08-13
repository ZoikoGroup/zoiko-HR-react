import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function DocumentsGovernedSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Documents as governed records, not attachments.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Type, version, owner, effective date, acknowledgment,
              retention, access, and integrity travel with every document.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <PlaceholderImage
            src="/images/employee-records/documents-governed.png"
            alt="Team collaborating at a whiteboard with sticky notes"
            label="Governed, not just attached"
            fit="contain"
            className="mt-8 w-full rounded-2xl shadow-xl shadow-slate-900/10"
          />
        </Reveal>
      </Container>
    </section>
  );
}
