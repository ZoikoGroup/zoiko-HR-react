"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * Every question is collapsed in the design. These answers restate the
 * boundaries the sections above already establish, and avoid committing to
 * capabilities, timelines or availability that vary by plan and configuration.
 */
const FAQS: { question: string; answer: string }[] = [
  {
    question: "What is performance management software?",
    answer:
      "Software that structures how an organization sets expectations, gathers feedback, runs reviews and follows up on development. Instead of goals in spreadsheets and ratings without context, the process runs in one workflow where ownership, evidence and next steps stay visible.",
  },
  {
    question: "What can Zoiko HR Performance Management do?",
    answer:
      "It brings goals, check-ins, continuous feedback, review cycles, calibration and development actions into one permission-aware workflow, with visible ownership and evidence for employees, managers and HR. Capabilities vary by plan, configuration and jurisdiction.",
  },
  {
    question: "Does Zoiko HR automatically rate employees?",
    answer:
      "No. Zoiko HR supports configured review processes but does not autonomously make high-impact employment decisions. Where ratings are configured, they come from authorized reviewers with criteria, evidence and scale anchors visible — AI-generated final ratings without meaningful human review are not permitted.",
  },
  {
    question: "Can employees complete self-reviews?",
    answer:
      "Yes, where configured. Employees see the cycle's dates, criteria and visibility before they start, submit their self-assessment within the cycle window, and can reopen it only through a configured path. The self-review and the manager review are kept as separate records — neither silently replaces the other.",
  },
  {
    question: "Does it support calibration?",
    answer:
      "Yes. Authorized reviewers compare outcomes in context using configured rules, with the original manager submission visible beside any calibration proposal, and every change carries rationale, actor and approval state. Forced bell-curve distributions, automatic quotas and hidden recalculations are not part of the process.",
  },
  {
    question: "Can we use it across multiple countries?",
    answer:
      "Shared performance standards can coexist with approved entity, location and jurisdiction rules, so cycles, criteria, visibility and workflows can adapt locally where your organization requires it. Specific capabilities vary by plan, configuration and jurisdiction.",
  },
  {
    question: "How does AI work in performance management?",
    answer:
      "Where enabled, governed AI assistance can help draft review summaries and feedback wording, summarize goal or check-in history, surface incomplete sections and answer what is due — using only content the user is authorized to access. Human review is mandatory, and AI does not autonomously make high-impact employment decisions.",
  },
  {
    question: "Can it track employee productivity?",
    answer:
      "No. Reporting covers process health — such as review completion, check-in cadence and feedback coverage — with the time period, population, scope and permissions shown. There is no hidden productivity, sentiment or \"flight risk\" prediction, and development-action completion is never inferred from passive behavior.",
  },
  {
    question: "How is performance data protected?",
    answer:
      "Access is permission-aware: employees, managers and HR see only the context their role and purpose permit, and employee-level drilldown is role and purpose restricted. Goals, feedback, review inputs and state changes remain attributable and traceable. The wider security program is described in Security & Privacy.",
  },
  {
    question: "What does implementation require?",
    answer:
      "Implementation means configuring your review framework, cycles, criteria, visibility rules and workflows around your roles, policies and operating model. Book a demo to walk through what that would look like for your organization.",
  },
];

export function PerformanceFaqSection() {
  // Only one answer open at a time; clicking the open question closes it.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="max-w-[860px]">
          <SectionHeading
            eyebrow="Questions & answers"
            title="Common questions about Zoiko HR Performance Management."
            className="max-w-[640px]"
          />

          <ul className="mt-10 flex flex-col gap-2.5">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              const buttonId = `performance-faq-question-${i}`;
              const panelId = `performance-faq-answer-${i}`;
              return (
                <li key={faq.question}>
                  <Reveal delay={Math.min(i * 0.04, 0.24)}>
                    <div className="rounded-xl border border-slate-200 bg-white">
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      >
                        <span className="text-sm font-semibold leading-5 text-ink">
                          {faq.question}
                        </span>
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
