import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function HrTeamsHeroSection() {
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
                For HR & People Teams
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Time and Attendance Software HR Can Trust
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-white/70">
                Manage attendance, breaks, approvals, payroll inputs, and
                disputes across office, remote, hybrid, and contractor
                work—without screenshots, keystroke capture, or invasive
                monitoring.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-4 text-sm text-white/50">
                ZoikoTime creates deterministic, evidence-backed time
                records that workers can understand and authorized
                reviewers can verify.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/book-a-demo">Request Enterprise Demo</Button>
                <Button
                  href="/sign-in"
                  variant="outline"
                  className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
                >
                  Start Free
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/hr-teams/hero.png"
              alt="Team reviewing attendance trends on a conference room screen"
              label="A record HR can trust"
              fit="contain"
              className="w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
