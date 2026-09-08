import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const SEVERITY_STYLES: Record<string, string> = {
  Blocking: "bg-rose-100 text-rose-700",
  Warning: "bg-amber-100 text-amber-700",
  Informational: "bg-sky-100 text-sky-700",
};

const ISSUES = [
  { title: "Duplicate", severity: "Blocking", description: "Two units share a name or code within a uniqueness scope. Show object, category, scope, and correction action. Never silently merge." },
  { title: "Cycle", severity: "Blocking", description: "A move or reparent would create a circular hierarchy (a unit as its own ancestor). Block the action and show the conflicting path." },
  { title: "Orphan risk", severity: "Warning", description: "Closing or archiving a parent when active children or unresolved assignments remain. Require resolution or explicit override with audit." },
  { title: "Effective-date conflict", severity: "Warning", description: "Date overlap or gap between scheduled changes affecting the same object. Shown adjacent to the affected record." },
  { title: "Dependency gap", severity: "Informational", description: "Known downstream references (assignments, policy mappings, integrations) exist with an unresolved state. Absence of known dependency is not proof none exists." },
  { title: "Sync conflict", severity: "Warning", description: "Local and external state differ. Shows source authority, local/external difference, and approved resolution choices. No auto-pick on timestamp alone." },
];

export function DataQualityAuditSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Data quality &amp; audit
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Validation issues, immutable audit, and correction
              tracking
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Six issue categories surface governance problems. Audit
              events are immutable — corrections and supersessions are
              new traceable records, not edits.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-ink">Issue categories</p>
            <div className="mt-3 space-y-3">
              {ISSUES.map((issue, i) => (
                <Reveal key={issue.title} delay={0.06 + i * 0.05}>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex items-center gap-2">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${SEVERITY_STYLES[issue.severity]}`}>
                        {issue.severity}
                      </span>
                      <p className="font-semibold text-ink">{issue.title}</p>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{issue.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Audit timeline — synthetic data</p>
            <Reveal delay={0.14} y={30}>
              <PlaceholderImage
                src="/images/organization-management/audit-timeline.webp"
                alt="Team celebrating with a high-five"
                label="Audit timeline"
                fit="contain"
                className="mt-3 w-full rounded-2xl"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
