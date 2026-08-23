import { Container, Reveal } from "@/components/ui";

const STAGES = [
  {
    number: "01",
    title: "Intake",
    body: "Request, event, record change, policy review or service case enters with source and purpose.",
  },
  {
    number: "02",
    title: "Validate",
    body: "Required fields, source authority, scope, conflicts, effective date, dependency and permission checks.",
  },
  {
    number: "03",
    title: "Route",
    body: "Assign accountable owner or queue based on approved rules. No hidden employee scoring.",
  },
  {
    number: "04",
    title: "Review / Decide",
    body: "Human review or approval where required. Decision rights explicit; delegation bounds visible.",
  },
  {
    number: "05",
    title: "Apply / Fulfill",
    body: "Make authorized update, complete service action, publish controlled version or send approved handoff.",
  },
  {
    number: "06",
    title: "Evidence",
    body: "Preserve actor/role, object, before/after where appropriate, reason, timestamp, source and approval.",
  },
  {
    number: "07",
    title: "Review / Improve",
    body: "Reconcile exceptions, overdue work, data quality, policy review dates and workflow performance.",
  },
];

const EVIDENCE_RAIL = [
  "Source",
  "Owner",
  "Role",
  "Scope",
  "Effective date",
  "Status",
  "Reason",
  "Approval",
  "Audit",
  "Retention",
];

export function OperatingModelSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            HR Team Operating Model
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-bold text-slate-900">
            Intake to evidence — every stage visible and accountable.
          </h2>
          <p className="mt-2 max-w-[580px] leading-6 text-slate-500">
            Human authority and permission checks remain explicit at every
            decision point. Select a stage to see its fields.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {STAGES.map((stage, i) => (
            <Reveal key={stage.number} delay={Math.min(i * 0.05, 0.3)}>
              <div className="relative h-full overflow-hidden rounded-xl bg-white/95 px-4 py-5 shadow-[0_2px_12px_rgba(0,0,0,0.09)]">
                <span
                  aria-hidden
                  className="absolute -top-1 right-2 font-heading text-6xl font-extrabold leading-none text-black/5"
                >
                  {stage.number}
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-sky-500">
                  {stage.number}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {stage.title}
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {stage.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-7 rounded-xl border-l-[3px] border-sky-500 bg-sky-950 px-6 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.24)]">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-500">
              Evidence Rail
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {EVIDENCE_RAIL.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
