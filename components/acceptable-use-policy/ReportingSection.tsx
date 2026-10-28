import { Container, Reveal } from "@/components/ui";
import { SectionHeading, PolicyTable, CautionNote } from "./shared";

const ROWS = [
  [
    "Security vulnerability / unsafe technical behavior",
    "Security Reporting",
    "General sales/demo form or public post.",
  ],
  [
    "Unauthorized access / suspected account compromise",
    "Authenticated Support + security route",
    "Public policy form.",
  ],
  [
    "Privacy rights / personal-data concern",
    "Privacy Notice / approved privacy request route",
    "AUP comments form.",
  ],
  [
    "Contract / AUP applicability question",
    "Legal / account-specific route",
    "General public inference.",
  ],
  [
    "IP complaint / brand permission",
    "Legal Notices / IP route",
    "Security Reporting.",
  ],
  [
    "Harassment within customer environment",
    "Customer administrator + Support if platform misuse",
    "Public disclosure of employee data.",
  ],
  ["Service availability incident", "Service Status / Support", "AUP enforcement route."],
  [
    "Product / how-to issue",
    "Help Center / Support",
    "Security Reporting unless it is a vulnerability.",
  ],
];

export function ReportingSection() {
  return (
    <section id="reporting" className="scroll-mt-24 bg-white py-14 sm:py-16">
      <Container>
        <SectionHeading title="Report suspected abuse, security issues & policy questions.">
          Use the correct specialist route below — absence from this list is not
          a reason to use a general form for sensitive matters.
        </SectionHeading>

        <div className="mt-8">
          <CautionNote>
            Do not include passwords, API keys, private keys, employee records,
            government identifiers, medical information, payroll data, or
            unnecessary vulnerability details. Use the specialist route for
            sensitive matters.
          </CautionNote>
        </div>

        <Reveal amount={0.1}>
          <div className="mt-6">
            <PolicyTable
              columns={["Issue", "Primary route", "Do not use"]}
              rows={ROWS}
              minWidth="min-w-[760px]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
