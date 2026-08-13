import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function DeliberateAccessSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Sensitive lifecycle events deserve deliberate access.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Access, retention, and professional-review boundaries govern
              who can see or act on lifecycle information.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <PlaceholderImage
            src="/images/onboarding-lifecycle/deliberate-access.png"
            alt="Two colleagues high-fiving near a window"
            label="Deliberate access, not default access"
            fit="contain"
            className="mt-8 w-full rounded-2xl border border-white/10 shadow-xl shadow-black/30"
          />
        </Reveal>
      </Container>
    </section>
  );
}
