import { Container, Reveal } from "@/components/ui";
import { SectionHeading, PolicyTable } from "./shared";

const ROWS = [
  [
    "Denial or degradation",
    "Prohibit activity intended to disrupt, overload, degrade, or materially interfere with service availability or other users.",
  ],
  [
    "Load generation / stress testing",
    "Not authorized unless explicit Security/Legal rules establish scope.",
  ],
  [
    "Excessive automated requests",
    "Restrict automation that circumvents documented limits, degrades service, or exceeds approved use/entitlement.",
  ],
  [
    "Scraping / extraction",
    "Public-site indexing/crawling policy is distinct from authenticated data extraction and contractual/API restrictions.",
  ],
  [
    "Rate/limit evasion",
    "Prohibit rotating credentials/accounts, parallelization, or other methods intended to evade enforced limits or safeguards.",
  ],
  [
    "Reverse engineering / circumvention",
    "Governed by precise Terms/source language and legal exceptions.",
  ],
  [
    "Unsupported clients / tampering",
    "Restrict modification or use of interfaces intended to bypass security, licensing, authorization, or documented controls.",
  ],
  [
    "Resource resale / unauthorized sharing",
    "If prohibited by commercial/legal source, licensing questions route to the account team.",
  ],
];

export function AvailabilitySection() {
  return (
    <section id="availability" className="scroll-mt-24 bg-white py-14 sm:py-16">
      <Container>
        <SectionHeading title="Availability, automation, scraping & resource abuse.">
          You must not disrupt, overload, or materially interfere with service
          availability or other users, or evade documented limits and
          safeguards.
        </SectionHeading>

        <Reveal amount={0.1}>
          <div className="mt-9">
            <PolicyTable
              columns={["Pattern", "Policy direction"]}
              rows={ROWS}
              minWidth="min-w-[720px]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
