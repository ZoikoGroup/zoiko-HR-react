"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const rolesData = {
  executive: {
    label: "Executive viewer",
    tagline: "Organization-wide trends for planning, at an aggregated level.",
    scope: "All entities, aggregated",
    drillDown: "To entity and department",
    records: "Not available",
    recordsIsPill: true,
    export: "Export restricted",
    exportIsPill: true,
  },
  admin: {
    label: "HR administrator",
    tagline: "Full operational scope across assigned entities and workforce workflows.",
    scope: "Assigned entities and operational domains",
    drillDown: "To individual employee record",
    records: "Available in scope",
    recordsIsPill: false,
    export: "Governed CSV with purpose logging",
    exportIsPill: false,
  },
  manager: {
    label: "Manager",
    tagline: "Team performance, leave schedules and operational cycles for reporting lines.",
    scope: "Direct and indirect reporting line",
    drillDown: "To team members in reporting line",
    records: "Direct team only",
    recordsIsPill: false,
    export: "Export restricted",
    exportIsPill: true,
  },
  viewer: {
    label: "Reporting viewer",
    tagline: "Pre-approved operational dashboards and cross-functional performance metrics.",
    scope: "Approved reporting views",
    drillDown: "Aggregated totals only",
    records: "Not available",
    recordsIsPill: true,
    export: "Export restricted",
    exportIsPill: true,
  },
  auditor: {
    label: "Auditor",
    tagline: "Time-limited sampling scope to verify policy compliance and approval records.",
    scope: "Audit sampling scope, time-bound",
    drillDown: "Historical changelogs and audit trails",
    records: "Sampled records only",
    recordsIsPill: false,
    export: "Watermarked audit export",
    exportIsPill: false,
  },
};

type RoleKey = keyof typeof rolesData;

