"use client";

import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function ReportingHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0C1234] pb-24 pt-20 text-white sm:pt-28 lg:pb-32">
      {/* Background glow overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(60%_50%_at_20%_0%,rgba(48,92,248,0.35),transparent)]"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#305CF8]">
                  Platform · Reporting & Insights
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-[-0.025em] text-white sm:text-5xl lg:text-[52px]">
                Understand the health of people operations{" "}
                <span className="block text-[#00D592]">
                  without turning reporting into surveillance.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#C3CADF]">
                Permission-sensitive operational reporting with explicit metric definitions,
                source, scope, freshness, data quality, privacy thresholds and export controls.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  href="/book-a-demo"
                  className="!rounded-full !bg-[#305CF8] !px-7 !py-3.5 !text-[15px] !font-semibold text-white shadow-[0px_8px_20px_-8px_rgba(48,92,248,0.6)] hover:!bg-[#2547CE]"
                >
                  Book a Demo
                </Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  className="!rounded-full !border !border-white/35 !bg-transparent !px-7 !py-3.5 !text-[15px] !font-semibold !text-white hover:!border-white hover:!bg-white/10"
                >
                  Request Pricing
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <p className="mt-8 max-w-lg border-t border-white/[0.09] pt-5 text-[13px] leading-relaxed text-[#8A93B2]">
                Capabilities, integrations, implementation, support and availability may vary by
                plan, contract, configuration and jurisdiction.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Layered Dashboard Composition */}
          <div className="relative lg:col-span-6">
            <Reveal delay={0.2} y={36}>
              <div className="relative mx-auto max-w-[580px] pt-14 sm:pt-[72px]">
                {/* Back card with laptop photo positioned at top right */}
                <div className="absolute right-0 top-0 h-[260px] w-[340px] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)] sm:h-[320px] sm:w-[401px]">
                  <PlaceholderImage
                    src="/images/reporting-insights/hero-dashboard-laptop.png"
                    alt="Analytics dashboard displayed on a laptop"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Main floating interface card */}
                <div className="relative z-10 w-full rounded-[18px] border border-white/10 bg-white text-[#0C1234] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_40px_80px_-30px_rgba(0,0,0,0.6)]">
                  {/* Topbar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 rounded-t-[18px] border-b border-[#EEF1F5] bg-[#FBFCFE] px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded-lg bg-[#F1F5F9] px-2.5 py-1 text-xs font-semibold text-[#334155]">
                        Meridian UK Ltd ▾
                      </span>
                      <span className="rounded-lg bg-[#F1F5F9] px-2.5 py-1 text-xs font-semibold text-[#334155]">
                        6 months ▾
                      </span>
                    </div>

                    <span className="rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[11px] font-semibold text-[#64748B]">
                      Synthetic data
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EEF1F5] pb-3.5">
                      <div>
                        <h3 className="text-base font-bold text-[#0C1234]">
                          People operations overview
                        </h3>
                        <p className="mt-0.5 text-xs text-[#64748B]">
                          Owner: HR Operations · Definitions v2.3
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF0FF] px-2.5 py-1 text-xs font-semibold text-[#2147C9]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2147C9]" />
                        Current
                      </span>
                    </div>

                    {/* 3 Metric Tiles */}
                    <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                      {/* Metric 1 */}
                      <div className="flex flex-col justify-between gap-2 rounded-xl border border-[#EEF1F5] p-3">
                        <span className="text-[11.5px] font-medium text-[#64748B]">
                          Onboarding on time
                        </span>
                        <div>
                          <span className="text-[22px] font-bold leading-none text-[#0C1234]">
                            92%
                          </span>
                        </div>
                        <div>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF0FF] px-2 py-0.5 text-[11px] font-semibold text-[#2147C9]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#2147C9]" />
                            Current
                          </span>
                        </div>
                      </div>

                      {/* Metric 2 */}
                      <div className="flex flex-col justify-between gap-2 rounded-xl border border-[#EEF1F5] p-3">
                        <span className="text-[11.5px] font-medium leading-tight text-[#64748B]">
                          Policy<br />acknowledgments
                        </span>
                        <div>
                          <span className="text-[22px] font-bold leading-none text-[#0C1234]">
                            87%
                          </span>
                        </div>
                        <div>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FEF3C7] px-2 py-0.5 text-[11px] font-semibold text-[#92400E]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#92400E]" />
                            Stale · 3 days
                          </span>
                        </div>
                      </div>

                      {/* Metric 3 */}
                      <div className="flex flex-col justify-between gap-2 rounded-xl border border-[#EEF1F5] p-3">
                        <span className="text-[11.5px] font-medium text-[#64748B]">
                          Leave usage · Legal
                        </span>
                        <div className="py-0.5">
                          <span className="text-sm font-medium text-[#64748B]">
                            Group too small
                          </span>
                        </div>
                        <div>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EDE9FE] px-2 py-0.5 text-[11px] font-semibold text-[#5B21B6]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#5B21B6]" />
                            Suppressed for privacy
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Chart Container */}
                    <div className="mt-4 rounded-xl border border-[#EEF1F5] p-3.5">
                      <div className="flex items-center justify-between">
                        <h4 className="text-[13px] font-bold text-[#0C1234]">
                          Approval cycle time · median days
                        </h4>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF0FF] px-2.5 py-0.5 text-xs font-semibold text-[#2147C9]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#2147C9]" />
                          Current
                        </span>
                      </div>

                      {/* SVG Chart from Figma */}
                      <div className="mt-2.5">
                        <svg
                          viewBox="0 0 469 139"
                          className="h-auto w-full overflow-visible"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient
                              id="heroBlueAreaGrad"
                              x1="11.727"
                              y1="46.902"
                              x2="11.727"
                              y2="117.254"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#305CF8" stopOpacity="0.22" />
                              <stop offset="1" stopColor="#305CF8" stopOpacity="0" />
                            </linearGradient>
                          </defs>

                          {/* Horizontal grid lines */}
                          <path d="M0 23.45H469.001" stroke="#EEF1F5" strokeWidth="1.17" />
                          <path d="M0 64.4885H469.001" stroke="#EEF1F5" strokeWidth="1.17" />
                          <path d="M0 105.527H469.001" stroke="#EEF1F5" strokeWidth="1.17" />

                          {/* Area fill */}
                          <path
                            d="M11.727 46.902L96.1471 60.9723L180.567 53.9371L264.987 72.6976L349.408 82.0779L457.278 86.768V117.254H11.727V46.902Z"
                            fill="url(#heroBlueAreaGrad)"
                          />

                          {/* Blue stroke curve */}
                          <path
                            d="M11.727 46.902L96.1471 60.9723L180.567 53.9371L264.987 72.6976L349.408 82.0779L457.278 86.768"
                            stroke="#305CF8"
                            strokeWidth="2.93"
                            strokeLinejoin="round"
                          />

                          {/* 6 Circular nodes with hollow white center and blue border */}
                          <circle cx="11.73" cy="46.9" r="4.1" fill="white" stroke="#305CF8" strokeWidth="2.34" />
                          <circle cx="96.15" cy="60.97" r="4.1" fill="white" stroke="#305CF8" strokeWidth="2.34" />
                          <circle cx="180.57" cy="53.94" r="4.1" fill="white" stroke="#305CF8" strokeWidth="2.34" />
                          <circle cx="264.99" cy="72.7" r="4.1" fill="white" stroke="#305CF8" strokeWidth="2.34" />
                          <circle cx="349.41" cy="82.08" r="4.1" fill="white" stroke="#305CF8" strokeWidth="2.34" />
                          <circle cx="457.28" cy="86.77" r="5.2" fill="white" stroke="#305CF8" strokeWidth="2.34" />

                          {/* Month labels rendered crisp */}
                          <text x="11.7" y="132" fill="#94A3B8" fontSize="12" fontFamily="Inter, sans-serif">May</text>
                          <text x="96" y="132" fill="#94A3B8" fontSize="12" fontFamily="Inter, sans-serif" textAnchor="middle">Jun</text>
                          <text x="180" y="132" fill="#94A3B8" fontSize="12" fontFamily="Inter, sans-serif" textAnchor="middle">Jul</text>
                          <text x="265" y="132" fill="#94A3B8" fontSize="12" fontFamily="Inter, sans-serif" textAnchor="middle">Aug</text>
                          <text x="349" y="132" fill="#94A3B8" fontSize="12" fontFamily="Inter, sans-serif" textAnchor="middle">Sep</text>
                          <text x="450" y="132" fill="#94A3B8" fontSize="12" fontFamily="Inter, sans-serif" textAnchor="end">Oct</text>
                        </svg>
                      </div>

                      {/* Chart metadata */}
                      <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11.5px] leading-tight">
                        <span>
                          <span className="text-[#64748B]">Source: </span>
                          <strong className="font-semibold text-[#334155]">Workflows</strong>
                        </span>
                        <span>
                          <span className="text-[#64748B]">Scope: </span>
                          <strong className="font-semibold text-[#334155]">UK · all teams</strong>
                        </span>
                        <span>
                          <span className="text-[#64748B]">Refreshed: </span>
                          <strong className="font-semibold text-[#334155]">07 Oct, 06:00</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating privacy suppression pill */}
                <div className="absolute -bottom-6 left-0 z-20 flex max-w-[calc(100%-8px)] items-center gap-3 rounded-[14px] bg-white p-3 px-4 shadow-[0px_24px_48px_-18px_rgba(0,0,0,0.5)] sm:-bottom-7 sm:-left-3 sm:max-w-none">
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#EDE9FE] px-2.5 py-1 text-xs font-semibold text-[#5B21B6]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5B21B6]" />
                    Suppressed for privacy
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[13.5px] font-semibold leading-snug text-[#0C1234]">
                      Groups under 5 people are hidden
                    </p>
                    <p className="truncate text-xs leading-snug text-[#64748B]">
                      Threshold set by your organization
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
