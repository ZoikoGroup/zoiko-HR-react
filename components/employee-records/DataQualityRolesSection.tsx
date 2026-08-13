import { Container, Reveal } from "@/components/ui";

const DQ_STATS = [
  { value: "5", label: "Missing required data" },
  { value: "3", label: "Documents expiring" },
  { value: "12", label: "Access reviews due" },
];

const PERMISSIONS = ["View", "Request", "Propose", "Edit", "Approve", "Export", "Administer", "Restrict", "Delete"];

export function DataQualityRolesSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Data quality & reconciliation
              </span>
              <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
                Exact issues, ownership, and a resolution path.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {DQ_STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-ink">{stat.value}</p>
                    <p className="mt-1 text-xs text-ink/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-6 text-sm text-ink/50">
                Every issue names a record owner, source, and due date —
                never left unresolved without accountability.
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.04}>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Roles, permissions & effective access
              </span>
              <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
                Visibility and action are separate permissions.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 text-ink/60">
                A user may view a record without being permitted to
                change, approve, export, or administer it.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-5 flex flex-wrap gap-2">
                {PERMISSIONS.map((permission) => (
                  <span
                    key={permission}
                    className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-ink/70 transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                  >
                    {permission}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
