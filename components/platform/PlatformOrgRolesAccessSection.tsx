import { Container, Reveal, PlaceholderImage } from "@/components/ui";

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

export function PlatformOrgRolesAccessSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Organization, roles & access
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Effective access shaped by role, scope, and purpose.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                Organization context and authorization together determine
                what a person can see and do. Broad job title alone does
                not grant unrestricted access.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <span className="mt-6 block text-xs font-semibold uppercase tracking-wide text-ink/40">
                Permission dimensions
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {PERMISSION_DIMENSIONS.map((dimension) => (
                  <span
                    key={dimension}
                    className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-ink/70 transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                  >
                    {dimension}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/platform/roles-access.png"
              alt="Monitor displaying team member profile cards with a hand on a mouse"
              label="Effective access, shaped by scope"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
