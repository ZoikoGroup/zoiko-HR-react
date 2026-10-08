"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

type EntityData = {
  name: string;
  rows: {
    area: string;
    baseline: string;
    variant: string;
    note?: string;
    state: "approved" | "baseline" | "expired" | "conflict";
    owner: string;
    review: string;
  }[];
};

const ENTITIES: Record<string, EntityData> = {
  uk: {
    name: "Meridian UK Ltd",
    rows: [
      {
        area: "Annual leave carry-over",
        baseline: "Up to 5 days, used by end of Q1",
        variant: "Up to 8 days, used by end of Q1",
        note: "Approved to align with local practice",
        state: "approved",
        owner: "Regional HR Manager · UK",
        review: "15 Jan 2027",
      },
      {
        area: "Probation review",
        baseline: "Checkpoint at 3 months",
        variant: "Checkpoint at 3 months",
        state: "baseline",
        owner: "Group HR Operations",
        review: "Annual",
      },
      {
        area: "Policy acknowledgment",
        baseline: "Required within 14 days of publication",
        variant: "Required within 14 days of publication",
        state: "baseline",
        owner: "Group Compliance",
        review: "Annual",
      },
      {
        area: "Leave approval routing",
        baseline: "Line manager",
        variant: "Line manager, then Regional HR",
        note: "Second approval for requests over 10 days",
        state: "approved",
        owner: "Regional HR Manager · UK",
        review: "15 Jan 2027",
      },
      {
        area: "Onboarding checklist",
        baseline: "Group standard checklist",
        variant: "Group standard checklist",
        state: "baseline",
        owner: "People Experience",
        review: "Annual",
      },
    ],
  },
  gmbh: {
    name: "Meridian GmbH",
    rows: [
      {
        area: "Annual leave carry-over",
        baseline: "Up to 5 days, used by end of Q1",
        variant: "Statutory statutory transfer rules apply",
        note: "Aligned with German statutory framework",
        state: "approved",
        owner: "Managing Director · DACH",
        review: "30 Nov 2026",
      },
      {
        area: "Probation review",
        baseline: "Checkpoint at 3 months",
        variant: "6-month statutory evaluation",
        note: "Statutory probezeit documentation",
        state: "approved",
        owner: "Regional HR Manager · DE",
        review: "Annual",
      },
      {
        area: "Policy acknowledgment",
        baseline: "Required within 14 days of publication",
        variant: "Requires works council consultation",
        note: "Works council agreement active",
        state: "approved",
        owner: "Group Compliance & Works Council",
        review: "30 Jun 2027",
      },
      {
        area: "Leave approval routing",
        baseline: "Line manager",
        variant: "Line manager",
        state: "baseline",
        owner: "Group HR Operations",
        review: "Annual",
      },
      {
        area: "Onboarding checklist",
        baseline: "Group standard checklist",
        variant: "Group standard with local tax ID capture",
        note: "Local tax and social security step added",
        state: "approved",
        owner: "People Experience",
        review: "Annual",
      },
    ],
  },
  canada: {
    name: "Meridian Canada Ltd",
    rows: [
      {
        area: "Annual leave carry-over",
        baseline: "Up to 5 days, used by end of Q1",
        variant: "Provincial statutory vacation minimums",
        note: "Aligned with Ontario/BC ESA requirements",
        state: "approved",
        owner: "Operations Lead · Canada",
        review: "01 Feb 2027",
      },
      {
        area: "Probation review",
        baseline: "Checkpoint at 3 months",
        variant: "Checkpoint at 3 months",
        state: "baseline",
        owner: "Group HR Operations",
        review: "Annual",
      },
      {
        area: "Policy acknowledgment",
        baseline: "Required within 14 days of publication",
        variant: "Required within 14 days of publication",
        state: "baseline",
        owner: "Group Compliance",
        review: "Annual",
      },
      {
        area: "Leave approval routing",
        baseline: "Line manager",
        variant: "Line manager",
        state: "baseline",
        owner: "Group HR Operations",
        review: "Annual",
      },
      {
        area: "Onboarding checklist",
        baseline: "Group standard checklist",
        variant: "Provincial benefits enrollment attached",
        note: "Provincial supplemental health plan capture",
        state: "approved",
        owner: "People Experience",
        review: "Annual",
      },
    ],
  },
};

