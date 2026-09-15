import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const FAQS = [
  {
    question: "What does Zoiko HR AI Governance cover?",
    answer:
      "How approved AI-related behavior is governed: intended use, decision rights, human review, permission controls, data-use disclosure, evaluation, logging and prohibited uses. It covers the governance framework and the records approved for publication — not every internal detail.",
  },
  {
    question: "Does every feature use AI?",
    answer:
      "No. Nothing on this page establishes that any given Zoiko HR feature uses AI. Only use cases with a current source-approved record appear in the registry; absence of a record is not evidence either way.",
  },
  {
    question: "Can AI make employment decisions automatically?",
    answer:
      "No. Autonomous consequential employment decisions without human review and explicit approval authority are a prohibited use (PRH-001), blocked across all contexts and use cases.",
  },
  {
    question: "How are permissions handled?",
    answer:
      "Access requires every layer of the access stack simultaneously — identity, grant or delegation, role, object or action, purpose and sensitivity, governance state and policy. A deny at any layer blocks the action regardless of the other grants.",
  },
  {
    question: "What data can AI use?",
    answer:
      "Only what an approved AIDataUse record establishes. Input and output categories, customer-data involvement, retention and region come from that source — they are not inferred from the fact that Zoiko HR is HR software.",
  },
  {
    question: "Which providers or models are used?",
    answer:
      "Provider role is published from the approved provider record, and that field is controlled-access. No provider or model name is asserted on this page without an approved source record.",
  },
  {
    question: "Is customer data used for training?",
    answer:
      "Training and fine-tuning status comes from an approved record only. Where no such record establishes it, the field reads Not Established rather than being answered either way.",
  },
  {
    question: "How is AI evaluated?",
    answer:
      "Through scoped, dated evaluation records that carry a method category, evidence class, result state, known limitations and an owner. No aggregate quality, fairness, safety, accuracy or bias score is issued across use cases.",
  },
  {
    question: "What happens when AI is uncertain?",
    answer:
      "Known limitations must be visible and scope-linked before a record can publish, and an overdue record moves into Under Review automatically. Uncertainty is surfaced as a limitation or state — it is not resolved by the system on its own.",
  },
  {
    question: "What uses are prohibited?",
    answer:
      "The prohibited-use registry is always expanded on this page. It currently records autonomous consequential employment decisions and hidden scoring of employees, candidates or workers — both blocked and source-owned.",
  },
  {
    question: "How do I report an AI concern?",
    answer:
      "Use the governance concern form in Section 13 for general AI governance concerns. Security vulnerabilities go to Security Reporting instead — never to the general form.",
  },
  {
    question: "Does this guarantee compliance?",
    answer:
      "No. Governance controls do not establish legal compliance, certify fairness or guarantee error-free outcomes, and this page creates no obligations and does not override the approved DPA, Privacy or Security authorities.",
  },
];

export function AiGovernanceFaqSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading eyebrow="Section 15" title="FAQ, verification and next steps.">
          Direct answers from approved governance records only. Where source
          does not establish a fact, it is stated as not established.
        </SectionHeading>

        {/* Independent columns so opening one card cannot resize its neighbour;
            `display:contents` below lg keeps the cards in 1..n order there. */}
        <div className="mt-9 flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-4">
          {[0, 1].map((column) => (
            <div
              key={column}
              className="contents lg:flex lg:min-w-0 lg:flex-1 lg:flex-col lg:gap-2"
            >
              {FAQS.map((faq, i) => ({ faq, i }))
                .filter(({ i }) => i % 2 === column)
                .map(({ faq, i }) => (
                  <div key={faq.question} style={{ order: i }}>
                    <Reveal delay={Math.min(i * 0.04, 0.3)}>
                      <details className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4">
                          <span className="text-sm font-semibold text-ink">
                            {faq.question}
                          </span>
                          <span
                            aria-hidden
                            className="flex-none text-lg text-slate-400 transition-transform duration-200 group-open:rotate-45"
                          >
                            +
                          </span>
                        </summary>
                        <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">
                          {faq.answer}
                        </p>
                      </details>
                    </Reveal>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
