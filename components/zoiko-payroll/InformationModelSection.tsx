import { Container, Reveal } from "@/components/ui";
import { SectionHeading, BoundaryTable } from "./shared";

const CLASSES = [
  {
    label: "Employee reference",
    meaning: "Approved worker/employment reference required for a payroll handoff.",
    boundary: "Masked/synthetic in examples; identity/correlation source-governed.",
  },
  {
    label: "Employment / assignment context",
    meaning:
      "Approved employment, assignment, entity/location or related source context when required.",
    boundary: "Exact object/field set comes from current Product/Data Registry.",
  },
  {
    label: "Effective change context",
    meaning:
      "Approved lifecycle/change category, effective date and source evidence.",
    boundary: "A change event does not prove payroll treatment.",
  },
  {
    label: "Payroll-preparation inputs",
    meaning: "Approved payroll-relevant context prepared for payroll intake.",
    boundary:
      "No pay element, amount, tax, benefit or statutory field is implied unless explicitly approved.",
  },
  {
    label: "Time-related context",
    meaning:
      "Approved schedule/time/attendance/timesheet information where configured.",
    boundary:
      "Owned by ZoikoTime/time authority; only mapped approved context may reach payroll.",
  },
  {
    label: "Document / evidence reference",
    meaning: "Approved reference to required source evidence where supported.",
    boundary: "Do not replicate restricted document contents by default.",
  },
  {
    label: "Payroll intake / result reference",
    meaning: "Destination acknowledgment or approved payroll status reference.",
    boundary:
      "Acceptance/result reference remains payroll-owned and does not become HR truth.",
  },
];

export function InformationModelSection() {
  return (
    <section
      id="payroll-preparation"
      className="scroll-mt-24 bg-slate-100 py-16 sm:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="Employee & payroll-preparation information model"
          title="Source-owned context classes, never an invented field list."
          className="max-w-[720px]"
        >
          Every category shown here has a public meaning and an explicit
          boundary. Exact object/field sets come from the current Product/Data
          Registry — not from this page.
        </SectionHeading>

        <Reveal delay={0.12}>
          <div className="mt-8">
            <BoundaryTable
              columns={["Information class", "Public meaning", "Boundary"]}
              rows={CLASSES}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
