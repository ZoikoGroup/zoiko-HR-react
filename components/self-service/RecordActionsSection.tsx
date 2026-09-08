import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

export function RecordActionsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Every field shows exactly what you're allowed to do with it."
          className="max-w-[700px]"
        >
          Record rows pair each approved value with its source and an explicit
          action: view, direct edit, propose an update, or request a correction.
        </SectionHeading>

        <Reveal delay={0.12}>
          <PlaceholderImage
            src="/images/self-service/record-actions.webp"
            alt="Colleagues working together at a laptop"
            label="Record actions"
            className="mt-10 aspect-[16/9] w-full rounded-[10px] bg-slate-100 sm:aspect-[21/9] lg:aspect-[1239/264]"
          />
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 text-xs text-slate-500">
            A proposed update or correction never replaces the current record
            until the owning module confirms it.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
