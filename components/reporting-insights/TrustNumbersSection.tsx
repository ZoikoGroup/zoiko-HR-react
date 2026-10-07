"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const domains = [
  {
    title: "Workforce structure",
    question: "How is our organization shaped, and how is it changing?",
    image: "/images/reporting-insights/domain-workforce-structure.png",
    kpis: ["Headcount by entity", "Org depth & spans", "Location distribution", "Joiners & leavers"],
  },
  {
    title: "Lifecycle & onboarding",
    question: "Are people transitioning smoothly into, through and out of the company?",
    image: "/images/reporting-insights/domain-lifecycle-onboarding.png",
    kpis: ["Time-to-complete onboarding", "Task past-due rate", "Probation review status", "Offboarding checklist completion"],
  },
  {
    title: "Leave & absence",
    question: "How is leave being requested, approved and planned?",
    image: "/images/reporting-insights/domain-leave-absence.png",
    kpis: ["Leave utilization by type", "Unplanned absence rate", "Overlapping team leave", "Pending manager approvals"],
  },
  {
    title: "Workflows & approvals",
    question: "Where are approval bottlenecks, and is work moving on time?",
    image: "/images/reporting-insights/domain-workflows-approvals.png",
    kpis: ["Median approval cycle time", "Requests waiting >3 days", "Delegation active volume", "Escalation occurrences"],
  },
  {
    title: "Policies & documents",
    question: "Have essential policies been read, signed and acknowledged?",
    image: "/images/reporting-insights/domain-policies-documents.png",
    kpis: ["Company-wide acknowledgment rate", "Overdue acknowledgments by team", "Document expiration pipeline", "Policy version coverage"],
  },
  {
    title: "Data quality",
    question: "Can we trust the records these reports depend on?",
    image: "/images/reporting-insights/domain-data-quality.png",
    kpis: ["Incomplete employee records", "Cross-system field mismatch", "Stale emergency contacts", "Unverified bank/tax entries"],
  },
];

const metricTabsData = [
  {
    title: "Onboarding tasks completed on time",
    category: "Lifecycle & onboarding",
    status: "Current",
    description: "The share of onboarding tasks finished by their due date, for people who started in the period.",
    calculation: "tasks completed by due date ÷ onboarding tasks due in period",
    includes: "Tasks from active onboarding workflows",
    excludes: "Cancelled tasks and withdrawn hires",
    source: "Workflows · Onboarding & lifecycle",
    scope: "Entities and teams within your authorized view",
    period: "Start date within the selected period",
    freshness: "Refreshed daily · Last 07 Oct 2026, 06:00",
    owner: "HR Operations",
    version: "v2.3 · in effect since 01 Jul 2026",
  },
  {
    title: "Median approval cycle time",
    category: "Workflows & approvals",
    status: "Current",
    description: "The median elapsed calendar time from submission to final approval across all workflow types.",
    calculation: "median(approved_timestamp - submitted_timestamp) for workflows in period",
    includes: "All completed approval stages in scope",
    excludes: "Draft, rejected or withdrawn requests",
    source: "Workflows · Approvals engine",
    scope: "Departments and entities within authorized scope",
    period: "Rolling 30 or 90 days, or selected calendar month",
    freshness: "Refreshed hourly · Last 07 Oct 2026, 06:00",
    owner: "Operations & Governance",
    version: "v2.1 · in effect since 15 Jan 2026",
  },
  {
    title: "Policy acknowledgment coverage",
    category: "Policies & documents",
    status: "Stale · 3 days",
    description: "Percentage of active employees who have signed or acknowledged all required mandatory company policies.",
    calculation: "employees with all mandatory policies acknowledged ÷ total active headcount",
    includes: "Current active standard employees past probationary window",
    excludes: "Employees on extended leave or joined <7 days ago",
    source: "Documents & Policies",
    scope: "Global organization · all legal entities",
    period: "Current standing status as of snapshot",
    freshness: "Refreshed daily · Last 04 Oct 2026, 06:00",
    owner: "People & Legal Operations",
    version: "v3.0 · in effect since 01 Aug 2026",
  },
  {
    title: "Headcount",
    category: "Workforce structure",
    status: "Current",
    description: "Total number of active permanent and fixed-term employees with an effective contract on the reporting date.",
    calculation: "count(distinct employee_id) where contract_status = 'active'",
    includes: "Permanent, fixed-term and active probation staff",
    excludes: "External contractors, freelancers and leavers",
    source: "Core HR · Employee Records",
    scope: "All legal entities and active operating locations",
    period: "Point-in-time snapshot as of selected date",
    freshness: "Real-time sync · Last 07 Oct 2026, 06:00",
    owner: "HR Operations & Total Rewards",
    version: "v1.9 · in effect since 01 Jan 2026",
  },
];

