import { Container, Reveal } from "@/components/ui";

const ROLES = [
  {
    title: "HR Leader / People Ops",
    scope: "All orgs (configured)",
    chips: ["Discover", "View", "Approve"],
    extra: "+3",
    bar: "bg-sky-500",
    chipClass: "bg-sky-500/10 text-sky-400",
  },
  {
    title: "HR Administrator",
    scope: "Assigned orgs/entities",
    chips: ["Discover", "View", "Create"],
    extra: "+3",
    bar: "bg-primary",
    chipClass: "bg-primary/10 text-primary",
  },
  {
    title: "HR Operations Specialist",
    scope: "Assigned queue/orgs",
    chips: ["View", "Propose", "Route"],
    extra: "+1",
    bar: "bg-violet-400",
    chipClass: "bg-violet-400/10 text-violet-300",
  },
  {
    title: "Employee Services Specialist",
    scope: "Service queue only",
    chips: ["View (service scope)", "Assign", "Respond"],
    extra: "+1",
    bar: "bg-emerald-400",
    chipClass: "bg-emerald-400/10 text-emerald-400",
  },
];

const MATRIX_COLUMNS = [
  "HR Leader",
  "HR Admin",
  "HR Ops",
  "Services",
  "Policy",
  "Analyst",
  "Auditor",
];

const MATRIX_ROWS: { action: string; cells: string[] }[] = [
  { action: "Discover", cells: ["✓", "✓", "✓", "—", "—", "—", "—"] },
  {
    action: "View record fields",
    cells: ["✓", "✓", "✓", "—", "—", "—", "Read-only"],
  },
  { action: "Propose change", cells: ["✓", "✓", "✓", "—", "—", "—", "—"] },
  { action: "Approve", cells: ["✓", "—", "—", "—", "Policy only", "—", "—"] },
  { action: "Publish policy", cells: ["—", "—", "—", "—", "✓", "—", "—"] },
  {
    action: "Export",
    cells: ["✓", "Gated", "—", "—", "—", "Gated", "Audit only"],
  },
  {
    action: "Delete/archive",
    cells: ["✓", "—", "—", "—", "Policy only", "—", "—"],
  },
  {
    action: "Administer config",
    cells: ["✓", "Scoped", "—", "—", "—", "—", "—"],
  },
];

function cellTone(value: string) {
  if (value === "✓") return "text-emerald-400";
  if (value === "—") return "text-slate-600";
  return "text-amber-400 font-semibold";
}

export function RolesPermissionsSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Roles, Permissions and Delegation
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-bold">
            Effective access — not job title. Role, scope, field sensitivity,
            state and delegation together determine access.
          </h2>
          <p className="mt-2 max-w-[620px] leading-6 text-slate-400">
            Exact authenticated roles require Product validation. Delegation
            never expands beyond the delegator&apos;s own approved authority.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.map((role, i) => (
            <Reveal key={role.title} delay={0.08 + i * 0.06}>
              <div className="h-full overflow-hidden rounded-xl bg-slate-900">
                <div className={`h-1 w-full ${role.bar}`} />
                <div className="p-5">
                  <p className="text-sm font-semibold">{role.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{role.scope}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    {role.chips.map((chip) => (
                      <span
                        key={chip}
                        className={`rounded px-2 py-0.5 text-[10px] font-semibold ${role.chipClass}`}
                      >
                        {chip}
                      </span>
                    ))}
                    <span className="text-[10px] text-slate-500">
                      {role.extra}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.28} y={30}>
          <div className="mt-6 overflow-hidden rounded-xl border-l-[3px] border-sky-500 bg-sky-950">
            <div className="border-b border-white/10 px-5 py-4">
              <span className="text-sm font-semibold">
                Permission matrix — Illustrative
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] text-left">
                <thead>
                  <tr className="border-b border-white/10 text-[10px] font-semibold text-slate-500">
                    <th className="px-5 py-2.5 font-semibold">Action</th>
                    {MATRIX_COLUMNS.map((column) => (
                      <th
                        key={column}
                        className="px-3 py-2.5 text-center font-semibold"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-xs">
                  {MATRIX_ROWS.map((row) => (
                    <tr key={row.action}>
                      <td className="px-5 py-3">{row.action}</td>
                      {row.cells.map((cell, i) => (
                        <td
                          key={MATRIX_COLUMNS[i]}
                          className={`px-3 py-3 text-center text-[11px] ${cellTone(cell)}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.34}>
          <div className="mt-6 rounded-xl border-l-[3px] border-red-400 bg-slate-900 px-5 py-4">
            <p className="text-xs font-semibold text-red-400">
              Blocked access — example state
            </p>
            <p className="mt-1.5 text-sm text-slate-200">
              You do not have permission to view this field. Required:
              Sensitive-field access · Field: Compensation band · Scope: EMEA /
              UK.
            </p>
            <p className="mt-1.5 text-xs leading-5 text-slate-500">
              Next step: Request access from HR Leader or check your
              organization scope. Blocked messages do not reveal inaccessible
              record identity or sensitive values.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
