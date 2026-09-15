import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function WorkflowsHeroSection() {
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
                Workflows &amp; Approvals
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Route HR work with clear conditions and accountable
                approvals.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-white/70">
                Coordinate workforce processes through governed routing,
                conditional logic, approval steps and traceable audit
                evidence — every decision explainable, every change
                versioned.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/book-a-demo">Book a Demo</Button>
                <Button
                  href="#six-steps"
                  variant="outline"
                  className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
                >
                  See How Workflows Operate
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <a href="#product-proof" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white">
                Explore Product Proof →
              </a>
            </Reveal>

            <Reveal delay={0.36}>
              <p className="mt-6 max-w-md text-xs leading-relaxed text-white/40">
                Source-aware rules. Human-governed decisions. Versioned
                changes. Inspectable evidence.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/workflows-approvals/hero.webp"
              alt="A presenter reviewing project notes with a team in a meeting room"
              label="Clear conditions, accountable approvals"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
