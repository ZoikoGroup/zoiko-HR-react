import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ROWS = [
  {
    role: "Entity Admin",
    scope: "Acme DE GmbH",
    action: "Employee Records → Edit",
    status: "Allowed",
    tone: "text-teal-600",
  },
  {
    role: "Reporting/Auditor",
    scope: "Portfolio",
    action: "Reporting → Export",
    status: "Approval required",
    tone: "text-yellow-600",
  },
  {
    role: "HR Admin",
    scope: "Acme APAC Pte Ltd",
    action: "Documents → View",
    status: "Read-only",
    tone: "text-slate-500",
  },
  {
    role: "Security Admin",
    scope: "Portfolio",
    action: "Access & Delegation → Review",
    status: "Allowed",
    tone: "text-teal-600",
  },
  {
    role: "Integration Admin",
    scope: "Finance Shared Services",
    action: "Integrations → Configure",
    status: "Denied",
    tone: "text-yellow-600",
  },
];

export function AccessScopeSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal className="max-w-[700px]">
          <h2 className="font-heading text-3xl font-extrabold text-sky-950">
            No scope means no access.
          </h2>
          <p className="mt-4 leading-6 text-slate-600">
            Effective access is computed from role, entity scope, object,
            action, sensitivity, state and delegation — never hierarchy alone.
          </p>
        </Reveal>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,690px)_1fr]">
          <Reveal delay={0.1} y={30} className="min-w-0">
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] text-left">
                  <thead>
                    <tr className="bg-slate-100 text-xs font-semibold text-slate-400">
                      <th className="px-3.5 py-2.5 font-semibold">Role</th>
                      <th className="px-3.5 py-2.5 font-semibold">
                        Entity scope
                      </th>
                      <th className="px-3.5 py-2.5 font-semibold">
                        Module / action
                      </th>
                      <th className="px-3.5 py-2.5 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs">
                    {ROWS.map((row) => (
                      <tr key={row.role}>
                        <td className="px-3.5 py-3 font-semibold text-sky-950">
                          {row.role}
                        </td>
                        <td className="px-3.5 py-3 text-slate-500">
                          {row.scope}
                        </td>
                        <td className="px-3.5 py-3 text-slate-500">
                          {row.action}
                        </td>
                        <td className={`px-3.5 py-3 font-semibold ${row.tone}`}>
                          {row.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16} y={30}>
            <PlaceholderImage
              src="/images/multi-entity-enterprises/access-scope.png"
              alt="A team gathered around a wall display in an open office"
              label="Scoped access"
              className="h-56 w-full rounded-xl border border-slate-200 bg-white"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
