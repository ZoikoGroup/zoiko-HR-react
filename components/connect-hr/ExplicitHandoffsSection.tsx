import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const OUTCOMES = [
  {
    title: "Defined source",
    body: "Direction, precedence rule, approver and reconciliation owner are explicitly assigned. No silent last-write-wins.",
  },
  {
    title: "Visible cutoff impact",
    body: "Pay-period and cutoff consequences are calculated and displayed before any handoff release.",
  },
  {
    title: "Separate state ladder",
    body: "Sent, received, accepted, processed and reconciled remain distinct observable states with separate evidence.",
  },
  {
    title: "Immutable history",
    body: "Original handoff exchanges are preserved. Corrections create new versions and re-release records.",
  },
  {
    title: "Owned exceptions",
    body: "Every rejected or conflict item has a current owner, due date, priority, next action and escalation path.",
  },
];

export function ExplicitHandoffsSection() {
  return (
    <section className="bg-slate-900 py-16 sm:py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-300">
            Section 3 — Why Explicit Handoffs Matter
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold leading-tight sm:text-3xl">
            Five operational risks that explicit coordination resolves.
          </h2>
          <p className="mt-4 max-w-[620px] leading-6 text-slate-400">
            Framed as operational risks, not universal claims. Each maps to
            product proof in later sections.
          </p>
        </Reveal>

        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal y={30} className="h-full">
            <PlaceholderImage
              src="/images/connect-hr/explicit-handoffs.png"
              alt="Two colleagues in conversation about a coordination process"
              label="Explicit coordination"
              className="h-full min-h-80 w-full border-r border-white/10 bg-red-400/5"
            />
          </Reveal>

          <div className="space-y-3">
            {OUTCOMES.map((outcome, i) => (
              <Reveal key={outcome.title} delay={0.08 + i * 0.05}>
                <div className="bg-emerald-400/5 px-5 py-5 sm:px-6">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-sm bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold leading-4 text-emerald-400">
                      Outcome
                    </span>
                    <span className="text-xs font-medium leading-5 text-emerald-400">
                      {outcome.title}
                    </span>
                  </div>
                  <p className="mt-2.5 text-xs leading-5 text-slate-400">
                    {outcome.body}
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
