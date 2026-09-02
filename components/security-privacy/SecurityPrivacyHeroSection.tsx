import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function SecurityPrivacyHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_70%_-10%,#22406B_0%,#102A43_55%,#0A1B2E_100%)] py-16 text-white sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-indigo-400">
                Security &amp; Privacy
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Security and privacy information built for verification, not
                assumption.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-4 max-w-lg text-lg leading-7 text-slate-400">
                Review the control domains, evidence status and responsibility
                boundaries that apply to Zoiko HR security and privacy
                information.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="#access-governance"
                  className="rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Review security domains
                </Link>
                <Link
                  href="#security-review"
                  className="rounded-xl border border-white px-6 py-3 text-base font-semibold text-white transition-colors hover:border-primary hover:text-primary"
                >
                  Request Security Review
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <Link
                href="/security-reporting"
                className="mt-5 inline-flex items-center gap-2 rounded-[10px] border border-indigo-400/25 px-3.5 py-2 text-xs font-semibold text-slate-400 transition-colors hover:border-primary hover:text-white"
              >
                <span aria-hidden className="size-1.5 rounded-full bg-emerald-400" />
                Report a Security Issue → Security Reporting
              </Link>
            </Reveal>

            <Reveal delay={0.36}>
              <p className="mt-4 max-w-xl text-xs leading-4 text-slate-500">
                No certification, compliance claim, algorithm, response time or
                uptime assertion without current approved evidence.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/security-privacy/hero.png"
              alt="Two colleagues reviewing a security checklist together"
              label="Reviewing a security checklist"
              className="w-full rounded-[20px] border border-white/10 bg-slate-900"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
