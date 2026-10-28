import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

const PILLS = [
  "Multi-entity structure",
  "Jurisdiction-aware configuration",
  "Governed local variants",
  "Group-wide visibility",
];

export function GlobalExpansionHeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-20 text-white sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(60%_50%_at_20%_0%,rgba(49,94,251,0.35),transparent)]"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                Global HR Operations
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Expand globally without fragmenting HR operations.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-white/70">
                Bring entities, workforce records, permissions, policies
                and HR workflows into one governed operating environment
                — with controlled local configuration and clear
                group-wide visibility as your organization grows across
                markets.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/book-a-demo">Book a Demo</Button>
                <Button
                  href="#operating-model"
                  variant="outline"
                  className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
                >
                  See the Global HR Model
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-7 flex flex-wrap gap-2">
                {PILLS.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/70"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/global-expansion/hero.webp"
              alt="A distributed team collaborating around laptops in a bright office"
              label="One governed global operating model"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
