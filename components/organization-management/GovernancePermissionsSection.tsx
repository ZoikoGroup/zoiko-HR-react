import { Container, Reveal } from "@/components/ui";

const CELL_STYLES: Record<string, string> = {
  Full: "text-emerald-400 font-semibold",
  "Full/scoped": "text-emerald-400 font-semibold",
  Scoped: "text-amber-400 font-semibold",
  "Limited metadata": "text-amber-400 font-semibold",
  "Conditional scoped": "text-amber-400 font-semibold",
  Limited: "text-rose-400 font-semibold",
  No: "text-rose-400 font-semibold",
  "No/conditional": "text-rose-400 font-semibold",
  "No/limited": "text-rose-400 font-semibold",
  "Usually no": "text-white/50",
  "If configured": "text-white/50",
  Conditional: "text-white/50",
  "Policy dep.": "text-white/50",
  "Connector scope": "text-white/50",
  "Sync logs": "text-white/50",
  "Read-only": "text-white/50",
  "Read/export": "text-white/50",
  View: "text-white/50",
};

const ROLES = [
  { role: "Organization Admin", view: "Full", createEdit: "Full", propose: "Full", approve: "If configured", importSync: "Policy dep.", exportAudit: "Full" },
  { role: "HR Admin", view: "Full", createEdit: "Full/scoped", propose: "Full/scoped", approve: "Conditional", importSync: "Limited", exportAudit: "Full/scoped" },
  { role: "HR Ops Admin", view: "Scoped", createEdit: "Scoped", propose: "Scoped", approve: "Usually no", importSync: "No", exportAudit: "Scoped" },
  { role: "Integration Admin", view: "View", createEdit: "No", propose: "No", approve: "No", importSync: "Connector scope", exportAudit: "Sync logs" },
  { role: "Manager / Local Admin", view: "Scoped", createEdit: "Limited metadata", propose: "Conditional scoped", approve: "No/conditional", importSync: "No", exportAudit: "No/limited" },
  { role: "Auditor / Analyst", view: "Read-only", createEdit: "No", propose: "No", approve: "No", importSync: "No", exportAudit: "Read/export" },
];

const NOTES = [
  { title: "Permission-safe aggregates", description: "All KPIs, child counts, search facets, and exports are calculated over authorized data only. Hidden units do not leak through totals." },
  { title: "Restricted-subtree boundary", description: "A visible boundary marker shows a restricted zone without revealing child names, counts, or paths beyond the authorized scope." },
  { title: "Permission-denied states", description: "Safe plain-language explanation with an approved help/administrator path. No disabled action that reveals a restricted capability." },
];

export function GovernancePermissionsSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Governance &amp; permissions
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Role-aware visibility and permission-safe aggregates
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Reference roles below. Product Owner must map these to
              Zoiko HR&apos;s approved role model before UI labels ship.
              Hidden structure never leaks through counts, breadcrumbs,
              search suggestions, or exports.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-white/40">
                  <th className="px-4 py-3 font-medium">Reference role</th>
                  <th className="px-4 py-3 font-medium">View</th>
                  <th className="px-4 py-3 font-medium">Create / Edit</th>
                  <th className="px-4 py-3 font-medium">Propose change</th>
                  <th className="px-4 py-3 font-medium">Approve / Confirm</th>
                  <th className="px-4 py-3 font-medium">Import / Sync</th>
                  <th className="px-4 py-3 font-medium">Export / Audit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {ROLES.map((row) => (
                  <tr key={row.role} className="transition-colors duration-150 hover:bg-white/[0.04]">
                    <td className="px-4 py-3.5 font-semibold">{row.role}</td>
                    <td className={`px-4 py-3.5 ${CELL_STYLES[row.view]}`}>{row.view}</td>
                    <td className={`px-4 py-3.5 ${CELL_STYLES[row.createEdit]}`}>{row.createEdit}</td>
                    <td className={`px-4 py-3.5 ${CELL_STYLES[row.propose]}`}>{row.propose}</td>
                    <td className={`px-4 py-3.5 ${CELL_STYLES[row.approve]}`}>{row.approve}</td>
                    <td className={`px-4 py-3.5 ${CELL_STYLES[row.importSync]}`}>{row.importSync}</td>
                    <td className={`px-4 py-3.5 ${CELL_STYLES[row.exportAudit]}`}>{row.exportAudit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {NOTES.map((note, i) => (
            <Reveal key={note.title} delay={0.1 + i * 0.06}>
              <div className="h-full rounded-2xl bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                <p className="font-semibold">{note.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{note.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
