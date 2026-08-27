import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function NewsroomHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0A1B2E_100%)] pb-16 pt-16 text-white sm:pb-20 sm:pt-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                Newsroom
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                News and announcements from Zoiko HR.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                Official company announcements, press releases, curated external
                coverage, and approved media resources. Published content is
                source-governed, dated, and attributed.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="#latest-news">Browse latest news ↓</Button>
                <Button
                  href="#media-inquiries"
                  variant="outline"
                  className="border-white text-white hover:border-primary hover:text-primary"
                >
                  Media inquiries →
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <p className="mt-8 text-xs text-white/40">
                Official source. All content types labeled. Corrections
                published where material.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/newsroom/hero.png"
              alt="A colleague presenting charts on a monitor to two teammates"
              label="Zoiko HR Newsroom"
              fit="contain"
              className="w-full rounded-[20px] border border-white/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
