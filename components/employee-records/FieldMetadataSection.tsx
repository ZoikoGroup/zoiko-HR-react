import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function FieldMetadataSection() {
  return (
    <section className="bg-[#F1F5F9] py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Every field carries source, sensitivity, and effective date.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              The record workspace pairs each value with who owns it,
              where it came from, when it took effect, and whether a
              change is pending.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <PlaceholderImage
            src="/images/employee-records/field-metadata.png"
            alt="Team planning at a whiteboard covered in sticky notes"
            label="Source, sensitivity, effective date"
            fit="contain"
            className="mt-8 w-full rounded-2xl shadow-xl shadow-slate-900/10"
          />
        </Reveal>
      </Container>
    </section>
  );
}
