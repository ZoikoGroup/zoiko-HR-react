"use client";

import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PILLARS = [
  {
    title: "Reporting lines don't grant access",
    description:
      "Where someone sits in the org chart doesn't decide what they can see. Access depends on role, scope, sensitivity and policy.",
  },
  {
    title: "Every policy has a named owner",
    description:
      "Baselines and variants each show who owns them and when they're next reviewed.",
  },
  {
    title: "Delegation is scoped and time-bound",
    description:
      "Each grant names what is delegated, to whom, for which scope and until when—and can be revoked where supported.",
  },
];

export function OwnershipDelegationSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Delegation Record Card + Handover Image */}
          <div className="space-y-6 lg:col-span-6">
            <Reveal>
              <div className="overflow-hidden rounded-[16px] border border-[#EEF1F5] bg-white shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.08),0px_1px_2px_0px_rgba(12,18,52,0.04)]">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0C1234] p-5 sm:px-6">
                  <h3 className="text-base font-semibold text-white">
                    Delegated authority · Approve leave requests
                  </h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00D592]/20 px-2.5 py-1 text-xs font-semibold text-[#00D592]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00D592]" />
                    Active · scheduled end
                  </span>
                </div>

                {/* Transfer Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EEF1F5] p-5 sm:px-6">
                  <div>
                    <span className="text-xs font-medium text-[#64748B]">
                      Granted by
                    </span>
                    <p className="font-semibold text-[#0C1234]">
                      Regional HR Manager · UK
                    </p>
                  </div>

                  <span className="text-xl text-[#305CF8]">→</span>

                  <div>
                    <span className="text-xs font-medium text-[#64748B]">
                      Delegated to
                    </span>
                    <p className="font-semibold text-[#0C1234]">
                      Deputy Operations Lead
                    </p>
                  </div>
                </div>

                {/* Terms Details */}
                <div className="divide-y divide-[#EEF1F5] p-5 text-sm sm:px-6">
                  <div className="grid grid-cols-3 py-2.5">
                    <span className="font-medium text-[#64748B]">Scope</span>
                    <span className="col-span-2 font-medium text-[#0C1234]">
                      Operations team · London office
                    </span>
                  </div>

                  <div className="grid grid-cols-3 py-2.5">
                    <span className="font-medium text-[#64748B]">Excludes</span>
                    <span className="col-span-2 font-medium text-[#0C1234]">
                      Compensation changes, terminations, sensitive cases
                    </span>
                  </div>

                  <div className="grid grid-cols-3 py-2.5">
                    <span className="font-medium text-[#64748B]">Window</span>
                    <span className="col-span-2 font-medium text-[#0C1234]">
                      03 Nov 2026 – 28 Nov 2026
                    </span>
                  </div>

                  <div className="grid grid-cols-3 py-2.5">
                    <span className="font-medium text-[#64748B]">Revocable by</span>
                    <span className="col-span-2 font-medium text-[#0C1234]">
                      Grantor or HR Administrator, at any time
                    </span>
                  </div>

                  <div className="grid grid-cols-3 py-2.5">
                    <span className="font-medium text-[#64748B]">Evidence</span>
                    <span className="col-span-2 font-medium text-[#0C1234]">
                      Grant, each approval and revocation logged
                    </span>
                  </div>
                </div>

                {/* Footer status */}
                <div className="flex items-center justify-between border-t border-[#EEF1F5] bg-[#FAFBFD] px-6 py-3 text-xs text-[#64748B]">
                  <span>Delegation ends automatically on 28 Nov</span>
                  <span className="rounded-full bg-[#F1F5F9] px-2.5 py-0.5 font-semibold text-[#64748B]">
                    Illustrative
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Handover Image */}
            <Reveal delay={0.16}>
              <div className="overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)]">
                <PlaceholderImage
                  src="/images/standardize-hr-operations/delegation-handover-6fb167.png"
                  alt="Manager handing over responsibilities to a colleague"
                  className="h-[220px] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Heading, Subtitle & 3 Feature Cards */}
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.02em] text-[#0C1234] sm:text-4xl lg:text-[40px]">
                Make ownership and delegation explicit, not assumed.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-4 text-base leading-relaxed text-[#64748B]">
                As organizations grow, responsibility gets passed around
                informally. Zoiko HR records who owns each structure and
                policy, and treats delegation as a scoped, time-bound grant you
                can see and revoke.
              </p>
            </Reveal>

            {/* 3 Pillar Cards */}
            <div className="mt-8 space-y-4">
              {PILLARS.map((pillar, i) => (
                <Reveal key={i} delay={0.14 + i * 0.06}>
                  <div className="rounded-[16px] border border-[#EEF1F5] bg-white p-5 shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-xl bg-[#EAF0FF] text-[#305CF8]">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </span>
                      <div>
                        <h3 className="font-semibold text-[#0C1234]">
                          {pillar.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.32}>
              <div className="mt-8">
                <Link
                  href="/core-hr"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#305CF8] hover:underline"
                >
                  Explore core HR &amp; organization →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
