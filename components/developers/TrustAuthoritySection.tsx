"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const TRUST_DESTINATIONS = [
  {
    title: "Security evidence",
    description: "Certifications, controls and security documentation",
    linkText: "Trust Center →",
    href: "/trust-center",
  },
  {
    title: "Privacy, DPA & subprocessors",
    description: "Data processing terms and privacy information",
    linkText: "Legal & Trust →",
    href: "/legal-notices",
  },
  {
    title: "Live availability",
    description: "Current service health and incidents",
    linkText: "Service Status →",
    href: "/service-status",
  },
  {
    title: "Report configuration how-to",
    description: "Metrics, dashboards, thresholds and exports",
    linkText: "Documentation →",
    href: "/documentation",
  },
  {
    title: "Integration details",
    description: "APIs, connectors and data behavior",
    linkText: "Developer Docs →",
    href: "/developers",
  },
  {
    title: "Account-specific help",
    description: "For existing customers",
    linkText: "Help Center →",
    href: "/help-center",
  },
  {
    title: "Accessibility",
    description: "Our accessibility commitments and conformance",
    linkText: "Accessibility →",
    href: "/accessibility",
  },
];

export function TrustAuthoritySection() {
  return (
    <section className="bg-[#0C1234] py-20 text-white lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading, Subtitle & 7 Destination Cards */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-[32px] font-bold leading-tight tracking-[-0.02em] text-white sm:text-[40px] sm:leading-[44.8px]">
                Go to the source for trust,
                <br className="hidden sm:inline" /> status and support.
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#AEB7D0] sm:text-[17px] sm:leading-[27.2px]">
                Some answers change often or depend on your account. This page points
                you to the destinations that own them. Support and trust information is
                never behind a sales form.
              </p>
            </Reveal>

            {/* Vertical list of 7 horizontal destination cards */}
            <div className="mt-8 space-y-2.5">
              {TRUST_DESTINATIONS.map((dest, idx) => (
                <Reveal key={dest.title} delay={idx * 0.04}>
                  <Link
                    href={dest.href}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#141C3C] px-5 py-3.5 transition-all hover:border-[#305CF8]/50 hover:bg-[#1A244D]"
                  >
                    <div>
                      <h3 className="text-[15px] font-semibold text-white group-hover:text-[#6F8DFF]">
                        {dest.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-[#8A93B2]">
                        {dest.description}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs sm:text-sm font-semibold text-[#6F8DFF] transition-transform group-hover:translate-x-0.5">
                      {dest.linkText}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Office meeting photo */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2} y={30}>
              <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)]">
                <Image
                  src="/images/developers/trust-team.png"
                  alt="Team presentation meeting in office"
                  width={800}
                  height={1000}
                  unoptimized
                  className="h-[480px] w-full object-cover sm:h-[540px] lg:h-[620px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
