"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const SIGNALS = [
  {
    id: "entities",
    tab: "New entities or locations",
    heading: "A new entity or location is added",
    notice:
      "Each new entity starts from a copy of someone's spreadsheet, and fields drift within weeks.",
    matters:
      "Reporting across entities depends on people reconciling records by hand, and nobody can say which version is current.",
    approach:
      "New entities inherit the common record structure and policy baseline. Differences are added as approved variants with an owner and review date, not as untracked copies.",
    verifyText: "Global HR management",
    verifyHref: "/global-hr-management",
  },
  {
    id: "approvals",
    tab: "Inconsistent approvals",
    heading: "Approval chains vary without clear delegation rules",
    notice:
      "Managers approve leaves or lifecycle changes in private chats or side emails when usual approvers are away.",
    matters:
      "No permanent audit record exists. Inconsistent thresholds create compliance and internal equity exposure.",
    approach:
      "Standard approval workflows route automatically according to policy, entity, and active time-bound delegation grants.",
    verifyText: "Workflows & approvals",
    verifyHref: "/workflows-approvals",
  },
  {
    id: "policies",
    tab: "Local policy differences",
    heading: "Regional offices modify baseline standards informally",
    notice:
      "Country branches adapt vacation rules, probationary periods or equipment policies without central governance.",
    matters:
      "Corporate lacks visibility into operating liabilities and cannot verify if regional variations were legally reviewed.",
    approach:
      "Common group baseline with structured, approved regional variants that clearly state their rationale and review date.",
    verifyText: "Governed policies",
    verifyHref: "/documents-policies",
  },
  {
    id: "spreadsheets",
    tab: "Shadow spreadsheets",
    heading: "Teams maintain secondary trackers to get their work done",
    notice:
      "Department heads keep private tracking sheets because official HR tools feel too rigid or out-of-date.",
    matters:
      "Conflicting records proliferate. Sensitive personal employee data sits unprotected on personal cloud drives.",
    approach:
      "Unified employee profiles with granular access controls and flexible, governed custom fields that eliminate shadow trackers.",
    verifyText: "Employee records",
    verifyHref: "/employee-records",
  },
  {
    id: "systems",
    tab: "More connected systems",
    heading: "Connected tools overwrite records without source tracking",
    notice:
      "Time tracking, payroll and identity software each sync contradicting employee attributes back and forth.",
    matters:
      "Data corruption occurs silently. Nobody can trace whether the payroll system or the HR manager changed the record.",
    approach:
      "Source attribution stamped on every field with automated conflict holds whenever competing systems disagree.",
    verifyText: "Integrations & connectors",
    verifyHref: "/integrations",
  },
  {
    id: "evidence",
    tab: "Evidence requests",
    heading: "Audits and reviews require frantic evidence gathering",
    notice:
      "Proving who approved a pay adjustment or policy exception takes days of searching inboxes and chat archives.",
    matters:
      "Incomplete documentation exposes the company during statutory audits, diligence reviews and employee disputes.",
    approach:
      "Every workflow step, timestamp, approver comment and policy baseline is permanently bound to the transaction record.",
    verifyText: "Trust Center & audit trails",
    verifyHref: "/trust-center",
  },
];

export function ComplexitySignalsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const currentSignal = SIGNALS[activeTab];

  return (
    <section className="bg-[#FAFBFD] py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.02em] text-[#0C1234] sm:text-4xl lg:text-[40px]">
              Recognize when informal HR operations stop scaling.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-4 text-base leading-relaxed text-[#64748B]">
              Complexity rarely arrives all at once. These are the signals HR
              teams describe when shared spreadsheets, inbox approvals and
              local workarounds start to carry more risk than they remove.
            </p>
          </Reveal>
        </div>

        {/* Tab Buttons */}
        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {SIGNALS.map((signal, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={signal.id}
                  onClick={() => setActiveTab(index)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#0C1234] text-white shadow-sm"
                      : "border border-[#E3E8EF] bg-white text-[#334155] hover:border-[#0C1234]"
                  }`}
                >
                  {signal.tab}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Tab Content & Visual Grid */}
        <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-12">
          {/* Active Tab Card */}
          <div className="flex flex-col justify-between rounded-[16px] border border-[#EEF1F5] bg-white p-6 shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.08),0px_1px_2px_0px_rgba(12,18,52,0.04)] sm:p-8 lg:col-span-8">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-[#0C1234] sm:text-2xl">
                {currentSignal.heading}
              </h3>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                    What you notice
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                    {currentSignal.notice}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                    Why it matters
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                    {currentSignal.matters}
                  </p>
                </div>
              </div>

              {/* Approach Box */}
              <div className="mt-6 rounded-xl bg-[#EAF0FF] p-4 sm:p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2147C9]">
                  How Zoiko HR approaches it
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-[#0C1234]">
                  {currentSignal.approach}
                </p>
              </div>
            </div>

            {/* Bottom Link & Scenario Tag */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#EEF1F5] pt-4">
              <div className="flex items-center gap-1.5 text-sm text-[#64748B]">
                <span>Verify in:</span>
                <Link
                  href={currentSignal.verifyHref}
                  className="font-semibold text-[#305CF8] hover:underline"
                >
                  {currentSignal.verifyText} →
                </Link>
              </div>

              <span className="rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-semibold text-[#64748B]">
                Illustrative scenario
              </span>
            </div>
          </div>

          {/* Right Image with Glass Quote Overlay */}
          <div className="relative min-h-[380px] overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)] lg:col-span-4">
            <PlaceholderImage
              src="/images/standardize-hr-operations/complexity-signals-2040f3.png"
              alt="HR operations lead presenting process changes to colleagues"
              className="h-full w-full object-cover"
            />

            {/* Glassmorphic Overlay */}
            <div className="absolute inset-x-4 bottom-4 rounded-xl bg-[#0C1234]/80 p-4 backdrop-blur-md">
              <p className="text-xs leading-relaxed text-white">
                There is no size, revenue or geography threshold for
                &ldquo;mid-market.&rdquo; What matters is the operating
                complexity you&apos;re managing.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
