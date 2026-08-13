import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function HrRecordProblemSection() {
  return (
    <section className="bg-[#FAF8F5] py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              The HR record problem
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              HR Owns the Outcome. The Evidence Is Often Fragmented.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Schedules, time entries, break records, manager approvals,
              payroll changes, employee questions, and policy exceptions
              often live in different systems and messages. HR is left to
              reconcile the record after the fact.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <PlaceholderImage
            src="/images/hr-teams/hr-record-problem.png"
            alt="Woman presenting a tablet with charts to colleagues"
            label="Reconciling the record"
            fit="contain"
            className="mt-8 w-full rounded-2xl shadow-xl shadow-slate-900/10"
          />
        </Reveal>
      </Container>
    </section>
  );
}
