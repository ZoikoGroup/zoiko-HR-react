import { Container, Reveal } from "@/components/ui";

const CONCEPTS = [
  {
    initial: "D",
    title: "Delegation",
    badgeClass: "border-primary/30 bg-primary/10 text-primary",
    points: [
      "Temporarily permits another authorized person to execute specified actions",
      "Scope, actions, exclusions, period, reason, approval if required",
      "Cannot override deny, sensitivity restriction, legal hold or SOD",
      "Expired/revoked delegation removes action path — open work follows fallback",
      "Underlying accountable role stays visible at all times",
    ],
    constraint:
      "Cannot expand authority. Delegate identity must meet security requirements.",
  },
  {
    initial: "R",
    title: "Reassignment",
    badgeClass: "border-indigo-500/30 bg-indigo-500/10 text-indigo-500",
    points: [
      "Moves operational owner/assignee per workflow configuration",
      "Does not automatically grant broader action authority",
      "Changes routing — not authorization",
      "Produces audit record of previous/new owner",
      "Effective-dated per workflow rules",
    ],
    constraint:
      "Reassignment is operational routing, not permission expansion.",
  },
  {
    initial: "E",
    title: "Escalation",
    badgeClass: "border-sky-500/30 bg-sky-500/10 text-sky-500",
    points: [
      "Routes blocked, overdue or exception items to designated owner/queue",
      "Does not imply approval or authority transfer",
      "Context, evidence and reason transferred to new owner",
      "Escalation target role/queue must be configured",
      "Produces audit record with reason and effective time",
    ],
    constraint:
      "Escalation does not bypass authorization gates. Context is preserved.",
  },
];

export function DelegationEscalationSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Delegation, Reassignment and Escalation
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900">
            Three distinct concepts — so work continues without silently
            expanding authority.
          </h2>
          <p className="mt-4 max-w-[720px] leading-6 text-slate-500">
            Delegation transfers execution within a bounded grant. Reassignment
            moves ownership. Escalation routes exceptions. None of them expand
            authority or erase evidence.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {CONCEPTS.map((concept, i) => (
            <Reveal
              key={concept.title}
              delay={0.08 + i * 0.08}
              className="h-full"
            >
              <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex size-8 items-center justify-center rounded-lg border text-sm font-bold ${concept.badgeClass}`}
                  >
                    {concept.initial}
                  </span>
                  <span className="font-heading font-bold text-slate-900">
                    {concept.title}
                  </span>
                </div>
                <ul className="mt-4 flex-1 space-y-2">
                  {concept.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-xs leading-5 text-slate-600"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 size-1 shrink-0 rotate-45 bg-primary"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-lg border-l-2 border-primary bg-primary/5 px-3 py-2.5">
                  <p className="text-[11px] font-semibold text-primary">
                    Key constraint
                  </p>
                  <p className="mt-0.5 text-xs leading-4 text-slate-500">
                    {concept.constraint}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
