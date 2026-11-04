import { Container, Reveal } from "@/components/ui";
import { SectionHeading, BehaviorTable } from "./shared";

const CONDITIONS = [
  {
    label: "Source unavailable",
    behavior:
      "Shows source age/currentness and the approved behavior: block, queue, stale-read with a label, or manual route.",
  },
  {
    label: "Target unavailable",
    behavior:
      "Queues, retries or fails safely; never shows processed or reconciled until observed.",
  },
  {
    label: "Dependency degraded",
    behavior:
      "Marks only the affected flows or capabilities — never a suite-wide red state unless truly impacted.",
  },
  {
    label: "Authority conflict",
    behavior:
      "Blocks or routes to review according to the Source Authority Registry — never resolved by convenience.",
  },
  {
    label: "Partial success",
    behavior:
      "Shows per-domain or per-record outcome, or a source-approved rollback — never a blanket green success.",
  },
  {
    label: "Permission revoked mid-flow",
    behavior:
      "Stops the protected future action; surfaces in-flight or outstanding items for reconciliation.",
  },
  {
    label: "Late correction",
    behavior:
      "Appends or supersedes the downstream effect with lineage — never a silent overwrite of historical meaning.",
  },
  {
    label: "Unknown outcome",
    behavior:
      "Labeled unknown or source-needed — never substituted with an optimistic result.",
  },
];

export function FailureBehaviorSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="A missing system never becomes a reason to abandon it."
          className="max-w-[700px]"
        >
          Every failure or conflict condition has an explicit, source-governed
          behavior — never a fear-based push toward a Zoiko replacement.
        </SectionHeading>

        <Reveal delay={0.12}>
          <div className="mt-10">
            <BehaviorTable
              columns={["Condition", "Required behavior"]}
              rows={CONDITIONS}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
