import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function BaselineOverridesSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal className="max-w-[700px]">
          <h2 className="font-heading text-3xl font-extrabold text-sky-950">
            Baseline configuration, inspectable overrides.
          </h2>
          <p className="mt-3.5 leading-6 text-slate-600">
            Inheritance is configuration behavior — never corporate or legal
            control. Every effective value traces to a baseline, owner, version
            and effective date.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="h-full rounded-xl border border-slate-200 bg-slate-100 p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Baseline
              </p>
              <p className="mt-1.5 font-bold text-sky-950">
                Setting: Leave-approval routing
              </p>
              <p className="mt-1.5 text-xs leading-5 text-slate-500">
                Source: Portfolio HR Operations · Version 5 · Effective Jan 1,
                2026 · Scope: All entities · Status: Active
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="h-full rounded-xl border border-slate-200 border-l-[3px] border-l-primary bg-slate-100 p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-primary">
                Override — Approved
              </p>
              <p className="mt-1.5 font-bold text-sky-950">
                Scope: Acme DE GmbH — works-council notification step
              </p>
              <p className="mt-1.5 text-xs leading-5 text-slate-500">
                Approver: L. Hoffmann · Effective Feb 1, 2026 – ongoing ·
                Evidence: Approval record #5182
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.22} y={30}>
          <PlaceholderImage
            src="/images/multi-entity-enterprises/baseline-overrides.png"
            alt="A person taking notes at a laptop in a quiet workspace"
            label="Baseline and overrides"
            className="mt-8 h-64 w-full rounded-xl border border-slate-200 bg-slate-100"
          />
        </Reveal>
      </Container>
    </section>
  );
}
