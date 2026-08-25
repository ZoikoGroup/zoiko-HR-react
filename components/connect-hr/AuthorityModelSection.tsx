import { Container, Reveal } from "@/components/ui";

const COLUMNS = [
  "Object / Field",
  "Purpose",
  "Creating system",
  "Authority",
  "Approving role",
  "Direction",
  "Reconcile owner",
];

const ROWS = [
  {
    object: "Worker / Person record",
    purpose: "Stable identity and personal context",
    creating: "Zoiko HR (HR Admin)",
    authority: "Zoiko HR",
    approving: "HR Admin / HR Leader",
    direction: "Outbound to consumers",
    reconcile: "HR Admin",
  },
  {
    object: "Employment / Assignment",
    purpose: "Current employment terms, status and scope",
    creating: "Zoiko HR (HR Admin)",
    authority: "Zoiko HR",
    approving: "HR Leader",
    direction: "Outbound to time + payroll",
    reconcile: "HR Admin",
  },
  {
    object: "Time / schedule context",
    purpose: "Approved work schedule and absence context",
    creating: "ZoikoTime (Time Admin)",
    authority: "ZoikoTime",
    approving: "Time Reviewer / Time Admin",
    direction: "Outbound to payroll only (approved mapping)",
    reconcile: "Time Admin",
  },
  {
    object: "Payroll input handoff",
    purpose: "Approved upstream context passed to payroll",
    creating: "Upstream approved handoff",
    authority: "Payroll validates on receipt",
    approving: "Payroll Reviewer",
    direction: "Inbound; result returned where approved",
    reconcile: "Payroll Admin",
  },
  {
    object: "Payroll result / status",
    purpose: "Payroll process output — separate authority",
    creating: "Zoiko Payroll",
    authority: "Zoiko Payroll",
    approving: "Payroll Admin / authorized reviewer",
    direction: "Read-only reference to HR/time where approved",
    reconcile: "Payroll Admin",
  },
  {
    object: "Entity / Location / Jurisdiction",
    purpose: "Org scope for routing, mapping and cutoff",
    creating: "Zoiko HR (HR Admin)",
    authority: "Zoiko HR",
    approving: "HR Admin / IT Admin",
    direction: "Referenced by all three systems",
    reconcile: "HR Admin + IT Admin",
  },
];

export function AuthorityModelSection() {
  return (
    <section className="bg-[#F0F5F9] py-16 sm:py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Section 6 — Authority and Responsibility Model
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            Create, propose, approve, calculate and reconcile authority are
            separately assigned.
          </h2>
          <p className="mt-4 max-w-[620px] leading-6 text-slate-500">
            Click any row to review its authority detail. No default
            last-write-wins for sensitive HR, time or payroll values.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-6 max-w-[720px] rounded-lg border border-red-400/20 bg-red-400/5 px-4 py-2">
            <p className="text-xs leading-4 text-slate-500">
              Payroll calculation, result, approval, payment, filing and
              statutory reconciliation remain with the payroll process and
              authorized payroll reviewers unless a separately approved
              capability explicitly states otherwise.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-8 overflow-x-auto rounded-xl border border-black/5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
            <table className="w-full min-w-[1000px] border-collapse text-left">
              <thead>
                <tr className="bg-indigo-50">
                  {COLUMNS.map((column) => (
                    <th
                      key={column}
                      className="border-b border-black/5 px-3.5 py-2.5 text-[9px] font-semibold uppercase leading-3 tracking-wide text-slate-400"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr
                    key={row.object}
                    className={i % 2 === 1 ? "bg-slate-100" : "bg-white"}
                  >
                    <td className="border-b border-black/5 px-3.5 py-4 text-xs font-medium leading-4 text-slate-900">
                      {row.object}
                    </td>
                    <td className="border-b border-black/5 px-3.5 py-4 text-xs leading-4 text-slate-500">
                      {row.purpose}
                    </td>
                    <td className="border-b border-black/5 px-3.5 py-4 text-xs leading-4 text-slate-400">
                      {row.creating}
                    </td>
                    <td className="border-b border-black/5 px-3.5 py-4">
                      <span className="inline-block rounded-sm bg-sky-500/10 px-2 py-0.5 text-[10px] font-semibold leading-4 text-sky-500">
                        {row.authority}
                      </span>
                    </td>
                    <td className="border-b border-black/5 px-3.5 py-4 text-xs leading-4 text-slate-400">
                      {row.approving}
                    </td>
                    <td className="border-b border-black/5 px-3.5 py-4 text-xs leading-4 text-slate-500">
                      {row.direction}
                    </td>
                    <td className="border-b border-black/5 px-3.5 py-4 text-xs leading-4 text-slate-400">
                      {row.reconcile}
                    </td>
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
