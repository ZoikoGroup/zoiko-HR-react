import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function CareersHeroSection() {
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
                Careers
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Careers at Zoiko HR
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-white/70">
                Explore approved open roles, learn how hiring works, and
                find the information you need before applying.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="#open-roles">View open roles</Button>
                <Button href="/about" variant="outline">
                  About Zoiko HR
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-6 flex items-start gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
                <span aria-hidden>ℹ️</span>
                Open roles published from the Job Registry — count
                reflects current approved state.
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/careers/hero.png"
              alt="Colleagues collaborating around a desk in a bright office"
              label="Careers at Zoiko HR"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
