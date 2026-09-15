import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const ROWS = [
  { group: "Workflow health", concept: "Active definitions; running instances; blocked/exception count; completion trend; aging buckets.", boundary: "Aggregate only — no employee ranking or unsupported productivity metrics." },
  { group: "Approval health", concept: "Pending count; overdue bucket where policy defines due state; reassignment/exception rate.", boundary: "No named approver leaderboard on the public page." },
  { group: "Change governance", concept: "Definitions changed; review/activation events; stale/needs-review count.", boundary: "Detailed audit/evidence remains in the governed product view." },
  { group: "Reporting handoff", concept: "Link to Reporting & Insights once separately approved.", boundary: "This page does not define the final report catalog." },
];

export function OperationalHealthSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Operational workflow health — never a named performance
              score.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              This page shows aggregate workflow and approval health.
              Deeper, permission-sensitive reporting belongs to
              Reporting &amp; Insights.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-ink/40">
                  <th className="px-5 py-3 font-medium">Metric group</th>
                  <th className="px-5 py-3 font-medium">Allowed page/product-proof concept</th>
                  <th className="px-5 py-3 font-medium">Boundary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ROWS.map((row) => (
                  <tr key={row.group} className="transition-colors duration-150 hover:bg-slate-50">
                    <td className="px-5 py-4 font-semibold text-ink">{row.group}</td>
                    <td className="px-5 py-4 text-ink/60">{row.concept}</td>
                    <td className="px-5 py-4 text-ink/40">{row.boundary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <Link
            href="/reporting-insights"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Explore Reporting &amp; Insights
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
