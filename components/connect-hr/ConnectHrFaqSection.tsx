import { Container, Reveal } from "@/components/ui";

/**
 * The approved design shows this accordion closed, so it carries no answer
 * copy. The answers below are drafts pending approval — each restates a claim
 * already approved elsewhere on this page.
 */
const FAQS: { question: string; answer: string }[] = [
  {
    question: "Which system is the source of truth for employee records?",
    answer:
      "Zoiko HR, created by the HR Admin and approved by HR Admin or HR Leader, with outbound direction to consumers. Each object and field has a single approved source, accountable owner and explicit direction — there is no default last-write-wins for sensitive HR, time or payroll values.",
  },
  {
    question: "Does accepting a handoff mean payroll has been calculated or approved?",
    answer:
      "No. Accepted proves only that the destination accepted defined input context. It does not prove payroll calculation, approval, payment, filing or reconciliation — those remain with the payroll process and authorized payroll reviewers.",
  },
  {
    question: "What happens when an effective date falls after the payroll cutoff?",
    answer:
      "Pay-period and cutoff consequences are calculated and displayed before any handoff is released, so the impact is visible and actionable rather than discovered afterwards.",
  },
  {
    question: "Can I see which records were rejected in a partial failure?",
    answer:
      "Yes. Rejected records carry a reason code from the destination, and every rejected or conflict item has a current owner, due date, priority, next action and escalation path.",
  },
  {
    question: "Is operational reconciliation the same as financial close or statutory sign-off?",
    answer:
      "No. Reconciliation cases here are operational scope only. GL close, bank reconciliation and statutory sign-off are separate and are not proven by an open or closed reconciliation case.",
  },
  {
    question: "Does Connect HR, Time and Payroll work with every payroll provider?",
    answer:
      "Capabilities, data flows, providers and availability depend on your approved product scope, plan, contract, configuration and jurisdiction. Supported providers are confirmed during evaluation rather than published here.",
  },
];

export function ConnectHrFaqSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Section 35 — Frequently Asked Questions
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
            Authority, timing, reconciliation, security and availability —
            answered precisely.
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.3)}>
              <details className="group rounded-lg bg-slate-50 px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="text-sm text-slate-700">{faq.question}</span>
                  <span className="text-slate-400 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
