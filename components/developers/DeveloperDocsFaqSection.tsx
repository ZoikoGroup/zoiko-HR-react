"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "What does the Zoiko HR developer hub help an organization do?",
    answer:
      "It's the public entry point to Developer Documentation. It helps engineers find approved integration surfaces, authentication, operations, schemas, events, errors and versioning, and points to where each is authoritatively described.",
  },
  {
    question: "Does documentation mean my organization can use an API?",
    answer:
      "No. Documentation describes what exists. Whether your organization can use an integration surface depends on your plan, contract, configuration, and explicit administrator entitlement.",
  },
  {
    question: "What information is authoritative here, and what belongs elsewhere?",
    answer:
      "The developer hub provides an architectural overview and navigation. Technical specifications, schemas, endpoints, and exact contract rules are authoritative in Developer Documentation, while live uptime is tracked on Service Status.",
  },
  {
    question: "How do roles and permissions affect what an integration can do?",
    answer:
      "Access is granted on a strict least-privilege scope basis. An API token only receives permissions explicitly authorized by an administrator, regardless of who created the token.",
  },
  {
    question: "Is there a sandbox, and which SDKs are available?",
    answer:
      "Sandbox availability is governed by your agreement and confirmed in your Environment Registry. Official SDKs and supported client libraries are detailed in Developer Documentation.",
  },
  {
    question: "What varies by plan, configuration, integration or jurisdiction?",
    answer:
      "Certain advanced APIs, webhooks, compliance-sensitive fields, and high-frequency rate limits are tiered by enterprise tier and local regulatory frameworks.",
  },
  {
    question: "Where do existing customers get account-specific help?",
    answer:
      "Existing customers and verified integrators can access dedicated technical support via the Help Center or by contacting their designated account team.",
  },
];

export function DeveloperDocsFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="support-faq" className="border-t border-[#EEF1F5] bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading, FAQs & Button */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-[32px] font-bold leading-tight tracking-[-0.02em] text-[#0C1234] sm:text-[40px] sm:leading-[44.8px]">
                Frequently asked questions
              </h2>
            </Reveal>

            {/* Accordion */}
            <div className="mt-8 divide-y divide-[#EEF1F5] border-t border-[#EEF1F5]">
              {FAQS.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <Reveal key={faq.question} delay={idx * 0.03}>
                    <div>
                      <button
                        onClick={() => toggle(idx)}
                        className="flex w-full items-center justify-between py-4.5 text-left transition-colors"
                      >
                        <span className="text-[15px] font-semibold text-[#0C1234] sm:text-base">
                          {faq.question}
                        </span>
                        <span
                          className={`ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                            isOpen
                              ? "bg-[#EAF0FF] text-[#305CF8]"
                              : "bg-[#F1F5F9] text-[#64748B]"
                          }`}
                        >
                          {isOpen ? "✕" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="pb-4.5 pr-8">
                          <p className="text-[14px] leading-relaxed text-[#475569] sm:text-[15.5px]">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Button */}
            <Reveal delay={0.25}>
              <div className="mt-8">
                <Link
                  href="#reference-explorer"
                  className="inline-flex items-center rounded-full bg-[#305CF8] px-7 py-3 text-sm font-semibold text-white shadow-[0px_8px_20px_-8px_rgba(48,92,248,0.6)] transition-all hover:bg-[#2547CE]"
                >
                  Open Developer Documentation
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Laptop Workspace Photo */}
          <div className="lg:col-span-5">
            <Reveal delay={0.16} y={30}>
              <div className="relative overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)]">
                <Image
                  src="/images/developers/faq-workspace.png"
                  alt="Developer pointing at code on laptop screen"
                  width={800}
                  height={800}
                  unoptimized
                  className="h-[460px] w-full object-cover sm:h-[520px] lg:h-[560px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
