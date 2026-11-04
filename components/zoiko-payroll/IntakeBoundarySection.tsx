import { Container, Reveal } from "@/components/ui";
import { SectionHeading, BoundaryTable } from "./shared";

const STAGES = [
  {
    label: "Prepared",
    meaning: "Source context assembled and validated for review.",
    boundary: "Authorized release or delivery.",
  },
  {
    label: "Approved",
    meaning: "Required upstream approval completed.",
    boundary: "Sent or accepted.",
  },
  {
    label: "Released / sent",
    meaning: "Handoff emitted to approved destination.",
    boundary: "Destination receipt or business acceptance.",
  },
  {
    label: "Received",
    meaning:
      "Destination acknowledges receipt/technical acceptance where supported.",
    boundary: "Payroll input accepted for processing.",
  },
  {
    label: "Rejected",
    meaning: "Destination rejects all/defined scope.",
    boundary: "Source record is wrong in every respect.",
  },
  {
    label: "Partially accepted",
    meaning: "Some items/context accepted and others rejected.",
    boundary: "Safe resend of all items.",
  },
  {
    label: "Accepted",
    meaning: "Destination accepts intake according to approved semantics.",
    boundary: "Payroll calculated, approved, paid, filed or posted.",
  },
  {
    label: "Processing / result reference",
    meaning: "Payroll-side state or result reference only if approved.",
    boundary: "HR ownership of payroll result.",
  },
  {
    label: "Reconciliation open",
    meaning: "Upstream/downstream states require closure evidence.",
    boundary: "Automatic close because payroll phase advanced.",
  },
];

export function IntakeBoundarySection() {
  return (
    <section id="intake-boundary" className="scroll-mt-24 bg-sky-950 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Payroll handoff & intake boundary"
          title="Sent is not accepted. Accepted is not calculated, paid or filed."
          tone="dark"
          className="max-w-[700px]"
        >
          Every ladder stage names exactly what it must not be mistaken for.
        </SectionHeading>

        <Reveal delay={0.12}>
          <div className="mt-8">
            <BoundaryTable
              columns={["Stage", "Meaning", "Must not imply"]}
              rows={STAGES}
              tone="dark"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
