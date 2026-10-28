import { Container, Reveal } from "@/components/ui";

const ROWS = [
  { module: "Employee Records", mayReference: "Organization assignment reference; person/position identifier label where permitted.", mustNotOwn: "Personal identity, employment terms, compensation, documents, sensitive HR data." },
  { module: "Leave & Attendance", mayReference: "Organization/location reference for policy scoping where approved.", mustNotOwn: "Leave policies, balances, requests, approvals, calendars, attendance calculations." },
  { module: "Documents & Policies", mayReference: "Organization scope reference for distribution/acknowledgment where approved.", mustNotOwn: "Document templates, versions, policy publication, acknowledgment truth." },
  { module: "Workflows & Approvals", mayReference: "Change workflow reference or approval state where configured.", mustNotOwn: "Generic workflow engine truth or unrelated approval rules." },
  { module: "Reporting & Insights", mayReference: "Stable org IDs and effective state for segmentation and history.", mustNotOwn: "Report definitions, metrics, permission-sensitive report rendering." },
  { module: "Payroll", mayReference: "Legal entity or cost-center reference if approved.", mustNotOwn: "Payroll calculations, tax, pay cycles, filings, payslips." },
  { module: "Time", mayReference: "Location/org/policy reference if approved.", mustNotOwn: "Scheduling, time classification, clocking, attendance rules." },
  { module: "Identity / Security", mayReference: "Organization scope may inform delegated admin if approved.", mustNotOwn: "SSO, MFA, authentication, sessions, app-level access." },
  { module: "Finance", mayReference: "Cost center or reporting dimension reference where approved.", mustNotOwn: "General ledger, financial master-data authority." },
  { module: "Integrations", mayReference: "Approved source/destination mapping and sync state.", mustNotOwn: "Invented connector names, credentials, source direction, sync frequency." },
];

export function CrossModuleAuthoritySection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Cross-module authority
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Organization Management references — it does not
              duplicate adjacent module authority
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Every sibling module retains explicit data and rule
              ownership. This boundary map is the design contract — not
              an integration promise.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-white/40">
                  <th className="px-4 py-3 font-medium">Adjacent module</th>
                  <th className="px-4 py-3 font-medium">Organization Management may reference</th>
                  <th className="px-4 py-3 font-medium">Must not duplicate / own</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {ROWS.map((row) => (
                  <tr key={row.module} className="transition-colors duration-150 hover:bg-white/[0.04]">
                    <td className="px-4 py-3.5 font-semibold">{row.module}</td>
                    <td className="px-4 py-3.5 text-emerald-300">{row.mayReference}</td>
                    <td className="px-4 py-3.5 text-rose-300">{row.mustNotOwn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
