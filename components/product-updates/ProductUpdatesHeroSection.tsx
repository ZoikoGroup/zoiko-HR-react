import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function ProductUpdatesHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0A1B2E_100%)] py-16 text-white sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-primary px-3.5 py-1 text-xs font-bold uppercase tracking-[0.1em] text-indigo-400">
                Product Updates
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                See what changed in Zoiko HR — and what it means for your work.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400">
                Browse source-approved product changes, understand affected
                areas and availability, see whether action is required, and jump
                to the current documentation that explains how the product works
                now.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#updates-index"
                  className="rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Browse product updates ↓
                </Link>
                <Link
                  href="#updates-index"
                  className="rounded-xl border border-white px-6 py-3 text-base font-semibold text-white transition-colors hover:border-primary hover:text-primary"
                >
                  Filter updates →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-7 max-w-lg text-xs leading-relaxed text-slate-500">
                Product Updates is change history. Service Status owns live
                availability; Documentation owns current how-to guidance; future
                roadmap is not implied.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/product-updates/hero.png"
              alt="An HR lead walking colleagues through recent product changes"
              label="Reviewing recent product changes"
              className="w-full rounded-[20px] border border-white/10 bg-slate-900"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