export function CommonBaselineVariationSection() {
  const [selectedEntityKey, setSelectedEntityKey] = useState<"uk" | "gmbh" | "canada">("uk");
  const currentEntity = ENTITIES[selectedEntityKey];

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.02em] text-[#0C1234] sm:text-4xl lg:text-[40px]">
              Keep one baseline. Approve the differences that are legitimate.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-4 text-base leading-relaxed text-[#64748B]">
              Every variant has an owner, a reason and a review date. When a
              variant expires or conflicts with the baseline, it says so
              plainly instead of quietly drifting.
            </p>
          </Reveal>
        </div>

        {/* Comparison Table Card */}
        <Reveal delay={0.16}>
          <div className="mt-10 overflow-hidden rounded-[16px] border border-[#EEF1F5] bg-white shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.08),0px_1px_2px_0px_rgba(12,18,52,0.04)]">
            {/* Topbar: Entity Selector Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EEF1F5] bg-[#FAFBFD] px-6 py-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-[#64748B]">
                  Compare baseline with
                </span>
                <div className="flex flex-wrap gap-1 rounded-[14px] sm:rounded-full bg-[#F1F5F9] p-1">
                  <button
                    onClick={() => setSelectedEntityKey("uk")}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                      selectedEntityKey === "uk"
                        ? "bg-[#305CF8] text-white shadow-sm"
                        : "text-[#475569] hover:text-[#0C1234]"
                    }`}
                  >
                    Meridian UK Ltd
                  </button>
                  <button
                    onClick={() => setSelectedEntityKey("gmbh")}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                      selectedEntityKey === "gmbh"
                        ? "bg-[#305CF8] text-white shadow-sm"
                        : "text-[#475569] hover:text-[#0C1234]"
                    }`}
                  >
                    Meridian GmbH
                  </button>
                  <button
                    onClick={() => setSelectedEntityKey("canada")}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                      selectedEntityKey === "canada"
                        ? "bg-[#305CF8] text-white shadow-sm"
                        : "text-[#475569] hover:text-[#0C1234]"
                    }`}
                  >
                    Meridian Canada Ltd
                  </button>
                </div>
              </div>

              <span className="rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">
                Illustrative · synthetic data
              </span>
            </div>

            {/* Table Content */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#EEF1F5] text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">
                    <th className="px-5 py-3.5">Policy area</th>
                    <th className="px-5 py-3.5">Group baseline</th>
                    <th className="px-5 py-3.5">{currentEntity.name}</th>
                    <th className="px-5 py-3.5">State</th>
                    <th className="px-5 py-3.5">Owner</th>
                    <th className="px-5 py-3.5">Review</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EEF1F5]">
                  {currentEntity.rows.map((row, index) => (
                    <tr key={index} className="transition-colors hover:bg-slate-50/50">
                      <td className="px-5 py-4 font-semibold text-[#0C1234]">
                        {row.area}
                      </td>
                      <td className="px-5 py-4 text-[#475569]">
                        {row.baseline}
                      </td>
                      <td className="px-5 py-4">
                        <p className="font-medium text-[#0C1234]">{row.variant}</p>
                        {row.note && (
                          <p className="mt-0.5 text-xs text-[#64748B]">{row.note}</p>
                        )}
                      </td>
                      <td className="px-5 py-4">
                        {row.state === "approved" ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D1FAE5] px-2.5 py-0.5 text-xs font-semibold text-[#047857]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#047857]" />
                            Approved variant
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F1F5F9] px-2.5 py-0.5 text-xs font-semibold text-[#475569]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#94A3B8]" />
                            Baseline standard
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-xs font-medium text-[#334155]">
                        {row.owner}
                      </td>
                      <td className="px-5 py-4 text-xs text-[#64748B]">
                        {row.review}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Warning / Hierarchy Notice Banner */}
            <div className="flex items-start gap-3 border-t border-[#FEF08A] bg-[#FEFCE8] p-4 px-6 text-xs leading-relaxed text-[#854D0E]">
              <svg
                className="mt-0.5 h-4 w-4 flex-none text-[#CA8A04]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <p>
                A configuration hierarchy shows how settings are applied. It
                isn&apos;t a legal hierarchy and doesn&apos;t establish that any policy is
                lawful or compliant—that judgment stays with your organization
                and its advisers.
              </p>
            </div>
          </div>
        </Reveal>

        {/* State Labels Legend */}
        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs">
            <span className="font-medium text-[#64748B]">State labels:</span>
            <span className="rounded-full bg-[#F1F5F9] px-2.5 py-1 font-semibold text-[#475569]">
              Baseline standard
            </span>
            <span className="rounded-full bg-[#D1FAE5] px-2.5 py-1 font-semibold text-[#047857]">
              Approved variant
            </span>
            <span className="rounded-full bg-[#F1F5F9] px-2.5 py-1 font-semibold text-[#475569]">
              Variant expired
            </span>
            <span className="rounded-full bg-[#FEF3C7] px-2.5 py-1 font-semibold text-[#92400E]">
              Conflict review required
            </span>
            <span className="rounded-full bg-[#EDE9FE] px-2.5 py-1 font-semibold text-[#5B21B6]">
              Draft revision
            </span>
          </div>
        </Reveal>

        {/* Bottom Navigation Links */}
        <Reveal delay={0.28}>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-semibold text-[#305CF8]">
            <Link href="/global-hr-management" className="hover:underline">
              Explore global HR management →
            </Link>
            <Link href="/product-tour" className="hover:underline">
              See it in the Product Tour →
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
