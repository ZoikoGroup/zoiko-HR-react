import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading, StatusBadge, InfoIcon } from "./shared";

const ROWS = [
  {
    label: "Public security / privacy summary",
    status: "Public",
    authority: "Security & Privacy",
    note: "Open access. Current-as-of and scope visible.",
    action: "Open →",
    href: "/security-privacy",
    accent: true,
  },
  {
    label: "Controlled questionnaire / report",
    status: "Request Required",
    authority: "Trust / Security",
    note: "Scope, currentness, access class and limitations visible; content request-controlled.",
    action: "Request →",
    href: "#legal-review",
  },
  {
    label: "TOM / Annex II reference",
    status: "Current DPA",
    authority: "Legal / Security",
    note: "Tied to DPA package version. Supersession explicit.",
    action: "Request →",
    href: "#legal-review",
  },
  {
    label: "Formal contract audit",
    status: "Controlled",
    authority: "Legal / Trust",
    note: "Per DPA audit clause. Scope, conditions and confidentiality from exact DPA terms.",
    action: "Request →",
    href: "#legal-review",
  },
  {
    label: "Certification (if applicable)",
    status: "Request Required",
    authority: "Security",
    note: "Issuer, scope, period and limitations from approved evidence record only. No inference.",
    action: "Request →",
    href: "#legal-review",
  },
  {
    label: "Customer-specific evidence",
    status: "Controlled",
    authority: "Account-scoped",
    note: "Authenticated route only. Never public URL.",
    action: "Request →",
    href: "#legal-review",
  },
];

export function AuditEvidenceSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <Container>
        <SectionHeading eyebrow="Section 13" title="Audit, records and assurance evidence.">
          Evidence access and audit scheduling depend on approved DPA terms. No
          response target is invented. Controlled evidence is not indexed or
          linked by guessable public URL.
        </SectionHeading>

        <div className="mt-7 space-y-2.5">
          {ROWS.map((row, i) => (
            <Reveal key={row.label} delay={Math.min(i * 0.05, 0.3)}>
              <div
                className={`flex flex-col gap-3 rounded-xl border px-5 py-4 lg:flex-row lg:items-center lg:gap-5 ${
                  row.accent
                    ? "border-slate-200 bg-slate-50"
                    : "border-slate-200 bg-white"
                }`}
              >
                <h3 className="text-sm font-semibold text-ink lg:w-64 lg:flex-none">
                  {row.label}
                </h3>
                <div className="lg:w-32 lg:flex-none">
                  <StatusBadge status={row.status} />
                </div>
                <p className="text-xs text-slate-400 lg:w-40 lg:flex-none">
                  {row.authority}
                </p>
                <p className="flex-1 text-xs leading-4 text-slate-600">
                  {row.note}
                </p>
                <Link
                  href={row.href}
                  className={`flex-none whitespace-nowrap text-xs font-semibold ${
                    row.accent
                      ? "text-primary hover:text-primary-dark"
                      : "text-slate-600 hover:text-primary"
                  }`}
                >
                  {row.action}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16}>
          <div className="mt-5 flex max-w-xl items-start gap-2.5 rounded-xl border border-blue-400/20 bg-blue-400/5 px-4 py-3">
            <InfoIcon className="mt-0.5 size-4 flex-none text-blue-500" />
            <p className="text-xs leading-5 text-slate-600">
              A questionnaire response, policy or test summary is not displayed
              as a certification unless its evidence class supports that exact
              statement. No certification scope is inferred from an adjacent
              product or prior period.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
