import { Container, Reveal } from "@/components/ui";

const ROWS = [
  { component: "Condition group", behavior: "Human-readable field label + source; operator; value/source; AND/OR group; nested group limit defined by implementation; validation result." },
  { component: "Source currentness", behavior: "Shows source/module and last resolved/version context where meaningful; internal identifiers are never exposed publicly." },
  { component: "Unknown / missing value", behavior: "Routes to an explicit branch or blocked state — an unknown value is never silently coerced to false/true." },
  { component: "Routing target", behavior: "Named user, role, manager/reporting-line resolver, group/queue or workflow step only where approved." },
  { component: "Fallback", behavior: "Required wherever routing can resolve to zero eligible approvers/owners; fallback behavior stays source-governed." },
  { component: "Explainability", behavior: "Instance timeline records which rule group matched and which route was chosen, subject to privacy minimization." },
];

export function ConditionsRoutingSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Conditions are readable. Routing never guesses.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Every rule names its field and source; every route names
              its target and its fallback — unknown values get an
              explicit branch, never a silent default.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-ink/40">
                  <th className="px-5 py-3 font-medium">Component</th>
                  <th className="px-5 py-3 font-medium">Required behavior</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ROWS.map((row) => (
                  <tr key={row.component} className="transition-colors duration-150 hover:bg-slate-50">
                    <td className="px-5 py-4 font-semibold text-ink">{row.component}</td>
                    <td className="px-5 py-4 text-ink/60">{row.behavior}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
