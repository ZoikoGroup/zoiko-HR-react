"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * Every question is collapsed in the design. These answers restate what the
 * sections above establish and avoid committing to capabilities that depend
 * on plan, configuration or approval. Only one answer is open at a time.
 */
const FAQS: { question: string; answer?: string }[] = [
  {
    question: "What is Zoiko Insights?",
    answer:
      "Zoiko Insights is the workforce reporting and insight experience in Zoiko HR. It helps authorized users analyze approved workforce records and HR process evidence through dashboards, reports and defined metrics — while preserving source context, data quality, permission boundaries and human accountability.",
  },
  {
    question: "What can Zoiko Insights report on?",
    answer:
      "Report families cover workforce overview, leave and attendance context, process health, and data quality and exceptions — each with governed metric definitions. Exact report families depend on plan, configuration, source data and permissions.",
  },
  {
    question: "Can Zoiko Insights predict employee attrition?",
    answer:
      "Not for named employees without an approved capability. Any forecast or recommendation must be explicitly approved, source-grounded, labeled and subject to human review, and comparisons use 'changed / associated / observed' language rather than implying causation.",
  },
  {
    question: "Does Zoiko Insights score employee productivity?",
    answer:
      "No. It does not assign universal productivity or behavior scores and does no hidden productivity, behavior or commitment tracking. It reports on approved HR records and process states — process health never becomes a hidden performance score or a default employee leaderboard.",
  },
  {
    question: "Can managers see all employee data?",
    answer:
      "No. Access is role- and purpose-sensitive: viewers see only data authorized by their role, assigned scope, purpose and field sensitivity. Filters define scope within that permission — they never expand authorization — and sensitive attributes require explicit permission.",
  },
  {
    question: "How does Zoiko Insights handle small groups?",
    answer:
      "With configurable cohort suppression. When a filter combination produces a cohort below the configured minimum, the value is replaced with \"Not shown — cohort below reporting threshold.\" Suppression runs after every filter combination, and the value is not leaked through labels, tooltips, exports, accessible text or comparison arithmetic.",
  },
  {
    question: "Can reports be exported?",
    answer:
      "Where enabled, yes. Export preserves the same permissions as the live view — including cohort suppression and field masking — with no bypass. Local restrictions on sensitive fields or transfer destinations can also apply.",
  },
  {
    question: "Does AI make workforce decisions?",
    answer:
      "No. Zoiko Insights does not autonomously make promotion, termination, compensation or other consequential employment decisions. Where enabled, governed AI assists with approved summaries or explanations, labeled as generated, and human authority remains.",
  },
  {
    question: "Does Zoiko Insights replace BI tools?",
    answer:
      "Zoiko Insights focuses on governed workforce reporting from Zoiko HR records and authorized connections, with definitions, sources and permissions built in. Whether it replaces or complements your existing BI tools depends on your reporting needs — book a demo to walk through your use case.",
  },
  {
    question: "How is data freshness communicated?",
    answer:
      "Currentness is shown per source and metric. Every metric card carries its as-of date, source and quality state — verified, partial, stale, unknown or suppressed — so stale or partial data stays visible instead of being implied as current.",
  },
];

export function InsightsFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="max-w-[860px]">
          <SectionHeading
            eyebrow="Common questions"
            title="Direct answers about Zoiko Insights."
            className="max-w-[640px]"
          />

          <ul className="mt-10 flex flex-col gap-2.5">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              const buttonId = `insights-faq-question-${i}`;
              const panelId = `insights-faq-answer-${i}`;
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
