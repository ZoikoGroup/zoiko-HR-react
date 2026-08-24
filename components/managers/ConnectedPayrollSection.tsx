import { Container, Reveal } from "@/components/ui";

const COLUMNS = [
  "Event",
  "Creating system",
  "Approving role",
  "Authority system",
  "Consumers",
  "Effective",
  "Cutoff",
  "Reconcile",
  "Status",
];

const ROWS = [
  {
    event: "Position change",
    creating: "Manager approval (Zoiko HR)",
    approving: "HR Leader + HR Admin",
    authority: "HR system (entity)",
    consumers: "Payroll — EMEA",
    effective: "01 Sep 2026",
    cutoff: "10 days before payroll run",
    reconcile: "HR Admin + Payroll liaison",
    status: "Prepared",
    statusTone: "text-emerald-500",
  },
  {
    event: "New starter",
    creating: "Manager task confirmation",
    approving: "HR Admin",
    authority: "HR system + Identity",
    consumers: "Identity/IT; Time system",
    effective: "02 Sep 2026",
    cutoff: "3 days before start",
    reconcile: "IT Admin + HR Admin",
    status: "Pending",
    statusTone: "text-amber-500",
  },
  {
    event: "Leave/absence",
    creating: "Manager context + HR approval",
    approving: "HR Admin (extended)",
    authority: "Time system",
    consumers: "Payroll — absence deduction",
    effective: "15 Sep 2026",
    cutoff: "Week before",
    reconcile: "HR Admin",
    status: "Information requested",
    statusTone: "text-red-400",
  },
];

export function ConnectedPayrollSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Connected HR, Time and Payroll
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900">
            Manager approval is not payroll calculation, tax, payment or
            downstream completion.
          </h2>
          <p className="mt-4 max-w-[640px] leading-6 text-slate-500">
            Approved integrations hand off authorized HR context. Manager
            approval and handoff transport are separately confirmed. Rejected or
            conflicting handoffs remain visible with owner and next action — no
            silent overwrite.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 max-w-[680px] rounded-lg border border-red-100 bg-red-50/60 px-4 py-3">
            <p className="text-xs leading-5 text-slate-500">
              Manager approval does not mean payroll calculation, tax, filing,
              payment, time classification or downstream completion occurred.
              Downstream failure is distinct from manager approval.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.18} y={30}>
          <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 border-r-[3px] border-r-primary bg-white shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
            <div className="border-b border-slate-200 px-5 py-4">
              <span className="text-sm font-semibold text-slate-900">
                Handoff authority matrix — Illustrative
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1100px] text-left">
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
                    <tr key={row.event}>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {row.event}
                      </td>
                      <td className="px-4 py-3 text-slate-400">
                        {row.creating}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {row.approving}
                      </td>
                      <td className="px-4 py-3 font-semibold text-primary">
                        {row.authority}
                      </td>
                      <td className="px-4 py-3 text-slate-400">
                        {row.consumers}
                      </td>
                      <td className="px-4 py-3 text-slate-500">
                        {row.effective}
                      </td>
                      <td className="px-4 py-3 text-slate-400">{row.cutoff}</td>
                      <td className="px-4 py-3 text-slate-400">
                        {row.reconcile}
                      </td>
                      <td
                        className={`px-4 py-3 font-semibold ${row.statusTone}`}
                      >
                        {row.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
