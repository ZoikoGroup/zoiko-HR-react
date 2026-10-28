import { Container, Reveal } from "@/components/ui";
import { SectionHeading, StateChip } from "./shared";

const CATEGORIES = [
  "Validation",
  "Unmapped value",
  "Identifier mismatch",
  "Authorization",
  "Duplicate",
  "Period/cutoff",
  "Schema/version",
  "Destination unavailable",
  "Business rejection",
  "Unknown",
];

const SPECS = [
  {
    area: "Affected scope",
    spec: "Whole handoff vs subset; accepted and rejected items separated.",
  },
  {
    area: "Recovery",
    spec: "Correct source; update mapping; get approval; wait/retry; manual handoff; reconcile; escalate; close with accepted exception — only according to policy.",
  },
  {
    area: "Retry",
    spec: "Visible only after duplicate/idempotency/reconciliation safety check.",
  },
  {
    area: "Closure",
    spec: "Requires resolution/reason/evidence; no silent discard.",
  },
  {
    area: "Reopen",
    spec: "Late correction or downstream contradiction can reopen reconciliation.",
  },
];

export function RejectionSection() {
  return (
    <section className="bg-slate-100 py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="A rejected item is scoped, not a verdict on the whole handoff."
          className="max-w-[700px]"
        >
          Accepted and rejected items stay separately attributable, and retries
          only happen once duplicate/idempotency safety is confirmed.
        </SectionHeading>

        <Reveal delay={0.08}>
          <p className="mt-8 text-sm font-bold text-sky-950">
            Rejection reason categories
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <StateChip key={category}>{category}</StateChip>
            ))}
          </div>
        </Reveal>

        {/* Two columns collapse into labelled blocks below md. */}
        <Reveal delay={0.14}>
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="hidden bg-slate-50 md:grid md:grid-cols-[minmax(0,200px)_minmax(0,1fr)]">
              <p className="px-4 py-3 text-xs font-medium text-slate-500">Area</p>
              <p className="px-4 py-3 text-xs font-medium text-slate-500">
                Required specification
              </p>
            </div>

            {SPECS.map((row) => (
              <div
                key={row.area}
                className="border-t border-slate-100 md:grid md:grid-cols-[minmax(0,200px)_minmax(0,1fr)]"
              >
                <p className="px-4 pt-3.5 text-sm font-semibold text-sky-950 md:py-3.5">
                  {row.area}
                </p>
                <p className="px-4 pb-3.5 pt-1 text-xs leading-5 text-slate-600 md:py-3.5">
                  {row.spec}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
