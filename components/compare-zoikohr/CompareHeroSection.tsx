import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PRINCIPLES = [
  "Every claim sourced and dated",
  "No aggregate winner score",
  "Qualifiers stay adjacent to claims",
  "Not verified ≠ absent",
  "Corrections accepted without marketing consent",
];

const OUTLINE = "border border-white/25 text-white hover:border-white/60";

export function CompareHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0F172A_100%)] py-16 text-white sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,371px)] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase leading-4 tracking-[0.12em] text-indigo-400/70">
                Compare Zoiko HR · Source-governed evaluation
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.2] tracking-tight sm:text-5xl">
                Compare Zoiko HR with the facts, dates, and sources visible.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-[640px] text-base leading-7 text-slate-400">
                Every criterion is sourced, dated, and qualified. Missing public
                evidence is not treated as a negative fact, and no aggregate winner
                score is produced.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="#comparison-subjects"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Explore comparisons
                </a>
                <Link
                  href="/product-tour"
                  className={`inline-flex min-h-12 items-center justify-center rounded-full px-8 text-base font-semibold transition-colors ${OUTLINE}`}
                >
                  Take the Product Tour
                </Link>
                <Link
                  href="/pricing"
                  className={`inline-flex min-h-12 items-center justify-center rounded-full px-8 text-base font-semibold transition-colors ${OUTLINE}`}
                >
                  Request Pricing
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex min-h-11 items-center justify-center text-sm font-semibold text-indigo-400 transition-colors hover:text-white"
                >
                  How comparison works ↓
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
                {PRINCIPLES.map((principle) => (
                  <li key={principle} className="flex items-center gap-2 text-xs leading-5 text-slate-400">
                    <span aria-hidden className="size-1.5 flex-none rounded-full bg-primary" />
                    {principle}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/compare-zoikohr/hero.png"
              alt="Two colleagues talking as they walk through an office"
              label="Colleagues walking through the office"
              className="aspect-[4/3] w-full rounded-xl bg-white sm:aspect-video lg:aspect-[371/459]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
