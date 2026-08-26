import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function CustomerStoriesHero() {
  return (
    <section className="relative overflow-hidden bg-[#102A43] py-20 text-white sm:py-28">
      {/* Background radial gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(60%_55%_at_50%_0%,rgba(49,94,251,0.18),transparent_70%)]"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,684px)_484px] lg:justify-between">
          {/* Left Content */}
          <div className="max-w-[685px]">
            {/* Customer Stories */}
            <Reveal>
              <span className="font-[IBM_Plex_Sans] text-xs font-semibold uppercase leading-4 tracking-[0.15em] text-[#7FA6FF]">
                Customer Stories
              </span>
            </Reveal>

            {/* Heading */}
            <Reveal delay={0.08}>
              <h1 className="mt-4 font-[Manrope] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl sm:leading-[60px]">
                See how organizations put structured people operations into
                practice.
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-[685px] font-[IBM_Plex_Sans] text-lg font-normal leading-7 text-white/60">
                Published stories meet a consistent evidence standard —
                permissioned, source-reviewed, date-stamped, and scoped to
                what the record actually supports.
              </p>
            </Reveal>

            {/* Buttons */}
            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  href="/coustomer-stories"
                  className="!bg-[#315EFB] !text-white hover:!bg-[#315EFB]/90"
                >
                  Explore Customer Stories
                </Button>

                <Button
                  href="/evidence-standards"
                  variant="outline"
                  className="!border-white/10 !text-white/80 hover:!border-white/20 hover:!bg-white/5 hover:!text-white"
                >
                  Review Evidence Standards
                </Button>
              </div>
            </Reveal>

            {/* Evidence Note */}
            <Reveal delay={0.3}>
              <p className="mt-8 font-[IBM_Plex_Sans] text-xs font-normal leading-4 text-white/40">
                Every published story is permissioned, source-reviewed,
                date-stamped, and limited to what the evidence supports.
              </p>
            </Reveal>
          </div>

          {/* Right Image */}
          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/customer-stories/hero.png"
              alt="Customer stories"
              label="Customer Stories"
              fit="cover"
              className="h-[485px] w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/30"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}