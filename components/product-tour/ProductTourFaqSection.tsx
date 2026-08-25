import { Container, Reveal } from "@/components/ui";

/**
 * Questions come from the approved design, which shows the accordion closed and
 * therefore carries no answer copy. The answers below are drafts pending
 * approval — each restates claims already approved elsewhere on this page.
 */
const FAQS: { question: string; answer: string }[] = [
  {
    question: "Do I need an account?",
    answer:
      "No. The Product Tour is a no-signup, self-guided walkthrough — no account or form is required, no data is submitted and no account is created.",
  },
  {
    question: "Is this a live customer environment?",
    answer:
      "No. Every chapter shows representative product experiences using synthetic example data. It is not a live customer tenant, contract, security artifact or guarantee of plan, integration or jurisdiction availability.",
  },
  {
    question: "Does every screen mean the feature is available to me?",
    answer:
      "No. Capabilities, market availability, integrations, plan scope and jurisdiction coverage can vary by plan, contract, configuration and market. Product availability depends on your approved scope rather than on what a tour screen shows.",
  },
  {
    question: "Can I share a chapter?",
    answer:
      "Yes. Chapters viewed are tracked in this browser session only — not as a certification, readiness score or account record — and you can restart or share at any time.",
  },
  {
    question: "Where do I verify current product behavior?",
    answer:
      "Through the Resource Center and Trust Center, and with your approved product scope, plan, contract, configuration, integrations and jurisdiction as confirmed during evaluation.",
  },
];

export function ProductTourFaqSection() {
  return (
    <section className="bg-slate-50 pb-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <div className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.3)}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                    <span className="text-sm font-semibold text-slate-900">
                      {faq.question}
                    </span>
                    <span className="text-primary transition-transform duration-200 group-open:rotate-180">
                      ↓
                    </span>
                  </summary>
                  {faq.answer ? (
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {faq.answer}
                    </p>
                  ) : null}
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
