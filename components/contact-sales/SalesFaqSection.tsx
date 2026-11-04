import { Container, Reveal } from "@/components/ui";
import { SectionHeading, Chevron } from "./shared";

/**
 * Answers restate boundaries already published on this page. No price, demo
 * commitment, response time, or named representative is introduced here.
 */
const FAQS = [
  {
    question: "How do I contact Zoiko HR sales?",
    answer:
      "Pick the evaluation topic that matches your question, then submit the sales inquiry form with the four required fields. The topic is used to route your inquiry to the appropriate commercial team.",
  },
  {
    question: "Can I request a demo?",
    answer:
      "You can raise it as part of a sales conversation, but demo availability is not promised on this page. It is shown only where an approved source policy supports it.",
  },
  {
    question: "Can I ask about pricing?",
    answer:
      "Yes — choose the pricing or commercial topic and sales can route the question. No prices, discounts, minimums, or terms are published here.",
  },
  {
    question: "Can I discuss integrations?",
    answer:
      "Yes. Select the integrations topic to identify relevant categories. The approved integrations catalog is the authority for currently supported systems, and it is available without submitting an inquiry. Do not send credentials, tenant IDs, or configuration data.",
  },
  {
    question: "Can I request security or procurement information?",
    answer:
      "Trust, legal, and implementation resources — including the DPA and subprocessor documentation — are available without submitting a sales inquiry. They are not lead-gated. Specialists may join an evaluation where coordination is needed, though that is conditional.",
  },
  {
    question: "I am already a customer. Where should I go?",
    answer:
      "Use the approved customer-support path rather than this form. It reaches the support team directly for account, product, billing, and administrator questions.",
  },
  {
    question: "What should I not send?",
    answer:
      "Do not send credentials, tenant IDs, configuration data, employee or payroll records, or other sensitive personal data. Share only the minimum information needed to route your inquiry. Security issues belong in the dedicated Security Reporting route.",
  },
  {
    question: "When will sales respond?",
    answer:
      "No response-time guarantee is made. Receipt confirms only that the system durably accepted your submission — it does not equal sales assignment or a response, and timing varies.",
  },
];

export function SalesFaqSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="mx-auto max-w-[840px]">
          <SectionHeading eyebrow="FAQ · AEO · E10" title="Commercial questions" />

          <div className="mt-9">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.3)}>
                <details className="group border-b border-slate-900/15">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4">
                    <span className="text-base font-semibold leading-6 text-black">
                      {faq.question}
                    </span>
                    <Chevron className="size-4 flex-none text-slate-500 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="pb-4 text-sm leading-6 text-slate-500">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
