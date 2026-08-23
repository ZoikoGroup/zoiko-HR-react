import { Container, Reveal } from "@/components/ui";

const SERVICES = [
  {
    title: "Leave and absence",
    tag: "Standard",
    body: "Request, track and administer approved leave types.",
    note: "Exact leave types depend on policy, locale, and employment terms.",
    owner: "HR Ops",
    accent: "border-l-sky-500",
    tagClass: "bg-sky-500/10 text-sky-600",
  },
  {
    title: "Record correction",
    tag: "Standard",
    body: "Propose a change to an HR-maintained field.",
    note: "Correction validated against source authority and effective date.",
    owner: "HR Admin",
    accent: "border-l-sky-500",
    tagClass: "bg-sky-500/10 text-sky-600",
  },
  {
    title: "Policy question",
    tag: "Standard",
    body: "Route HR policy questions to appropriate owner.",
    note: "Does not constitute legal or compliance advice.",
    owner: "HR Ops",
    accent: "border-l-sky-500",
    tagClass: "bg-sky-500/10 text-sky-600",
  },
  {
    title: "Grievance / complaint",
    tag: "Sensitive",
    body: "Restricted — sensitive category handling only.",
    note: "Exact routing, confidentiality, and access require Product/Legal/Privacy validation.",
    owner: "Restricted route",
    accent: "border-l-amber-400",
    tagClass: "bg-amber-400/10 text-amber-600",
  },
  {
    title: "Separation query",
    tag: "Sensitive",
    body: "General queries about separation process and timeline.",
    note: "Does not predetermine legal, payroll, or benefit outcomes.",
    owner: "HR Admin",
    accent: "border-l-amber-400",
    tagClass: "bg-amber-400/10 text-amber-600",
  },
];

export function EmployeeServicesSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Employee Services
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-bold text-slate-900">
            Privacy-aware requests with defined purpose, ownership and
            confidentiality.
          </h2>
          <p className="mt-2 max-w-[620px] leading-6 text-slate-500">
            Service work collects only task-essential data. Sensitive categories
            use approved restricted handling. A service portal is not a
            general-purpose employee dossier.
          </p>
        </Reveal>

        <div className="mt-8 space-y-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={Math.min(i * 0.05, 0.3)}>
              <div
                className={`flex flex-wrap items-start justify-between gap-4 rounded-xl border-l-[3px] bg-white px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] ${service.accent}`}
              >
                <div>
                  <p className="flex flex-wrap items-center gap-2.5 text-sm font-semibold text-slate-900">
                    {service.title}
                    <span
                      className={`rounded px-2 py-0.5 text-[10px] font-semibold ${service.tagClass}`}
                    >
                      {service.tag}
                    </span>
                  </p>
                  <p className="mt-1.5 text-sm text-slate-600">
                    {service.body}
                  </p>
                  <p className="mt-1.5 text-xs text-slate-400">
                    {service.note}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400">Owning team</p>
                  <p className="mt-0.5 text-sm font-semibold text-slate-700">
                    {service.owner}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
