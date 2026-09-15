"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "What is Data Import & Export in Zoiko HR?",
    answer:
      "It’s a governed way to prepare, map, validate, preview, import, migrate or export approved workforce information according to the product capabilities and access rules currently enabled for your organization — not a generic file uploader or backup tool.",
  },
  {
    question: "Which file formats can Zoiko HR import or export?",
    answer:
      "File format support depends on current approved capability records for your organization. Only current approved registry formats are ever claimed.",
  },
  {
    question: "Can I migrate data from another HR system?",
    answer:
      "Migration support depends on approved source, scope, cutover model, and organizational authorization — there is no universal migration promise.",
  },
  {
    question: "Does a successful import mean all downstream systems are updated?",
    answer:
      "No. Data Import & Export validates and commits records within its governed scope. Downstream propagation is subject to explicit integration boundaries and source-of-truth ownership.",
  },
  {
    question: "Can imports be rolled back?",
    answer:
      "Rollback capability is classified per change (direct, restore, compensating, or manual) and is never assumed to be automatic or reversible.",
  },
  {
    question: "Can I export all employee data?",
    answer:
      "Export scope, fields, and recipient depend on current authorization, permission boundaries, and privacy classification.",
  },
  {
    question: "How are errors handled?",
    answer:
      "Every correction, skip, or retry stays linked to its original issue and evidence trail — fixing an error is never the same as hiding it.",
  },
];

export function DataImportExportFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-slate-100 py-16 lg:py-24 border-t border-slate-200">
      <Container>
        <div className="space-y-10 max-w-4xl mx-auto">
          <div className="space-y-3.5">
            <Reveal>
              <span className="text-blue-600 text-xs font-bold uppercase tracking-wider font-['IBM_Plex_Sans']">
                QUESTIONS
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-sky-950 font-['Manrope'] leading-tight">
                Direct answers about Data Import &amp; Export.
              </h2>
            </Reveal>
          </div>

          <div className="divide-y divide-stone-200 border-t border-b border-stone-200">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <Reveal key={idx} delay={0.04 * idx + 0.1}>
                  <div className="py-5">
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 text-left focus:outline-none"
                    >
                      <span className="text-gray-800 text-base font-bold font-['Arial']">
                        {faq.question}
                      </span>
                      <span className="text-slate-500 text-lg font-normal font-['Arial'] shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-3 text-slate-500 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed max-w-3xl">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
