import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function AiGovernanceHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_70%_-10%,#124559_0%,#0B2537_55%,#0F172A_100%)] py-16 text-white sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-indigo-400">
                AI Governance
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Review how Zoiko HR governs AI-related behavior and preserves
                human authority.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-4 max-w-lg leading-7 text-slate-400">
                Any approved AI-related behavior is governed through human
                review, permissions, transparency, logging and prohibited-use
                boundaries. Exact features and availability remain
                source-specific.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="#use-case-registry"
                  className="rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Review AI Governance Records
                </Link>
                <Link
                  href="/trust-center"
                  className="rounded-xl border border-white px-6 py-3 text-base font-semibold text-white transition-colors hover:border-primary hover:text-primary"
                >
                  Visit the Trust Center
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <Link
                href="/security-privacy"
                className="mt-4 inline-flex text-xs font-semibold text-indigo-400 hover:text-white"
              >
                Review Security &amp; Privacy →
              </Link>
            </Reveal>

            <Reveal delay={0.32}>
              <p className="mt-3.5 max-w-xl text-xs leading-4 text-slate-600">
                No AI feature, model, provider, training behavior, retention
                policy, accuracy claim, fairness claim, automation right, or
                legal/compliance status is asserted without an approved source
                record.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/ai-governance/hero.png"
              alt="A hand touching a glowing balance-scale interface between two profiles"
              label="Balancing AI and human authority"
              className="aspect-[600/528] w-full rounded-[20px] border border-white/10 bg-slate-900"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
