import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function GlobalByDesignSection() {
  return (
    <section className="bg-ink py-20 text-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                Global by design
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Built to present a clear global company identity.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-white/70">
                &ldquo;Global by Design&rdquo; reflects the positioning of
                Zoiko HR as a commercially independent global SaaS
                platform within Zoiko Group. The platform is built for
                the global operating context — structurally,
                commercially, and by design.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Button href="/contact-sales">Talk to Sales</Button>
                <a
                  href="/contact-zoiko-hr"
                  className="px-1 py-2.5 text-sm font-semibold text-white/70 hover:text-white"
                >
                  Contact →
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/company-overview/global-by-design.png"
              alt="A team planning at a whiteboard covered with sticky notes"
              label="A clear global company identity"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
