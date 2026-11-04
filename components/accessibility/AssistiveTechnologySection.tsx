import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, BoundaryNote } from "./shared";

export function AssistiveTechnologySection() {
  return (
    <section className="bg-[#0F2137] py-16 text-white">
      <Container>
        <SectionHeading
          eyebrow="08 / Assistive Technology & Compatibility"
          title="What our testing scope currently covers."
          tone="dark"
        >
          Named screen reader, browser or assistive technology combinations are
          published only where current tested evidence exists and disclosure is
          approved. The table below reflects the current state of publicly
          available compatibility information.
        </SectionHeading>

        <Reveal delay={0.1}>
          <PlaceholderImage
            src="/images/accessibility/assistive-technology.png"
            alt="Two colleagues working through a document together"
            label="Working through a compatibility session"
            className="mt-10 aspect-[1216/397] w-full rounded-xl"
          />
        </Reveal>

        <BoundaryNote label="Testing boundary:" tone="dark">
          Sampled AT/browser combinations in a testing session do not imply
          support for all screen readers, all browsers or all user journeys.
          Named combinations are published only when the evidence record is
          current, the scope is defined and disclosure is approved. We do not
          claim &quot;supports all screen readers.&quot;
        </BoundaryNote>
      </Container>
    </section>
  );
}
