import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const STAGES = [
  {
    title: "Not applicable",
    description: "Issue does not reach disclosure threshold — closed with safe neutral reason.",
  },
  {
    title: "Coordination planned",
    description:
      "Security/Legal review determines coordinated disclosure is appropriate. No deadline set without approved policy.",
  },
  {
    title: "Reporter contacted",
    description: "Reporter notified through protected channel. No public details. No default timeline.",
  },
  {
    title: "Publication review",
    description:
      "Security/Legal reviewing proposed advisory content. Unpatched exploit detail never included.",
  },
  {
    title: "Embargo",
    description: "Only if explicitly approved in current policy. No default embargo convention applied.",
  },
  {
    title: "Advisory published",
    description: "Public advisory released only after Security/Legal approval. Content controlled.",
  },
  {
    title: "Corrected / closed",
    description: "Published disclosure corrections are versioned and source-owned.",
  },
];

export function DisclosureSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Section 11"
          title="Coordinated disclosure and publication."
        >
          Publication and disclosure workflow is Security/Legal-controlled. No
          default 30/60/90-day deadline. No CVE, advisory, acknowledgement, or
          credit promise.
        </SectionHeading>

        <div className="mt-9 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="relative pl-8">
            <span
              aria-hidden
              className="absolute left-1.5 top-5 bottom-8 w-px bg-slate-200"
            />
            {STAGES.map((stage, i) => (
              <Reveal key={stage.title} delay={Math.min(i * 0.05, 0.3)}>
                <div className="relative pb-3">
                  <span
                    aria-hidden
                    className="absolute -left-8 top-4 size-3 rounded-full bg-slate-300"
                  />
                  <div className="rounded-xl bg-slate-50 px-5 py-4">
                    <h3 className="text-sm font-bold text-ink">
                      {stage.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/security-reporting/disclosure.png"
              alt="Two colleagues reviewing a disclosure timeline on a tablet"
              label="Reviewing a disclosure timeline"
              className="aspect-[380/571] w-full rounded-2xl lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
