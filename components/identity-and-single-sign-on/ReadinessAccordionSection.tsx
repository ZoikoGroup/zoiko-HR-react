"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";

const READINESS_ITEMS = [
  {
    title: "Provider registry confirmed",
    detail: "Validates that the selected identity provider is registered and currently approved in the authoritative Identity Provider Registry for your organization scope.",
  },
  {
    title: "Configuration reviewed",
    detail: "Ensures configuration parameters, attribute mappings, and protocol metadata have passed formal administrator review.",
  },
  {
    title: "Test evidence captured",
    detail: "Requires verified test sign-in transactions and evidence logs before required enforcement can be turned on.",
  },
  {
    title: "Recovery readiness validated",
    detail: "Confirms emergency break-glass sign-in pathways and administrator recovery credentials are live and tested.",
  },
  {
    title: "Accessibility verified",
    detail: "Verifies that sign-in screens and error flows satisfy WCAG 2.2 AA accessibility requirements for all users.",
  },
  {
    title: "Support routes confirmed",
    detail: "Ensures escalation procedures and support contact paths are active in case identity provider outages occur.",
  },
];

export function ReadinessAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-slate-900 py-16 lg:py-24 text-white">
      <Container>
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="max-w-2xl space-y-3.5">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white font-['Manrope'] leading-tight">
                Readiness is checked, not assumed.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-slate-300 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Required-enforcement activation waits for every one of these to be confirmed — accessibility and support routes included.
              </p>
            </Reveal>
          </div>

          <div className="space-y-3">
            {READINESS_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <Reveal key={idx} delay={0.06 * idx}>
                  <div className="bg-blue-950 rounded-xl border border-cyan-900 overflow-hidden transition-colors">
                    <button
                      onClick={() => toggleItem(idx)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="text-white text-base font-semibold font-['Arial']">
                        {item.title}
                      </span>
                      <span className="text-white text-xl font-bold font-['Arial']">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-slate-300 text-sm font-normal font-['IBM_Plex_Sans'] border-t border-cyan-900/50 pt-3 leading-relaxed">
                        {item.detail}
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
