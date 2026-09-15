import { Container, Reveal } from "@/components/ui";
import { SectionHeading, SpecTable } from "./shared";

const ROWS = [
  {
    label: "Trigger",
    spec: "Approved policy/control/evidence/source event or scheduled review, only if the current registry supports it.",
  },
  {
    label: "Conditions",
    spec: "Inspectable and source-backed; an unknown required input never silently passes.",
  },
  {
    label: "Routing",
    spec: "Configured role, owner and context via Workflows & Approvals authority — this page never owns the workflow engine.",
  },
  {
    label: "Evidence dependency",
    spec: "Exact requirement/evidence version required for the step.",
  },
  {
    label: "Outcome",
    spec: "Workflow outcome and control/evidence state remain separate — a completed workflow never auto-sets compliance state.",
  },
  {
    label: "Policy document handoff",
    spec: "Policy document, version and acknowledgment remain owned by Documents & Policies; this page only references them.",
  },
  {
    label: "Audit",
    spec: "Workflow instance/version, actor or service identity, decision, time and source/evidence references are recorded.",
  },
];

export function WorkflowHandoffSection() {
  return (
    <section
      id="compliance-operating-model"
      className="bg-slate-100 py-16 sm:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="Workflow & policy document handoff"
          title="This page routes to authority. It doesn’t become the authority."
          className="max-w-[700px]"
        >
          Workflow routing stays with Workflows &amp; Approvals; policy documents
          and acknowledgments stay with Documents &amp; Policies.
        </SectionHeading>

        <Reveal delay={0.1}>
          <div className="mt-8">
            <SpecTable columns={["Area", "Required specification"]} rows={ROWS} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
