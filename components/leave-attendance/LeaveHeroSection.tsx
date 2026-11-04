import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function LeaveHeroSection() {
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
                Leave &amp; Attendance
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Make leave requests clear. Keep policy, balances and
                approvals accountable.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-white/70">
                Coordinate configured leave policies, requests, balance
                context, human approvals, calendars and attendance
                exceptions with clear source, effective-time, privacy and
                audit boundaries.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="#leave-types">Explore the Leave &amp; Attendance model →</Button>
                <Button
                  href="#request-journey"
                  variant="outline"
                  className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
                >
                  See request and approval flow
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <a href="/book-a-demo" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white">
                Book a demo →
              </a>
            </Reveal>

            <Reveal delay={0.36}>
              <p className="mt-6 max-w-md text-xs leading-relaxed text-white/40">
                Configured policy behavior is not legal or statutory
                advice. Product availability and behavior depend on
                approved configuration and source truth.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/leave-attendance/hero.webp"
              alt="Colleagues greeting each other with a handshake in an office"
              label="Clear leave requests, accountable approvals"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
