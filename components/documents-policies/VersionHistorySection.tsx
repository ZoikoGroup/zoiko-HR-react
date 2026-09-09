import { Container, Reveal } from "@/components/ui";
import { SectionHeading, BehaviorTable } from "./shared";

const ROWS = [
  {
    label: "Version identity",
    behavior:
      "Each version carries an immutable identifier and lineage; published/current content is never edited in place.",
  },
  {
    label: "Comparison / diff",
    behavior:
      "Current vs proposed content shown with an accessible text summary of additions and removals — color is supplementary, never the only signal.",
  },
  {
    label: "Effective vs review date",
    behavior:
      "Effective date and review-due date are tracked separately; current does not mean recently reviewed.",
  },
  {
    label: "Supersession",
    behavior:
      "A new current version links to its prior version, which remains read-only and searchable to authorized history.",
  },
  {
    label: "Correction",
    behavior:
      "A correction creates a new version — acknowledged content is never silently rewritten.",
  },
  {
    label: "No-change review",
    behavior:
      "A reviewer can confirm currentness without content changing; the record shows reviewer, date and result.",
  },
];

export function VersionHistorySection() {
  return (
    <section className="bg-slate-100 py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Published content is immutable. History is never rewritten."
          className="max-w-[700px]"
        >
          A new version links to what came before it — a comparison and a change
          reason travel with every publish.
        </SectionHeading>

        <Reveal delay={0.12}>
          <div className="mt-10">
            <BehaviorTable
              columns={["Component", "Required behavior"]}
              rows={ROWS}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
