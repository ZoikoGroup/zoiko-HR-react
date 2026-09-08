import { Container, Reveal } from "@/components/ui";

const STEPS = [
  { number: "1", title: "Trigger", description: "A workflow starts from an approved event, request or administrator action.", proof: "Trigger label, source system/module, effective scope and validation status." },
  { number: "2", title: "Conditions", description: "Configured conditions determine the eligible path.", proof: "Human-readable condition summary + expandable detail + source freshness." },
  { number: "3", title: "Routing", description: "The system resolves the next owner, queue, role or process step using approved routing rules.", proof: "Route target type, fallback, unresolved/block state." },
  { number: "4", title: "Approval", description: "Where a decision is required, an authorized approver reviews the request context and permitted actions.", proof: "Approver policy, assignment, due state, decision options and reason/evidence requirement." },
  { number: "5", title: "Action", description: "After an approved decision, a permitted downstream action may execute or create a task.", proof: "Action status, idempotency/outcome, source destination, failure/retry state." },
  { number: "6", title: "Evidence", description: "Every material transition is recorded with version, actor and result.", proof: "Timeline/evidence package; immutable history semantics." },
];

export function SixStepsSection() {
  return (
    <section id="six-steps" className="bg-[#F1F5F9] py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Six steps, from trigger to evidence.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Every governed workflow moves through the same lifecycle —
              nothing skips a step, and every transition is recorded.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 divide-y divide-slate-200">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={0.04 + i * 0.04}>
              <div className="grid gap-4 py-5 lg:grid-cols-[auto_1fr_1fr] lg:items-center">
                <span className="font-mono text-lg font-bold text-primary">{step.number}</span>
                <div>
                  <p className="font-semibold text-ink">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">{step.description}</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-xs text-ink/50">
                  {step.proof}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
