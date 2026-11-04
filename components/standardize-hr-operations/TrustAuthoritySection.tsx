"use client";

import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const DESTINATIONS = [
  {
    title: "Security evidence",
    detail: "Certifications, controls and security documentation",
    linkText: "Trust Center →",
    href: "/trust-center",
  },
  {
    title: "Privacy, DPA & subprocessors",
    detail: "Data processing terms and privacy information",
    linkText: "Legal & Trust →",
    href: "/data-processing-addendum",
  },
  {
    title: "Live availability",
    detail: "Current service health and incidents",
    linkText: "Service Status →",
    href: "/service-status",
  },
  {
    title: "Product how-to",
    detail: "Configuration and administration guides",
    linkText: "Documentation →",
    href: "/documentation",
  },
  {
    title: "Integration details",
    detail: "APIs, connectors and technical behavior",
    linkText: "Developer Docs →",
    href: "/developers",
  },
  {
    title: "Account-specific help",
    detail: "For existing customers",
    linkText: "Help Center →",
    href: "/help-center",
  },
  {
    title: "Accessibility",
    detail: "Our accessibility commitments and conformance",
    linkText: "Accessibility →",
    href: "/accessibility",
  },
];

export function TrustAuthoritySection() {
  return (
    <section className="bg-[#0C1234] py-20 text-white lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading, Subtitle & 7 Link Cards */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.02em] sm:text-4xl lg:text-[40px]">
                Go to the source for trust, status and support.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-4 text-base leading-relaxed text-[#AEB7D0]">
                Some answers change often or depend on your account. This page
                points you to the destinations that own them. Support and trust
                information is never behind a sales form.
              </p>
            </Reveal>

            {/* Links Stack */}
            <div className="mt-8 space-y-3">
              {DESTINATIONS.map((dest, idx) => (
                <Reveal key={dest.title} delay={0.12 + idx * 0.04}>
                  <Link
                    href={dest.href}
                    className="group flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#141C3C] p-4 transition-all duration-200 hover:border-white/25 hover:bg-[#1B2450]"
                  >
                    <div>
                      <h3 className="font-semibold text-white transition-colors group-hover:text-[#8EA6FF]">
                        {dest.title}
                      </h3>
                      <p className="text-xs text-[#8A93B2]">{dest.detail}</p>
                    </div>

                    <span className="text-sm font-semibold text-[#8EA6FF] transition-transform duration-200 group-hover:translate-x-1">
                      {dest.linkText}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Handshake Image Card */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2} y={30}>
              <div className="overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)]">
                <PlaceholderImage
                  src="/images/standardize-hr-operations/trust-handshake-337a3e.png"
                  alt="Business partners shaking hands in a meeting"
                  className="h-[240px] sm:h-[360px] lg:h-full w-full object-cover lg:min-h-[520px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
