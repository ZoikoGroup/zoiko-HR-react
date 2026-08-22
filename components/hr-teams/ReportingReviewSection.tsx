import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const METRICS = [
  {
    title: "Open work items",
    meta: "Scope: All orgs · Live · Access: HR Admin+",
    value: "41",
    valueTone: "text-sky-400",
    accent: "border-l-sky-500",
  },
  {
    title: "Policy acknowledgment rate",
    meta: "Scope: Per policy · Snapshot · Access: HR Admin+",
    value: "87%",
    valueTone: "text-amber-400",
    accent: "border-l-amber-400",
  },
];

export function ReportingReviewSection() {
  return (
    <section className="bg-sky-950 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Reporting and Operational Review
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-bold">
            Defined, permission-aware HR reporting — no hidden rankings.
          </h2>
          <p className="mt-2 max-w-[620px] leading-6 text-slate-400">
            Every metric has a visible definition, scope, time basis and data
            quality status. No hidden worker ranking or productivity scoring.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 max-w-[680px] rounded-lg border border-white/10 bg-white/5 px-5 py-3.5">
            <p className="text-xs leading-5 text-slate-400">
              Metric definitions below are illustrative. Exact metrics,
              numerators, denominators, scopes and permissions require Product
              validation before public render.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            {METRICS.map((metric, i) => (
              <Reveal key={metric.title} delay={0.16 + i * 0.08}>
                <div
                  className={`overflow-hidden rounded-xl border-l-[3px] bg-slate-900/80 ${metric.accent}`}
                >
                  <div className="flex items-start justify-between gap-4 px-5 py-4">
                    <div>
                      <p className="text-sm font-semibold">{metric.title}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        {metric.meta}
                      </p>
                    </div>
                    <p
                      className={`font-heading text-2xl font-bold ${metric.valueTone}`}
                    >
                      {metric.value}
                    </p>
                  </div>
                  <div className="border-t border-white/10 px-5 py-3">
                    <span className="text-xs font-semibold text-sky-400">
                      View definition
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} y={30} className="h-full">
            <PlaceholderImage
              src="/images/hr-teams/reporting.png"
              alt="A person reviewing reports on a laptop"
              label="Permission-aware reporting"
              className="h-full min-h-72 w-full rounded-xl border border-white/10 bg-slate-900"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