export function TrustNumbersSection() {
  const [activeMetricIndex, setActiveMetricIndex] = useState(0);

  const currentMetric = metricTabsData[activeMetricIndex];

  return (
    <section id="trust-numbers" className="scroll-mt-16 bg-[#FAFBFD] py-20 lg:py-28">
      <Container>
        {/* Chapter Header: Can I trust the numbers? / Every figure explains where it came from */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="text-sm font-semibold text-[#305CF8]">
                Can I trust the numbers?
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.025em] text-[#0C1234] sm:text-4xl lg:text-[46px] lg:leading-[1.1]">
                Every figure explains<br className="hidden sm:inline" /> where it came from.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-4 max-w-xl text-[17px] leading-[27.2px] text-[#64748B]">
                Definitions, structure, layout and freshness work together so a number means the same thing to everyone who reads it.
              </p>
            </Reveal>

            {/* In this chapter outline list */}
            <Reveal delay={0.16}>
              <div className="mt-7 border-t border-[#E3E8EF]">
                <div className="flex items-center justify-between border-b border-[#E3E8EF] py-3.5">
                  <span className="text-[15.5px] font-semibold text-[#0C1234]">Metric definitions</span>
                  <span className="text-[14px] text-[#64748B]">Calculation, source, owner</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#E3E8EF] py-3.5">
                  <span className="text-[15.5px] font-semibold text-[#0C1234]">KPI structure</span>
                  <span className="text-[14px] text-[#64748B]">Six operating areas</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#E3E8EF] py-3.5">
                  <span className="text-[15.5px] font-semibold text-[#0C1234]">Dashboard anatomy</span>
                  <span className="text-[14px] text-[#64748B]">Where context lives</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#E3E8EF] py-3.5">
                  <span className="text-[15.5px] font-semibold text-[#0C1234]">Freshness &amp; quality</span>
                  <span className="text-[14px] text-[#64748B]">States you can read</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Meeting Photo */}
          <div className="lg:col-span-6">
            <Reveal delay={0.2} y={30}>
              <div className="overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)]">
                <PlaceholderImage
                  src="/images/reporting-insights/definitions-printed-charts.png"
                  alt="Team meeting discussing metrics with laptops and reports"
                  className="h-[360px] w-full object-cover sm:h-[436px]"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Section: Every metric comes with its definition attached */}
        <div className="mt-28">
          <div className="max-w-2xl text-left">
            <Reveal>
              <h3 className="text-3xl font-bold tracking-[-0.02em] text-[#0C1234] sm:text-[34px] sm:leading-[38px]">
                Every metric comes with its definition<br className="hidden sm:inline" /> attached.
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-[17px] leading-[27.2px] text-[#64748B]">
                Two people looking at the same number should mean the same thing. Each material metric shows how it&apos;s calculated, what it includes, where the data comes from, its scope and period, how fresh it is, and who owns the definition.
              </p>
            </Reveal>
          </div>

          {/* Interactive Tab List + Specification Card */}
          <div className="mt-8 grid items-start gap-6 lg:grid-cols-12">
            {/* Left Tabs (4 items) */}
            <div className="flex flex-col gap-2.5 lg:col-span-4">
              {metricTabsData.map((tab, idx) => {
                const isActive = activeMetricIndex === idx;
                return (
                  <button
                    key={tab.title}
                    type="button"
                    onClick={() => setActiveMetricIndex(idx)}
                    className={`flex flex-col items-start rounded-xl p-3.5 text-left transition-all ${
                      isActive
                        ? "border border-[#305CF8] bg-[#FBFCFF] shadow-[inset_0px_0px_0px_1.5px_#305CF8]"
                        : "border border-[#EEF1F5] bg-white hover:border-[#CBD5E1]"
                    }`}
                  >
                    <span className={`text-[15px] font-semibold leading-snug ${isActive ? "text-[#0C1234]" : "text-[#1E293B]"}`}>
                      {tab.title}
                    </span>
                    <span className="mt-1 text-xs text-[#64748B]">
                      {tab.category}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Specification Card */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-[#EEF1F5] bg-white shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.08),0px_1px_2px_0px_rgba(12,18,52,0.04)]">
                {/* Card Header */}
                <div className="border-b border-[#EEF1F5] p-6 sm:p-7">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF0FF] px-2.5 py-0.5 text-xs font-semibold text-[#2147C9]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2147C9]" />
                    {currentMetric.status}
                  </span>
                  <h4 className="mt-3 text-xl font-bold text-[#0C1234] sm:text-2xl">
                    {currentMetric.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
                    {currentMetric.description}
                  </p>
                </div>

                {/* Calculation Formula */}
                <div className="border-b border-[#EEF1F5] bg-[#FAFBFD] p-5 px-6 sm:px-7">
                  <span className="text-xs font-semibold text-[#64748B]">Calculation</span>
                  <div className="mt-2 rounded-lg bg-[#EAF0FF] px-3.5 py-2.5 font-mono text-[13px] text-[#2147C9]">
                    {currentMetric.calculation}
                  </div>
                </div>

                {/* 2-Column Spec Details Grid */}
                <div className="grid grid-cols-1 divide-y divide-[#EEF1F5] text-[13.5px] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                  {/* Left Column Rows */}
                  <div className="divide-y divide-[#EEF1F5]">
                    <div className="p-4 px-6 sm:px-7">
                      <span className="block text-xs font-medium text-[#64748B]">Includes</span>
                      <span className="mt-1 block text-[#0C1234]">{currentMetric.includes}</span>
                    </div>
                    <div className="p-4 px-6 sm:px-7">
                      <span className="block text-xs font-medium text-[#64748B]">Source</span>
                      <span className="mt-1 block text-[#0C1234]">{currentMetric.source}</span>
                    </div>
                    <div className="p-4 px-6 sm:px-7">
                      <span className="block text-xs font-medium text-[#64748B]">Period</span>
                      <span className="mt-1 block text-[#0C1234]">{currentMetric.period}</span>
                    </div>
                    <div className="p-4 px-6 sm:px-7">
                      <span className="block text-xs font-medium text-[#64748B]">Definition owner</span>
                      <span className="mt-1 block text-[#0C1234]">{currentMetric.owner}</span>
                    </div>
                  </div>

                  {/* Right Column Rows */}
                  <div className="divide-y divide-[#EEF1F5]">
                    <div className="p-4 px-6 sm:px-7">
                      <span className="block text-xs font-medium text-[#64748B]">Excludes</span>
                      <span className="mt-1 block text-[#0C1234]">{currentMetric.excludes}</span>
                    </div>
                    <div className="p-4 px-6 sm:px-7">
                      <span className="block text-xs font-medium text-[#64748B]">Scope</span>
                      <span className="mt-1 block text-[#0C1234]">{currentMetric.scope}</span>
                    </div>
                    <div className="p-4 px-6 sm:px-7">
                      <span className="block text-xs font-medium text-[#64748B]">Freshness</span>
                      <span className="mt-1 block text-[#0C1234]">{currentMetric.freshness}</span>
                    </div>
                    <div className="p-4 px-6 sm:px-7">
                      <span className="block text-xs font-medium text-[#64748B]">Version</span>
                      <span className="mt-1 block text-[#0C1234]">{currentMetric.version}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-6 text-xs text-[#64748B]">
            Example metrics and values are illustrative and use synthetic data. Available metrics depend on your plan and configuration.
          </p>
        </div>

        {/* Subsection 2: KPIs organized around the questions HR operations actually ask */}
        <div className="mt-28 border-t border-[#EEF1F5] pt-20">
          <div className="max-w-3xl">
            <Reveal>
              <h3 className="text-3xl font-bold tracking-[-0.02em] text-[#0C1234]">
                KPIs organized around the questions HR operations actually ask.
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-base leading-relaxed text-[#64748B]">
                Metrics are grouped by operating domain, so each dashboard answers a clear question
                instead of collecting every number available. Each KPI shows the source it&apos;s derived from.
              </p>
            </Reveal>
          </div>

          {/* Banner bar */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-[#0C1234] px-6 py-4 text-white">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#00D592]" />
              <span className="text-sm font-semibold">People operations health</span>
            </div>
            <span className="text-xs text-[#C3CADF]">
              Six domains · each KPI shows definition, source, scope, period and owner
            </span>
          </div>

          {/* 6 Domains Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain, idx) => (
              <Reveal key={domain.title} delay={0.08 * idx}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#EEF1F5] bg-white transition-all hover:border-[#305CF8]/30 hover:shadow-lg">
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <PlaceholderImage
                      src={domain.image}
                      alt={domain.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h4 className="text-lg font-bold text-[#0C1234]">{domain.title}</h4>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#64748B]">
                      {domain.question}
                    </p>

                    <div className="mt-5 border-t border-[#F1F5F9] pt-4">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                        Included KPIs:
                      </span>
                      <ul className="mt-2.5 space-y-1.5 text-xs text-[#334155]">
                        {domain.kpis.map((kpi) => (
                          <li key={kpi} className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-[#305CF8]" />
                            {kpi}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Subsection 3: The anatomy of a dashboard you can trust */}
        <div className="mt-28 border-t border-[#EEF1F5] pt-20">
          <div className="max-w-2xl text-left">
            <Reveal>
              <h3 className="text-3xl font-bold tracking-[-0.02em] text-[#0C1234] sm:text-[34px] sm:leading-[38px]">
                The anatomy of a dashboard you can<br className="hidden sm:inline" /> trust.
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-[17px] leading-[27.2px] text-[#64748B]">
                Every dashboard follows the same structure, so the context people need to interpret a number is always in the same place. Select a part to see what it does.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-12">
            {/* Left Column: Dashboard Mockup with Pins */}
            <div className="lg:col-span-7">
              <Reveal delay={0.16}>
                <div className="rounded-2xl border border-[#EEF1F5] bg-white p-4 sm:p-5 shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.08),0px_1px_2px_0px_rgba(12,18,52,0.04)]">
                  {/* Pin 1: Scope Bar */}
                  <div className="relative rounded-xl border border-[#EEF1F5] bg-[#FBFCFE] p-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="absolute -left-2.5 -top-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#305CF8] text-xs font-bold text-white shadow-md">
                      1
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-md bg-[#F1F5F9] px-2.5 py-1 text-xs font-medium text-[#334155]">
                        Scope: Meridian UK Ltd
                      </span>
                      <span className="rounded-md bg-[#F1F5F9] px-2.5 py-1 text-xs font-medium text-[#334155]">
                        Department: All
                      </span>
                      <span className="rounded-md bg-[#F1F5F9] px-2.5 py-1 text-xs font-medium text-[#334155]">
                        Q3 2026
                      </span>
                    </div>
                    <span className="rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[11px] font-medium text-[#64748B]">
                      Synthetic data
                    </span>
                  </div>

                  {/* Pin 2: Metric Tiles with States */}
                  <div className="relative mt-3">
                    <span className="absolute -left-2.5 -top-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#305CF8] text-xs font-bold text-white shadow-md">
                      2
                    </span>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                      {/* Tile 1 */}
                      <div className="flex flex-col justify-between gap-1 rounded-xl border border-[#EEF1F5] p-3">
                        <span className="text-xs text-[#64748B]">Headcount</span>
                        <span className="text-xl font-bold text-[#0C1234]">412</span>
                        <span className="inline-flex w-fit items-center gap-1 rounded-full bg-[#EAF0FF] px-2 py-0.5 text-[10.5px] font-semibold text-[#2147C9]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#2147C9]" />
                          Current
                        </span>
                      </div>

                      {/* Tile 2 */}
                      <div className="flex flex-col justify-between gap-1 rounded-xl border border-[#EEF1F5] p-3">
                        <span className="text-xs text-[#64748B]">Requests past due</span>
                        <span className="text-xl font-bold text-[#0C1234]">18</span>
                        <span className="inline-flex w-fit items-center gap-1 rounded-full bg-[#FEF3C7] px-2 py-0.5 text-[10.5px] font-semibold text-[#92400E]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#92400E]" />
                          Partial · 1 source
                        </span>
                      </div>

                      {/* Tile 3 */}
                      <div className="flex flex-col justify-between gap-1 rounded-xl border border-[#EEF1F5] p-3">
                        <span className="text-xs text-[#64748B]">Ack. coverage</span>
                        <span className="text-xl font-bold text-[#0C1234]">87%</span>
                        <span className="inline-flex w-fit items-center gap-1 rounded-full bg-[#E0F2FE] px-2 py-0.5 text-[10.5px] font-semibold text-[#0369A1]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#0369A1]" />
                          Definition changed
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Row: Pin 3 & Pin 5 */}
                  <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-12">
                    {/* Trend Chart (Pin 3) */}
                    <div className="relative sm:col-span-8">
                      <span className="absolute -left-2.5 -top-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#305CF8] text-xs font-bold text-white shadow-md">
                        3
                      </span>
                      <div className="flex h-full flex-col justify-between rounded-xl border border-[#EEF1F5] p-3.5">
                        <span className="text-xs font-bold text-[#0C1234]">
                          Joiners and leavers by month
                        </span>
                        {/* 6 Pairs of Bars */}
                        <div className="mt-4 flex h-24 items-end justify-between gap-2 px-2">
                          {[
                            { h1: "48%", h2: "28%" },
                            { h1: "68%", h2: "40%" },
                            { h1: "42%", h2: "26%" },
                            { h1: "82%", h2: "48%" },
                            { h1: "62%", h2: "36%" },
                            { h1: "52%", h2: "32%" },
                          ].map((bar, i) => (
                            <div key={i} className="flex flex-1 items-end justify-center gap-1">
                              <div style={{ height: bar.h1 }} className="w-3.5 rounded-t-sm bg-[#305CF8] sm:w-4" />
                              <div style={{ height: bar.h2 }} className="w-3.5 rounded-t-sm bg-[#93C5FD] sm:w-4" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Metric Details (Pin 5) */}
                    <div className="relative sm:col-span-4">
                      <span className="absolute -left-2.5 -top-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#305CF8] text-xs font-bold text-white shadow-md">
                        5
                      </span>
                      <div className="flex h-full flex-col justify-between rounded-xl border border-[#EEF1F5] p-3.5">
                        <span className="text-xs font-bold text-[#0C1234]">Metric details</span>
                        <div className="mt-2 space-y-1.5 text-[11.5px] leading-tight">
                          <div>
                            <span className="text-[#64748B]">Definition: </span>
                            <strong className="text-[#0C1234]">v2.3</strong>
                          </div>
                          <div>
                            <span className="text-[#64748B]">Source: </span>
                            <strong className="text-[#0C1234]">HR record</strong>
                          </div>
                          <div>
                            <span className="text-[#64748B]">Owner: </span>
                            <strong className="text-[#0C1234]">HR Operations</strong>
                          </div>
                          <div>
                            <span className="text-[#64748B]">Refreshed: </span>
                            <strong className="text-[#0C1234]">06:00</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: Pin 4 & Pin 6 */}
                  <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-12">
                    {/* Breakdown Table (Pin 4) */}
                    <div className="relative sm:col-span-8">
                      <span className="absolute -left-2.5 -top-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#305CF8] text-xs font-bold text-white shadow-md">
                        4
                      </span>
                      <div className="h-full rounded-xl border border-[#EEF1F5] p-3.5">
                        <table className="w-full text-left text-xs">
                          <thead>
                            <tr className="border-b border-[#F1F5F9] text-[10.5px] font-semibold uppercase text-[#94A3B8]">
                              <th className="pb-2 font-semibold">DEPARTMENT</th>
                              <th className="pb-2 font-semibold">HEADCOUNT</th>
                              <th className="pb-2 font-semibold">PAST DUE</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#F8FAFC] text-[11.5px] text-[#0C1234]">
                            <tr>
                              <td className="py-1.5 font-medium">Operations</td>
                              <td className="py-1.5">186</td>
                              <td className="py-1.5">9</td>
                            </tr>
                            <tr>
                              <td className="py-1.5 font-medium">Customer care</td>
                              <td className="py-1.5">142</td>
                              <td className="py-1.5">6</td>
                            </tr>
                            <tr>
                              <td className="py-1.5 font-medium">Finance</td>
                              <td className="py-1.5">61</td>
                              <td className="py-1.5">3</td>
                            </tr>
                            <tr>
                              <td className="py-1.5 font-medium">Legal</td>
                              <td className="py-1.5">3</td>
                              <td className="py-1.5">
                                <span className="inline-flex items-center gap-1 rounded-full bg-[#EDE9FE] px-2 py-0.5 text-[10px] font-semibold text-[#5B21B6]">
                                  <span className="h-1 w-1 rounded-full bg-[#5B21B6]" />
                                  Suppressed for privacy
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Data Quality (Pin 6) */}
                    <div className="relative sm:col-span-4">
                      <span className="absolute -left-2.5 -top-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#305CF8] text-xs font-bold text-white shadow-md">
                        6
                      </span>
                      <div className="flex h-full flex-col justify-between rounded-xl border border-[#EEF1F5] p-3.5">
                        <span className="text-xs font-bold text-[#0C1234]">Data quality</span>
                        <div className="mt-3 space-y-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-[#64748B]">Fields complete</span>
                            <strong className="font-bold text-[#0C1234]">97%</strong>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[#64748B]">Open conflicts</span>
                            <strong className="font-bold text-[#0C1234]">4</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: 6 Explanatory Cards */}
            <div className="lg:col-span-5">
              <Reveal delay={0.24}>
                <div className="flex flex-col gap-2.5">
                  {[
                    {
                      id: 1,
                      title: "Scope bar",
                      desc: "Shows the entity, filters and period applied, and that it sits within your authorized view.",
                    },
                    {
                      id: 2,
                      title: "Metric tiles with states",
                      desc: "Each value carries a text state: current, stale, partial, definition changed and more.",
                    },
                    {
                      id: 3,
                      title: "Trend chart",
                      desc: "Compares periods using the same definition version, or flags where it changed.",
                    },
                    {
                      id: 4,
                      title: "Breakdown table",
                      desc: "Splits the metric by dimension. Small groups are suppressed rather than shown.",
                    },
                    {
                      id: 5,
                      title: "Metric details",
                      desc: "Definition, source, owner and refresh time, one select away from any number.",
                    },
                    {
                      id: 6,
                      title: "Data quality",
                      desc: "Completeness and open conflicts for the records behind the report.",
                    },
                  ].map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-3 rounded-xl border border-[#EEF1F5] bg-white p-3.5 transition-all hover:border-[#CBD5E1]"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF0FF] text-xs font-bold text-[#305CF8]">
                        {item.id}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-[14px] font-semibold text-[#0C1234]">
                          {item.title}
                        </h4>
                        <p className="mt-0.5 text-xs leading-relaxed text-[#64748B]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Bottom link: See a dashboard in the Product Tour */}
          <Reveal delay={0.28}>
            <div className="mt-8 flex items-center">
              <Link
                href="/product-tour"
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#305CF8] transition-colors hover:text-[#2547CE]"
              >
                See a dashboard in the Product Tour
                <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Subsection 4: A number should always say how current and complete it is */}
        <div className="mt-28 border-t border-[#EEF1F5] pt-20">
          <div className="max-w-3xl text-left">
            <Reveal>
              <h3 className="text-3xl font-bold tracking-[-0.02em] text-[#0C1234] sm:text-[34px] sm:leading-[40px]">
                A number should always say how current<br className="hidden sm:inline" /> and complete it is.
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-[16.5px] leading-relaxed text-[#64748B]">
                When data is late, partial or unavailable, the report says so in words, not just color.<br className="hidden sm:inline" /> Here is the same metric in each state.
              </p>
            </Reveal>
          </div>

          {/* 6 State Cards Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Current */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#EEF1F5] bg-white p-6 shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.06)]">
              <div>
                <span className="text-xs font-medium text-[#64748B]">
                  Onboarding tasks on time
                </span>
                <div className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C1234]">
                  92%
                </div>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF0FF] px-2.5 py-1 text-xs font-semibold text-[#2147C9]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2147C9]" />
                    Current
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xs leading-relaxed text-[#64748B]">
                  Refreshed on schedule from every source.
                </p>
              </div>
            </div>

            {/* Card 2: Refreshing */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#EEF1F5] bg-white p-6 shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.06)]">
              <div>
                <span className="text-xs font-medium text-[#64748B]">
                  Onboarding tasks on time
                </span>
                <div className="mt-3 flex h-9 items-center">
                  <div className="h-7 w-40 rounded-lg bg-[#EDF2F7]" />
                </div>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF0FF] px-2.5 py-1 text-xs font-semibold text-[#2147C9]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2147C9]" />
                    Refreshing
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xs leading-relaxed text-[#64748B]">
                  New data is loading. The old value isn&apos;t shown as current meanwhile.
                </p>
              </div>
            </div>

            {/* Card 3: Stale · last 04 Oct */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#EEF1F5] bg-white p-6 shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.06)]">
              <div>
                <span className="text-xs font-medium text-[#64748B]">
                  Onboarding tasks on time
                </span>
                <div className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C1234]">
                  90%
                </div>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FEF3C7] px-2.5 py-1 text-xs font-semibold text-[#92400E]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D97706]" />
                    Stale · last 04 Oct
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xs leading-relaxed text-[#64748B]">
                  A scheduled refresh was missed. The last good value is shown with its date.
                </p>
                <div className="mt-2.5">
                  <Link
                    href="/documentation"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#305CF8] transition-colors hover:text-[#2547CE]"
                  >
                    Check source status <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 4: Partial · 1 of 2 sources */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#EEF1F5] bg-white p-6 shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.06)]">
              <div>
                <span className="text-xs font-medium text-[#64748B]">
                  Onboarding tasks on time
                </span>
                <div className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C1234]">
                  91%
                </div>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFEDD5] px-2.5 py-1 text-xs font-semibold text-[#C2410C]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EA580C]" />
                    Partial · 1 of 2 sources
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xs leading-relaxed text-[#64748B]">
                  One source hasn&apos;t reported. The value covers only what arrived.
                </p>
                <div className="mt-2.5">
                  <Link
                    href="/documentation"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#305CF8] transition-colors hover:text-[#2547CE]"
                  >
                    See how sources are tracked <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 5: Source unavailable */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#EEF1F5] bg-white p-6 shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.06)]">
              <div>
                <span className="text-xs font-medium text-[#64748B]">
                  Onboarding tasks on time
                </span>
                <div className="mt-3 flex h-9 items-center text-[15px] font-medium text-[#64748B]">
                  No value shown
                </div>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-2.5 py-1 text-xs font-semibold text-[#64748B]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#94A3B8]" />
                    Source unavailable
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xs leading-relaxed text-[#64748B]">
                  The source can&apos;t be reached, so no figure is presented as fact.
                </p>
                <div className="mt-2.5">
                  <Link
                    href="/documentation"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#305CF8] transition-colors hover:text-[#2547CE]"
                  >
                    View Service Status <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 6: Definition changed · v2.3 */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#EEF1F5] bg-white p-6 shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.06)]">
              <div>
                <span className="text-xs font-medium text-[#64748B]">
                  Onboarding tasks on time
                </span>
                <div className="mt-3 text-3xl font-extrabold tracking-tight text-[#0C1234]">
                  89%
                </div>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E0F2FE] px-2.5 py-1 text-xs font-semibold text-[#0369A1]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0284C7]" />
                    Definition changed · v2.3
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xs leading-relaxed text-[#64748B]">
                  The calculation changed this period. Earlier periods are marked as not directly comparable.
                </p>
                <div className="mt-2.5">
                  <Link
                    href="/documentation"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#305CF8] transition-colors hover:text-[#2547CE]"
                  >
                    How definition changes work <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Quality Summary & Guide */}
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-12">
            {/* Left Card: Data quality behind this report */}
            <div className="lg:col-span-7">
              <Reveal delay={0.16}>
                <div className="rounded-2xl border border-[#EEF1F5] bg-white p-6 sm:p-7 shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.06)]">
                  <h4 className="text-base font-bold text-[#0C1234]">
                    Data quality behind this report
                  </h4>

                  <div className="mt-6 space-y-4">
                    {/* Row 1: Required fields */}
                    <div className="flex items-center gap-4">
                      <span className="w-36 text-xs font-medium text-[#0C1234]">
                        Required fields
                      </span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#F1F5F9]">
                        <div className="h-full rounded-full bg-[#00D592] w-[97%]" />
                      </div>
                      <span className="w-12 text-right text-xs font-medium text-[#64748B]">
                        97%
                      </span>
                    </div>

                    {/* Row 2: Effective dates set */}
                    <div className="flex items-center gap-4">
                      <span className="w-36 text-xs font-medium text-[#0C1234]">
                        Effective dates set
                      </span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#F1F5F9]">
                        <div className="h-full rounded-full bg-[#00D592] w-[94%]" />
                      </div>
                      <span className="w-12 text-right text-xs font-medium text-[#64748B]">
                        94%
                      </span>
                    </div>

                    {/* Row 3: Manager assigned */}
                    <div className="flex items-center gap-4">
                      <span className="w-36 text-xs font-medium text-[#0C1234]">
                        Manager assigned
                      </span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#F1F5F9]">
                        <div className="h-full rounded-full bg-[#F59E0B] w-[81%]" />
                      </div>
                      <span className="w-12 text-right text-xs font-medium text-[#64748B]">
                        81%
                      </span>
                    </div>

                    {/* Row 4: Source conflicts */}
                    <div className="flex items-center gap-4">
                      <span className="w-36 text-xs font-medium text-[#0C1234]">
                        Source conflicts
                      </span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#F1F5F9]">
                        <div className="h-full rounded-full bg-[#EA580C] w-[14%]" />
                      </div>
                      <span className="w-12 text-right text-xs font-medium text-[#64748B]">
                        4 open
                      </span>
                    </div>
                  </div>

                  <p className="mt-6 text-xs text-[#94A3B8]">
                    Synthetic values · Scope: Meridian UK Ltd
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Card: How to read it */}
            <div className="lg:col-span-5">
              <Reveal delay={0.24}>
                <div className="pt-2">
                  <h4 className="text-lg font-bold text-[#0C1234]">
                    How to read it
                  </h4>

                  <div className="mt-5 space-y-4">
                    {/* Item 1 */}
                    <div className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-[13.5px] leading-relaxed text-[#475569]">
                        <strong className="font-semibold text-[#0C1234]">Green bars</strong> mean the records behind the report are complete enough to rely on.
                      </p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-[13.5px] leading-relaxed text-[#475569]">
                        <strong className="font-semibold text-[#0C1234]">Amber bars</strong> point to gaps worth fixing at the source, such as missing managers.
                      </p>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-[13.5px] leading-relaxed text-[#475569]">
                        <strong className="font-semibold text-[#0C1234]">Open conflicts</strong> are values two sources disagree on. They&apos;re held for review, not counted.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
