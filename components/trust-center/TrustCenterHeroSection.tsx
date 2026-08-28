import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function TrustCenterHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0A1B2E_100%)] pb-16 pt-16 text-white sm:pb-24 sm:pt-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-indigo-400">
                Trust Center
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Review Zoiko HR security, privacy, governance and assurance
                information.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-xl leading-relaxed text-slate-300">
                The Trust Center organizes current trust resources and routes
                you to the authority that owns each changing detail — public
                where possible, controlled where it must be.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="#trust-navigator"
                  className="w-full rounded-lg bg-primary px-6 py-3.5 text-center font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
                >
                  Review Trust Resources
                </Link>
                <Link
                  href="#procurement-request"
                  className="w-full rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 text-center font-semibold text-white transition-colors hover:bg-white/20 sm:w-auto"
                >
                  Request Security / Procurement Materials
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <Link
                href="#security-reporting"
                className="mt-5 inline-block text-sm font-semibold text-orange-300 hover:text-white"
              >
                Report a Security Issue →
              </Link>
            </Reveal>

            <Reveal delay={0.36}>
              <p className="mt-6 max-w-xl text-xs leading-relaxed text-slate-400">
                This page does not display certification badges, audit names or
                compliance conclusions unless an approved source establishes
                them.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/trust-center/hero.png"
              alt="Colleagues shaking hands and applauding in a meeting room"
              label="Zoiko HR Trust Center"
              className="aspect-[4/3] w-full rounded-2xl border border-cyan-900 bg-blue-950"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
