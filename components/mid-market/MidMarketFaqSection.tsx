import { Container, Reveal } from "@/components/ui";

/**
 * Questions come from the approved design. The first answer is design copy;
 * the remaining answers are drafts pending approval.
 */
const FAQS: { question: string; answer: string }[] = [
  {
    question: 'What does "mid-market" mean here?',
    answer:
      "It is the approved solution-navigation label for standardized HR operations as complexity increases. It is not a public employee-count, revenue, package or eligibility definition unless separate commercial rules are approved.",
  },
  {
    question: "Can Zoiko HR standardize every HR process?",
    answer:
      "No. Standardization applies to the product areas in your approved scope and configuration. Processes outside that scope, or handled in other systems, stay where they are — the platform makes the boundary explicit rather than implying full coverage.",
  },
  {
    question: "Can different teams or locations use different rules?",
    answer:
      "Yes, through approved variants on a common baseline. Each variant carries an owner, scope, effective dates and status, and overlapping paths are flagged for review rather than merged silently.",
  },
  {
    question: "Does a manager automatically get access to their team's HR data?",
    answer:
      "No. Access is evaluated from configured authorization — role, relationship, scope, purpose, object state, effective dates and delegation. Reporting relationships and corporate hierarchy are not permission inheritance.",
  },
  {
    question: "Can Zoiko HR automate employment decisions?",
    answer:
      "No. The platform supports workforce administration with review, approval and evidence. Employment decisions remain with authorized people; the product does not make them autonomously.",
  },
  {
    question: "Does Zoiko HR run payroll?",
    answer:
      "No. Zoiko HR does not calculate payroll. It coordinates approved HR context with your payroll system, where the payroll system remains authoritative for calculation and its own outputs.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "There is no fixed duration, staffing model or go-live commitment on this page. Scope depends on your data, processes, access model, integrations, testing and decision-making — timelines are agreed during evaluation, not published here.",
  },
  {
    question: "Where can customers get help?",
    answer:
      "Existing customers should use their approved support route rather than the public sales forms on this page. The Help Center, documentation and support contact routes are available for product questions.",
  },
];

export function MidMarketFaqSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Questions
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-sky-950 sm:text-4xl">
              Direct answers about Mid-Market Organizations.
            </h2>
          </Reveal>
        </div>

        <div className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.03, 0.3)}>
              <details className="group py-5" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-semibold text-sky-950">
                    {faq.question}
                  </span>
                  <span className="text-slate-400 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                {faq.answer && (
                  <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-500">
                    {faq.answer}
                  </p>
                )}
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
