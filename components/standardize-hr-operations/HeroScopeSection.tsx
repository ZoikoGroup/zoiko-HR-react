"use client";

import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const EXPLAINS_ITEMS = [
  "How Zoiko HR supports common baselines, governed variation, delegation and evidence across teams, entities and locations.",
  "Illustrative product examples with clear state labels, owners and scopes—all built on synthetic data.",
  "Evaluation guidance and where to go next for tours, documentation and trust information.",
];

const BELONGS_ELSEWHERE_ITEMS = [
  "Legal, tax, payroll, employment, immigration or compliance advice. Your policies and decisions remain yours.",
  "Live service status, contract entitlements and account-specific support—see Service Status and the Help Center.",
  "Customer metrics, country-specific capability claims or automated employment decisions. People make those decisions.",
];

export function HeroScopeSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        {/* Direct Answer Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.02em] text-[#0C1234] sm:text-4xl lg:text-[40px]">
                One set of HR standards, with room for the differences you&apos;ve
                approved.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 border-l-[3px] border-[#305CF8] pl-5">
                <p className="text-base font-medium leading-relaxed text-[#0C1234]">
                  Zoiko HR helps organizations standardize HR records,
                  structures, workflows, delegation, reporting and connected
                  systems—while keeping approved local variation, named
                  ownership, exceptions and evidence visible to the people
                  authorized to see them.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-base leading-relaxed text-[#64748B]">
                Standardizing doesn&apos;t mean forcing every entity or location into
                the same rules. It means agreeing on a common baseline,
                approving where variation is legitimate, and being able to show
                who decided what, and when.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2} y={30}>
              <div className="overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)]">
                <PlaceholderImage
                  src="/images/standardize-hr-operations/hero-scope.png"
                  alt="HR team mapping out a shared process on a whiteboard"
                  className="h-full min-h-[360px] w-full object-cover lg:min-h-[420px]"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scope Box: What this page explains vs What belongs elsewhere */}
        <Reveal delay={0.24}>
          <div className="mt-16 overflow-hidden rounded-[16px] border border-[#EEF1F5] bg-white shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.08),0px_1px_2px_0px_rgba(12,18,52,0.04)] lg:mt-20">
            <div className="grid lg:grid-cols-2">
              {/* Left Column: What this page explains */}
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-[11px] bg-[#D1FAE5] text-[#047857]">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <h3 className="text-lg font-semibold text-[#0C1234]">
                    What this page explains
                  </h3>
                </div>

                <ul className="mt-6 space-y-4">
                  {EXPLAINS_ITEMS.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-[#D1FAE5] text-[#047857]">
                        <svg
                          className="h-2.5 w-2.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <p className="text-sm leading-relaxed text-[#475569]">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: What belongs elsewhere */}
              <div className="border-t border-[#EEF1F5] bg-[#FAFBFD] p-8 sm:p-10 lg:border-l lg:border-t-0">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-[11px] bg-[#F1F5F9] text-[#64748B]">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-lg font-semibold text-[#0C1234]">
                    What belongs elsewhere
                  </h3>
                </div>

                <ul className="mt-6 space-y-4">
                  {BELONGS_ELSEWHERE_ITEMS.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-[#F1F5F9] text-[#94A3B8]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#94A3B8]" />
                      </span>
                      <p className="text-sm leading-relaxed text-[#475569]">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
