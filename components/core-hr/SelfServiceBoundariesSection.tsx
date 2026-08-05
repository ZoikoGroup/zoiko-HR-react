import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ROLES = [
  {
    title: "Employee",
    bg: "bg-primary-light/50",
    permitted: [
      "View approved fields",
      "Request correction",
      "Propose approved updates",
      "Submit required information",
      "Acknowledge policies",
    ],
    restricted: ["Direct record edit", "Access to others' data", "Approval of own changes"],
  },
  {
    title: "Manager",
    bg: "bg-emerald-50",
    permitted: [
      "View permitted team context",
      "Review configured requests",
      "Propose team changes",
      "Delegate named tasks",
      "Escalate to HR",
    ],
    restricted: [
      "Broad sensitive field access",
      "HR administration",
      "Self-approval of prohibited requests",
    ],
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 flex-none text-emerald-600">
      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 flex-none text-rose-500">
      <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SelfServiceBoundariesSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Sections 13–14 — Self-service
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Boundaries that protect and empower.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                Employees view and request. Managers review team context and
                complete permitted approvals. Neither role bypasses source
                rules, approval chains, or field-sensitivity controls.
              </p>
            </Reveal>

            <div className="mt-6 space-y-4">
              {ROLES.map((role, i) => (
                <Reveal key={role.title} delay={0.14 + i * 0.1}>
                  <div className={`rounded-2xl ${role.bg} p-6`}>
                    <p className="font-semibold text-ink">{role.title}</p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                          Permitted
                        </span>
                        <ul className="mt-2 space-y-1.5">
                          {role.permitted.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-ink/70">
                              <CheckIcon />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-rose-600">
                          Restricted
                        </span>
                        <ul className="mt-2 space-y-1.5">
                          {role.restricted.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-ink/70">
                              <CrossIcon />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/core-hr/self-service.png"
              alt="Team celebrating with a high-five"
              label="Protects and empowers"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
