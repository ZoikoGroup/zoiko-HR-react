import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const COLUMNS = [
  "Field",
  "Value",
  "Sensitivity",
  "Source",
  "Editable",
  "Effective",
  "Status",
];

const ROWS = [
  {
    field: "Legal name",
    value: "— (restricted)",
    valueTone: "text-slate-400",
    sensitivity: "High",
    sensitivityTone: "text-amber-500",
    source: "Identity system",
    editable: "Request only",
    effective: "Current",
    status: "Verified",
    statusTone: "text-emerald-500",
  },
  {
    field: "Employment status",
    value: "Active — full time",
    valueTone: "text-slate-700",
    sensitivity: "Standard",
    sensitivityTone: "text-slate-400",
    source: "HR system",
    editable: "HR Admin",
    effective: "01 Aug 2026",
    status: "Verified",
    statusTone: "text-emerald-500",
  },
  {
    field: "Organization / scope",
    value: "EMEA · UK · London",
    valueTone: "text-slate-700",
    sensitivity: "Standard",
    sensitivityTone: "text-slate-400",
    source: "Org config",
    editable: "HR Admin",
    effective: "01 Mar 2026",
    status: "Verified",
    statusTone: "text-emerald-500",
  },
  {
    field: "Position",
    value: "Senior Analyst",
    valueTone: "text-slate-700",
    sensitivity: "Standard",
    sensitivityTone: "text-slate-400",
    source: "HR system",
    editable: "Proposed change",
    effective: "01 Aug 2026",
    status: "Change pending",
    statusTone: "text-amber-500",
  },
  {
    field: "Compensation band",
    value: "— (restricted)",
    valueTone: "text-slate-400",
    sensitivity: "Sensitive",
    sensitivityTone: "text-red-400",
    source: "Finance system",
    editable: "Finance + HR only",
    effective: "—",
    status: "Access required",
    statusTone: "text-slate-400",
  },
  {
    field: "Manager relationship",
    value: "R. Oduya (pending conf.)",
    valueTone: "text-slate-700",
    sensitivity: "Standard",
    sensitivityTone: "text-slate-400",
    source: "Org structure",
    editable: "HR Admin",
    effective: "15 Aug 2026",
    status: "Future change",
    statusTone: "text-slate-400",
  },
];

export function EmployeeRecordsSection() {
  return (
    <section className="border-t border-black/5 bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Employee Records Administration
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-bold text-slate-900">
            Permitted records with source, effective dates, history and
            correction.
          </h2>
          <p className="mt-2 max-w-[580px] leading-6 text-slate-500">
            Permission is evaluated before field disclosure. Restricted fields
            are not rendered and then disabled — they do not appear at all
            unless access is granted.
          </p>
        </Reveal>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">
          <Reveal delay={0.1} y={30}>
            <div className="overflow-hidden rounded-xl border-l-[3px] border-sky-500 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.10)]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/5 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Worker record — EMP-0041
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    EMEA · UK · London · Active · Source: HR system
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-md border border-black/5 bg-slate-50 px-3 py-[5px] text-xs font-semibold text-slate-700">
                    View history
                  </span>
                  <span className="rounded-md bg-sky-500 px-3 py-[5px] text-xs font-semibold text-white">
                    Request correction
                  </span>
                </div>
              </div>

              {/* Below md the seven columns cannot stay legible without a
                  horizontal scroll, so each row becomes a labeled block. */}
              <ul className="divide-y divide-black/5 md:hidden">
                {ROWS.map((row) => (
                  <li key={row.field} className="px-5 py-4">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-medium text-slate-900">
                        {row.field}
                      </p>
                      <span
                        className={`text-[10px] font-semibold ${row.statusTone}`}
                      >
                        {row.status}
                      </span>
                    </div>
                    <p className={`mt-1 text-xs ${row.valueTone}`}>
                      {row.value}
                    </p>
                    <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-[11px]">
                      <div className="flex gap-1.5">
                        <dt className="text-slate-400">Sensitivity</dt>
                        <dd className={`font-semibold ${row.sensitivityTone}`}>
                          {row.sensitivity}
                        </dd>
                      </div>
                      <div className="flex gap-1.5">
                        <dt className="text-slate-400">Source</dt>
                        <dd className="text-slate-500">{row.source}</dd>
                      </div>
                      <div className="flex gap-1.5">
                        <dt className="text-slate-400">Editable</dt>
                        <dd className="text-slate-500">{row.editable}</dd>
                      </div>
                      <div className="flex gap-1.5">
                        <dt className="text-slate-400">Effective</dt>
                        <dd className="text-slate-500">{row.effective}</dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ul>

              <table className="hidden w-full table-fixed text-left md:table">
                <thead>
                  <tr className="border-b border-black/5 text-[10px] font-semibold text-slate-400">
                    {COLUMNS.map((column) => (
                      <th key={column} className="px-2 py-2 font-semibold">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-[11px]">
                  {ROWS.map((row) => (
                    <tr key={row.field}>
                      <td className="px-2 py-3 font-medium text-slate-900">
                        {row.field}
                      </td>
                      <td className={`px-2 py-3 ${row.valueTone}`}>
                        {row.value}
                      </td>
                      <td
                        className={`px-2 py-3 text-[10px] font-semibold ${row.sensitivityTone}`}
                      >
                        {row.sensitivity}
                      </td>
                      <td className="px-2 py-3 text-slate-400">{row.source}</td>
                      <td className="px-2 py-3 text-slate-500">
                        {row.editable}
                      </td>
                      <td className="px-2 py-3 text-slate-400">
                        {row.effective}
                      </td>
                      <td
                        className={`px-2 py-3 text-[10px] font-semibold ${row.statusTone}`}
                      >
                        {row.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.16} y={30} className="h-full">
            <PlaceholderImage
              src="/images/hr-teams/employee-records.png"
              alt="Colleagues gathered around a laptop in a bright office"
              label="Permitted employee records"
              className="h-full min-h-72 w-full rounded-xl border-l-[3px] border-amber-400 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.10)]"
            />
          </Reveal>
        </div>

        <Reveal delay={0.22}>
          <Link
            href="/platform/employee-records"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-500 hover:text-sky-600"
          >
            View Employee Records
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
