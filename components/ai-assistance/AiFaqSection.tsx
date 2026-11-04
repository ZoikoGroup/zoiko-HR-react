"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * Every question is collapsed in the design. These answers restate what the
 * sections above establish; model identity and training claims route to their
 * owning authority, exactly as the "routes elsewhere" card says. Rows without
 * an answer render static. Only one answer is open at a time.
 */
const FAQS: { question: string; answer?: string }[] = [
  {
    question: "What is Zoiko HR AI Assistance?",
    answer:
      "A governed assistive experience for approved HR tasks such as finding authorized information, summarizing process status, preparing drafts for human review and identifying incomplete work. It operates within the user's permitted scope, links outputs to source context where available and does not authorize autonomous high-impact employment decisions.",
  },
  {
    question: "Can AI make employment decisions automatically?",
    answer:
      "No. AI Assistance must not autonomously make, execute or present itself as the authority for consequential hiring, termination, promotion, compensation, disciplinary, grievance, health, leave or similar high-impact employment decisions. Human responsibility and configured approval authority remain explicit.",
  },
  {
    question: "Can AI see all employee data?",
    answer:
      "No. AI Assistance never creates new access. Authorization happens before retrieval: role, organization scope, purpose, the specific record or action, data sensitivity and any policy deny are all checked first, and restricted fields are excluded before content reaches the assistance layer.",
  },
  {
    question: "Where do answers come from?",
    answer:
      "From approved sources the user is permitted to use. Every output shows where the content came from — source title, owning module, version or effective date and currentness state — and where sources conflict, the answer states the conflict and routes to the owning authority.",
  },
  {
    question: "What happens when information is missing or stale?",
    answer:
      "Unknown information stays unknown; it is not substituted with a generated guess. Stale sources are labeled stale without authoritative action language, and where no approved source exists the assistant says the answer is not established and offers a safe route to Documentation or support.",
  },
  {
    question: "Can AI draft HR communications?",
    answer:
      "Yes, as drafts. Generated drafts are visibly labeled and stay non-final until the authorized user reviews, edits and routes them to the owning workflow, and final communications are attributable to that user, not to \"AI.\" Drafts must not contain final legal advice, fabricated evidence or hidden persuasion.",
  },
  {
    question: "Is customer data used for AI training?",
    answer:
      "Training, fine-tuning and retention claims are not made on this page; they are governed by the owning authority. See AI Governance and your applicable agreement and Data Processing Addendum for the current approved position.",
  },
  {
    question: "Which AI model does Zoiko HR use?",
    answer:
      "Specific model and provider identity is not published on this page. Where approved for publication, it is routed to AI Governance.",
  },
  {
    question: "Is every Zoiko HR feature powered by AI?",
    answer:
      "No. AI Assistance covers specific approved use cases that administrators enable for particular roles, scopes and purposes. Capabilities and availability depend on approved use-case records, plan, contract, configuration and jurisdiction.",
  },
  {
    question: "How is AI Assistance controlled?",
    answer:
      "Administrators control which use cases are active, for which roles, scopes and purposes, within approved governance states. Changes follow a governed path — proposal, impact assessment, approval with separation of duties, testing, and effective-dated, versioned activation — and an overdue review moves a use case to review state rather than leaving it silently current.",
  },
];

export function AiFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
      <Container>
        <div className="max-w-[860px]">
          <SectionHeading
            eyebrow="Common questions"
            title="Frequently asked questions about Zoiko HR AI Assistance."
            className="max-w-[640px]"
          />

          <ul className="mt-10 flex flex-col gap-2.5">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              const buttonId = `ai-faq-question-${i}`;
              const panelId = `ai-faq-answer-${i}`;
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
