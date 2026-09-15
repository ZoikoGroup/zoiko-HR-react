import { Container, Reveal } from "@/components/ui";

type Stage = {
  number: number;
  title: string;
  description: string;
  owner: string;
  dependencies: string;
};

/*
 * Stage 1 is the original supplied copy. Stages 2-6 follow the same shape and
 * stay inside claims the Implementation Guide page already makes — scope stays
 * approval-bound, launch is an authorized evidence-based decision rather than a
 * date, and no stage promises a duration.
 */
const STAGES: Stage[] = [
  {
    number: 1,
    title: "Discover",
    description:
      "Confirm goals, current processes, governance needs, approved product scope, stakeholders and constraints.",
    owner: "Customer + Zoiko",
    dependencies: "Business goals, stakeholders",
  },
  {
    number: 2,
    title: "Prepare",
    description:
      "Extract current records, agree data owners, confirm required fields and close gaps before configuration begins.",
    owner: "Customer + Zoiko",
    dependencies: "Data extracts, field owners",
  },
  {
    number: 3,
    title: "Configure",
    description:
      "Set up the org model, workflows, approval chains, policies and role-based permissions within approved product scope.",
    owner: "Zoiko + Customer administrators",
    dependencies: "Approved scope, confirmed org model",
  },
  {
    number: 4,
    title: "Validate",
    description:
      "Run functional, access and recovery testing against agreed acceptance criteria, recording evidence for each area in scope.",
    owner: "Customer + Zoiko",
    dependencies: "Configured environment, test data",
  },
  {
    number: 5,
    title: "Launch",
    description:
      "Launch is an authorized, evidence-based decision signed off by designated data owners — not a fixed date.",
    owner: "Customer executive + data owners",
    dependencies: "Complete validation evidence, no open blockers",
  },
  {
    number: 6,
    title: "Adopt & Improve",
    description:
      "Training, adoption tracking, stabilization and ongoing improvement continue after go-live; implementation does not end at launch.",
    owner: "Customer change lead + Zoiko",
    dependencies: "Launch complete, enablement plan",
  },
];

export function ImplementationReadinessSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Implementation &amp; Readiness
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink">
            A realistic, owner-based readiness path.
          </h2>
          <p className="mt-3 max-w-[640px] text-ink/50">
            Six stages with dependencies, owners and exit criteria. No stage
            duration or go-live date is guaranteed on this page.
          </p>
          <p className="mt-3 text-xs leading-5 text-ink/40">
            Timing rule: scope depends on approved product areas, data,
            configuration, integrations, testing and customer decisions.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-3">
          {STAGES.map((stage, i) => (
            <Reveal key={stage.title} delay={Math.min(i * 0.05, 0.25)}>
              <details
                className="group rounded-xl border border-slate-200 bg-white"
                open={stage.number === 1}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4">
                  <span className="flex items-center gap-4">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary-light text-xs font-semibold text-primary">
                      {stage.number}
                    </span>
                    <span className="font-semibold text-ink">
                      {stage.title}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="text-sm text-ink/40 transition-transform duration-200 group-open:rotate-180"
                  >
                    ▼
                  </span>
                </summary>

                <div className="border-t border-slate-200 px-5 py-4">
                  <p className="text-sm text-ink/70">{stage.description}</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                      <p className="text-xs text-ink/40">Owner</p>
                      <p className="mt-1 text-sm text-ink">{stage.owner}</p>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                      <p className="text-xs text-ink/40">Key dependencies</p>
                      <p className="mt-1 text-sm text-ink">
                        {stage.dependencies}
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
