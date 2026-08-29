import { Container, Reveal } from "@/components/ui";

const STEPS = ["Source Owner", "Source Validation", "Legal / Trust Review", "Publisher Approval", "Scheduled Review"];

const ROLES = ["Group Communications Owner", "Portfolio Owner", "Claim / Fact Owner", "Accessibility Reviewer", "Publisher"];

export function GovernanceSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Governance &amp; accountability — how corporate claims are
              controlled.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Every material claim published by Zoiko Group follows a
              structured workflow. Source owners, validators, reviewers,
              and publishers are assigned before any fact reaches a public
              destination.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {STEPS.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-full bg-primary/15 px-4 py-2.5 text-sm font-semibold text-primary">
                  {step}
                </span>
                {i < STEPS.length - 1 && (
                  <span className="text-primary/50" aria-hidden>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {ROLES.map((role) => (
              <span
                key={role}
                className="rounded-full bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/60"
              >
                {role}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-6 max-w-xl text-center text-xs text-white/40">
            If a fact is disputed or under review, it is suppressed until
            resolved. Review dates are mandatory for all material claims.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
