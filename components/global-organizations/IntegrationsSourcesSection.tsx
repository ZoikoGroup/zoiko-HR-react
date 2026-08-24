import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const HEALTH_COLUMNS = [
  "Connector",
  "Env",
  "Direction",
  "Scope",
  "Status",
  "Last success",
  "Exception",
  "Owner",
];

const HEALTH_ROWS = [
  {
    connector: "Identity provider",
    env: "Production",
    direction: "Bidirectional",
    scope: "Global — all org scopes",
    status: { label: "Connected", tone: "text-emerald-400" },
    lastSuccess: "Today 08:14",
    exception: { label: "None", tone: "text-slate-400" },
    owner: "Sec/Privacy Admin",
  },
  {
    connector: "Time system",
    env: "Production",
    direction: "Time → HR context",
    scope: "NORAM, EMEA",
    status: { label: "Connected", tone: "text-emerald-400" },
    lastSuccess: "Today 07:55",
    exception: { label: "None", tone: "text-slate-400" },
    owner: "Integration Admin",
  },
  {
    connector: "Payroll system — APAC",
    env: "Production",
    direction: "HR → Payroll",
    scope: "APAC configured markets",
    status: { label: "Rejected handoff", tone: "text-red-400" },
    lastSuccess: "Yesterday 23:10",
    exception: { label: "Schema mismatch — reconcile", tone: "text-red-400" },
    owner: "Integration Admin",
  },
  {
    connector: "Benefits admin",
    env: "Production",
    direction: "HR → Benefits",
    scope: "EMEA",
    status: { label: "Degraded", tone: "text-red-400" },
    lastSuccess: "48h ago",
    exception: { label: "Timeout — retry pending", tone: "text-red-400" },
    owner: "Integration Admin",
  },
  {
    connector: "Documents platform",
    env: "Staging",
    direction: "HR → Documents",
    scope: "All locales",
    status: { label: "Requires setup", tone: "text-slate-400" },
    lastSuccess: "—",
    exception: { label: "—", tone: "text-slate-400" },
    owner: "Integration Admin",
  },
];

const MATRIX_FIELDS = [
  "Field/event",
  "Creating",
  "Authoritative",
  "Consumers",
  "Conflict rule",
  "Reconcile owner",
];

const MATRIX_ROWS = [
  [
    "Worker record",
    "HR system",
    "HR system",
    "Identity, Time, Payroll",
    "HR system wins",
    "Integration Admin",
  ],
  [
    "Time / schedule",
    "Time system",
    "Time system",
    "HR context",
    "Time system wins",
    "Integration Admin",
  ],
  [
    "Payroll input",
    "HR system",
    "Payroll system decides",
    "Payroll process",
    "Payroll system rules",
    "Payroll liaison",
  ],
];

export function IntegrationsSourcesSection() {
  return (
    <section className="border-t border-white/10 bg-slate-950 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            Integrations and Authoritative Sources
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold">
            Governed connections with explicit source authority and
            reconciliation.
          </h2>
          <p className="mt-4 max-w-[660px] leading-6 text-slate-400">
            Connections coordinate approved data and events. Provider
            availability, data scope, payroll outcomes, and downstream
            correctness must be separately verified.
          </p>
        </Reveal>

        <Reveal delay={0.14} y={30}>
          <div className="mt-8 rounded-2xl border border-white/10 bg-sky-950/60 p-5">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Connection Health — Illustrative
            </span>
            <div className="mt-3.5 overflow-x-auto">
              <table className="w-full min-w-[1000px] text-left">
                <thead>
                  <tr className="border-b border-white/10 text-[10px] font-semibold uppercase text-slate-500">
                    {HEALTH_COLUMNS.map((column) => (
                      <th key={column} className="px-2.5 py-1 font-semibold">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-xs">
                  {HEALTH_ROWS.map((row) => (
                    <tr key={row.connector}>
                      <td className="px-2.5 py-2.5 font-medium">
                        {row.connector}
                      </td>
                      <td className="px-2.5 py-2.5 text-slate-400">
                        {row.env}
                      </td>
                      <td className="px-2.5 py-2.5 text-slate-300">
                        {row.direction}
                      </td>
                      <td className="px-2.5 py-2.5 text-slate-400">
                        {row.scope}
                      </td>
                      <td
                        className={`px-2.5 py-2.5 font-semibold ${row.status.tone}`}
                      >
                        {row.status.label}
                      </td>
                      <td className="px-2.5 py-2.5 text-slate-500">
                        {row.lastSuccess}
                      </td>
                      <td className={`px-2.5 py-2.5 ${row.exception.tone}`}>
                        {row.exception.label}
                      </td>
                      <td className="px-2.5 py-2.5 text-slate-500">
                        {row.owner}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} y={30}>
          <div className="mt-6 rounded-2xl border border-white/10 bg-sky-950/60 p-5">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Authoritative-Source Matrix — Illustrative
            </span>
            <ul className="mt-3.5 divide-y divide-white/10">
              {MATRIX_ROWS.map((row) => (
                <li
                  key={row[0]}
                  className="grid gap-3 py-3 sm:grid-cols-2 lg:grid-cols-6"
                >
                  {row.map((cell, i) => (
                    <div key={MATRIX_FIELDS[i]}>
                      <p className="text-[10px] text-slate-500">
                        {MATRIX_FIELDS[i]}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-200">{cell}</p>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <Link
            href="/integrations"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-white"
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
