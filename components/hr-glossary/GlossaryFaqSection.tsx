"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";
import { SectionTitle } from "./shared";

/**
 * Every question is collapsed in the design. These answers restate the
 * "About these definitions" section and avoid promising review cadences or
 * processes the page doesn't establish. Only one answer is open at a time.
 */
const FAQS: { question: string; answer?: string }[] = [
  {
    question: "What is the Zoiko HR Glossary?",
    answer:
      "A searchable A–Z reference of clear definitions for HR, people operations, workforce data and the concepts behind modern HR systems — organized by topic, with related terms linked together.",
  },
  {
    question: "Are glossary definitions legal or professional advice?",
    answer:
      "No. Glossary definitions are educational. Terminology, policies, legal requirements, calculations and employment practices vary by organization and jurisdiction. For legal, tax, payroll, employment, immigration, benefits, medical or compliance advice, use a qualified advisor.",
  },
  {
    question: "Does a glossary definition describe exactly how Zoiko HR works?",
    answer:
      "No. General definitions do not imply Zoiko HR-specific behavior. For current Zoiko HR product behavior, follow the linked Product Documentation — product claims link to approved source documentation only.",
  },
  {
    question: "How often are terms reviewed?",
    answer:
      "Every term has a named editorial owner and a review date, and the glossary shows when it was last reviewed. Terms are updated as HR practice, terminology or approved product documentation changes.",
  },
  {
    question: "Can I suggest a missing term or correction?",
    answer:
      "Yes. Contact the Zoiko HR team with the term or correction you have in mind. Please don't include employee records, credentials or payroll data in your message.",
  },
  {
    question: "Why do some terms redirect to another page?",
    answer:
      "Some concepts are covered in more depth elsewhere — for example in product pages, HR Guides or Product Documentation. Where a fuller or more current source exists, the glossary points you there rather than duplicating it.",
  },
];

export function GlossaryFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <div className="max-w-[760px]">
          <Reveal>
            <SectionTitle>Frequently asked questions</SectionTitle>
          </Reveal>

          <ul className="mt-8 flex flex-col gap-2.5">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              const buttonId = `glossary-faq-question-${i}`;
              const panelId = `glossary-faq-answer-${i}`;
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
