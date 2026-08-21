import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const TASKS = [
  { task: "Approve leave request — J. Alvarez", state: "Pending" },
  { task: "Team transfer request — M. Osei", state: "Awaiting HR review" },
  { task: "Delegated approval — expense exception", state: "Active delegation" },
  { task: "Onboarding task — new starter checklist", state: "In progress" },
];

export function DistributedWorkSection() {
  return (
    <section className="bg-slate-100 py-20">
      <Container>
        <Reveal>
          <h2 className="max-w-[700px] font-heading text-3xl font-extrabold text-sky-950">
            Distributed work, permissioned service.
          </h2>
          <p className="mt-3 max-w-[700px] leading-6 text-slate-600">
            Managers and delegates see only discoverable objects —
            responsibility never overrides scope or sensitivity.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal y={36} className="h-full">
            <PlaceholderImage
              src="/images/mid-market-organizations/distributed-work.png"
              alt="A manager briefing a team in a boardroom"
              label="Distributed work"
              className="h-full min-h-56 w-full rounded-xl border border-slate-200 bg-white"
            />
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-sky-950">
                Manager Workspace
              </p>
              <ul className="mt-3.5">
                {TASKS.map((row) => (
                  <li
                    key={row.task}
                    className="flex flex-wrap items-start justify-between gap-3 border-b border-gray-100 py-2.5"
                  >
                    <span className="text-xs text-gray-800">{row.task}</span>
                    <span className="text-xs text-slate-500">{row.state}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
