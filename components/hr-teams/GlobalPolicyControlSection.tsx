import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function GlobalPolicyControlSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
                Global policy control
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                One Workforce System. Policies That Reflect Where and How
                People Work.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-white/60">
                Configure time, attendance, break, approval and review
                rules by organization, location, role, schedule and worker
                type—while maintaining one governed record model.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <Button
                href="/contact-sales"
                className="mt-6 !bg-emerald-600 shadow-emerald-600/30 hover:!bg-emerald-700"
              >
                Discuss Global Deployment
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/hr-teams/global-policy-control.png"
              alt="Team meeting in a boardroom with a presentation screen"
              label="One system, local policy"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-black/30"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
