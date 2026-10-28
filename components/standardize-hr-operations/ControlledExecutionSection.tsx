"use client";

import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const WORKFLOW_STEPS = [
  {
    step: 1,
    title: "Request submitted",
    desc: "Manager starts the probation review.",
    status: "completed",
  },
  {
    step: 2,
    title: "Checked against policy",
    desc: "Baseline and UK variant applied.",
    status: "completed",
  },
  {
    step: 3,
    title: "Approver routed",
    desc: "Sent to the active delegate.",
    status: "completed",
  },
  {
    step: 4,
    title: "HR review",
    desc: "Configured second check by Regional HR.",
    status: "active",
  },
  {
    step: 5,
    title: "Record updated",
    desc: "Change applied with an effective date.",
    status: "upcoming",
  },
  {
    step: 6,
    title: "Evidence retained",
    desc: "Decisions and documents kept together.",
    status: "upcoming",
  },
];

const EVIDENCE_TRAIL = [
  {
    time: "09:12",
    action: "Request created",
    detail: " by line manager · Probation review, Employee E-20417",
  },
  {
    time: "09:12",
    action: "Policy applied",
    detail: " · Group baseline v3.1 with Meridian UK Ltd approved variant",
  },
  {
    time: "09:13",
    action: "Routed",
    detail: " to Deputy Operations Lead (delegation active until 28 Nov)",
  },
  {
    time: "14:40",
    action: "Approved",
    detail: " by delegate · Comment attached",
  },
  {
    time: "14:40",
    action: "Awaiting",
    detail: " Regional HR · UK review",
  },
];

