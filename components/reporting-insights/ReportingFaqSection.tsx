"use client";

import { useState } from "react";
import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

const faqs = [
  {
    question: "What does Reporting & Insights help an organization do?",
    answer:
      "It provides governed operational reporting on people operations. Each material metric shows its definition, source, scope, period, freshness and owner, and what each person sees depends on their permissions.",
  },
  {
    question: "Does Zoiko HR monitor employee productivity or activity?",
    answer:
      "No. Zoiko HR does not provide keystroke tracking, covert monitoring, or opaque productivity scores. Reporting focuses strictly on operational process health, workforce structure, and policy completion without surveilling individual workers.",
  },
  {
    question: "What information is authoritative here, and what belongs to another destination?",
    answer:
      "Reporting & Insights is derived from your primary systems of record. Employee records, approved workflows, time data, and payroll remain authoritative in their originating systems. Live service status belongs in Service Status, and account questions belong in the Help Center.",
  },
  {
    question: "How do roles and permissions affect what a user can see or do?",
    answer:
      "Access is determined by user role, organizational scope, purpose, and record relationship. Users can only see aggregated summaries or detailed views that their specific permissions allow, and filters cannot expand access beyond that baseline.",
  },
  {
    question: "How do privacy thresholds work?",
    answer:
      "Privacy thresholds automatically suppress reporting for groups smaller than a configured minimum (such as teams with fewer than 5 people) to prevent individual employees from being identified through aggregate data.",
  },
  {
    question: "What varies by plan, configuration, integration or jurisdiction?",
    answer:
      "Advanced metrics, connector availability, custom reporting intervals, and regional compliance configurations may vary based on your plan tier, enabled integrations, and local statutory requirements.",
  },
  {
    question: "Where do existing customers get account-specific help?",
    answer:
      "Existing customers can access dedicated support, implementation documentation, and ticketing directly through the Zoiko HR Help Center and their account representative.",
  },
];

export function ReportingFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-[-0.02em] text-[#0C1234] sm:text-4xl">
                Frequently asked questions
              </h2>
            </Reveal>

            <div className="mt-8 divide-y divide-[#EEF1F5] border-y border-[#EEF1F5]">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={faq.question} className="py-4">
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between gap-4 text-left font-semibold text-[#0C1234] transition-colors hover:text-[#305CF8]"
                    >
                      <span className="text-[15.5px] leading-snug sm:text-base">
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-base font-bold transition-all ${
                          isOpen
                            ? "bg-[#EAF0FF] text-[#2147C9]"
                            : "bg-[#F1F5F9] text-[#64748B]"
                        }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-3 pr-10 text-[14.5px] leading-relaxed text-[#475569]">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Button
                href="/product-tour"
                className="!bg-[#305CF8] !px-7 !py-3.5 !text-[15px] !font-semibold text-white shadow-[0px_8px_20px_-8px_rgba(48,92,248,0.6)] hover:!bg-[#2547CE]"
              >
                Take the Product Tour
              </Button>
            </div>
          </div>

          {/* Right Column: Office Photo */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2} y={30}>
              <div className="relative overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)]">
                <PlaceholderImage
                  src="/images/reporting-insights/faq-office-workspace.png"
                  alt="Bright, modern office workspace"
                  className="h-[420px] w-full object-cover lg:h-[520px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
