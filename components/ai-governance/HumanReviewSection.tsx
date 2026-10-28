import type { ReactNode } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, BlockLabel, ChatIcon, ApprovalIcon } from "./shared";

type DecisionClass = {
  name: string;
  summary: string;
  reviewer: string;
  override: string;
  example: string;
  card: string;
  title: string;
  icon: ReactNode;
};

// Only the two classes the design shows are rendered. The remaining classes
// referenced by the lede have no approved copy in the source, so nothing is
// invented for them here.
const CLASSES: DecisionClass[] = [
  {
    name: "Advisory",
    summary:
      "Output may inform an authorized person. No direct consequential action implied.",
    reviewer: "Authorized user; scope defined by organizational policy.",
    override: "Not applicable — informational only.",
    example: "AI-assisted search; draft suggestion; informational summary.",
    card: "border-sky-300 bg-sky-50/60",
    title: "text-sky-500",
    icon: <ChatIcon className="size-4 text-sky-400" />,
  },
  {
    name: "Approval Required",
    summary:
      "A specific authorized approver must approve before any governed downstream action occurs.",
    reviewer: "Named approver role; evidence and separation of duties required.",
    override:
      "Override allowed only where explicitly granted; non-overridable uses remain blocked.",
    example:
      "Governed action requiring documented approval chain and evidence record.",
    card: "border-violet-300 bg-violet-50/50",
    title: "text-violet-500",
    icon: <ApprovalIcon className="size-4 text-emerald-500" />,
  },
];

const AUTHORITY_STATES = [
  { label: "Awaiting review", className: "border-slate-300 text-ink" },
  { label: "Approved", className: "border-emerald-300 text-emerald-500" },
  { label: "Rejected", className: "border-rose-200 text-rose-400" },
  { label: "More info required", className: "border-slate-300 text-ink" },
  { label: "Escalated", className: "border-violet-200 text-violet-400" },
  { label: "Blocked / Prohibited", className: "border-rose-300 text-rose-500" },
  { label: "Expired authority", className: "border-slate-200 text-slate-400" },
];

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
      <span className="w-20 flex-none text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400">
        {label}
      </span>
      <span className="text-xs leading-4 text-slate-600">{value}</span>
    </div>
  );
}

export function HumanReviewSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="Section 5"
          title="Human review, decision rights and override."
        >
          Four decision-right classes define governance semantics. Categories
          define requirements and must not imply a production feature exists for
          each class.
        </SectionHeading>

        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          <div className="flex min-w-0 flex-col gap-4">
            {CLASSES.map((decisionClass, i) => (
              <Reveal key={decisionClass.name} delay={Math.min(i * 0.08, 0.24)}>
                <div
                  className={`rounded-2xl border px-5 py-4 ${decisionClass.card}`}
                >
                  <div className="flex items-center gap-2">
                    {decisionClass.icon}
                    <h3
                      className={`font-heading text-lg font-extrabold ${decisionClass.title}`}
                    >
                      {decisionClass.name}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-sm leading-6 text-slate-700">
                    {decisionClass.summary}
                  </p>
                  <div className="mt-3 flex flex-col gap-1.5">
                    <MetaRow label="Reviewer" value={decisionClass.reviewer} />
                    <MetaRow label="Override" value={decisionClass.override} />
                    <MetaRow label="Example" value={decisionClass.example} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12} className="lg:h-full">
            <PlaceholderImage
              src="/images/ai-governance/human-review.png"
              alt="A review board meeting around a boardroom table"
              label="A review board in session"
              className="aspect-[603/393] w-full rounded-2xl border border-amber-300/60 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="mt-5 rounded-2xl border border-slate-200 bg-white px-5 py-4">
            <BlockLabel>Human authority states</BlockLabel>
            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2">
              {AUTHORITY_STATES.map((state, i) => (
                <span key={state.label} className="flex items-center gap-2">
                  <span
                    className={`rounded-lg border bg-white px-3 py-1.5 text-xs font-medium ${state.className}`}
                  >
                    {state.label}
                  </span>
                  {i < AUTHORITY_STATES.length - 1 && (
                    <span aria-hidden className="text-xs text-slate-300">
                      →
                    </span>
                  )}
                </span>
              ))}
            </div>
            <p className="mt-3 text-[10px] leading-4 text-slate-400">
              Consequential employment, hiring, termination, promotion, pay,
              disciplinary, grievance, health or leave decisions must not be
              implied as autonomous. Manager role never automatically grants
              sensitive data or AI-decision authority.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
