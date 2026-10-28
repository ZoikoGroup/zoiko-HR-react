import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, BlockLabel } from "./shared";

type State = {
  name: string;
  description: string;
  dot: string;
  card: string;
};

const PRIMARY_STATES: State[] = [
  {
    name: "Current",
    description: "Source-approved, in-scope, within review policy.",
    dot: "bg-emerald-400",
    card: "border-emerald-400/30 bg-emerald-400/5",
  },
  {
    name: "Conditional",
    description: "Applies within a defined scope or context only.",
    dot: "bg-amber-400",
    card: "border-amber-400/30 bg-amber-400/5",
  },
  {
    name: "Restricted",
    description: "Public status visible; record detail is controlled-access.",
    dot: "bg-rose-400",
    card: "border-rose-400/30 bg-rose-400/5",
  },
  {
    name: "Under Review",
    description:
      "Re-evaluation in progress; prior record may not reflect current state.",
    dot: "bg-amber-400",
    card: "border-amber-400/30 bg-amber-400/5",
  },
];

const SECONDARY_STATES: State[] = [
  {
    name: "Paused",
    description: "Governance review suspended; no public claims issued.",
    dot: "bg-slate-400",
    card: "border-slate-400/20 bg-slate-400/5",
  },
  {
    name: "Superseded",
    description: "A newer approved record replaces this one.",
    dot: "bg-slate-400",
    card: "border-slate-400/20 bg-slate-400/5",
  },
  {
    name: "Unknown",
    description:
      "No approved record exists. Record is omitted — not inferred as absent.",
    dot: "bg-slate-400",
    card: "border-slate-400/20 bg-slate-400/5",
  },
];

const SCOPE_DIMENSIONS = [
  ["Product area", "Which approved Zoiko HR product or service scope."],
  ["Capability / use-case", "The specific approved use or function."],
  ["Audience / context", "Who is affected and in what operational context."],
  ["Plan / contract / region", "Availability conditions from approved source only."],
  ["Effective date", "When this record came into force."],
  ["Review due", "When re-evaluation is required."],
  ["Authority route", "Which owning authority establishes non-public detail."],
];

function StateCard({ state }: { state: State }) {
  return (
    <div className={`h-full rounded-xl border px-3.5 py-3 ${state.card}`}>
      <div className="flex items-center gap-1.5">
        <span aria-hidden className={`size-1.5 rounded-full ${state.dot}`} />
        <span className="text-xs font-semibold text-ink">{state.name}</span>
      </div>
      <p className="mt-1.5 text-[10px] leading-4 text-slate-500">
        {state.description}
      </p>
    </div>
  );
}

export function TransparencyStatusSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="Section 3"
          title="Governance scope and transparency status."
        >
          How to interpret AI governance disclosures before reading any use-case
          detail. Status is source-governed — not a green/red score.
        </SectionHeading>

        <div className="mt-7">
          <BlockLabel>Transparency status model — 7 states</BlockLabel>

          <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {PRIMARY_STATES.map((state, i) => (
              <Reveal key={state.name} delay={Math.min(i * 0.05, 0.25)}>
                <StateCard state={state} />
              </Reveal>
            ))}
          </div>

          <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {SECONDARY_STATES.map((state, i) => (
              <Reveal key={state.name} delay={Math.min(i * 0.05, 0.25)}>
                <StateCard state={state} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
          <Reveal className="min-w-0">
            <BlockLabel>
              Scope dimensions — required for any public AI disclosure
            </BlockLabel>
            <div className="mt-2.5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {SCOPE_DIMENSIONS.map(([name, meaning], i) => (
                <div
                  key={name}
                  className={`flex flex-col gap-1 border-b border-slate-100 px-4 py-2.5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${
                    i % 2 === 1 ? "bg-slate-50" : "bg-white"
                  }`}
                >
                  <span className="text-xs font-semibold text-ink">{name}</span>
                  <span className="text-xs leading-4 text-slate-500 sm:text-right">
                    {meaning}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:self-end">
            <PlaceholderImage
              src="/images/ai-governance/transparency-status.png"
              alt="An AI figure working at a wall of dashboards"
              label="Reviewing governance dashboards"
              className="aspect-[280/287] w-full rounded-xl border border-rose-400/20 bg-rose-400/5"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
