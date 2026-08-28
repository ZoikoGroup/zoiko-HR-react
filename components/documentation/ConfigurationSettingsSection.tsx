import { Container, Reveal } from "@/components/ui";

const SETTINGS = [
  {
    setting: "Approval routing",
    who: "HR Administrator",
    prerequisite: "Workflow-configuration permission",
    impact: "Changes which approver a submitted request routes to.",
  },
  {
    setting: "Leave policy defaults",
    who: "HR Administrator",
    prerequisite: "Published leave policy",
    impact: "Changes default balances and accrual for new employees.",
  },
  {
    setting: "Document acknowledgment requirement",
    who: "HR Administrator",
    prerequisite: "Published document version",
    impact: "Requires employee acknowledgment before a task is marked complete.",
  },
];

export function ConfigurationSettingsSection() {
  return (
    <section className="bg-slate-100 py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Configuration &amp; settings.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Location, who can change it, and impact — broader policy and
            governance route to the Administrator Guide.
          </p>
        </Reveal>

        <div className="mt-10 space-y-3">
          {SETTINGS.map((row, i) => (
            <Reveal key={row.setting} delay={i * 0.06}>
              <div className="grid gap-4 rounded-[10px] border border-slate-200 bg-white px-5 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">
                    Setting
                  </p>
                  <p className="mt-1 text-sm font-bold text-ink">
                    {row.setting}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">
                    Who can change it
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{row.who}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">
                    Prerequisite
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {row.prerequisite}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">
                    Impact
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{row.impact}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
