import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const COLUMNS = [
  "Event",
  "Reference",
  "Scope",
  "Effective date",
  "Stage",
  "Owner",
  "Approvals",
  "Due",
  "Exceptions",
];

const ROWS = [
  {
    event: "New starter",
    reference: "LCE-0201",
    scope: "EMEA / UK",
    effective: "20 Aug 2026",
    stage: "In progress",
    stageClass: "bg-sky-500/15 text-sky-400",
    owner: "HR Admin",
    approvals: "2/3",
    due: "18 Aug",
    dueTone: "text-slate-400",
    exceptions: "None",
    exceptionsTone: "text-slate-500",
  },
  {
    event: "Position change",
    reference: "LCE-0187",
    scope: "NORAM / US",
    effective: "01 Sep 2026",
    stage: "Approval req.",
    stageClass: "bg-white/10 text-slate-300",
    owner: "A. Reyes",
    approvals: "1/2",
    due: "25 Aug",
    dueTone: "text-slate-400",
    exceptions: "1 dep.",
    exceptionsTone: "text-red-400",
  },
  {
    event: "Separation",
    reference: "LCE-0155",
    scope: "APAC / JP",
    effective: "31 Aug 2026",
    stage: "Blocked",
    stageClass: "bg-red-400/15 text-red-400",
    owner: "T. Nguyen",
    approvals: "0/3",
    due: "Overdue",
    dueTone: "text-red-400 font-semibold",
    exceptions: "2 blocks",
    exceptionsTone: "text-red-400",
  },
];

export function LifecycleOperationsSection() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Lifecycle and Change Operations
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-bold">
            HR ownership of onboarding, changes, transitions and separation.
          </h2>
          <p className="mt-2 max-w-[600px] leading-6 text-slate-400">
            Lifecycle coordination does not determine legal, tax, payroll,
            immigration, benefit or employment outcomes.
          </p>
        </Reveal>

        <Reveal delay={0.14} y={30}>
          <div className="mt-9 overflow-hidden rounded-xl border-l-[3px] border-sky-500 bg-sky-950 shadow-[0_6px_28px_rgba(0,0,0,0.30)]">
            <div className="border-b border-white/10 px-4 py-3">
              <span className="text-sm font-semibold">
                Lifecycle queue — Illustrative
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[980px] text-left">
                <thead>
                  <tr className="border-b border-white/10 text-[10px] font-semibold text-slate-500">
                    {COLUMNS.map((column) => (
                      <th key={column} className="px-4 py-2.5 font-semibold">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-xs">
                  {ROWS.map((row) => (
                    <tr key={row.reference}>
                      <td className="px-4 py-3 font-medium">{row.event}</td>
                      <td className="px-4 py-3 font-medium text-sky-400">
                        {row.reference}
                      </td>
                      <td className="px-4 py-3 text-slate-500">{row.scope}</td>
                      <td className="px-4 py-3 text-slate-300">
                        {row.effective}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`rounded px-2 py-0.5 text-[10px] font-semibold ${row.stageClass}`}
                        >
                          {row.stage}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-300">{row.owner}</td>
                      <td className="px-4 py-3 text-slate-500">
                        {row.approvals}
                      </td>
                      <td className={`px-4 py-3 ${row.dueTone}`}>{row.due}</td>
                      <td className={`px-4 py-3 ${row.exceptionsTone}`}>
                        {row.exceptions}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <Link
            href="/platform/onboarding-lifecycle"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-500 hover:text-white"
          >
            Explore Lifecycle
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
