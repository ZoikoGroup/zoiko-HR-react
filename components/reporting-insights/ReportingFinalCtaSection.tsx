"use client";

import Link from "next/link";
import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function ReportingFinalCtaSection() {
  return (
    <section className="bg-[#102A43] py-24 text-white lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading, Subtitle, Actions, Note */}
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl lg:text-[44px] lg:leading-[1.12]">
                See reporting that explains itself.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-5 text-base leading-relaxed text-[#C3CADF] sm:text-lg">
                Walk through definitions, scopes, thresholds and exports with our team, and discuss
                the plan and configuration that fit your organization.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
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
                <Link
                  href="/product-tour"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-[#6F8DFF]"
                >
                  Take the Product Tour
                  <span>→</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-[#C3CADF]">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#6F8DFF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>
                  When you contact us, describe the reports you need in general terms. Please don&apos;t
                  include employee personal data or exports from your current systems.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 3 Images Mosaic Grid */}
          <div className="lg:col-span-6">
            <Reveal delay={0.2} y={30}>
              <div className="grid h-[414px] grid-cols-12 gap-3.5">
                {/* Image 1: Main left tall card */}
                <div className="col-span-7 h-full overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)]">
                  <PlaceholderImage
                    src="/images/reporting-insights/final-cta-collaborating.png"
                    alt="Colleagues collaborating around laptops"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Stacked right cards */}
                <div className="col-span-5 flex h-full flex-col gap-3.5">
                  <div className="h-[200px] overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)]">
                    <PlaceholderImage
                      src="/images/reporting-insights/final-cta-team-meeting.png"
                      alt="Team meeting discussing operations"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="h-[200px] overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)]">
                    <PlaceholderImage
                      src="/images/reporting-insights/final-cta-reviewing-laptop.png"
                      alt="Colleague reviewing report data on laptop"
                      className="h-full w-full object-cover"
                    />
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
