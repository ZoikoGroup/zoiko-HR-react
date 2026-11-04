import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { CautionNote, SectionHeading } from "./shared";

const METRICS = [
  {
    label: "Review completion",
    value: "94%",
    context: "Self-review · Global Product Org · 2026 Mid-Year",
    note: "Completed / in-scope for selected cycle.",
  },
  {
    label: "Manager review",
    value: "71%",
    context: "Of assigned manager reviews complete",
    note: "18 due this week — overdue count by stage, not a manager performance score.",
  },
  {
    label: "Check-in cadence",
    value: "82%",
    context: "Configured check-ins completed / expected",
    note: "Process adoption monitor — not hidden employee activity.",
  },
  {
    label: "Feedback coverage",
    value: "67%",
    context: "Participants with configured feedback coverage",
    note: "No quality judgment inferred from coverage alone.",
  },
];

export function ReportingSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Reporting & insights"
          title="Understand process health and workforce themes without turning reporting into employee surveillance."
          className="max-w-[640px]"
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,389px)]">
          <div className="grid gap-4 sm:grid-cols-2">
            {METRICS.map((metric, i) => (
              <Reveal key={metric.label} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-semibold uppercase leading-4 tracking-[0.08em] text-slate-600">
                    {metric.label}
                  </p>
                  <p className="mt-4 font-heading text-3xl font-extrabold leading-9 text-ink">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-xs leading-5 text-slate-400">{metric.context}</p>
                  <p className="mt-auto border-t border-slate-100 pt-3 text-xs italic leading-5 text-slate-500">
                    {metric.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12} className="lg:h-full">
            <PlaceholderImage
              src="/images/performance-management/reporting.png"
              alt="Two colleagues pointing out figures on a wall display"
              label="Reviewing process health figures"
              loading="lazy"
              className="aspect-video w-full rounded-2xl border border-slate-200 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>

        <Reveal>
          <CautionNote className="mt-8">
            Every report shows time period, population, scope, data freshness
            and permissions. Employee-level drilldown is role and purpose
            restricted. No hidden productivity, sentiment or &quot;flight
            risk&quot; prediction on this page.
          </CautionNote>
        </Reveal>
      </Container>
    </section>
  );
}
