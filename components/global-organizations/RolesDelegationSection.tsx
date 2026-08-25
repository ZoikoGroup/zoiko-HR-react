import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ROLES = [
  { title: "Global HR Admin", scope: "Assigned global scope" },
  { title: "Security / Privacy Admin", scope: "Security/privacy domain" },
  { title: "Auditor / Reviewer", scope: "Read-only / review" },
];

const DELEGATION_FIELDS = [
  "Delegator",
  "Delegate",
  "Role / permission",
  "Scope",
  "Reason",
  "Start",
  "Expiry",
  "Approver",
  "Restrictions",
  "Status",
  "Audit record",
];

export function RolesDelegationSection() {
  return (
    <section className="border-t border-white/10 bg-[#102A43] py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            Distributed Roles, Permissions and Delegation
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold">
            Central and local authority with explicit scope and audit.
          </h2>
          <p className="mt-4 leading-6 text-slate-400">
            A title alone does not grant access.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4">
            <p className="text-xs font-semibold text-indigo-400">
              Effective access formula
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-300">
              Effective access = role × organizational scope × purpose × data
              sensitivity × requested action × object state × active delegation
            </p>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[400px_1fr]">
          <div className="flex flex-col gap-6">
            {ROLES.map((role, i) => (
              <Reveal key={role.title} delay={0.12 + i * 0.08}>
                <div className="h-full rounded-xl border border-white/10 bg-sky-950 p-5">
                  <p className="font-heading font-bold">{role.title}</p>
                  <p className="mt-1 text-xs font-semibold text-indigo-400">
                    {role.scope}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.18} y={30} className="h-full">
            <PlaceholderImage
              src="/images/global-organizations/roles-delegation.png"
              alt="Two colleagues reviewing a tablet together by an office window"
              label="Scoped authority and audit"
              className="h-full min-h-64 w-full rounded-xl border border-white/10 bg-sky-950"
            />
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <div className="mt-6 rounded-xl border border-white/10 bg-sky-950/60 p-5">
            <span className="text-xs font-semibold uppercase tracking-wide text-indigo-400">
              Delegation Fields
            </span>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {DELEGATION_FIELDS.map((field) => (
                <span
                  key={field}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300"
                >
                  {field}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
