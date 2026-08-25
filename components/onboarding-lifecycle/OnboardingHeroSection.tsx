import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function OnboardingHeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-20 text-white sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(60%_50%_at_20%_0%,rgba(49,94,251,0.35),transparent)]"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                Onboarding & Employee Lifecycle
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Coordinate every employee journey with clear ownership and
                control.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-white/70">
                Plan onboarding, workforce changes, transitions, leave,
                return, separation, and post-employment actions through
                structured events, accountable tasks, effective-dated
                record changes, communications, evidence, and connected
                system handoffs.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/book-a-demo">Book a Demo</Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
                >
                  Request Pricing
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="/product-tour"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
              >
                Take the Product Tour
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/onboarding-lifecycle/hero.png"
              alt="Team collaborating around a laptop in a meeting"
              label="Coordinated employee journeys"
              fit="contain"
              className="w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
