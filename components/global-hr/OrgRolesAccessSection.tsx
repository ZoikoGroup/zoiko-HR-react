import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ROLE_TYPES = [
  "Employee",
  "Manager",
  "HR Administrator",
  "HR Operations Specialist",
  "Reporting Viewer",
  "Integration Administrator",
  "Security / Privacy Reviewer",
  "Auditor",
  "Executive Viewer",
];

const PERMISSION_DIMENSIONS = [
  "View",
  "Create",
  "Propose",
  "Edit",
  "Approve",
  "Export",
  "Administer",
  "Delegate",
  "Revoke",
];

export function OrgRolesAccessSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Section 12 — Organization, roles & access
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Effective access is determined by more than a job title.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              User identity, role, organization scope, employment
              relationship, data sensitivity, purpose, workflow state,
              effective date, delegation, and policy all determine what a
              person can see and do.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="text-sm font-semibold text-ink">Role types</p>
            </Reveal>
            <div className="mt-3 space-y-2">
              {ROLE_TYPES.map((role, i) => (
                <Reveal key={role} delay={0.06 + i * 0.03}>
                  <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 text-sm font-medium text-ink shadow-sm shadow-slate-900/[0.03] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
                    <span className="h-2 w-2 flex-none rounded-full bg-primary" />
                    {role}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal delay={0.1}>
              <p className="text-sm font-semibold text-ink">
                Permission dimensions
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {PERMISSION_DIMENSIONS.map((dimension) => (
                  <span
                    key={dimension}
                    className="rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-ink/70 transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                  >
                    {dimension}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2} y={30}>
              <PlaceholderImage
                src="/images/global-hr/roles-access.png"
                alt="HR administrator discussing access permissions with a colleague"
                label="Role-appropriate access"
                fit="contain"
                className="mt-6 w-full rounded-2xl border border-primary/20 shadow-xl shadow-slate-900/10"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
