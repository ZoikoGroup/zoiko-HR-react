import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

export function VariantsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Local and translated content stays linked to its source."
          className="max-w-[700px]"
        >
          A variant is a derivative, never a detached copy — a source change
          flags every dependent variant for review.
        </SectionHeading>

        <Reveal delay={0.12}>
          <PlaceholderImage
            src="/images/documents-policies/variants.webp"
            alt="Two colleagues working together at a laptop"
            label="Linked variants"
            className="mt-10 aspect-[16/9] w-full rounded-xl border border-slate-200 bg-white sm:aspect-[21/9] lg:aspect-[1240/320]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
