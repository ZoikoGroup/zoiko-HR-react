import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function AupHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0F172A_100%)] py-16 text-white sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,612px)_minmax(0,496px)]">
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-indigo-400">
                Legal
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Acceptable Use Policy
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-4 max-w-[560px] text-base leading-7 text-slate-200">
                Use Zoiko HR only for authorized, lawful, and responsible
                workforce operations. Do not use the service to harm people,
                violate rights, access data or systems without authorization,
                bypass safeguards, disrupt the platform, or make unreviewed
                high-impact employment decisions.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-4 max-w-[560px] text-sm leading-5 text-slate-400">
                This policy applies only to the Zoiko HR services and surfaces
                identified in the current approved policy. Customer-specific
                agreements and stricter organizational policies may also apply.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-7 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center">
                <Link
                  href="/terms-of-service"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Review Terms of Service
                </Link>
                <Link
                  href="/security-reporting"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/60"
                >
                  Report a Security Issue
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <Link
                href="/ai-governance"
                className="mt-5 inline-block text-sm font-semibold text-indigo-400 transition-colors hover:text-white"
              >
                Review AI Governance →
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/acceptable-use-policy/hero.png"
              alt="Two colleagues reviewing a printed policy document across a desk"
              label="Reviewing a policy document"
              className="aspect-[496/436] w-full rounded-2xl border border-white/10 bg-slate-900"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
