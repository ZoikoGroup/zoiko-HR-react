"use client";

import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function BeyondDashboardSection() {
  return (
    <section id="beyond-dashboard" className="scroll-mt-16 bg-[#FAFBFD] py-20 lg:py-28">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#305CF8]">
              Governance & Integrity
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0C1234] sm:text-4xl lg:text-[42px]">
              Exports, explanations and sources follow the same rules.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-base leading-relaxed text-[#64748B] sm:text-lg">
              Governance doesn&apos;t stop at the dashboard. Data leaving a report keeps its permissions,
              AI explanations stay grounded in sources, and reporting never replaces the systems it reads from.
            </p>
          </Reveal>
        </div>

        {/* 3 Cards Row */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {/* Card 1: Exports & subscriptions */}
          <Reveal delay={0.16}>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#EEF1F5] bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <PlaceholderImage
                  src="/images/reporting-insights/beyond-exports-subscriptions.png"
                  alt="Exports and subscriptions in governed workflow"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-lg font-bold text-[#0C1234]">Exports & subscriptions</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#64748B]">
                  Exports keep the permissions, suppression and purpose of the report they came from.
                  Scheduled reports go only to recipients authorized for that scope.
                </p>

                {/* Sub-card metadata table */}
                <div className="mt-6 divide-y divide-[#EEF1F5] rounded-xl border border-[#EEF1F5] bg-[#FAFBFD] p-3.5 text-xs">
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-[#64748B]">Report:</span>
                    <strong className="text-[#0C1234]">Requests past due · Q3</strong>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-[#64748B]">Purpose:</span>
                    <strong className="text-[#0C1234]">Quarterly operations review</strong>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-[#64748B]">Small groups:</span>
                    <span className="inline-flex rounded-full bg-[#EDE9FE] px-2 py-0.5 text-[10px] font-semibold text-[#5B21B6]">
                      Still suppressed
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[#64748B]">Individual rows:</span>
                    <span className="inline-flex rounded-full bg-[#F1F5F9] px-2 py-0.5 text-[10px] font-semibold text-[#475569]">
                      Export restricted
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2: AI-assisted explanation */}
          <Reveal delay={0.24}>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#EEF1F5] bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <PlaceholderImage
                  src="/images/reporting-insights/beyond-ai-explanation.png"
                  alt="AI assisted explanation preview"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-lg font-bold text-[#0C1234]">AI-assisted explanation</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#64748B]">
                  AI can summarize what a report shows, citing its sources, for a person to review.
                  It doesn&apos;t make HR decisions or go beyond your permitted data.
                </p>

                {/* Sub-card AI explanation mockup */}
                <div className="mt-6 rounded-xl border border-[#EEF1F5] bg-white p-3.5 shadow-inner">
                  <div className="rounded-lg bg-[#FAFBFD] p-3 text-xs leading-relaxed text-[#0C1234]">
                    Past-due requests fell from 26 to 18 this quarter, mostly in Operations{" "}
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded bg-[#EAF0FF] text-[10px] font-bold text-[#2147C9]">
                      1
                    </span>
                    . Acknowledgment coverage changed definition in July{" "}
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded bg-[#EAF0FF] text-[10px] font-bold text-[#2147C9]">
                      2
                    </span>
                    , so compare with care.
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-[#EEF1F5] pt-2.5 text-[11px]">
                    <span className="text-[#64748B]">Sources:</span>
                    <span className="font-semibold text-[#0C1234]">
                      1 Workflows · 2 Definitions v2.3
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[11px]">
                    <span className="text-[#64748B]">Status:</span>
                    <span className="inline-flex rounded-full bg-[#EDE9FE] px-2 py-0.5 text-[10px] font-semibold text-[#5B21B6]">
                      Review required
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Cross-system sources */}
          <Reveal delay={0.32}>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#EEF1F5] bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <PlaceholderImage
                  src="/images/reporting-insights/beyond-cross-system-sources.png"
                  alt="Cross-system sources architecture diagram"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-lg font-bold text-[#0C1234]">Cross-system sources</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#64748B]">
                  Reporting is derived. Each source system stays authoritative for its own data,
                  and Zoiko HR doesn&apos;t calculate payroll.
                </p>

                {/* Sub-card System Flow Diagram */}
                <div className="mt-6 rounded-xl border border-[#EEF1F5] bg-[#FAFBFD] p-3.5">
                  <div className="flex items-center justify-between gap-2">
                    {/* Source Boxes */}
                    <div className="flex flex-col gap-1.5 text-[11px] font-semibold text-[#0C1234]">
                      <span className="rounded-lg border border-[#E2E8F0] bg-white px-2.5 py-1 shadow-2xs">
                        HR record
                      </span>
                      <span className="rounded-lg border border-[#E2E8F0] bg-white px-2.5 py-1 shadow-2xs">
                        Workflows
                      </span>
                      <span className="rounded-lg border border-[#E2E8F0] bg-white px-2.5 py-1 shadow-2xs">
                        ZoikoTime
                      </span>
                      <span className="rounded-lg border border-[#E2E8F0] bg-white px-2.5 py-1 shadow-2xs">
                        Payroll system
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="text-[#305CF8]">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>

                    {/* Destination Box */}
                    <div className="rounded-xl bg-[#0C1234] p-3 text-center text-white">
                      <p className="text-xs font-bold leading-tight">
                        Reporting &<br />Insights
                      </p>
                      <span className="mt-1.5 inline-block rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-[#C3CADF]">
                        Derived · read-only
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Pathways */}
        <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-[#EEF1F5] pt-6">
          <Link
            href="/integrations"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#305CF8] transition-colors hover:text-[#2547CE]"
          >
            Explore integrations
            <span>→</span>
          </Link>
          <Link
            href="/ai-governance"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#305CF8] transition-colors hover:text-[#2547CE]"
          >
            Read about AI governance
            <span>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
