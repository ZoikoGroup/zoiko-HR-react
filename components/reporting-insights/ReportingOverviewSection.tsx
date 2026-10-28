"use client";

import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function ReportingOverviewSection() {
  return (
    <section id="overview" className="scroll-mt-16 bg-white py-20 lg:py-28">
      <Container>
        {/* Part 1: Two Column Introduction */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-[-0.02em] text-[#0C1234] sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
                Reporting you can explain, scoped to{" "}
                <span className="block sm:inline">what each person is allowed to see.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-6 border-l-[3px] border-[#305CF8] pl-5">
                <p className="text-base font-normal leading-relaxed text-[#0C1234] sm:text-[17px]">
                  Reporting & Insights gives HR teams governed operational reporting on
                  people operations. Every material metric carries its definition, source,
                  scope, period, freshness and owner, and what each person sees depends
                  on their permissions.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-[15.5px] leading-relaxed text-[#64748B]">
                Reports are derived. The systems that hold employee records, workflows,
                time and payroll remain the authority for their own data. Reporting shows
                you what they say and how current it is.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Photo */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2} y={30}>
              <div className="relative overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)]">
                <PlaceholderImage
                  src="/images/reporting-insights/overview-hr-leaders.png"
                  alt="HR leaders reviewing a report together"
                  className="h-[360px] w-full object-cover sm:h-[420px]"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* What this page explains vs What belongs elsewhere */}
        <Reveal delay={0.24}>
          <div className="mt-14 grid gap-6 rounded-2xl border border-[#EEF1F5] bg-white p-6 shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.08)] sm:p-8 md:grid-cols-2">
            {/* Left box: What this page explains */}
            <div className="rounded-xl border border-transparent p-2">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#D1FAE5] text-[#047857]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h3 className="text-[17px] font-semibold text-[#0C1234]">
                  What this page explains
                </h3>
              </div>

              <ul className="mt-4 space-y-3.5 text-[14.5px] text-[#475569]">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#047857]" />
                  <span>How metrics are defined, sourced, scoped and kept current, and how data quality is shown.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#047857]" />
                  <span>How permissions, privacy thresholds, drill-down and exports work together.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#047857]" />
                  <span>Illustrative dashboards with clear state labels, all built on synthetic data.</span>
                </li>
              </ul>
            </div>

            {/* Right box: What belongs elsewhere */}
            <div className="rounded-xl border-t border-[#EEF1F5] pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#F1F5F9] text-[#64748B]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <h3 className="text-[17px] font-semibold text-[#0C1234]">
                  What belongs elsewhere
                </h3>
              </div>

              <ul className="mt-4 space-y-3.5 text-[14.5px] text-[#475569]">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#64748B]" />
                  <span>Employee, workflow, time, payroll and financial truth. Those stay with their source systems.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#64748B]" />
                  <span>Legal, tax, payroll, employment or compliance advice, and automated employment decisions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#64748B]" />
                  <span>Live service status, contract entitlements and account-specific support. See Service Status and Help Center.</span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Part 2: Measure how operations run, not how people are watched */}
        <div className="mt-24 border-t border-[#EEF1F5] pt-20">
          <div className="max-w-2xl text-left">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-[-0.02em] text-[#0C1234] sm:text-[34px] sm:leading-[38px]">
                Measure how operations run, not how<br className="hidden sm:inline" /> people are watched.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-[17px] leading-[27.2px] text-[#64748B]">
                Reporting &amp; Insights is built for the health of HR processes: whether work moves,
                whether records are complete, whether policies reach people. It isn&apos;t a tool for
                monitoring individual behavior.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {/* What it reports on */}
            <Reveal delay={0.16}>
              <div className="h-full rounded-[18px] border border-[#EEF1F5] bg-white p-7 shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.08),0px_1px_2px_0px_rgba(12,18,52,0.04)] sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <h3 className="text-lg font-semibold text-[#0C1234]">What it reports on</h3>
                </div>

                <ul className="mt-5 space-y-3.5 text-[15px] leading-relaxed text-[#475569]">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>
                      <strong className="font-normal text-[#0C1234]">Workforce structure:</strong> headcount and movement by entity, location and department
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>
                      <strong className="font-normal text-[#0C1234]">Process health:</strong> onboarding completion, approval cycle times, open requests
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>
                      <strong className="font-normal text-[#0C1234]">Policy reach:</strong> acknowledgment coverage and documents awaiting action
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>
                      <strong className="font-normal text-[#0C1234]">Data quality:</strong> missing fields, source conflicts and pending corrections
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* What it never does */}
            <Reveal delay={0.24}>
              <div className="h-full rounded-[18px] border border-dashed border-[#E3E8EF] bg-[#FAFBFD] p-7 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-[#64748B]">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </span>
                  <h3 className="text-lg font-semibold text-[#0C1234]">What it never does</h3>
                </div>

                <ul className="mt-5 space-y-3.5 text-[15px] leading-relaxed text-[#475569]">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-[#64748B]">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </span>
                    <span>Hidden productivity scores or covert rankings of employees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-[#64748B]">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </span>
                    <span>Keystroke, screen or activity monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-[#64748B]">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </span>
                    <span>Unqualified predictions about individual performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-[#64748B]">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </span>
                    <span>Employment decisions. Those stay with authorized people.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* AI Governance Link below cards on left */}
          <Reveal delay={0.28}>
            <div className="mt-7 flex items-center">
              <Link
                href="/ai-governance"
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#305CF8] transition-colors hover:text-[#2547CE]"
              >
                Read our AI governance principles
                <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
