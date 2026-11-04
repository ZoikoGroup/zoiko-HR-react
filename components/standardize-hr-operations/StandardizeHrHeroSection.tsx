"use client";

import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function StandardizeHrHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0C1234] pb-20 pt-20 text-white sm:pt-28 lg:pb-28">
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
                  Solutions · Mid-Market Organizations
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-[-0.025em] text-white sm:text-5xl lg:text-[52px]">
                Standardize HR operations{" "}
                <span className="text-[#00D592]">
                  as organizational complexity increases.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#C3CADF]">
                Build common records, policies and processes while keeping
                delegated responsibility, approved variation, exceptions and
                evidence visible.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  href="/book-a-demo"
                  className="!bg-[#305CF8] !px-7 !py-3.5 !text-[15px] !font-semibold text-white shadow-[0px_8px_20px_-8px_rgba(48,92,248,0.6)] hover:!bg-[#2547CE]"
                >
                  Book a Demo
                </Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  className="!border-white/35 !px-7 !py-3.5 !text-[15px] !font-semibold !text-white hover:!border-[#305CF8] hover:!text-[#305CF8]"
                >
                  Request Pricing
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <p className="mt-8 max-w-lg border-t border-white/10 pt-5 text-[13px] leading-relaxed text-[#8A93B2]">
                Capabilities, integrations, implementation, support and availability
                may vary by plan, contract, configuration and jurisdiction.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Layered Visual Composition */}
          <div className="relative lg:col-span-6">
            <Reveal delay={0.2} y={36}>
              <div className="relative mx-auto max-w-[580px]">
                {/* Back card with leader photo */}
                <div className="relative ml-auto h-[260px] w-full max-w-[400px] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)] sm:h-[300px]">
                  <PlaceholderImage
                    src="/images/standardize-hr-operations/hero-leader.png"
                    alt="HR leader reviewing information at her desk"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Main floating interface card */}
                <div className="relative -mt-28 w-full rounded-[18px] border border-white/10 bg-white shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_40px_80px_-30px_rgba(0,0,0,0.6)]">
                  {/* Mockup Topbar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 rounded-t-[18px] border-b border-[#EEF1F5] bg-[#FBFCFE] px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded-lg bg-[#F1F5F9] px-2.5 py-1 text-xs font-semibold text-[#334155]">
                        Entity: All entities ▾
                      </span>
                      <span className="rounded-lg bg-[#F1F5F9] px-2.5 py-1 text-xs font-semibold text-[#334155]">
                        Baseline v3.1 ▾
                      </span>
                    </div>

                    <span className="rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[11px] font-semibold text-[#64748B]">
                      Synthetic data
                    </span>
                  </div>

                  {/* Mockup Content Image */}
                  <div className="p-3">
                    <PlaceholderImage
                      src="/images/standardize-hr-operations/hero-mockup.png"
                      alt="Illustrative Zoiko HR interface showing group leave policy baseline"
                      className="h-auto w-full rounded-lg object-contain shadow-inner"
                    />
                  </div>
                </div>

                {/* Floating delegation active pill */}
                <div className="absolute -bottom-6 left-2 z-20 flex max-w-[calc(100%-16px)] sm:max-w-none items-center gap-3 rounded-[14px] bg-white p-3 px-4 shadow-[0px_24px_48px_-18px_rgba(0,0,0,0.5)] sm:-bottom-8 sm:left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D1FAE5] px-2.5 py-1 text-xs font-semibold text-[#047857]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#047857]" />
                    Delegation active
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[#0C1234]">
                      Leave approvals → Deputy Ops Lead
                    </p>
                    <p className="text-[11px] text-[#64748B]">
                      Until 28 Nov · Revocable
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
