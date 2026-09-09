import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, StateChip } from "./shared";

const EVIDENCE_STATES = [
  "Requested",
  "Received",
  "Under review",
  "Accepted for requirement",
  "Insufficient",
  "Stale / expired",
  "Superseded",
  "Withdrawn",
  "Restricted",
  "Source unavailable",
];

export function EvidenceRequirementsSection() {
  return (
    <section id="evidence-review" className="bg-slate-100 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Evidence requirements & review"
          title="Evidence presence is a fact. It is not a compliance verdict."
          className="max-w-[700px]"
        >
          Every evidence record carries a source, class, period, sensitivity and
          currentness rule — and only a configured reviewer decision can move it
          forward.
        </SectionHeading>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal delay={0.08} className="h-full">
            <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-sky-950">
                Evidence states
              </p>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {EVIDENCE_STATES.map((state) => (
                  <StateChip key={state}>{state}</StateChip>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14} className="h-full">
            <PlaceholderImage
              src="/images/zoiko-comply/evidence-review.webp"
              alt="Colleagues in conversation in front of a whiteboard"
              label="Evidence requirements and review"
              className="aspect-video w-full rounded-xl border border-slate-200 bg-white lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
