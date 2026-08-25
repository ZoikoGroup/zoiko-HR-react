import { Container, Reveal } from "@/components/ui";

/**
 * Questions come from the approved design, which shows the accordion closed and
 * therefore carries no answer copy. The answers below are drafts pending
 * approval — each restates claims already approved elsewhere on this page.
 */
const FAQS: { question: string; answer: string }[] = [
  {
    question: "What is Zoiko HR for Managers?",
    answer:
      "It is a role-oriented solution pathway for people managers and delegated approvers who need to complete assigned approvals, team actions and authorized administration, with the minimum necessary team context, decision evidence, effective dates, deadlines, delegation and escalation.",
  },
  {
    question: "Does being a manager automatically give access to employee data?",
    answer:
      "No. Manager status or reporting line alone does not grant unrestricted access to employee records, sensitive fields, HR notes, documents, exports, audit history or administration. Team context is filtered by current permission, action purpose and sensitivity, and restricted fields are excluded from delivery rather than hidden in the browser.",
  },
  {
    question: "What can managers approve?",
    answer:
      "Whatever their configured authority permits for an assigned action — with decision controls appearing only after current/proposed values, reason, evidence, conflicts and co-approvers are available. Zoiko HR records configured human decisions; it does not autonomously determine employment or legal outcomes.",
  },
  {
    question: "Can managers update employee records?",
    answer:
      "Managers propose and request rather than directly edit source-controlled records. Each team action shows permission, workflow, effective-date and evidence requirements before input is accepted, and submission never silently overwrites source-controlled fields.",
  },
  {
    question: "How does delegation work?",
    answer:
      "Delegation temporarily permits another authorized person to execute specified actions within a bounded grant — scope, actions, exclusions, period, reason and approval where required. It cannot expand authority or override a deny, sensitivity restriction, legal hold or separation of duties, and the underlying accountable role stays visible.",
  },
  {
    question:
      "Does manager reporting track productivity or employee behavior?",
    answer:
      "No. The manager experience covers authorized work only — assigned actions, decision evidence and action history. There is no productivity scoring or behavior tracking, and full audit and security logs remain separately permissioned.",
  },
  {
    question: "How is the Managers solution implemented?",
    answer:
      "Through your approved product scope, role configuration, plan, contract, integrations and jurisdiction — which determine the specific actions and fields available. Implementation, support and availability are agreed during evaluation rather than published here.",
  },
];

export function ManagersFaqSection() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Common Questions
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
            Frequently asked questions.
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 max-w-4xl divide-y divide-slate-200 border-t border-slate-200">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.3)}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="text-sm font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <span className="text-primary transition-transform duration-200 group-open:rotate-45">
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
