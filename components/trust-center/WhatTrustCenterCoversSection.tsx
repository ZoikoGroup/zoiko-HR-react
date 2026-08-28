import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function WhatTrustCenterCoversSection() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
            What the Trust Center covers
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            The Zoiko HR Trust Center is the public hub for verified security,
            privacy, governance and assurance information. It routes visitors to
            current Security &amp; Privacy, AI Governance, Accessibility, Data
            Processing Addendum, Subprocessors and Security Reporting
            authorities, and distinguishes public information from materials
            that require controlled access. Trust statements remain scope- and
            evidence-dependent, and Zoiko HR does not provide legal or
            compliance advice or guarantee compliance.
          </p>
        </Reveal>

        <Reveal delay={0.14} className="mx-auto mt-10 max-w-5xl">
          <PlaceholderImage
            src="/images/trust-center/what-trust-center-covers.png"
            alt="A team celebrating together with a high five in an office"
            label="What the Trust Center covers"
            className="aspect-[16/9] w-full rounded-xl border border-slate-200 bg-slate-100 sm:aspect-[27/10]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
