"use client";

import { useState } from "react";
import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

const FAQS = [
  {
    question:
      "What does standardizing HR operations with Zoiko HR help an organization do?",
    answer:
      "It helps you run HR records, structures, policies, workflows, delegation and reporting from a common baseline, while approved local variation, named owners, exceptions and evidence stay visible to authorized people.",
  },
  {
    question: "Is there a size or revenue threshold for \"mid-market\"?",
    answer:
      "There is no rigid size, headcount, revenue or geography threshold for mid-market. What matters is the operating complexity you are managing—such as multiple entities, multi-location compliance, distinct approval hierarchies, and connected systems.",
  },
  {
    question:
      "What information is authoritative here, and what belongs to another destination?",
    answer:
      "Zoiko HR serves as the governed core for employee records, organizational structures, policies, approval workflows, and delegation. Authoritative payroll calculations remain with your payroll engine, live uptime is maintained on Service Status, and contractual terms live in your commercial agreement.",
  },
  {
    question:
      "How do roles and permissions affect what a user can see or do?",
    answer:
      "Access is strictly decoupled from the visual org chart. Permissions depend on assigned role scopes, organizational sensitivity, policy ownership, and active delegation grants. Users only access what they are formally authorized to view.",
  },
  {
    question:
      "What varies by plan, configuration, integration or jurisdiction?",
    answer:
      "Specific features such as advanced multi-entity hierarchy nesting, custom API connectors, automated delegation timeouts, and specialized jurisdictional statutory templates depend on your subscription plan, contractual scope, and regional requirements.",
  },
  {
    question:
      "Does Zoiko HR calculate payroll or make employment decisions?",
    answer:
      "No. Zoiko HR provides software for workforce administration and evidence tracking. It does not calculate gross-to-net payroll or make automated employment decisions. Authorized people in your organization always make those decisions.",
  },
  {
    question: "Where do existing customers get account-specific help?",
    answer:
      "Existing customers can access account-specific support, administration guides, and support ticket submission directly through the authenticated Help Center and dedicated customer success channels.",
  },
];

export function StandardizeHrFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading, Accordion & Button */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.02em] text-[#0C1234] sm:text-4xl lg:text-[40px]">
                Frequently asked questions
              </h2>
            </Reveal>

            {/* Accordion Stack */}
            <div className="mt-8 divide-y divide-[#EEF1F5] border-y border-[#EEF1F5]">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="py-4">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-start justify-between gap-4 text-left font-semibold text-[#0C1234] transition-colors hover:text-[#305CF8]"
                    >
                      <span className="text-base leading-snug">{faq.question}</span>
                      <span
                        className={`flex h-7 w-7 flex-none items-center justify-center rounded-full text-sm font-bold transition-all ${
                          isOpen
                            ? "bg-[#EAF0FF] text-[#305CF8]"
                            : "bg-[#F1F5F9] text-[#64748B]"
                        }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-3 pr-8 text-sm leading-relaxed text-[#475569]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <Reveal delay={0.24}>
              <div className="mt-8">
                <Button
                  href="/product-tour"
                  className="w-full sm:w-auto !bg-[#305CF8] !px-7 !py-3.5 !text-sm !font-semibold text-white shadow-[0px_8px_20px_-8px_rgba(48,92,248,0.6)] hover:!bg-[#2547CE]"
                >
                  Take the Product Tour
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Office Workspace Photo Card */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2} y={30}>
              <div className="overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)]">
                <PlaceholderImage
                  src="/images/standardize-hr-operations/faq-workspace-561317.png"
                  alt="Bright, modern office workspace"
                  className="h-[260px] sm:h-[360px] lg:h-full w-full object-cover lg:min-h-[560px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
