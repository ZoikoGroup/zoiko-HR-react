import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const STEPS = [
  {
    title: "Source",
    body: "Receive approved workforce/process data from Zoiko HR or authorized connection.",
    evidence: "Source system · Object · Owner · Last available state.",
  },
  {
    title: "Define",
    body: "Apply an approved metric definition and inclusion/exclusion logic.",
    evidence: "Definition version · Calculation owner · Effective date.",
  },
  {
    title: "Validate",
    body: "Check required fields, joins, dates, duplicates, unsupported values and completeness.",
    evidence: "Quality status · Excluded records · Exception count.",
  },
  {
    title: "Analyze",
    body: "Calculate the approved aggregate, trend, distribution or comparison.",
    evidence: "Period · Denominator · Cohort size · Method.",
  },
  {
    title: "Explain",
    body: "Provide labels, notes, source links and optionally approved AI-assisted summary.",
    evidence: "Source set · Generated-state label · Uncertainty.",
  },
  {
    title: "Act",
    body: "Offer permitted next steps: open report, inspect exception, review workflow, export, schedule, request access.",
    evidence: "Action owner · Permission · Audit event.",
  },
];

export function OperatingModelSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Operating model"
          title="From workforce record to decision-ready evidence."
          className="max-w-[640px]"
        >
          Eight governed steps from data receipt to auditable action — visible in
          every report and metric card.
        </SectionHeading>

        <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1fr)_288px]">
          <ol className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {STEPS.map((step, i) => (
              <li key={step.title}>
                <Reveal
                  delay={Math.min(i * 0.05, 0.25)}
                  className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex size-8 flex-none items-center justify-center rounded-full bg-indigo-50 text-xs font-bold leading-4 text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-extrabold leading-5 text-ink">{step.title}</h3>
                  </div>
                  <p className="flex-1 text-xs leading-5 text-slate-500 sm:text-sm">{step.body}</p>
                  <p className="border-t border-slate-100 pt-3 text-xs leading-4 text-slate-400">
                    Evidence: {step.evidence}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={0.1} className="lg:h-full">
            <PlaceholderImage
              src="/images/zoiko-insights/operating-model.png"
              alt="A team meeting around a table with coffee and laptops"
              label="Team meeting around a table"
              loading="lazy"
              className="aspect-video w-full rounded-2xl border border-slate-200 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
