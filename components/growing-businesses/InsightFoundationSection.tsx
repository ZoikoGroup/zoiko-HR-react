import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const QUALITY = [
  { label: "Completeness", value: "Needs review", tone: "text-amber-400" },
  { label: "Conflicting source", value: "2 items", tone: "text-red-400" },
  { label: "Overdue review", value: "3 items", tone: "text-red-400" },
  { label: "Duplicate match", value: "Ready", tone: "text-emerald-400" },
];

const REPORTS = [
  {
    title: "Headcount by org",
    source: "Source: Workforce records · Current",
  },
  {
    title: "Open lifecycle events",
    source: "Source: Lifecycle records · Current",
  },
  {
    title: "Data quality issues",
    source: "Source: Quality engine · Stale",
  },
];

export function InsightFoundationSection() {
  return (
    <section className="border-t border-white/10 bg-[#102A43] py-16 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
            Foundation 6 — Insight
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight">
            Data quality, reporting and operational insight.
          </h2>
          <p className="mt-3 max-w-[640px] text-white/50">
            Reviewable data health and operational evidence from authorized
            records. No fabricated KPI values.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-slate-950/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                Data Quality Summary
              </p>
              <ul className="mt-4">
                {QUALITY.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between gap-4 border-b border-white/10 py-2.5"
                  >
                    <span className="text-sm text-white/80">{row.label}</span>
                    <span className={`text-xs font-semibold ${row.tone}`}>
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08} y={36}>
            <PlaceholderImage
              src="/images/growing-businesses/insight.png"
              alt="Two colleagues reviewing a report on a laptop"
              label="Data quality and reporting"
              className="h-full w-full rounded-2xl border border-white/10"
            />
          </Reveal>

          <Reveal delay={0.16}>
            <div className="h-full rounded-2xl border border-white/10 bg-slate-950/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                Report Definitions
              </p>
              <ul className="mt-4">
                {REPORTS.map((report) => (
                  <li
                    key={report.title}
                    className="border-b border-white/10 py-2.5"
                  >
                    <p className="text-sm text-white">{report.title}</p>
                    <p className="mt-0.5 text-xs text-white/40">
                      {report.source}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-white/40">
                All charts require defined baseline, scope and period.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
