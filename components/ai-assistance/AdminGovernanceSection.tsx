import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, StepNumber } from "./shared";

const CHANGE_STEPS = [
  "Owner proposes use-case or control change",
  "Impact assessment: purpose, data, permissions, decision rights, regions, security, privacy, legal",
  "Required approvers review with separation of duties",
  "Test environment validates scope, refusal states, source grounding and role behavior",
  "Activation is effective-dated and versioned",
  "Public claims update only from approved publishable records",
  "Overdue review moves record to review state — not silently current",
];

const STATES = [
  "Draft",
  "Current",
  "Conditional",
  "Restricted",
  "Under review",
  "Paused",
  "Superseded",
  "Prohibited",
];

export function AdminGovernanceSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-24">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="Admin governance"
          title="Enable, scope, restrict and review AI use cases with governance traceability."
          className="max-w-[640px]"
        >
          Administrators control which use cases are active, for which roles,
          scopes and purposes — within approved governance states and change
          controls. Public claims update only from approved publishable records.
        </SectionHeading>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal className="lg:h-full">
            <PlaceholderImage
              src="/images/ai-assistance/admin-governance.png"
              alt="Two colleagues in conversation beside a window"
              label="Colleagues discussing a governance change"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl sm:aspect-video lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase leading-5 tracking-wide text-indigo-400">
                Change governance
              </p>
              <ol className="mt-4 flex flex-col gap-3">
                {CHANGE_STEPS.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <StepNumber n={i + 1} tone="dark" />
                    <span className="text-xs leading-5 text-slate-300 sm:text-sm">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-semibold leading-5 text-indigo-400 sm:text-sm">Governance states</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {STATES.map((state) => (
                  <li
                    key={state}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs leading-4 text-slate-300"
                  >
                    {state}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
