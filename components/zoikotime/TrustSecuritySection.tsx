import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

// Exact colours from the design: #315EFB and #0369A1. Each card's dot and its
// link share the card's colour.
const CARDS = [
  {
    title: "Authorization",
    body: "Integration Security governs connection authorization, data minimization and service-identity lifecycle. This page summarizes the posture and routes details.",
    linkLabel: "Review Integration Security →",
    href: "/integration-security",
    linkColor: "text-primary",
    dotColor: "bg-primary",
  },
  {
    title: "Anti-surveillance contract",
    body: "No productivity, reliability, risk, sentiment, misconduct or disciplinary scoring is derived from time data. Time context is for operational purposes only.",
    linkLabel: "See Privacy section above →",
    href: "#privacy",
    linkColor: "text-sky-700",
    dotColor: "bg-sky-700",
  },
];

export function TrustSecuritySection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Trust / security"
          title="Authorization, minimization, anti-surveillance and diagnostics — detailed controls owned by Integration Security"
        >
          This page summarizes the security and privacy posture of the ZoikoTime
          connection. Detailed authorization architecture, minimization
          specifications and audit evidence belong to Integration Security.
        </SectionHeading>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            {CARDS.map((card, i) => (
              <Reveal key={card.title} delay={0.06 + i * 0.06} className="flex-1">
                <div className="h-full rounded-xl border border-slate-200 p-5">
                  <div className="flex items-center gap-2.5">
                    <span
                      aria-hidden
                      className={`size-2.5 flex-none rounded-full ${card.dotColor}`}
                    />
                    <p className="text-base font-semibold text-slate-950">
                      {card.title}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {card.body}
                  </p>
                  <Link
                    href={card.href}
                    className={`mt-3 inline-block text-sm font-medium hover:underline ${card.linkColor}`}
                  >
                    {card.linkLabel}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.14} className="h-full">
            <PlaceholderImage
              src="/images/zoikotime/trust-security.webp"
              alt="Executives reviewing documentation at a laptop"
              label="Security posture"
              className="aspect-[630/318] w-full rounded-xl bg-slate-100 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
            <p className="text-xs leading-5 text-slate-600">
              No encryption algorithm, certification, SLA, incident-response
              commitment or zero-trust claim is made on this page. Broader
              security assurance belongs to Security &amp; Privacy / Trust Center.
              Authenticated time and integration surfaces exclude session replay
              and DOM capture by default.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
