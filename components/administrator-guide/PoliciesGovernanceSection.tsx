import { Container, Reveal } from "@/components/ui";

const POLICIES = [
  {
    control: "Approval routing",
    owner: "HR Administrator",
    scope: "Affected workflow",
    context: "Immediate, where source-approved",
  },
  {
    control: "Leave policy defaults",
    owner: "HR Administrator",
    scope: "New employees",
    context: "Effective-dated where supported",
  },
  {
    control: "Document acknowledgment requirement",
    owner: "HR Administrator",
    scope: "Assigned population",
    context: "Immediate, where source-approved",
  },
];

export function PoliciesGovernanceSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Policies, approvals &amp; operational governance.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Configuration path, owner, and effective context — only where an
            approved source establishes precedence or approval flow.
          </p>
        </Reveal>

        <div className="mt-10 space-y-3">
          {POLICIES.map((policy, i) => (
            <Reveal key={policy.control} delay={i * 0.06}>
              <div className="grid gap-4 rounded-[10px] border border-slate-200 bg-slate-100 px-5 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">
                    Policy / control
                  </p>
                  <p className="mt-1 text-sm font-bold text-ink">
                    {policy.control}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">
                    Owner
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{policy.owner}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">
                    Scope
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{policy.scope}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">
                    Effective context
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {policy.context}
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
