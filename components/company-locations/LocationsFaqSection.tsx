"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";

/**
 * Every question is collapsed in the design. These answers restate the
 * published addresses and the boundaries this page already sets, without
 * promising visitor hours or services the page says are not published.
 * Only one answer is open at a time.
 */
const FAQS: { question: string; answer?: string }[] = [
  {
    question: "Where is Zoiko HR headquartered?",
    answer:
      "Zoiko HR's published headquarters is at 1401 21st Street, Suite R, Sacramento, CA 95811, USA.",
  },
  {
    question: "Does Zoiko HR have a European headquarters?",
    answer:
      "Yes. The published European headquarters is at 167-169 Great Portland Street, 5th Floor, London W1W 5PF, UK.",
  },
  {
    question: "Can I visit a Zoiko HR office without an appointment?",
    answer:
      "Visitor access, opening hours, reception and appointment availability are not published here. Please contact Zoiko HR before planning a visit rather than arriving unannounced.",
  },
  {
    question: "Do these locations show where Zoiko HR services are available?",
    answer:
      "No. Office locations show where Zoiko HR currently publishes a corporate presence. They do not define where the product is available, where customer data is hosted, where employees may work, or where a customer is considered legally compliant.",
  },
  {
    question: "Can I mail employee or payroll information to these addresses?",
    answer:
      "No. Do not send employee, payroll or sensitive identity information to a corporate office. Privacy requests use the governed digital privacy route, security findings go through Security Reporting, and customers should use the Support Center for account and product help.",
  },
  {
    question: "How do I contact Zoiko HR?",
    answer:
      "Use Contact Zoiko HR for general company questions. Existing customers should use the Support Center, and careers, partnership, privacy and security questions each have their own route listed under “Plan your next step” above.",
  },
];

export function LocationsFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <div className="max-w-[820px]">
          <Reveal>
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
              Direct answers to company location questions.
            </h2>
          </Reveal>

          <ul className="mt-8 flex flex-col gap-2">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              const buttonId = `locations-faq-question-${i}`;
              const panelId = `locations-faq-answer-${i}`;
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
                            className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                          >
                            <span className="text-sm font-semibold leading-5 text-ink">{faq.question}</span>
                            <span
                              aria-hidden
                              className={`flex-none text-xl leading-7 text-slate-400 transition-transform duration-200 ${
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
                        <div className="flex items-center justify-between gap-4 px-6 py-4">
                          <span className="text-sm font-semibold leading-5 text-ink">{faq.question}</span>
                          <span aria-hidden className="flex-none text-xl leading-7 text-slate-400">
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
