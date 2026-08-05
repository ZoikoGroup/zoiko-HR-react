import { Container, Reveal } from "@/components/ui";

const STATS = [
  { value: "12", label: "Open Issues", style: "bg-rose-400/15 text-rose-300" },
  { value: "4", label: "Under Review", style: "bg-white/10 text-white/70" },
  { value: "2", label: "Exceptions", style: "bg-sky-400/15 text-sky-300" },
];

const STATUS_STYLES: Record<string, string> = {
  Open: "text-rose-400",
  "Under Review": "text-amber-300",
  "Exception Requested": "text-sky-300",
  "Accepted Exception": "text-emerald-300",
};

const SEVERITY_STYLES: Record<string, string> = {
  High: "bg-rose-500",
  Medium: "bg-amber-500",
  Low: "bg-slate-500",
};

const ISSUES = [
  { severity: "High", type: "Missing Required Field", object: "Employment", person: "Sam Liu", source: "HR Import", owner: "Data Steward", detected: "02 Aug 2025", status: "Open" },
  { severity: "High", type: "Source Conflict", object: "Person", person: "Casey Reyes", source: "HRIS / Import", owner: "Integration Admin", detected: "01 Aug 2025", status: "Under Review" },
  { severity: "Medium", type: "Duplicate Relationship", object: "Employment", person: "Alex Patel", source: "Manual Entry", owner: "HR Admin", detected: "29 Jul 2025", status: "Exception Requested" },
  { severity: "Medium", type: "Expired Document", object: "Document", person: "Morgan Chen", source: "Document Store", owner: "HR Ops", detected: "25 Jul 2025", status: "Open" },
  { severity: "Low", type: "Stale Source Record", object: "Org Unit", person: "—", source: "Integration", owner: "Integration Admin", detected: "20 Jul 2025", status: "Accepted Exception" },
];

export function DataQualitySection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Section 12 — Data quality
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Actionable issues — not a vague score.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-white/60">
                Every issue shows type, cause, affected object, owner,
                severity, source, due date, and a clear resolution path.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <div className="flex gap-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-xl px-4 py-3 text-center ${stat.style}`}
                >
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className="text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={30}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0e1730] shadow-2xl shadow-black/40">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-white/40">
                    <th className="px-6 py-3 font-medium"> </th>
                    <th className="px-6 py-3 font-medium">Issue Type</th>
                    <th className="px-6 py-3 font-medium">Object</th>
                    <th className="px-6 py-3 font-medium">Person / Unit</th>
                    <th className="px-6 py-3 font-medium">Source</th>
                    <th className="px-6 py-3 font-medium">Owner</th>
                    <th className="px-6 py-3 font-medium">Detected</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                    <th className="px-6 py-3 font-medium" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {ISSUES.map((issue) => (
                    <tr
                      key={issue.type}
                      className="transition-colors duration-150 hover:bg-white/[0.04]"
                    >
                      <td className="px-6 py-3.5">
                        <span
                          className={`inline-block h-2 w-2 rounded-full ${SEVERITY_STYLES[issue.severity]}`}
                        />
                      </td>
                      <td className="px-6 py-3.5 font-medium">{issue.type}</td>
                      <td className="px-6 py-3.5 text-white/60">{issue.object}</td>
                      <td className="px-6 py-3.5 text-white/60">{issue.person}</td>
                      <td className="px-6 py-3.5 text-white/60">{issue.source}</td>
                      <td className="px-6 py-3.5 text-white/60">{issue.owner}</td>
                      <td className="px-6 py-3.5 text-white/40">{issue.detected}</td>
                      <td className={`px-6 py-3.5 font-semibold ${STATUS_STYLES[issue.status]}`}>
                        {issue.status}
                      </td>
                      <td className="px-6 py-3.5">
                        <button
                          type="button"
                          className="group inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-white"
                        >
                          Resolve
                          <span className="transition-transform duration-200 group-hover:translate-x-1">
                            →
                          </span>
                        </button>
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
