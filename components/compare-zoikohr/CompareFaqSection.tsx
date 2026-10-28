"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";

/**
 * Every question is collapsed in the design. These answers restate the
 * methodology, status model and review workflow described on this page.
 * Only one answer is open at a time.
 */
const FAQS: { question: string; answer?: string }[] = [
  {
    question: "Does Zoiko HR produce an overall winner score?",
    answer:
      "No. No aggregate winner score is produced. Each criterion carries its own governed status, claim, qualifier and source, so you can weigh the criteria that matter to your organization rather than rely on a single number.",
  },
  {
    question: 'What does "Not verified" mean?',
    answer:
      'It means no qualifying evidence was located, or the evidence could not be validated, at the review date. "Not verified" is never shown as "No" or "Unavailable" — absence of evidence is not evidence of absence.',
  },
  {
    question: "How are comparison criteria defined?",
    answer:
      "Criteria sit within eleven categories — such as platform scope, roles and governance, integrations, reporting, AI governance, implementation, commercial and accessibility — each with a stable definition applied equally to every comparison subject.",
  },
  {
    question: "How often are comparisons updated?",
    answer:
      "Every claim carries a source date and a review date, and each criterion is scheduled for re-review against its freshness threshold. A material source change, a dispute or a methodology change triggers earlier review, and anything awaiting re-check is shown as Under review rather than current.",
  },
  {
    question: "Can I report an inaccurate or outdated statement?",
    answer:
      "Yes. Use the report form on this page. Reports are reviewed against qualifying sources, submission does not automatically change the published status, and no marketing consent is required.",
  },
  {
    question: "Does a Limited/conditional status mean the capability is unavailable?",
    answer:
      "No. It means the claim is supported only within a specific plan, region, configuration, role, edition or other condition. That qualifier is always shown right next to the claim so the condition is never hidden.",
  },
  {
    question: "Can this comparison tell me which HR platform is right for my organization?",
    answer:
      "No. It shows sourced, dated and qualified evidence, but the right fit depends on your own requirements, configuration and context. Take the Product Tour, request pricing or book a demo to validate the requirements that matter to you.",
  },
  {
    question: "Are pricing and implementation outcomes directly comparable?",
    answer:
      "Not directly. Commercial criteria cover what is publicly disclosed — pricing model, plan and entitlement qualifiers, implementation dependencies and contract factors — but actual cost and implementation outcomes depend on scope, configuration and agreement terms.",
  },
];

export function CompareFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <div className="max-w-[820px]">
          <Reveal>
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
              Comparison method questions.
            </h2>
          </Reveal>

          <ul className="mt-8 flex flex-col gap-2.5">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              const buttonId = `compare-faq-question-${i}`;
              const panelId = `compare-faq-answer-${i}`;
              return (
                <li key={faq.question}>
                  <Reveal delay={Math.min(i * 0.04, 0.24)}>
                    <div className="rounded-xl border border-slate-200 bg-white">
                      {faq.answer ? (
                        <>
                          <button
                            type="button"
                            id={buttonId}
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                          >
                            <span className="text-sm font-semibold leading-5 text-ink">{faq.question}</span>
                            <span
                              aria-hidden
                              className={`flex-none text-lg leading-none text-slate-400 transition-transform duration-200 ${
                                isOpen ? "rotate-45" : ""
                              }`}
                            >
                              +
                            </span>
                          </button>
                          <div
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            hidden={!isOpen}
                            className="px-6 pb-5 text-sm leading-6 text-slate-600"
                          >
                            {faq.answer}
                          </div>
                        </>
                      ) : (
                        <div className="flex items-center justify-between gap-4 px-6 py-5">
                          <span className="text-sm font-semibold leading-5 text-ink">{faq.question}</span>
                          <span aria-hidden className="flex-none text-lg leading-none text-slate-400">
                            +
                          </span>
                        </div>
                      )}
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
