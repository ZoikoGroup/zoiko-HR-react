import { Container, Reveal } from "@/components/ui";

const STEPS = [
  {
    label: "Request change",
    status: "Completed",
    className: "bg-emerald-400/10 text-emerald-400",
  },
  {
    label: "Discover impact",
    status: "Completed",
    className: "bg-emerald-400/10 text-emerald-400",
  },
  {
    label: "Identify owners / professional reviews",
    status: "In progress",
    className: "bg-indigo-400/10 text-indigo-400",
  },
  {
    label: "Prepare record and config updates",
    status: "Pending",
    className: "bg-white/5 text-slate-400",
  },
  {
    label: "Obtain approvals",
    status: "Pending",
    className: "bg-white/5 text-slate-400",
  },
  {
    label: "Schedule effective date",
    status: "Pending",
    className: "bg-white/5 text-slate-400",
  },
  {
    label: "Send approved downstream handoffs",
    status: "Blocked",
    className: "bg-red-400/10 text-red-400",
  },
  {
    label: "Validate / reconcile / close",
    status: "Pending",
    className: "bg-white/5 text-slate-400",
  },
];

export function ChangeJourneysSection() {
  return (
    <section className="border-t border-white/10 bg-slate-950 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            Cross-Border and Multi-Location Change Journeys
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold">
            Coordinate changes — without software making legal determinations.
          </h2>
          <p className="mt-4 max-w-[660px] leading-6 text-slate-400">
            Customer-authorized decision makers approve employment and policy
            decisions. Zoiko HR coordinates workflow, status, evidence, and
            configured data changes.
          </p>
        </Reveal>

        <ol className="mt-8 space-y-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.label} delay={Math.min(i * 0.05, 0.3)}>
              <li className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-sky-950 px-5 py-4">
                <span className="flex flex-wrap items-center gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-indigo-400">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium">{step.label}</span>
                  <span
                    className={`rounded-full px-2 py-px text-[10px] font-semibold leading-4 ${step.className}`}
                  >
                    {step.status}
                  </span>
                </span>
                <span aria-hidden className="text-xs text-slate-500">
                  ▼
                </span>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.32}>
          <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5">
            <p className="text-xs leading-5 text-slate-400">
              A journey closes only when required approvals, effective-date
              changes, handoffs, validation, reconciliation, and evidence are
              complete or explicitly waived by an authorized owner.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
