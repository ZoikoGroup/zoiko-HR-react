import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function AccessibilityHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_70%_-10%,#124559_0%,#0B2537_55%,#0F172A_100%)] py-16 text-white sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_460px]">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-[5px] text-xs font-medium uppercase leading-4 tracking-wide text-indigo-400">
                Accessibility
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-145 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Review Zoiko HR accessibility information, limitations and
                feedback options.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-130 leading-7 text-slate-400">
                Zoiko HR is committed to accessible experiences. This page is
                the public source for our approved accessibility commitment,
                current conformance information, known limitations and the route
                for accessibility feedback or support.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="#conformance"
                  className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Review Current Accessibility Information
                </Link>
                <Link
                  href="#feedback"
                  className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-primary hover:text-primary"
                >
                  Provide Accessibility Feedback
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <Link
                href="/trust-center"
                className="mt-4 inline-flex px-6 py-3 text-sm font-semibold text-indigo-400 hover:text-white"
              >
                Visit Trust Center →
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/accessibility/hero.png"
              alt="A leader presenting a governance framework to a seated team"
              label="Presenting the governance framework"
              className="aspect-[460/526] w-full rounded-2xl border border-cyan-900 bg-slate-900"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
