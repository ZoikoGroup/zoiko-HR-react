import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function GlobalHrOperationsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a1b2e] py-24 text-white sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_1200px_700px_at_50%_0%,rgba(34,64,107,1)_0%,rgba(16,42,67,1)_55%,rgba(10,27,46,1)_100%)]"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
                Global HR Operations
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
                Expand globally without fragmenting HR operations.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/65">
                Bring entities, workforce records, permissions, policies and
                HR workflows into one governed operating environment — with
                controlled local configuration and clear group-wide
                visibility as your organization grows across markets.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/book-a-demo" className="!rounded-lg">
                  Book a Demo
                </Button>
                <Button
                  href="#operating-model"
                  variant="outline"
                  className="!rounded-lg !border-white/20 !text-white hover:!border-primary hover:!text-primary"
                >
                  See the Global HR Model
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Multi-entity structure",
                  "Jurisdiction-aware configuration",
                  "Governed local variants",
                  "Group-wide visibility",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/global-hr-operations/hero.png"
              alt="Distributed team collaborating around a conference table with laptops"
              label="Global HR operations, unified"
              fit="cover"
              className="aspect-[736/414] w-full rounded-xl shadow-2xl shadow-black/40"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
