"use client";

import Link from "next/link";
import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function StandardizeHrFinalCtaSection() {
  return (
    <section className="bg-[#102A43] py-20 text-white lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading, Subtitle, Actions & Privacy Notice */}
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-4xl lg:text-[42px]">
                Talk through your baseline, your variants and your scope.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-5 text-base leading-relaxed text-[#AEB7D0]">
                See how Zoiko HR could standardize your records, policies and
                processes, and discuss the plan and configuration that fit your
                organization.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  href="/book-a-demo"
                  className="w-full sm:w-auto !bg-[#305CF8] !px-7 !py-3.5 !text-sm !font-semibold text-white shadow-[0px_8px_20px_-8px_rgba(48,92,248,0.6)] hover:!bg-[#2547CE]"
                >
                  Book a Demo
                </Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  className="w-full sm:w-auto !border-white/30 !px-7 !py-3.5 !text-sm !font-semibold !text-white hover:!border-[#305CF8] hover:!text-[#305CF8]"
                >
                  Request Pricing
                </Button>
                <Link
                  href="/product-tour"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-[#305CF8]"
                >
                  Take the Product Tour →
                </Link>
              </div>
            </Reveal>

            {/* Privacy Advice Card */}
            <Reveal delay={0.24}>
              <div className="mt-10 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-4 text-xs leading-relaxed text-[#C3CADF] sm:max-w-lg">
                <svg
                  className="mt-0.5 h-4 w-4 flex-none text-[#8EA6FF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>
                  When you contact us, describe your structure in general
                  terms—number of entities, locations and processes. Please
                  don&apos;t include employee personal data.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 3-Image Collage */}
          <div className="lg:col-span-6">
            <Reveal delay={0.2} y={30}>
              <div className="grid h-[414px] grid-cols-12 gap-3.5">
                {/* Large Left Image (Col span 7, Full Height) */}
                <div className="col-span-7 h-full overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)]">
                  <PlaceholderImage
                    src="/images/standardize-hr-operations/cta-collaborating-3fd7e5.png"
                    alt="Colleagues collaborating around laptops"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Right Stack (Col span 5, 2 Stacked Images) */}
                <div className="col-span-5 flex h-full flex-col gap-3.5">
                  <div className="h-1/2 overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-md">
                    <PlaceholderImage
                      src="/images/standardize-hr-operations/cta-meeting-7135e5.png"
                      alt="Colleagues in an operational meeting"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="h-1/2 overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-md">
                    <PlaceholderImage
                      src="/images/standardize-hr-operations/cta-discussion-7135e5.png"
                      alt="Operations lead reviewing data"
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
