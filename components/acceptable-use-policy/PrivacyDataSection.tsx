import { Container, Reveal } from "@/components/ui";
import { SectionHeading, PolicyTable, CautionNote } from "./shared";

const ROWS = [
  [
    "Unauthorized access",
    "Viewing, changing, downloading, exporting, or sharing workforce data outside authorized role/purpose/scope.",
    "Security & Privacy; customer access policy.",
  ],
  [
    "Excessive collection",
    "Using forms, fields, or integrations to collect information not authorized or necessary for the approved purpose.",
    "Privacy / DPA / customer policy.",
  ],
  [
    "Secondary use",
    "Repurposing employee or customer data for unrelated activities where not authorized.",
    "Privacy / DPA / customer agreement.",
  ],
  [
    "Bulk export / exfiltration",
    "Exporting or extracting data outside approved business purpose or to bypass access/retention controls.",
    "Security + customer admin controls.",
  ],
  [
    "Credential sharing",
    "Sharing passwords, authentication tokens, API keys, signing secrets, private keys, or session identifiers.",
    "Security + Developer Documentation.",
  ],
  [
    "Unsafe logging",
    "Logging sensitive request/response bodies, credentials, employee data, or private content unnecessarily.",
    "Developer Documentation.",
  ],
  [
    "Public disclosure",
    "Posting workforce, customer, vulnerability, secret, or confidential information to public pages/channels without authorization.",
    "Privacy / Security / Legal.",
  ],
  [
    "Cross-tenant misuse",
    "Attempting to access or combine another customer's data or resources without authorization.",
    "Security / Terms.",
  ],
];

export function PrivacyDataSection() {
  return (
    <section id="privacy-data" className="scroll-mt-24 bg-slate-100 py-14 sm:py-16">
      <Container>
        <SectionHeading title="Privacy, employee data, confidential information & secrets.">
          This AUP does not explain privacy rights, lawful bases, retention, or
          transfers — those live in the Privacy Notice and DPA. It only sets
          misuse boundaries.
        </SectionHeading>

        <Reveal amount={0.1}>
          <div className="mt-9">
            <PolicyTable
              columns={["Area", "Prohibited / restricted behavior", "Related authority"]}
              rows={ROWS}
              minWidth="min-w-[760px]"
            />
          </div>
        </Reveal>

        <div className="mt-6">
          <CautionNote>
            Do not submit employee records, credentials, secrets, or
            vulnerability details through general legal or sales forms. Use the
            specialist route shown for your issue.
          </CautionNote>
        </div>
      </Container>
    </section>
  );
}
