import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, BlockLabel } from "./shared";

const RECORD_FIELDS = [
  ["Evaluation ID", "[From approved record]"],
  ["Use-case reference", "[Linked to AIUseCase record]"],
  ["Method category", "[From approved evaluation source]"],
  ["Scope", "[Defined — no universal claim]"],
  ["Evidence class", "[From approved evaluation]"],
  ["Result state", "[Evaluated / Conditional / other]"],
  ["Known limitations", "[Visible, scoped, dated]"],
  ["Owner", "[Product / AI governance owner]"],
  ["Review due", "[From approved record]"],
];

const EVALUATION_STATES = [
  { label: "Evaluated in scope", className: "border-emerald-200 bg-emerald-50 text-emerald-500" },
  { label: "Conditional", className: "border-amber-200 bg-amber-50 text-amber-500" },
  { label: "Under review", className: "border-amber-200 bg-amber-50 text-amber-500" },
  { label: "Not evaluated", className: "border-slate-200 bg-slate-100 text-slate-400" },
  { label: "Failed / blocked", className: "border-rose-200 bg-rose-50 text-rose-400" },
  { label: "Superseded", className: "border-slate-200 bg-slate-100 text-slate-400" },
];

export function EvaluationSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="Section 9"
          title="Evaluation, quality, limitations and monitoring."
        >
          Evaluation records are scoped, dated and limitation-aware. No
          aggregate AI quality, fairness, safety, accuracy or bias score is
          issued across use cases.
        </SectionHeading>

        <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
          <Reveal className="min-w-0">
            <BlockLabel>Evaluation record — required fields</BlockLabel>
            <div className="mt-2.5 overflow-hidden rounded-2xl border border-slate-200">
              {RECORD_FIELDS.map(([field, value], i) => (
                <div
                  key={field}
                  className={`flex flex-col gap-1 border-b border-slate-100 px-4 py-2.5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${
                    i % 2 === 1 ? "bg-slate-50" : "bg-white"
                  }`}
                >
                  <span className="text-xs font-semibold text-ink">{field}</span>
                  <span className="font-mono text-[11px] text-slate-400 sm:text-right">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:h-full">
            <PlaceholderImage
              src="/images/ai-governance/evaluation.png"
              alt="A presenter reviewing results with a seated group"
              label="Reviewing evaluation results"
              className="aspect-[300/338] w-full rounded-2xl lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="mt-5">
            <BlockLabel>Evaluation states</BlockLabel>
            <div className="mt-2.5 flex flex-wrap gap-2.5">
              {EVALUATION_STATES.map((state) => (
                <span
                  key={state.label}
                  className={`rounded-lg border px-3.5 py-2 text-xs font-semibold ${state.className}`}
                >
                  {state.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
