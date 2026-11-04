import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, PolicyTable } from "./shared";

const ROWS = [
  [
    "No unauthorized access",
    "Do not access or attempt to access accounts, tenants, systems, records, endpoints, or administrative functions without explicit authorization.",
  ],
  [
    "No credential attacks",
    "Do not obtain, test, reuse, phish, stuff, brute-force, or otherwise misuse credentials or authentication mechanisms.",
  ],
  [
    "No security-control bypass",
    "Do not disable, defeat, evade, or interfere with authentication, authorization, audit, rate/resource, or other security controls.",
  ],
  [
    "No malware / destructive payloads",
    "Do not introduce malicious code, ransomware, destructive scripts, data-corruption payloads, or similar harmful mechanisms.",
  ],
  [
    "No unapproved security testing",
    "Scanning, load testing, social engineering, credential use beyond your own authorized account, and destructive testing require explicit approved authorization; absence of a rule is not permission.",
  ],
  [
    "Stop unnecessary data access",
    "If a vulnerability exposes customer/employee data, do not continue accessing more than necessary to demonstrate/report the issue; follow Security Reporting.",
  ],
  [
    "Report through the protected route",
    "Security vulnerabilities route to Security Reporting, not general support, legal, sales, or public channels.",
  ],
];

export function SecuritySection() {
  return (
    <section id="security" className="scroll-mt-24 bg-[#102A43] py-14 sm:py-16">
      <Container>
        <SectionHeading
          tone="dark"
          title="Security, accounts, vulnerabilities & unauthorized access."
        >
          Security Reporting controls testing authorization. The absence of an
          explicit rule here is never permission to test.
        </SectionHeading>

        <div className="mt-9 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,454px)]">
          <Reveal amount={0.1}>
            <PolicyTable
              tone="dark"
              columns={["Rule", "Required direction"]}
              rows={ROWS}
              minWidth="min-w-[560px]"
            />
          </Reveal>

          <Reveal delay={0.12} className="lg:h-full">
            <PlaceholderImage
              src="/images/acceptable-use-policy/security.png"
              alt="Three colleagues reviewing a dashboard on a tablet"
              label="Reviewing a dashboard together"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl border border-white/10 sm:aspect-[16/9] lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
