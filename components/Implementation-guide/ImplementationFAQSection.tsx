"use client";

import { useState } from "react";
import { Container, Reveal, Button } from "@/components/ui";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Is there a fixed implementation timeline?",
    answer:
      "Timelines are determined by scope complexity and organizational readiness rather than fixed arbitrary deadlines. A tailored timeline is finalized during the initial scope manifest process.",
  },
  {
    id: 2,
    question: "Who authorizes the launch decision?",
    answer:
      "Launch is an authorized, evidence-based human decision signed off by designated executive and operational data owners.",
  },
  {
    id: 3,
    question: "What is included in the scope manifest?",
    answer:
      "The scope manifest defines functional modules, integrations, user roles, data migration boundaries, and agreed acceptance criteria.",
  },
  {
    id: 4,
    question: "How are data quality issues handled?",
    answer:
      "Data quality is validated during pre-migration checks. Any anomalies or errors trigger reconciliation workflows prior to production sign-off.",
  },
  {
    id: 5,
    question: "What happens if validation tests fail?",
    answer:
      "If validation tests fail, the launch gate status shifts to HOLD or PARTIAL GO, initiating a structured recovery path until issues are resolved.",
  },
  {
    id: 6,
    question: "Does Zoiko guarantee compliance outcomes?",
    answer:
      "Zoiko provides tools and governance frameworks to support compliance, but operational execution and policy adherence remain the responsibility of the organization.",
  },
  {
    id: 7,
    question: "Can we implement in phases?",
    answer:
      "Yes. Phase-based implementation allows key functional modules or operational business units to activate sequentially with documented exceptions.",
  },
  {
    id: 8,
    question: "What is the stabilization period?",
    answer:
      "The stabilization period follows immediate go-live, focusing on health checks, adoption monitoring, and continuous operational handover.",
  },
  {
    id: 9,
    question: "Who owns the customer data during implementation?",
    answer:
      "The customer maintains full ownership and control of all organizational and employee data at all times throughout the process.",
  },
  {
    id: 10,
    question: "How are integrations tested?",
    answer:
      "Integrations undergo functional, schema, and authentication testing in a staging environment prior to final production cutover.",
  },
  {
    id: 11,
    question: "What training is available during implementation?",
    answer:
      "Role-tailored enablement resources are provided, including product tours, admin guides, and targeted workflow walkthroughs.",
  },
  {
    id: 12,
    question:
      "Where can I find the implementation scope for my organization?",
    answer:
      "Your approved implementation scope and associated documentation are accessible directly within your organization's governance portal.",
  },
];

export function ImplementationFAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-slate-50 py-20 text-slate-900 sm:py-24">
      <Container className="max-w-3xl">
        <div className="flex flex-col items-center gap-10">
          {/* Title */}
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-extrabold leading-tight text-sky-950 md:text-4xl">
              Frequently asked implementation questions.
            </h2>
          </Reveal>

          {/* Accordion List */}
          <Reveal delay={0.08}>
            <div className="flex w-full flex-col gap-2">
              {faqData.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className="overflow-hidden rounded-xl bg-white ring-1 ring-black/10 transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-semibold leading-6 text-sky-950">
                        {item.question}
                      </span>
                      <span
                        className={`transform text-base text-gray-400 transition-transform duration-200 ${
                          isOpen ? "rotate-90 text-sky-950" : ""
                        }`}
                      >
                        ▶
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-100 px-5 py-4">
                        <p className="text-sm leading-6 text-gray-600">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <Button
              href="#demo"
              className="bg-white px-6 py-3 text-sm font-bold text-slate-950"
            >
              Book a Demo
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
