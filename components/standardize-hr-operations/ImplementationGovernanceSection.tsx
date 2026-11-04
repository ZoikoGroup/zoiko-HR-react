"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const STAGES = [
  {
    step: 1,
    name: "Discovery",
    title: "Discovery",
    description:
      "Confirm the entities, locations, policies and processes in scope, and where today's practice already differs.",
    youDecide: "Which processes to standardize first and who owns each area.",
    evidence: "Agreed scope and ownership record.",
  },
  {
    step: 2,
    name: "Baseline design",
    title: "Baseline design",
    description:
      "Establish the common employee profile schema, core policy benchmarks, and organization structure hierarchy.",
    youDecide: "Global mandatory fields, default approval thresholds, and baseline rules.",
    evidence: "Documented group operating model and configuration baseline v1.0.",
  },
  {
    step: 3,
    name: "Variation review",
    title: "Variation review",
    description:
      "Evaluate regional and subsidiary requests for legal, statutory or operational exceptions against the baseline.",
    youDecide: "Which local differences qualify as approved, time-bound variants.",
    evidence: "Approved variant ledger with designated owners and review schedules.",
  },
  {
    step: 4,
    name: "Data migration",
    title: "Data migration",
    description:
      "Map legacy spreadsheets and disparate systems into the structured schema with validation checks.",
    youDecide: "Field reconciliation priorities, legacy cutoff dates, and data sign-offs.",
    evidence: "Data hygiene audit reports, transition logs, and sign-off records.",
  },
  {
    step: 5,
    name: "Launch",
    title: "Launch",
    description:
      "Deploy self-service, approval chains, and permission scopes to leaders, managers and employees.",
    youDecide: "Go-live phasing by entity, communication milestones, and cutover windows.",
    evidence: "Cutover verification checklist and go-live acceptance milestone.",
  },
  {
    step: 6,
    name: "Ongoing change",
    title: "Ongoing change",
    description:
      "Maintain standards through continuous governance, scheduled policy reviews, and audited revision workflows.",
    youDecide: "Policy revisions, variant expirations, and delegation renewals.",
    evidence: "Versioned audit history, change requests, and compliance logs.",
  },
];

export function ImplementationGovernanceSection() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = STAGES[activeStageIndex];

  return (
    <section className="bg-[#0C1234] py-20 text-white lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.02em] sm:text-4xl lg:text-[40px]">
              Implement standards deliberately, then govern every change.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-4 text-base leading-relaxed text-[#AEB7D0]">
              Standardization isn&apos;t a one-time setup. The same controls that shape
              your baseline at launch also govern how it changes afterward.
            </p>
          </Reveal>
        </div>

        {/* Stage Selector Tabs */}
        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {STAGES.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#305CF8] text-white shadow-md shadow-[#305CF8]/30"
                      : "border border-white/20 bg-transparent text-[#C3CADF] hover:border-white/40 hover:text-white"
                  }`}
                >
                  {stage.name}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Stage Content Grid */}
        <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-12">
          {/* Left: Active Stage Details Card */}
          <div className="flex flex-col justify-between rounded-[18px] border border-white/10 bg-[#141C3C] p-6 sm:p-8 lg:col-span-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8EA6FF]">
                Stage {currentStage.step} of 6
              </span>

              <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {currentStage.title}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-[#AEB7D0]">
                {currentStage.description}
              </p>

              {/* 2 Decision / Evidence sub-cards */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8EA6FF]">
                    You decide
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#D5DAEA]">
                    {currentStage.youDecide}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8EA6FF]">
                    Evidence produced
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#D5DAEA]">
                    {currentStage.evidence}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Planning Meeting Image Card */}
          <div className="overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)] lg:col-span-6">
            <PlaceholderImage
              src="/images/standardize-hr-operations/governance-planning-56586a.png"
              alt="Implementation team planning together around a table"
              className="h-[240px] sm:h-[320px] lg:h-full lg:min-h-[360px] w-full object-cover"
            />
          </div>
        </div>

        {/* Commercial Scope Notice Box */}
        <Reveal delay={0.24}>
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-[#00D592]/25 bg-[#00D592]/10 p-4 px-5 text-sm text-[#B8F5DD]">
            <svg
              className="mt-0.5 h-4 w-4 flex-none text-[#00D592]"
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
            <p>
              Implementation duration, staffing and go-live timing are set in
              your approved commercial scope, not on this page.
            </p>
          </div>
        </Reveal>

        {/* Implementation Guide Link */}
        <Reveal delay={0.28}>
          <div className="mt-8">
            <Link
              href="/implementation-guide"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6F8DFF] transition-colors hover:text-white"
            >
              Read the implementation guide →
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
