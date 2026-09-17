"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";

/**
 * Every question is collapsed in the design. These answers restate what the
 * sections above establish. Only one answer is open at a time.
 */
const FAQS: { question: string; answer?: string }[] = [
  {
    question: "What is the Zoiko HR Press/Newsroom?",
    answer:
      "The official source for Zoiko HR company announcements, press releases, curated external coverage and approved media resources. Published content is dated, attributed and source-governed, and each item is labeled with its content type.",
  },
  {
    question: "How can journalists contact Zoiko HR?",
    answer:
      "Through Media Inquiries — the route for journalists, editors, producers, analysts and independent media with a legitimate press request, such as a company comment, interview request, fact check or media-resource question. Sales, support, partnerships, privacy, security and careers each have separate routes.",
  },
  {
    question: "Where are press releases?",
    answer:
      "In the Press releases section of this page, and in the latest news index filtered by Press Release. HTML is the primary accessible format for every release; a supplementary PDF is offered only where rights, accessibility and version metadata are current.",
  },
  {
    question: "Where can I download logos or imagery?",
    answer:
      "In the Media resources section, which lists the approved logos, product imagery, boilerplate and media kit with formats, dimensions and rights status shown before download. If an essential resource can't be served, contact Media Inquiries for a rights-current version.",
  },
  {
    question: "What does External Coverage mean?",
    answer:
      "Curated references to third-party reporting, clearly labeled and linked to the original publisher. External Coverage is not authored by Zoiko HR, and its content is not reproduced here.",
  },
  {
    question: "How are corrections handled?",
    answer:
      "Material corrections appear on the affected item with a correction date and a concise description of what changed, and the prior version remains auditable. Withdrawn items are not silently repurposed, and their audit history is retained.",
  },
  {
    question: "Does submitting a deadline or embargo mean Zoiko HR accepts it?",
    answer:
      "No. Submitting a request does not guarantee a response, interview, embargo acceptance or event participation.",
  },
];

export function NewsroomFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <div className="max-w-[820px]">
          <Reveal>
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
              Press &amp; newsroom questions.
            </h2>
          </Reveal>
          <ul className="mt-8 flex flex-col gap-2.5">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              const buttonId = `newsroom-faq-question-${i}`;
              const panelId = `newsroom-faq-answer-${i}`;
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
