import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function SubprocessorsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] bg-[radial-gradient(120%_100%_at_70%_-10%,#164e63_0%,#082f49_55%,#0f172a_100%)] py-16 text-white sm:py-24 lg:py-[137px]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-[5px] text-xs font-medium uppercase leading-4 tracking-wide text-indigo-400">
                Subprocessors
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-[580px] text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[48px] lg:leading-[52.8px]">
                Review Zoiko HR current approved subprocessors and published
                changes.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-[520px] text-base leading-7 text-slate-400">
                Use this page to review source-approved subprocessor
                relationships, understand approved purpose, scope and location
                context, inspect changes, and use the DPA for governing
                contractual terms.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="#current-registry"
                  className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  View Current Subprocessors
                </Link>
                <Link
                  href="#change-history"
                  className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
                >
                  Review Recent Changes
                </Link>
                <Link
                  href="/data-processing-addendum"
                  className="rounded-xl px-5 py-3 text-sm font-semibold text-indigo-400 transition-colors hover:text-white"
                >
                  Review DPA →
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/subprocessors/hero.png"
              alt="Engineers reviewing technical diagnostics on workstation monitors"
              label="Reviewing approved registry records"
              className="aspect-[480/478] w-full rounded-2xl border border-cyan-900 bg-slate-900 lg:ml-auto lg:max-w-[480px]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
