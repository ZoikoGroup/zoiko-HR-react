import { Container, Reveal } from "@/components/ui";

const CONCEPTS = [
  {
    title: "Organization",
    body: "Configured record — not a legal inference",
  },
  {
    title: "Location",
    body: "Administrative, not physical work-location authority",
  },
  { title: "Work site", body: "Explicit configured place of work" },
  {
    title: "Jurisdiction",
    body: "Review / config dimension — not synonymous with entity or location",
  },
  { title: "Data region", body: "Hosting concept from approved source only" },
];

const COLUMNS = [
  "Type",
  "Name",
  "Parent",
  "Owner",
  "Effective",
  "Config profile",
  "Review",
  "Integration",
  "Exceptions",
];

const ROWS = [
  {
    type: "Organization",
    name: "[Global entity]",
    parent: "—",
    owner: "Global HR Admin",
    effective: { label: "Current", tone: "text-emerald-500" },
    profile: "Standard",
    review: { label: "Current", tone: "text-emerald-500" },
    integration: { label: "Connected", tone: "text-emerald-500" },
    exceptions: { label: "None", tone: "text-slate-400" },
  },
  {
    type: "Business unit",
    name: "[EMEA division]",
    parent: "[Global entity]",
    owner: "Regional HR — EMEA",
    effective: { label: "Current", tone: "text-emerald-500" },
    profile: "EMEA overlay",
    review: { label: "Current", tone: "text-emerald-500" },
    integration: { label: "Connected", tone: "text-emerald-500" },
    exceptions: { label: "1 pending", tone: "text-amber-500" },
  },
  {
    type: "Location",
    name: "[London office]",
    parent: "[EMEA division]",
    owner: "Local HR",
    effective: { label: "Current", tone: "text-emerald-500" },
    profile: "UK local",
    review: { label: "Review due", tone: "text-amber-500" },
    integration: { label: "Partial", tone: "text-amber-500" },
    exceptions: { label: "None", tone: "text-slate-400" },
  },
  {
    type: "Work site",
    name: "[Hybrid site A]",
    parent: "[London office]",
    owner: "Facilities",
    effective: { label: "Current", tone: "text-emerald-500" },
    profile: "Inherited",
    review: { label: "Current", tone: "text-emerald-500" },
    integration: { label: "Not configured", tone: "text-slate-400" },
    exceptions: { label: "None", tone: "text-slate-400" },
  },
];

export function OrganizationContextSection() {
  return (
    <section className="border-t border-black/10 bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Organization, Location and Workforce Context
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-sky-950">
            Distinct objects, explicit relationships.
          </h2>
          <p className="mt-4 max-w-[660px] leading-6 text-slate-500">
            Entity/organization, location, work site, worker work-location
            context, jurisdiction, and data region are separate governed
            concepts.
          </p>
        </Reveal>

        <div className="mt-6 flex flex-wrap gap-3">
          {CONCEPTS.map((concept, i) => (
            <Reveal key={concept.title} delay={i * 0.06}>
              <div className="rounded-lg border border-black/10 bg-white px-3.5 py-2">
                <p className="text-xs font-semibold text-sky-950">
                  {concept.title}
                </p>
                <p className="mt-0.5 text-xs leading-4 text-slate-400">
                  {concept.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16} y={30}>
          <div className="mt-8 rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Organization Portfolio — Illustrative
            </span>
            <div className="mt-3.5 overflow-x-auto">
              <table className="w-full min-w-[1000px] text-left">
                <thead>
                  <tr className="border-b border-black/10 text-[10px] font-semibold uppercase text-slate-400">
                    {COLUMNS.map((column) => (
                      <th key={column} className="px-2.5 py-1 font-semibold">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10 text-xs">
                  {ROWS.map((row) => (
                    <tr key={row.name}>
                      <td className="px-2.5 py-2">
                        <span className="inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                          {row.type}
                        </span>
                      </td>
                      <td className="px-2.5 py-2 font-medium text-sky-950">
                        {row.name}
                      </td>
                      <td className="px-2.5 py-2 text-slate-500">
                        {row.parent}
                      </td>
                      <td className="px-2.5 py-2 text-slate-500">
                        {row.owner}
                      </td>
                      <td
                        className={`px-2.5 py-2 font-semibold ${row.effective.tone}`}
                      >
                        {row.effective.label}
                      </td>
                      <td className="px-2.5 py-2 text-slate-500">
                        {row.profile}
                      </td>
                      <td
                        className={`px-2.5 py-2 font-semibold ${row.review.tone}`}
                      >
                        {row.review.label}
                      </td>
                      <td
                        className={`px-2.5 py-2 font-semibold ${row.integration.tone}`}
                      >
                        {row.integration.label}
                      </td>
                      <td
                        className={`px-2.5 py-2 font-semibold ${row.exceptions.tone}`}
                      >
                        {row.exceptions.label}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-4 rounded-xl border border-black/10 bg-white/60 px-5 py-3.5">
            <p className="text-xs leading-5 text-slate-500">
              Relationships require explicit configured authority. Names,
              domains, addresses, or similarity never auto-merge objects.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
