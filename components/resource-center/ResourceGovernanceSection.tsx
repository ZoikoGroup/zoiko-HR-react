import { Container, Reveal, PlaceholderImage } from "@/components/ui";

/**
 * The design screenshot for this section is cut off below the image, so only
 * the eyebrow, heading and photo are reproduced here. Remaining content is
 * pending the rest of the export.
 */
export function ResourceGovernanceSection() {
  return (
    <section className="bg-[#0a1220] py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Resource Governance &amp; Content States
          </span>
          <h2 className="mt-3 max-w-[560px] font-heading text-3xl font-bold leading-10">
            Understand content status before you rely on a resource.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <PlaceholderImage
            src="/images/resource-center/resource-governance.png"
            alt="Three colleagues talking at a table by a window"
            label="Resource governance"
            className="mt-8 aspect-[1280/390] w-full rounded-xl bg-white"
          />
        </Reveal>
      </Container>
    </section>
  );
}