export function ControlledExecutionSection() {
  return (
    <section className="bg-white py-12 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-2xl font-bold leading-tight tracking-[-0.02em] text-[#0C1234] sm:text-3xl lg:text-[42px]">
              Run standard processes the same way,
              <br className="hidden sm:inline" /> and keep the evidence.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#64748B]">
              A workflow checks the request against the baseline and any
              approved variant, routes it to the right approver—including an
              active delegate—and records each step with an effective date.
            </p>
          </Reveal>
        </div>

        {/* 6-step Process Timeline */}
        <Reveal delay={0.16}>
          {/* Desktop / Tablet Horizontal Timeline (md and up) */}
          <div className="mt-10 hidden overflow-x-auto pb-4 pt-2 md:block">
            <div className="flex min-w-[720px] items-start justify-between">
              {WORKFLOW_STEPS.map((step, idx) => {
                const isCompleted = step.status === "completed";
                const isActive = step.status === "active";
                const isLineGreen = idx < 3; // Steps 1->2, 2->3, 3->4 are green

                return (
                  <div key={step.step} className="relative flex-1 pr-4">
                    {/* Horizontal connector line behind circles */}
                    {idx < WORKFLOW_STEPS.length - 1 && (
                      <div
                        className={`absolute left-[16px] top-[15px] h-[2px] w-full z-0 ${
                          isLineGreen ? "bg-[#00D592]" : "bg-[#E2E8F0]"
                        }`}
                      />
                    )}

                    {/* Step Circle Indicator */}
                    <div className="relative z-10 flex items-center">
                      {isCompleted ? (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00D592] text-white">
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                      ) : isActive ? (
                        <div className="h-8 w-8 rounded-full bg-[#305CF8] shadow-[0_0_0_6px_rgba(48,92,248,0.22)]" />
                      ) : (
                        <div className="h-8 w-8 rounded-full border-2 border-[#E2E8F0] bg-white" />
                      )}
                    </div>

                    {/* Step Title & Description */}
                    <div className="mt-4">
                      <p className="text-sm font-bold text-[#0C1234]">
                        {step.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#64748B]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Vertical Connected Timeline (< md) */}
          <div className="mt-8 space-y-0 md:hidden">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isCompleted = step.status === "completed";
              const isActive = step.status === "active";
              const isLineGreen = idx < 3;
              const isLast = idx === WORKFLOW_STEPS.length - 1;

              return (
                <div key={step.step} className="relative flex items-start gap-4">
                  {/* Vertical connector line */}
                  {!isLast && (
                    <div
                      className={`absolute left-[15px] top-[32px] bottom-0 w-[2px] z-0 ${
                        isLineGreen ? "bg-[#00D592]" : "bg-[#E2E8F0]"
                      }`}
                    />
                  )}

                  {/* Step Circle Indicator */}
                  <div className="relative z-10 flex-none pt-0.5">
                    {isCompleted ? (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00D592] text-white">
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    ) : isActive ? (
                      <div className="h-8 w-8 rounded-full bg-[#305CF8] shadow-[0_0_0_6px_rgba(48,92,248,0.22)]" />
                    ) : (
                      <div className="h-8 w-8 rounded-full border-2 border-[#E2E8F0] bg-white" />
                    )}
                  </div>

                  {/* Step Title & Description */}
                  <div className={`flex-1 ${!isLast ? "pb-6" : "pb-1"}`}>
                    <p className="text-sm font-bold text-[#0C1234]">
                      {step.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#64748B]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Evidence Trail vs Image Grid */}
        <div className="mt-10 sm:mt-12 grid items-stretch gap-6 sm:gap-8 lg:grid-cols-12">
          {/* Left: Evidence Trail Card */}
          <div className="flex flex-col justify-between rounded-[16px] sm:rounded-[20px] border border-[#E5E7EB] bg-white p-5 sm:p-7 shadow-[0_4px_24px_-4px_rgba(12,18,52,0.06)] lg:col-span-7">
            <div>
              {/* Topbar */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-sm sm:text-[15px] font-bold text-[#0C1234]">
                  Evidence trail · REQ-5531
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EDE9FE] px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold text-[#5B21B6]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5B21B6]" />
                  Workflow pending
                </span>
              </div>

              {/* Trail Entries */}
              <div className="mt-5 sm:mt-6">
                {EVIDENCE_TRAIL.map((item, idx) => {
                  const isLast = idx === EVIDENCE_TRAIL.length - 1;
                  return (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 sm:gap-4 py-3 text-xs sm:text-[13px] ${
                        !isLast
                          ? "border-b border-dashed border-[#E5E7EB]"
                          : ""
                      }`}
                    >
                      <span className="w-11 sm:w-14 flex-none font-normal text-[#64748B]">
                        {item.time}
                      </span>
                      <div className="flex-1 leading-relaxed">
                        <strong className="font-bold text-[#0C1234]">
                          {item.action}
                        </strong>
                        <span className="text-[#475569]">{item.detail}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Card Footer */}
            <div className="mt-6 pt-4">
              <p className="text-[11px] sm:text-xs leading-relaxed text-[#64748B]">
                Times and identifiers are illustrative. The decision stays with
                the authorized people in the workflow.
              </p>
              <div className="mt-2.5">
                <span className="inline-block rounded-md bg-[#F1F5F9] px-2.5 py-1 text-[11px] font-medium text-[#64748B]">
                  Synthetic data
                </span>
              </div>
            </div>
          </div>

          {/* Right: Review Photo Card */}
          <div className="relative overflow-hidden rounded-[16px] sm:rounded-[20px] border border-[#EEF1F5] shadow-[0_16px_40px_-12px_rgba(12,18,52,0.12)] lg:col-span-5 flex h-[240px] sm:h-[320px] lg:h-full lg:min-h-[380px]">
            <PlaceholderImage
              src="/images/standardize-hr-operations/workflow-review-7bb161.png"
              alt="Team reviewing a process plan together"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Links */}
        <Reveal delay={0.24}>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm sm:text-[15px] font-semibold text-[#305CF8]">
            <Link
              href="/workflows-approvals"
              className="inline-flex items-center gap-1.5 hover:underline"
            >
              <span>Explore workflows &amp; approvals</span>
              <span>&rarr;</span>
            </Link>
            <Link
              href="/product-tour"
              className="inline-flex items-center gap-1.5 hover:underline"
            >
              <span>Take the Product Tour</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
