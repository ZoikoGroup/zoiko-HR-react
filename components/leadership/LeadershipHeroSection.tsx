import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function LeadershipHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0A1B2E_100%)] pb-16 pt-16 text-white sm:pb-20 sm:pt-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                Leadership
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Leadership with clear accountability.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Zoiko HR publishes approved executive and product/functional
                leadership information and the areas those leaders are
                accountable for. This page is source-governed — profiles
                render only from current published records.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="#executive-leadership">View leadership ↓</Button>
                <Button href="/about" variant="outline" className="border-white/20 text-white hover:border-primary hover:text-primary">
                  About Zoiko HR →
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <p className="mt-6 text-xs text-white/40">
                Current profiles render from the Leadership Person and Role
                Registry only.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/leadership/hero.png"
              alt="Leadership team meeting around a boardroom table"
              label="Leadership at Zoiko HR"
              fit="contain"
              className="w-full rounded-2xl border border-white/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
