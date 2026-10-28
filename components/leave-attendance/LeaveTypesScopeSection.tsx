import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ROWS = [
  {
    badges: ["AL", "P1"],
    title: "Annual Leave",
    unit: "Days",
    balanceTracked: "Yes",
    calendarVisibility: "Privacy-safe label",
    fields: ["Date range", "Requested units", "Reason category (structured)", "Optional message"],
    warning: "Configured leave category. Statutory entitlement calculation requires approved jurisdiction-specific Product Truth.",
  },
  {
    badges: ["AE-SRC", "P2"],
    title: "Attendance exception — sourced",
    unit: "N/A (sourced record)",
    balanceTracked: "Not tracked",
    calendarVisibility: "Restricted by purpose",
    fields: ["Source system category", "Status", "Exception category", "Correction/support path"],
    warning: "Sourced attendance context — not leave request. Attendance exception does not imply policy violation, discipline, productivity score or misconduct. Time capture remains with the approved time system.",
  },
];

function LeaveTypeRow({ row }: { row: (typeof ROWS)[number] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:items-stretch">
      <Reveal className="flex">
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex gap-2">
            {row.badges.map((badge) => (
              <span key={badge} className="rounded-md bg-primary-light px-2 py-1 text-[11px] font-semibold text-primary">
                {badge}
              </span>
            ))}
          </div>
          <p className="mt-3 font-semibold text-ink">{row.title}</p>
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            <div>
              <p className="text-xs text-ink/40">Unit</p>
              <p className="mt-0.5 text-ink/70">{row.unit}</p>
            </div>
            <div>
              <p className="text-xs text-ink/40">Balance tracked</p>
              <p className="mt-0.5 text-emerald-600">{row.balanceTracked}</p>
            </div>
            <div className="col-span-2">
              <p className="text-xs text-ink/40">Calendar visibility</p>
              <p className="mt-0.5 text-ink/70">{row.calendarVisibility}</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.06} className="flex">
        <div className="flex w-full flex-col rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">Request fields</p>
          <ul className="mt-3 space-y-1.5">
            {row.fields.map((field) => (
              <li key={field} className="text-sm text-ink/70">· {field}</li>
            ))}
          </ul>
          <div className="mt-auto flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3.5 py-2.5 text-xs text-amber-900">
            <span aria-hidden>⚠</span>
            {row.warning}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export function LeaveTypesScopeSection() {
  return (
    <section id="leave-types" className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Leave types &amp; scope
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Configured leave categories with explicit privacy class and
              visibility rules
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Only approved/current types from the Leave Type Registry
              render. Categories not listed are not represented. Each
              type carries a privacy classification that governs
              calendar labels, analytics and role access.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 space-y-6">
          <LeaveTypeRow row={ROWS[0]} />

          <Reveal delay={0.12} y={20}>
            <PlaceholderImage
              src="/images/leave-attendance/leave-types-scope.webp"
              alt="Colleagues talking in a bright meeting space"
              label="Configured leave categories"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>

          <LeaveTypeRow row={ROWS[1]} />
        </div>
      </Container>
    </section>
  );
}
