"use client";

import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const POINTS = [
  {
    title: "Source on every field.",
    description:
      "HR record, a connected time system or payroll—each value says which system it came from.",
  },
  {
    title: "Conflicts suppress the claim.",
    description:
      "When two sources disagree, the value is withheld until someone authorized resolves it.",
  },
  {
    title: "Payroll stays authoritative for payroll.",
    description:
      "Zoiko HR doesn't calculate pay; payroll data is shown with its source.",
  },
];

export function StandardizedDataSection() {
  return (
    <section className="bg-[#FAFBFD] py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading, Core Rules & Illustrative Record */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.02em] text-[#0C1234] sm:text-4xl lg:text-[40px]">
                Standardized data that shows where each value came from.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-4 text-base leading-relaxed text-[#64748B]">
                A consistent record is only useful if people can trust it. Each
                field carries its source and state, and conflicting values are
                held for review instead of being shown as fact.
              </p>
            </Reveal>

            {/* Core Principle Points */}
            <div className="mt-8 space-y-4">
              {POINTS.map((pt, i) => (
                <Reveal key={i} delay={0.12 + i * 0.05}>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#EAF0FF] text-[#305CF8]">
                      <svg
                        className="h-3 w-3"
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
                    <p className="text-sm leading-relaxed text-[#334155]">
                      <strong className="font-semibold text-[#0C1234]">
                        {pt.title}
                      </strong>{" "}
                      {pt.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Illustrative Employee Record Card */}
            <Reveal delay={0.25}>
              <div className="mt-10 overflow-hidden rounded-[16px] border border-[#EEF1F5] bg-white shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.08),0px_1px_2px_0px_rgba(12,18,52,0.04)]">
                {/* Employee Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EEF1F5] p-5 sm:px-6">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#EAF0FF] to-[#C7D5FF] text-lg font-bold text-[#2147C9]">
                      E
                    </div>
                    <div>
                      <p className="font-bold text-[#0C1234]">Employee E-20417</p>
                      <p className="text-xs text-[#64748B]">
                        Meridian UK Ltd · Operations
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-semibold text-[#64748B]">
                    Synthetic record
                  </span>
                </div>

                {/* Fields List */}
                <div className="divide-y divide-[#EEF1F5] text-sm">
                  {/* Field 1: Department */}
                  <div className="p-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#64748B]">
                        Department
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#047857]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#047857]" />
                        Verified
                      </span>
                    </div>
                    <p className="mt-1 font-semibold text-[#0C1234]">
                      Operations · Fulfilment
                    </p>
                    <p className="mt-0.5 text-xs text-[#64748B]">
                      <span className="font-medium text-[#334155]">
                        HR record · Org structure
                      </span>{" "}
                      · Effective 01 Mar 2026
                    </p>
                  </div>

                  {/* Field 2: Work Schedule */}
                  <div className="p-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#64748B]">
                        Work schedule
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#047857]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#047857]" />
                        Synced
                      </span>
                    </div>
                    <p className="mt-1 font-semibold text-[#0C1234]">
                      Standard week · 37.5 hrs
                    </p>
                    <p className="mt-0.5 text-xs text-[#64748B]">
                      <span className="font-medium text-[#334155]">ZoikoTime</span>{" "}
                      · Synced (illustrative)
                    </p>
                  </div>

                  {/* Field 3: Work Location (Conflict) */}
                  <div className="bg-[#FFFBEB] p-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#64748B]">
                        Work location
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#FEF3C7] px-2 py-0.5 text-[11px] font-semibold text-[#92400E]">
                        Source conflict
                      </span>
                    </div>
                    <p className="mt-1 font-semibold italic text-[#0C1234]">
                      Held for review
                    </p>
                    <p className="mt-0.5 text-xs text-[#92400E]">
                      HR record and time system disagree · Assigned to Regional
                      HR · UK
                    </p>
                  </div>

                  {/* Field 4: Job Title (Correction Pending) */}
                  <div className="p-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#64748B]">
                        Job title
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#EDE9FE] px-2 py-0.5 text-[11px] font-semibold text-[#5B21B6]">
                        Correction pending
                      </span>
                    </div>
                    <p className="mt-1 font-semibold text-[#0C1234]">
                      Senior Operations Coordinator
                    </p>
                    <p className="mt-0.5 text-xs text-[#64748B]">
                      Correction submitted · Awaiting HR approval
                    </p>
                  </div>

                  {/* Field 5: Pay group (Authoritative external) */}
                  <div className="p-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#64748B]">
                        Pay group
                      </span>
                      <span className="rounded-full bg-[#F1F5F9] px-2 py-0.5 text-[11px] font-medium text-[#475569]">
                        Scoped visibility
                      </span>
                    </div>
                    <p className="mt-1 font-semibold italic text-[#0C1234]">
                      Not visible in this view
                    </p>
                    <p className="mt-0.5 text-xs text-[#64748B]">
                      Authoritative source:{" "}
                      <span className="font-medium text-[#334155]">
                        Payroll system
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Layered Images */}
          <div className="relative lg:col-span-5">
            <Reveal delay={0.2} y={30}>
              <div className="relative">
                {/* Main Laptop Image Card */}
                <div className="overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)]">
                  <PlaceholderImage
                    src="/images/standardize-hr-operations/standardized-data-laptop-c57e7a.png"
                    alt="Two colleagues reviewing records together on a laptop"
                    className="h-[260px] sm:h-[440px] w-full object-cover"
                  />
                </div>

                {/* Overlapping Inset Desk Image */}
                <div className="absolute -bottom-10 -right-6 hidden w-[280px] overflow-hidden rounded-[18px] border-4 border-white bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)] sm:block lg:w-[300px]">
                  <PlaceholderImage
                    src="/images/standardize-hr-operations/standardized-data-desk-28a1db.png"
                    alt="Reviewing reports and documents at a desk"
                    className="h-[220px] w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
