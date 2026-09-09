import { Container, Reveal } from "@/components/ui";
import { SectionHeading, BoundaryTable } from "./shared";

const ROWS = [
  {
    label: "Requested",
    meaning: "Requirement exists; evidence not yet received or current.",
    boundary: "Evidence review or control satisfaction.",
  },
  {
    label: "Received",
    meaning: "Evidence exists; no review decision is implied.",
    boundary: "Automatic acceptance.",
  },
  {
    label: "Under review",
    meaning: "Authorized review is in progress.",
    boundary: "A completed decision.",
  },
  {
    label: "Accepted for requirement",
    meaning:
      "Meets the current stated evidence-review rule for the exact scope, version and period.",
    boundary: "A legal or regulatory compliance conclusion.",
  },
  {
    label: "Insufficient",
    meaning:
      "Does not meet the current stated requirement; next action is explicit.",
    boundary: "A permanent failure with no path forward.",
  },
  {
    label: "Stale / expired",
    meaning: "The currentness window is no longer satisfied.",
    boundary: "Current accepted evidence.",
  },
  {
    label: "Superseded",
    meaning:
      "New evidence or version replaces the prior for current use; history remains.",
    boundary: "Deletion of the original record.",
  },
  {
    label: "Withdrawn",
    meaning: "Source no longer permits current reliance on this evidence.",
    boundary: "Silent removal without reopening dependent review.",
  },
  {
    label: "Restricted",
    meaning:
      "Existence or detail visibility is filtered by permission or sensitivity.",
    boundary: "Hidden object or metadata leakage.",
  },
  {
    label: "Source unavailable",
    meaning: "Current source cannot be verified.",
    boundary:
      "Current, verified evidence — last-known state is shown as clearly historical.",
  },
];

export function EvidenceBoundarySection() {
  return (
    <section
      id="evidence-decision-boundary"
      className="bg-sky-950 py-16 sm:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="Evidence review & decision boundary"
          title="Received is not reviewed. Accepted is not compliant."
          tone="dark"
          className="max-w-[700px]"
        >
          Every state names exactly what it must not be mistaken for.
        </SectionHeading>

        <Reveal delay={0.1}>
          <div className="mt-8">
            <BoundaryTable
              columns={["State", "Meaning", "Must not imply"]}
              rows={ROWS}
              tone="dark"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
