import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function OperatingFoundationSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
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
            <Reveal delay={0.16}>
              <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-sm leading-relaxed text-emerald-900">
                  <span className="font-semibold">
                    What this does not mean:
                  </span>{" "}
                  Zoiko HR provides workforce-administration software. It
                  does not provide legal, tax, payroll, employment,
                  compliance, or professional advice.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/global-hr/operating-foundation.png"
              alt="Manager presenting workforce process changes to a team"
              label="A clearer operating model"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
