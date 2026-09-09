import { Container, Reveal } from "@/components/ui";
import { SectionHeading, BehaviorTable } from "./shared";

const ROWS = [
  {
    label: "View / download",
    behavior:
      "Independently authorized; restricted content and metadata never appear in search, counts or suggestions before permission filtering.",
  },
  {
    label: "Upload / publish / distribute",
    behavior:
      "Each is a separate, auditable permission — publishing access does not imply distribution access.",
  },
  {
    label: "File safety",
    behavior:
      "Approved file types, size limits and malware scanning gate every upload; unsafe files are quarantined, never published.",
  },
  {
    label: "Sharing",
    behavior:
      "No public link is assumed; external sharing requires separate, explicit approval.",
  },
  {
    label: "Retention & hold",
    behavior:
      "Retention periods and legal holds come from an approved registry — no statutory period is invented, and a hold overrides deletion.",
  },
  {
    label: "Deletion",
    behavior:
      "Withdrawal and correction are preferred over deletion; required version and acknowledgment history is preserved.",
  },
];

export function PermissionsSection() {
  return (
    <section className="bg-[#0d2137] py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Viewing, publishing and distributing are separate permissions."
          tone="dark"
          className="max-w-[700px]"
        >
          Restricted content and metadata never appear in search, counts or
          suggestions before permission filtering applies.
        </SectionHeading>

        <Reveal delay={0.1}>
          <div className="mt-8 rounded-lg border border-white/10 bg-white/5 px-5 py-4">
            <p className="text-xs font-semibold leading-5 text-amber-300">
              Governance rule: retention and legal-hold periods come from the
              approved Zoiko HR registry — this page never invents a statutory
              term.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-6">
            <BehaviorTable
              columns={["Capability", "Required behavior"]}
              rows={ROWS}
              tone="dark"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
