import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function PlatformOperatingFoundationSection() {
  return (
    <section className="pb-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Create a stronger operating foundation for your people
              processes.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              As organizations grow, employee information, team structures,
              onboarding tasks, approvals, documents, changes, and
              reporting can become fragmented. Zoiko HR is designed to
              bring these workflows into a clearer, permission-sensitive
              operating model.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <PlaceholderImage
            src="/images/platform/operating-foundation.png"
            alt="Hand touching a holographic HR interface"
            label="A clearer operating model"
            fit="contain"
            className="mt-8 w-full rounded-2xl shadow-xl shadow-slate-900/10"
          />
        </Reveal>
      </Container>
    </section>
  );
}
