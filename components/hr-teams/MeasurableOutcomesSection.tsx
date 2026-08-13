import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const LEFT_METRICS = [
  { title: "Timesheet completion", description: "Percentage of required records completed by the policy deadline." },
  { title: "Payroll correction rate", description: "Approved records changed after payroll preparation or export." },
  { title: "Worker review participation", description: "Records viewed, acknowledged, commented on or corrected through the configured process." },
];

const RIGHT_METRICS = [
  { title: "Open exception volume", description: "Records pending worker, manager or HR action by age and reason." },
  { title: "Break-policy exceptions", description: "Configured break or rest exceptions requiring review." },
  { title: "Approval cycle time", description: "Time from record submission or exception to approved status." },
];

export function MeasurableOutcomesSection() {
  return (
    <section className="bg-[#F1F5F9] py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              Measurable HR outcomes
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Define Success With Your Own Metrics.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Measure, monitor, and reduce avoidable rework — not invented
              ROI percentages.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:items-center">
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5">
            {LEFT_METRICS.map((metric, i) => (
              <Reveal key={metric.title} delay={0.1 + i * 0.06}>
                <div className="py-5">
                  <p className="font-semibold text-ink">{metric.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">
                    {metric.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/hr-teams/measurable-outcomes.png"
              alt="Team reviewing performance metrics in a meeting"
              label="Success, your metrics"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>

          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5">
            {RIGHT_METRICS.map((metric, i) => (
              <Reveal key={metric.title} delay={0.16 + i * 0.06}>
                <div className="py-5">
                  <p className="font-semibold text-ink">{metric.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">
                    {metric.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
