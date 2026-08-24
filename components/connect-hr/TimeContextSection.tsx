import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PERIODS = [
  {
    title: "Aug 2026 — Period 8",
    timezone: "UTC+2 (CEST)",
    status: "Reviewed",
    rows: [
      { label: "Source", value: "ZoikoTime — Time Admin" },
      { label: "Records", value: "124 entries — reviewed 22 Aug 2026" },
      { label: "Exceptions", value: "None outstanding" },
      { label: "Period closes", value: "31 Aug 2026 23:59 CEST" },
    ],
    footer: "Ready for handoff",
    footerClass: "bg-emerald-400/5 text-emerald-500",
  },
  {
    title: "Sep 2026 — Period 9",
    timezone: "UTC+2 (CEST)",
    status: "Pending",
    rows: [
      { label: "Source", value: "ZoikoTime — awaiting Time Admin" },
      { label: "Records", value: "67 entries — 2 unreviewed" },
      { label: "Exceptions", value: "Late entry (×2) — owner assigned" },
      { label: "Period closes", value: "30 Sep 2026 23:59 CEST" },
    ],
    footer: "Late entries — review required",
    footerClass: "bg-slate-100 text-amber-500",
  },
];

export function TimeContextSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Section 9 — Time Context Preparation
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            Time context is separately governed — HR or manager input initiates
            but does not automatically authorize it.
          </h2>
          <p className="mt-4 max-w-[620px] leading-6 text-slate-500">
            Only reviewed and approved time context for the applicable payroll
            period may be handed off. Unreviewed or late context is not
            presented as payroll-ready.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PERIODS.map((period, i) => (
            <Reveal key={period.title} delay={0.08 + i * 0.06}>
              <div className="flex h-full flex-col overflow-hidden rounded-xl border border-black/5 bg-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                <div className="flex items-start justify-between gap-4 border-b border-black/5 bg-white px-4 py-3.5">
                  <div>
                    <p className="text-xs font-semibold leading-5 text-slate-900">
                      {period.title}
                    </p>
                    <p className="mt-px text-xs leading-4 text-slate-400">
                      {period.timezone}
                    </p>
                  </div>
                  <span className="rounded-sm bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold leading-4 text-amber-500">
                    {period.status}
                  </span>
                </div>

                <div className="flex-1 px-4 py-3.5">
                  {period.rows.map((row, rowIndex) => (
                    <div
                      key={row.label}
                      className={`flex items-start justify-between gap-4 ${
                        rowIndex > 0 ? "pt-2" : ""
                      }`}
                    >
                      <span className="text-[10px] font-semibold leading-4 text-slate-400">
                        {row.label}
                      </span>
                      <span className="text-right text-xs leading-4 text-slate-500">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className={`border-t border-black/5 px-4 py-2.5 text-xs font-semibold leading-4 ${period.footerClass}`}
                >
                  {period.footer}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/connect-hr/time-context.png"
              alt="A team discussing schedules together over coffee"
              label="Time context review"
              className="h-full min-h-60 w-full rounded-xl border border-black/5 bg-slate-100"
            />
          </Reveal>
        </div>

        <Reveal delay={0.26}>
          <div className="mt-6 max-w-[680px] rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3">
            <p className="text-xs font-semibold leading-4 text-amber-600">
              Missing or late time context
            </p>
            <p className="mt-1.5 text-xs leading-5 text-slate-500">
              Missing or unreviewed time is not substituted with zero or a
              default value unless an explicitly approved policy rule exists.
              The exception remains visible with owner and next action.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
