import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function PolicyManagementSection() {
  return (
    <section className="bg-[#0a0f1e] py-16 text-white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Policy management
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Versioned policy registry — configured scope, not legal
                authority
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-white/60">
                Each policy has a version, effective period, scope,
                status and owner. Configured policy is not statutory
                entitlement, legal advice or compliance certification.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16} y={30}>
            <PlaceholderImage
              src="/images/leave-attendance/policy-management.webp"
              alt="Colleagues discussing policy details in an office"
              label="A versioned policy registry"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
