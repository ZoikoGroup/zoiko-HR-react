import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PILLARS = [
  "Identity and access",
  "Data protection",
  "Auditability",
  "Platform security",
  "Governance and AI boundaries",
];

export function SecurityGovernanceSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Protect sensitive workforce information through deliberate
                access and governance.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-white/60">
                Control who can access workforce information, how material
                actions are approved and what evidence is retained.
              </p>
            </Reveal>

            <div className="mt-6 space-y-3">
              {PILLARS.map((pillar, i) => (
                <Reveal key={pillar} delay={0.12 + i * 0.06}>
                  <div className="group rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/10 hover:text-white">
                    {pillar}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2">
                <Link
                  href="/trust-center"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
                >
                  Visit the Trust Center
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
                  href="/security-reporting"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
                >
                  Request security information
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16} y={36}>
            <PlaceholderImage
              src="/images/home/security-governance.png"
              alt="Business partners shaking hands with a governance and access icon overlay"
              label="Deliberate access and governance"
              className="aspect-[4/3] w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