export function WhoSeesWhatSection() {
  const [minThreshold, setMinThreshold] = useState(5);
  const [selectedRole, setSelectedRole] = useState<RoleKey>("executive");

  const teams = [
    { name: "Operations", people: 186, avgLeave: "6.4" },
    { name: "Customer care", people: 142, avgLeave: "7.1" },
    { name: "Finance", people: 61, avgLeave: "5.8" },
    { name: "People team", people: 9, avgLeave: "6.9" },
    { name: "Legal", people: 3, avgLeave: "4.2" },
    { name: "Executive office", people: 2, avgLeave: "5.1" },
  ];

  return (
    <section id="who-sees-what" className="scroll-mt-16 bg-white py-20 lg:py-28">
      <Container>
        {/* Header Block with Chapter Nav & Photo */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#305CF8]">
                Who sees what?
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0C1234] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
                The right view for each person,{" "}
                <span className="block sm:inline">and nothing more.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-5 text-base leading-relaxed text-[#64748B] sm:text-lg">
                Scope, privacy thresholds, roles and drill-down limits decide what appears on
                screen, before any filter is touched.
              </p>
            </Reveal>

            {/* In this chapter badges */}
            <Reveal delay={0.16}>
              <div className="mt-8 divide-y divide-[#EEF1F5] rounded-2xl border border-[#EEF1F5] bg-[#FAFBFD] p-2 text-sm">
                <div className="flex items-center justify-between p-3">
                  <span className="font-semibold text-[#0C1234]">Filters & scope</span>
                  <span className="text-xs text-[#64748B]">Narrow, never widen</span>
                </div>
                <div className="flex items-center justify-between p-3">
                  <span className="font-semibold text-[#0C1234]">Privacy thresholds</span>
                  <span className="text-xs text-[#64748B]">Small groups stay private</span>
                </div>
                <div className="flex items-center justify-between p-3">
                  <span className="font-semibold text-[#0C1234]">Role-based views</span>
                  <span className="text-xs text-[#64748B]">What decides access</span>
                </div>
                <div className="flex items-center justify-between p-3">
                  <span className="font-semibold text-[#0C1234]">Drill-down & exceptions</span>
                  <span className="text-xs text-[#64748B]">Limits shown clearly</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2} y={30}>
              <div className="relative overflow-hidden rounded-[18px] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)]">
                <PlaceholderImage
                  src="/images/reporting-insights/who-sees-what-security.png"
                  alt="Laptop with a security lock representing data protection"
                  className="h-[360px] w-full object-cover sm:h-[420px]"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* 5.1 Filters narrow your view. They never widen it. */}
        <div className="mt-28 border-t border-[#EEF1F5] pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <Reveal>
                <h3 className="text-2xl font-bold tracking-[-0.015em] text-[#0C1234] sm:text-3xl">
                  Filters narrow your view. They never widen it.
                </h3>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-4 text-base leading-relaxed text-[#64748B]">
                  Your authorized scope comes first. Filters work inside it, so changing a filter can
                  focus a report but can&apos;t reveal data outside what you&apos;re permitted to see.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-[14px] leading-relaxed text-[#475569]">
                      <strong className="font-semibold text-[#0C1234]">Scope is visible.</strong> Every report states
                      the scope it&apos;s showing and where that scope comes from.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-[14px] leading-relaxed text-[#475569]">
                      <strong className="font-semibold text-[#0C1234]">Sensitive dimensions are gated.</strong> Filters
                      on sensitive attributes appear only with the right permission.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-[14px] leading-relaxed text-[#475569]">
                      <strong className="font-semibold text-[#0C1234]">Thresholds still apply.</strong> Narrowing a filter
                      never bypasses privacy suppression for small groups.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Interactive Scope Mockup */}
            <div className="lg:col-span-6">
              <Reveal delay={0.2} y={30}>
                <div className="overflow-hidden rounded-2xl border border-[#EEF1F5] bg-white shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.08),0px_1px_2px_0px_rgba(12,18,52,0.04)]">
                  {/* Top Scope Indicator */}
                  <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0C1234] px-5 py-4 text-white">
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="text-xs font-medium text-white/80">Your scope</span>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                        Meridian UK Ltd - Operations
                      </span>
                    </div>
                    <span className="text-xs text-[#8A93B2]">From your role assignment</span>
                  </div>

                  {/* Filter Selectors */}
                  <div className="p-5 sm:p-6">
                    {/* Row 1: 3 Selectors */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div>
                        <span className="text-xs font-medium text-[#64748B]">Location</span>
                        <div className="mt-1.5 rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2 text-xs font-medium text-[#0C1234]">
                          All in scope
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-[#64748B]">Period</span>
                        <div className="mt-1.5 rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2 text-xs font-medium text-[#0C1234]">
                          Q3 2026
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-[#64748B]">Entity</span>
                        <div className="mt-1.5 rounded-lg bg-[#F8FAFC] px-3.5 py-2 text-xs font-medium text-[#94A3B8]">
                          Meridian UK Ltd
                        </div>
                        <div className="mt-1.5 flex items-center gap-1 text-[11px] text-[#64748B]">
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          Outside your scope
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Sensitive dimension */}
                    <div className="mt-4">
                      <span className="text-xs font-medium text-[#64748B]">Sensitive dimension</span>
                      <div className="mt-1.5 w-full rounded-lg bg-[#F1F5F9] px-3.5 py-2 text-xs font-medium text-[#94A3B8] sm:max-w-[200px]">
                        Permission required
                      </div>
                      <div className="mt-1.5 flex items-center gap-1 text-[11px] text-[#64748B]">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Permission limited
                      </div>
                    </div>
                  </div>

                  {/* Scoped Result Metrics */}
                  <div className="border-t border-[#EEF1F5] p-5 sm:p-6">
                    <div className="grid grid-cols-3 gap-3 sm:gap-4">
                      <div className="rounded-xl border border-[#EEF1F5] p-3.5">
                        <span className="text-xs text-[#64748B]">Headcount</span>
                        <p className="mt-1 text-2xl font-bold text-[#0C1234] sm:text-3xl">186</p>
                        <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#EAF0FF] px-2 py-0.5 text-[10.5px] font-semibold text-[#2147C9]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#2147C9]" />
                          Current
                        </span>
                      </div>
                      <div className="rounded-xl border border-[#EEF1F5] p-3.5">
                        <span className="text-xs text-[#64748B]">Requests past due</span>
                        <p className="mt-1 text-2xl font-bold text-[#0C1234] sm:text-3xl">9</p>
                        <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#EAF0FF] px-2 py-0.5 text-[10.5px] font-semibold text-[#2147C9]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#2147C9]" />
                          Current
                        </span>
                      </div>
                      <div className="rounded-xl border border-[#EEF1F5] p-3.5">
                        <span className="text-xs text-[#64748B]">Median approval time</span>
                        <p className="mt-1 text-2xl font-bold text-[#0C1234] sm:text-3xl">1.8d</p>
                        <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#EAF0FF] px-2 py-0.5 text-[10.5px] font-semibold text-[#2147C9]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#2147C9]" />
                          Current
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Footnote */}
                  <div className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
                    <p className="text-xs text-[#94A3B8]">
                      Try the filters. Values are synthetic and illustrative.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* 5.2 Small groups stay private, even in aggregate */}
        <div className="mt-28 border-t border-[#EEF1F5] pt-20">
          <div className="max-w-3xl">
            <Reveal>
              <h3 className="text-3xl font-bold tracking-[-0.02em] text-[#0C1234]">
                Small groups stay private, even in aggregate.
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-base leading-relaxed text-[#64748B]">
                An average across three people can point to one person. Privacy thresholds suppress
                results for groups below a minimum size your organization sets, and sensitive
                dimensions need explicit permission.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid items-start gap-8 lg:grid-cols-12">
            {/* Interactive Slider Table */}
            <div className="lg:col-span-7">
              <Reveal delay={0.16}>
                <div className="overflow-hidden rounded-2xl border border-[#EEF1F5] bg-white shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.06)]">
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between">
                      <span className="text-[15px] font-bold text-[#0C1234]">
                        Minimum group size
                      </span>
                      <span className="text-[15px] font-bold text-[#0C1234]">
                        {minThreshold} people
                      </span>
                    </div>

                    <div className="mt-4">
                      <input
                        type="range"
                        min={2}
                        max={15}
                        value={minThreshold}
                        onChange={(e) => setMinThreshold(Number(e.target.value))}
                        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#E2E8F0] accent-[#305CF8]"
                      />
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-[#64748B]">
                      Move the slider to see which teams are suppressed. Illustrative only. Your organization sets the real threshold.
                    </p>
                  </div>

                  {/* Reactive Table */}
                  <div className="border-t border-[#EEF1F5]">
                    <table className="w-full text-left text-xs sm:text-[13px]">
                      <thead className="bg-[#FBFCFE] text-[10.5px] font-semibold uppercase tracking-wider text-[#64748B]">
                        <tr>
                          <th className="px-6 py-3 font-semibold">TEAM</th>
                          <th className="px-6 py-3 font-semibold">PEOPLE</th>
                          <th className="px-6 py-3 font-semibold">AVG. LEAVE DAYS</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#EEF1F5]">
                        {teams.map((t) => {
                          const isSuppressed = t.people < minThreshold;
                          return (
                            <tr key={t.name} className="transition-colors hover:bg-[#FAFBFD]">
                              <td className="px-6 py-3.5 font-bold text-[#0C1234]">{t.name}</td>
                              <td className="px-6 py-3.5 text-[#0C1234]">
                                {isSuppressed ? `Under ${minThreshold}` : t.people}
                              </td>
                              <td className="px-6 py-3.5">
                                {isSuppressed ? (
                                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EDE9FE] px-2.5 py-0.5 text-xs font-semibold text-[#5B21B6]">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#5B21B6]" />
                                    Suppressed for privacy
                                  </span>
                                ) : (
                                  <span className="text-[#0C1234]">{t.avgLeave}</span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Bottom Counter Footnote */}
                  <div className="border-t border-[#EEF1F5] bg-[#FAFBFD]/50 px-6 py-3.5">
                    <p className="text-xs text-[#64748B]">
                      {teams.filter((t) => t.people < minThreshold).length} of {teams.length} teams suppressed at this threshold. Synthetic data.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* 3 Privacy Principle Cards */}
            <div className="space-y-4 lg:col-span-5">
              <Reveal delay={0.16}>
                <div className="rounded-2xl border border-[#EEF1F5] bg-white p-5 shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.06)]">
                  <h4 className="text-sm font-bold text-[#0C1234]">
                    Suppressed, not hidden silently
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#64748B]">
                    Suppressed cells say so, so nobody mistakes missing data for zero.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="rounded-2xl border border-[#EEF1F5] bg-white p-5 shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.06)]">
                  <h4 className="text-sm font-bold text-[#0C1234]">
                    No back-calculation
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#64748B]">
                    Totals are protected so a suppressed group can&apos;t be worked out by subtraction, where supported.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.32}>
                <div className="rounded-2xl border border-[#EEF1F5] bg-white p-5 shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.06)]">
                  <h4 className="text-sm font-bold text-[#0C1234]">
                    Sensitive dimensions are permission-gated
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#64748B]">
                    Breakdowns by sensitive attributes are available only to roles authorized for them.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* 5.3 Different roles, different views of the same reports */}
        <div className="mt-28 border-t border-[#EEF1F5] pt-20">
          <div className="max-w-3xl">
            <Reveal>
              <h3 className="text-3xl font-bold tracking-[-0.02em] text-[#0C1234]">
                Different roles, different views of the same reports.
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-[16.5px] leading-relaxed text-[#64748B]">
                These examples show how a typical configuration might look. A role label alone
                never grants access; what someone actually sees is decided by several factors
                together.
              </p>
            </Reveal>
          </div>

          {/* Role selector tabs */}
          <div className="mt-8">
            <div className="inline-flex flex-wrap items-center gap-1 rounded-full bg-[#F1F5F9] p-1.5">
              {(Object.keys(rolesData) as RoleKey[]).map((key) => {
                const role = rolesData[key];
                const isActive = selectedRole === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedRole(key)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-[#305CF8] text-white shadow-sm"
                        : "text-[#475569] hover:text-[#0C1234]"
                    }`}
                  >
                    {role.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2-Column Side-by-Side Grid */}
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-12">
            {/* Left Column: Role Card */}
            <div className="lg:col-span-7">
              <Reveal delay={0.16}>
                <div className="overflow-hidden rounded-2xl border border-[#EEF1F5] bg-white p-6 sm:p-7 shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.06)]">
                  {/* Photo at Top */}
                  <div className="overflow-hidden rounded-xl">
                    <PlaceholderImage
                      src="/images/reporting-insights/role-executive-viewer.png"
                      alt="Two colleagues collaborating at a laptop"
                      className="h-56 sm:h-64 w-full object-cover"
                    />
                  </div>

                  {/* Role Details */}
                  <div className="mt-6">
                    <span className="inline-block rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#64748B]">
                      Illustrative configuration
                    </span>
                    <h4 className="mt-3 text-2xl font-bold text-[#0C1234]">
                      {rolesData[selectedRole].label}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
                      {rolesData[selectedRole].tagline}
                    </p>
                  </div>

                  {/* Specs Table */}
                  <div className="mt-6 divide-y divide-[#EEF1F5] border-t border-[#EEF1F5] text-xs">
                    <div className="flex items-center justify-between py-3.5">
                      <span className="text-[#64748B]">Typical scope</span>
                      <span className="font-semibold text-[#0C1234]">
                        {rolesData[selectedRole].scope}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3.5">
                      <span className="text-[#64748B]">Drill-down</span>
                      <span className="font-semibold text-[#0C1234]">
                        {rolesData[selectedRole].drillDown}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3.5">
                      <span className="text-[#64748B]">Individual records</span>
                      {rolesData[selectedRole].recordsIsPill ? (
                        <span className="rounded-full bg-[#F1F5F9] px-2.5 py-0.5 font-medium text-[#64748B]">
                          {rolesData[selectedRole].records}
                        </span>
                      ) : (
                        <span className="font-semibold text-[#0C1234]">
                          {rolesData[selectedRole].records}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between py-3.5">
                      <span className="text-[#64748B]">Export</span>
                      {rolesData[selectedRole].exportIsPill ? (
                        <span className="rounded-full bg-[#F1F5F9] px-2.5 py-0.5 font-medium text-[#64748B]">
                          {rolesData[selectedRole].export}
                        </span>
                      ) : (
                        <span className="font-semibold text-[#0C1234]">
                          {rolesData[selectedRole].export}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: What actually decides access */}
            <div className="lg:col-span-5">
              <Reveal delay={0.24}>
                <div className="rounded-2xl border border-[#EEF1F5] bg-white p-7 shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.06)]">
                  <h4 className="text-lg font-bold text-[#0C1234]">
                    What actually decides access
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#64748B]">
                    Access is evaluated from the combination of these, not from a job title:
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "Identity",
                      "Organization scope",
                      "Relationship to the record",
                      "Data sensitivity",
                      "Purpose",
                      "Workflow state",
                      "Effective date",
                      "Delegation",
                      "Policy",
                    ].map((factor) => (
                      <span
                        key={factor}
                        className="inline-flex items-center rounded-full bg-[#EAF0FF] px-3 py-1.5 text-xs font-semibold text-[#2147C9]"
                      >
                        {factor}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/documentation"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#305CF8] transition-colors hover:text-[#2547CE]"
                    >
                      Read about identity and access
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* 5.4 Drill down as far as you're permitted, and see exceptions clearly */}
        <div className="mt-28 border-t border-[#EEF1F5] pt-20">
          <div className="max-w-3xl">
            <Reveal>
              <h3 className="text-3xl font-bold tracking-[-0.02em] text-[#0C1234] sm:text-4xl">
                Drill down as far as you&apos;re permitted, and see exceptions clearly.
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-base leading-relaxed text-[#64748B]">
                Move from group level to entity and department. Where the next level needs a
                permission you don&apos;t have, the step is shown as limited, without revealing
                what&apos;s behind it.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8 lg:p-9">
              {/* Breadcrumb Bar */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs sm:gap-3 sm:text-sm">
                {/* 1. Meridian Group */}
                <div className="rounded-full bg-[#0C1234] px-4 py-2 font-semibold text-white shadow-xs transition-colors hover:bg-[#1A244D] sm:px-5">
                  Meridian Group
                </div>

                {/* Chevron */}
                <span className="select-none text-base font-light text-slate-300">›</span>

                {/* 2. Meridian UK Ltd */}
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-800 shadow-xs transition-colors hover:border-slate-300 sm:px-5">
                  Meridian UK Ltd
                </div>

                {/* Chevron */}
                <span className="select-none text-base font-light text-slate-300">›</span>

                {/* 3. Operations + Synthetic data tag */}
                <div className="relative flex flex-col items-center">
                  <div className="rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-800 shadow-xs transition-colors hover:border-slate-300 sm:px-5">
                    Operations
                  </div>
                  <span className="absolute top-full mt-1.5 whitespace-nowrap rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-500">
                    Synthetic data
                  </span>
                </div>

                {/* Chevron */}
                <span className="select-none text-base font-light text-slate-300">›</span>

                {/* 4. Individual records · Permission limited */}
                <div className="flex items-center gap-1.5 rounded-full border border-slate-200/70 bg-slate-50/80 px-3.5 py-2 text-xs text-slate-400 sm:px-4 sm:text-sm">
                  <svg
                    className="h-3.5 w-3.5 shrink-0 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <rect x="4" y="11" width="16" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                  <span className="whitespace-nowrap font-normal">
                    Individual records · Permission limited
                  </span>
                </div>
              </div>

              {/* Drilldown Content Grid (Left: Bar chart, Right: Exceptions) */}
              <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-0">
                {/* Left Column: Requests past due · by entity */}
                <div className="lg:col-span-7 lg:pr-10">
                  <h4 className="text-sm font-bold text-[#0C1234] sm:text-base">
                    Requests past due · by entity
                  </h4>

                  <div className="mt-6 space-y-4">
                    {/* Row 1: Meridian Inc. */}
                    <div className="flex items-center gap-3 text-xs sm:gap-4 sm:text-sm">
                      <span className="w-32 shrink-0 font-medium text-slate-800 sm:w-36 md:w-40">
                        Meridian Inc.
                      </span>
                      <div className="flex-1">
                        <div className="h-5 w-full rounded-md bg-[#4069F6] sm:h-5.5" />
                      </div>
                      <span className="w-12 shrink-0 text-right text-xs font-normal text-slate-500 sm:text-sm">
                        22
                      </span>
                    </div>

                    {/* Row 2: Meridian UK Ltd */}
                    <div className="flex items-center gap-3 text-xs sm:gap-4 sm:text-sm">
                      <span className="w-32 shrink-0 font-medium text-slate-800 sm:w-36 md:w-40">
                        Meridian UK Ltd
                      </span>
                      <div className="flex-1">
                        <div className="h-5 w-full overflow-hidden rounded-md bg-[#F1F5F9] sm:h-5.5">
                          <div
                            className="h-full rounded-md bg-[#4069F6]"
                            style={{ width: "81.8%" }}
                          />
                        </div>
                      </div>
                      <span className="w-12 shrink-0 text-right text-xs font-normal text-slate-500 sm:text-sm">
                        18
                      </span>
                    </div>

                    {/* Row 3: Meridian GmbH */}
                    <div className="flex items-center gap-3 text-xs sm:gap-4 sm:text-sm">
                      <span className="w-32 shrink-0 font-medium text-slate-800 sm:w-36 md:w-40">
                        Meridian GmbH
                      </span>
                      <div className="flex-1">
                        <div className="h-5 w-full overflow-hidden rounded-md bg-[#F1F5F9] sm:h-5.5">
                          <div
                            className="h-full rounded-md bg-[#4069F6]"
                            style={{ width: "50%" }}
                          />
                        </div>
                      </div>
                      <span className="w-12 shrink-0 text-right text-xs font-normal text-slate-500 sm:text-sm">
                        11
                      </span>
                    </div>

                    {/* Row 4: Meridian Canada Ltd */}
                    <div className="flex items-center gap-3 text-xs sm:gap-4 sm:text-sm">
                      <span className="w-32 shrink-0 font-medium text-slate-800 sm:w-36 md:w-40">
                        Meridian Canada Ltd
                      </span>
                      <div className="flex-1">
                        <div
                          className="h-5 w-full rounded-md border border-slate-200/50 sm:h-5.5"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(-45deg, #F0F3FE, #F0F3FE 6px, #DFE5FD 6px, #DFE5FD 12px)",
                          }}
                        />
                      </div>
                      <span className="w-12 shrink-0 text-right text-xs font-normal text-slate-500 sm:text-sm">
                        Limited
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Exceptions at this level */}
                <div className="border-t border-slate-100 pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:border-slate-100 lg:pl-10 lg:pt-0">
                  <h4 className="text-sm font-bold text-[#0C1234] sm:text-base">
                    Exceptions at this level
                  </h4>

                  <div className="mt-6 space-y-3.5">
                    {/* Exception Card 1: Partial - 1 source */}
                    <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors hover:border-slate-200">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFEDD5] px-2.5 py-1 text-xs font-semibold text-[#9A3412]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#EA580C]" />
                        <span>Partial - 1 source</span>
                      </div>
                      <p className="mt-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                        Meridian GmbH time data hasn&apos;t arrived today.
                      </p>
                    </div>

                    {/* Exception Card 2: Permission limited */}
                    <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors hover:border-slate-200">
                      <div className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                        Permission limited
                      </div>
                      <p className="mt-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                        Meridian Canada Ltd is outside your scope.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
