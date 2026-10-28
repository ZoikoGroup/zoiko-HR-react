"use client";

import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const destinations = [
  {
    title: "Security evidence",
    desc: "Certifications, controls and security documentation",
    linkText: "Trust Center →",
    href: "/trust-center",
  },
  {
    title: "Privacy, DPA & subprocessors",
    desc: "Data processing terms and privacy information",
    linkText: "Legal & Trust →",
    href: "/legal-notices",
  },
  {
    title: "Live availability",
    desc: "Current service health and incidents",
    linkText: "Service Status →",
    href: "/service-status",
  },
  {
    title: "Report configuration how-to",
    desc: "Metrics, dashboards, thresholds and exports",
    linkText: "Documentation →",
    href: "/documentation",
  },
  {
    title: "Integration details",
    desc: "APIs, connectors and data behavior",
    linkText: "Developer Docs →",
    href: "/developers",
  },
  {
    title: "Account-specific help",
    desc: "For existing customers",
    linkText: "Help Center →",
    href: "/help-center",
  },
  {
    title: "Accessibility",
    desc: "Our accessibility commitments and conformance",
    linkText: "Accessibility →",
    href: "/accessibility",
  },
];

export function TrustAuthoritySection() {
  return (
    <section className="bg-[#0C1234] py-20 text-white lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Destinations Grid */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#305CF8]">
                Direct Authorities
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl lg:text-[40px]">
                Go to the source for trust, status and support.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#C3CADF]">
                Some answers change often or depend on your account. This page points you to the
                destinations that own them. Support and trust information is never behind a sales form.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 space-y-3">
                {destinations.map((d) => (
                  <Link
                    key={d.title}
                    href={d.href}
                    className="group flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/10 bg-[#141C3C] p-4 transition-all hover:border-[#305CF8]/50 hover:bg-[#1A244D]"
                  >
                    <div>
                      <h3 className="text-sm font-semibold text-white group-hover:text-[#6F8DFF]">
                        {d.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-[#8A93B2]">{d.desc}</p>
                    </div>
                    <span className="shrink-0 text-xs font-semibold text-[#6F8DFF] transition-transform group-hover:translate-x-0.5">
                      {d.linkText}
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Photo */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2} y={30}>
              <div className="relative overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-[0px_30px_60px_-24px_rgba(12,18,52,0.35)]">
                <PlaceholderImage
                  src="/images/reporting-insights/trust-partners-handshake.png"
                  alt="Business partners shaking hands in a meeting"
                  className="h-[400px] w-full object-cover lg:h-[500px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
