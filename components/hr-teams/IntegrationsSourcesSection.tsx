import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const COLUMNS = [
  "Connector",
  "Env",
  "Direction",
  "Scope",
  "Status",
  "Last success",
  "Exception",
  "Owner",
];

const ROWS = [
  {
    connector: "Identity provider",
    env: "Production",
    direction: "Bidirectional",
    scope: "Global",
    status: "Connected",
    statusTone: "text-emerald-400",
    lastSuccess: "Today 08:14",
    exception: "None",
    exceptionTone: "text-slate-500",
    owner: "Sec/Privacy Admin",
    accent: "border-l-emerald-400",
  },
  {
    connector: "Time system",
    env: "Production",
    direction: "Time → HR context",
    scope: "NORAM, EMEA",
    status: "Connected",
    statusTone: "text-emerald-400",
    lastSuccess: "Today 07:55",
    exception: "None",
    exceptionTone: "text-slate-500",
    owner: "Integration Admin",
    accent: "border-l-emerald-400",
  },
  {
    connector: "Payroll system — APAC",
    env: "Production",
    direction: "HR → Payroll",
    scope: "APAC",
    status: "Rejected handoff",
    statusTone: "text-red-400",
    lastSuccess: "Yesterday 23:10",
    exception: "Schema mismatch — reconcile",
    exceptionTone: "text-red-400",
    owner: "Integration Admin",
    accent: "border-l-red-400",
  },
  {
    connector: "Benefits admin",
    env: "Production",
    direction: "HR → Benefits",
    scope: "EMEA",
    status: "Degraded",
    statusTone: "text-red-400",
    lastSuccess: "48h ago",
    exception: "Timeout — retry pending",
    exceptionTone: "text-red-400",
    owner: "Integration Admin",
    accent: "border-l-red-400",
  },
  {
    connector: "Documents platform",
    env: "Staging",
    direction: "HR → Documents",
    scope: "All locales",
    status: "Requires setup",
    statusTone: "text-slate-300",
    lastSuccess: "—",
    exception: "—",
    exceptionTone: "text-slate-500",
    owner: "Integration Admin",
    accent: "border-l-slate-500",
  },
];

export function IntegrationsSourcesSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Integrations and Authoritative Sources
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-bold">
            Governed connections — direction, source authority, health and
            failure handling.
          </h2>
          <p className="mt-2 max-w-[620px] leading-6 text-slate-400">
            Provider availability, data scope, payroll outcomes and downstream
            correctness must be separately verified. No silent overwrite or
            discarded error.
          </p>
        </Reveal>

        <Reveal delay={0.14} y={30}>
          <div className="mt-8 overflow-hidden rounded-xl border-l-[3px] border-sky-500 bg-sky-950">
            <div className="border-b border-white/10 px-5 py-4">
              <span className="text-sm font-semibold">
                Connection health — Illustrative
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] text-left">
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
                    <tr
                      key={row.connector}
                      className={`border-l-[3px] ${row.accent}`}
                    >
                      <td className="px-4 py-3 font-medium">{row.connector}</td>
                      <td className="px-4 py-3 text-slate-500">{row.env}</td>
                      <td className="px-4 py-3 text-slate-300">
                        {row.direction}
                      </td>
                      <td className="px-4 py-3 text-slate-500">{row.scope}</td>
                      <td className={`px-4 py-3 font-semibold ${row.statusTone}`}>
                        {row.status}
                      </td>
                      <td className="px-4 py-3 text-slate-500">
                        {row.lastSuccess}
                      </td>
                      <td className={`px-4 py-3 ${row.exceptionTone}`}>
                        {row.exception}
                      </td>
                      <td className="px-4 py-3 text-slate-500">{row.owner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <Link
            href="/integrations"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-500 hover:text-white"
          >
            Explore Integrations
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
