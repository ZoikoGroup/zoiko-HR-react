import { Container, Reveal } from "@/components/ui";

const EXCEPTIONS = [
  {
    id: "EXC-0041",
    title: "Validation failed",
    severity: "High",
    severityClass: "bg-red-100 text-red-500",
    meta: "Records · EMEA / UK · Due: Today",
    status: "Open",
    statusClass: "bg-slate-200 text-slate-600",
    accent: "border-l-sky-500",
  },
  {
    id: "EXC-0038",
    title: "Approval overdue",
    severity: "High",
    severityClass: "bg-red-100 text-red-500",
    meta: "Workflows · APAC / JP · Due: Overdue",
    status: "Escalated",
    statusClass: "bg-red-100 text-red-500",
    accent: "border-l-red-400",
  },
  {
    id: "EXC-0035",
    title: "Policy review due",
    severity: "Med",
    severityClass: "bg-amber-100 text-amber-600",
    meta: "Policy · EMEA / UK · Due: Fri",
    status: "Review due",
    statusClass: "bg-amber-100 text-amber-600",
    accent: "border-l-amber-400",
  },
  {
    id: "EXC-0029",
    title: "Integration rejected",
    severity: "High",
    severityClass: "bg-red-100 text-red-500",
    meta: "Integrations · APAC · Due: Today",
    status: "Blocked",
    statusClass: "bg-red-100 text-red-500",
    accent: "border-l-red-400",
  },
];

export function ExceptionsEscalationSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-red-400">
            Exceptions, Cases and Escalation
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-bold text-slate-900">
            Operational exceptions are first-class, attributable and reviewable.
          </h2>
          <p className="mt-2 max-w-[620px] leading-6 text-slate-500">
            Exception severity is operational, not an employee risk or
            performance score. Sensitive content remains restricted.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 max-w-[680px] rounded-lg border border-red-100 bg-red-50/60 px-5 py-3.5">
            <p className="text-xs leading-5 text-slate-500">
              Exceptions cannot be silently closed by unrelated success. Bulk
              close is prohibited unless an exact safe rule is approved.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 space-y-3">
          {EXCEPTIONS.map((exception, i) => (
            <Reveal key={exception.id} delay={0.16 + i * 0.05}>
              <div
                className={`flex flex-wrap items-center justify-between gap-4 rounded-xl border-l-[3px] bg-white px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] ${exception.accent}`}
              >
                <div>
                  <p className="flex flex-wrap items-center gap-2.5 text-sm">
                    <span className="font-semibold text-sky-500">
                      {exception.id}
                    </span>
                    <span aria-hidden className="text-slate-300">
                      ·
                    </span>
                    <span className="font-semibold text-slate-900">
                      {exception.title}
                    </span>
                    <span
                      className={`rounded px-2 py-0.5 text-[10px] font-semibold ${exception.severityClass}`}
                    >
                      {exception.severity}
                    </span>
                  </p>
                  <p className="mt-1.5 text-xs text-slate-500">
                    {exception.meta}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded px-2 py-0.5 text-[10px] font-semibold ${exception.statusClass}`}
                  >
                    {exception.status}
                  </span>
                  <span aria-hidden className="text-xs text-slate-400">
                    ▼
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
