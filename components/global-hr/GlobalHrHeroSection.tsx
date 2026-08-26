import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function GlobalHrHeroSection() {
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
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Global HR Management Platform
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Build structured, secure, and accountable people operations.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-white/70">
                Zoiko HR brings employee and organizational information,
                lifecycle workflows, approvals, role-based access, reporting,
                and connected people operations into one governed platform
                experience.
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
                <a
                  href="/product-tour"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
                >
                  Take the Product Tour
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <p className="mt-6 max-w-md text-xs leading-relaxed text-white/40">
                Designed for growing, multi-entity, multi-location, and
                globally distributed organizations. Capabilities,
                integrations, implementation, support, and availability vary
                by plan, contract, configuration, and jurisdiction.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/global-hr/hero.png"
              alt="Team collaborating around a laptop reviewing workforce data"
              label="People operations, working together"
              fit="contain"
              className="w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
