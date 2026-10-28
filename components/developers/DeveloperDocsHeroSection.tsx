"use client";

import Link from "next/link";
import { Container, Reveal, Button } from "@/components/ui";

export function DeveloperDocsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0C1234] pb-20 pt-16 text-white sm:pt-24 lg:pb-28">
      {/* Background glow overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(60%_50%_at_20%_0%,rgba(48,92,248,0.35),transparent)]"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#305CF8]">
                  Developers · Developer Documentation
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-[-0.025em] text-white sm:text-5xl lg:text-[50px]">
                Build against Zoiko HR with documentation{" "}
                <span className="block text-[#00D592]">
                  that states exactly what is supported.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#C3CADF]">
                Source-governed technical guidance for approved integration
                surfaces: authentication, operations, schemas, events, examples,
                errors and versioning.
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
                Capabilities, integrations, implementation, support and
                availability may vary by plan, contract, configuration and
                jurisdiction.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Synthetic API Terminal Preview */}
          <div className="relative lg:col-span-6">
            <Reveal delay={0.2} y={36}>
              <div className="relative mx-auto max-w-[500px] pt-4 sm:pt-6">
                {/* Code Terminal Box */}
                <div className="relative rounded-[18px] border border-white/10 bg-[#0A0F2C] p-0 shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_40px_80px_-30px_rgba(0,0,0,0.7)]">
                  {/* Terminal Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#2A3260]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#2A3260]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#2A3260]" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11.5px] font-semibold text-[#AEB7D0]">
                        Illustrative
                      </span>
                      <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11.5px] font-semibold text-[#AEB7D0]">
                        Synthetic data
                      </span>
                    </div>
                  </div>

                  {/* Terminal Code Body */}
                  <div className="overflow-x-auto p-5 font-mono text-[12.5px] leading-[21px]">
                    <div className="text-[#6E7AA8]">
                      # Illustrative only · not a published contract
                    </div>
                    <div className="mt-1">
                      <span className="text-[#8EA6FF]">GET</span>{" "}
                      <span className="text-[#D6DEFF]">/employees/</span>
                      <span className="text-[#7EE2B8]">E-20417</span>
                    </div>
                    <div>
                      <span className="text-[#F0A6FF]">Authorization:</span>{" "}
                      <span className="text-[#D6DEFF]">Bearer </span>
                      <span className="text-[#FDA4AF]">&lt;token from your secret store&gt;</span>
                    </div>
                    <div>
                      <span className="text-[#F0A6FF]">Accept:</span>{" "}
                      <span className="text-[#D6DEFF]">application/json</span>
                    </div>

                    <div className="my-2 border-t border-white/[0.06]" />

                    <div>
                      <span className="font-semibold text-[#FFC777]">200 OK</span>
                    </div>
                    <div className="text-[#D6DEFF]">{"{"}</div>
                    <div className="pl-4">
                      <span className="text-[#F0A6FF]">&quot;id&quot;</span>:{" "}
                      <span className="text-[#7EE2B8]">&quot;E-20417&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#F0A6FF]">&quot;display_name&quot;</span>:{" "}
                      <span className="text-[#7EE2B8]">&quot;Synthetic Employee&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#F0A6FF]">&quot;organization_unit&quot;</span>:{" "}
                      <span className="text-[#7EE2B8]">&quot;Operations&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#F0A6FF]">&quot;employment_status&quot;</span>:{" "}
                      <span className="text-[#7EE2B8]">&quot;active&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#F0A6FF]">&quot;effective_date&quot;</span>:{" "}
                      <span className="text-[#7EE2B8]">&quot;2026-03-01&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#F0A6FF]">&quot;compensation&quot;</span>:{" "}
                      <span className="text-[#6E7AA8]">/* restricted: scope required */</span>
                    </div>
                    <div className="text-[#D6DEFF]">{"}"}</div>
                  </div>
                </div>

                {/* Floating pill badge at bottom left */}
                <div className="mt-4 flex items-center gap-3 rounded-[14px] border border-[#E2E8F0] bg-white p-3 shadow-[0px_24px_48px_-18px_rgba(0,0,0,0.5)] sm:absolute sm:-bottom-6 sm:left-4 sm:mt-0">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FEF3C7] px-2.5 py-1 text-xs font-semibold text-[#92400E]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#92400E]" />
                    Deprecated
                  </div>
                  <div>
                    <div className="text-[12.5px] font-semibold text-[#0C1234]">
                      Older list operation
                    </div>
                    <div className="text-[11.5px] text-[#64748B]">
                      Sunset scheduled · migration guide
                    </div>
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
