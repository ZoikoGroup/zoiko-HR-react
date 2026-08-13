import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function PlatformRoleExperiencesSection() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Role-based experiences
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            The same platform, presented by role, purpose, and permission.
          </h2>
        </Reveal>

        <Reveal delay={0.14} y={30}>
          <PlaceholderImage
            src="/images/platform/role-experiences.png"
            alt="Person working at a desk with a glass wall of notes in the background"
            label="Presented by role, purpose, and permission"
            fit="contain"
            className="mt-8 w-full rounded-2xl shadow-xl shadow-slate-900/10"
          />
        </Reveal>
      </Container>
    </section>
  );
}
