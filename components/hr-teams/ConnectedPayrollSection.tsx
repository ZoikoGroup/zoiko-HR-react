import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const COLUMNS = [
  "Event",
  "Source",
  "Approving role",
  "Authoritative",
  "Consumers",
  "Effective date",
  "Status",
  "Conflict rule",
];

const ROWS = [
  {
    event: "New starter",
    source: "HR system",
    approver: "HR Leader",
    authoritative: "HR system",
    consumers: "Identity, Time, Payroll",
    effective: "20 Aug 2026",
    status: "Prepared",
    statusClass: "bg-slate-200 text-slate-600",
    conflict: "HR wins",
    accent: "border-l-sky-500",
  },
  {
    event: "Position change",
    source: "HR system",
    approver: "HR Leader",
    authoritative: "HR system",
    consumers: "Org structure, reporting",
    effective: "01 Sep 2026",
    status: "Sent",
    statusClass: "bg-slate-200 text-slate-600",
    conflict: "HR wins",
    accent: "border-l-sky-500",
  },
  {
    event: "Approved leave context",
    source: "HR system",
    approver: "HR Admin",
    authoritative: "Time system",
    consumers: "Time, Payroll context",
    effective: "Per leave record",
    status: "Reconciled",
    statusClass: "bg-emerald-100 text-emerald-600",
    conflict: "Time system wins",
    accent: "border-l-emerald-400",
  },
  {
    event: "Separation",
    source: "HR system",
    approver: "HR Leader",
    authoritative: "HR system",
    consumers: "Identity, Payroll, Benefits",
    effective: "31 Aug 2026",
    status: "Source conflict",
    statusClass: "bg-red-100 text-red-500",
    conflict: "Requires reconciliation",
    accent: "border-l-red-400",
  },
];

export function ConnectedPayrollSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Connected HR, Time and Payroll
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-bold text-slate-900">
            Authorized coordination — explicit source authority, effective
            timing and reconciliation.
          </h2>
          <p className="mt-2 max-w-[620px] leading-6 text-slate-500">
            Zoiko HR does not calculate payroll, determine tax, interpret
            employment law or guarantee downstream time or payroll outcomes
            unless separately approved.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 max-w-[680px] rounded-lg border border-red-100 bg-red-50/60 px-5 py-3.5">
            <p className="text-xs leading-5 text-slate-500">
              Handoffs shown are illustrative. No payroll calculation, tax
              determination or downstream correctness is implied.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.18} y={30}>
          <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <div className="border-b border-slate-200 px-5 py-4">
              <span className="text-sm font-semibold text-slate-900">
                Authority matrix and handoff status — Illustrative
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] text-left">
                <thead>
                  <tr className="border-b border-slate-200 text-[10px] font-semibold text-slate-400">
                    {COLUMNS.map((column) => (
                      <th key={column} className="px-4 py-2.5 font-semibold">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {ROWS.map((row) => (
                    <tr key={row.event} className={`border-l-[3px] ${row.accent}`}>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {row.event}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{row.source}</td>
                      <td className="px-4 py-3 text-slate-400">
                        {row.approver}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {row.authoritative}
                      </td>
                      <td className="px-4 py-3 text-slate-400">
                        {row.consumers}
                      </td>
                      <td className="px-4 py-3 text-slate-400">
                        {row.effective}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`rounded px-2 py-0.5 text-[10px] font-semibold ${row.statusClass}`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-400">
                        {row.conflict}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <Link
            href="/connected-hr-time-payroll"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-500 hover:text-sky-600"
          >
            Explore connected solution
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
