import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ROLES = [
  {
    title: "HR teams",
    description: "Cleaner record ownership, structured workflows, fewer ad hoc handoffs, stronger operational visibility.",
    linkLabel: "Explore HR Teams",
    href: "/hr-teams",
  },
  {
    title: "Business leaders",
    description: "More consistent workforce information and authorized visibility into organizational activity.",
    linkLabel: "Explore Business Leaders",
    href: "/business-leaders",
  },
  {
    title: "Managers",
    description: "Clearer assigned actions, approvals and team responsibilities.",
    linkLabel: "Explore Managers",
    href: "/managers",
  },
];

export function RoleExperienceSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              A better experience for every role after modernization.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Governed records and workflows change daily work for HR
              teams, leaders, managers and employees alike.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1.1fr] lg:items-stretch">
          {ROLES.map((role, i) => (
            <Reveal key={role.title} delay={0.06 + i * 0.06} className="flex">
              <div className="flex w-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="font-semibold text-ink">{role.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{role.description}</p>
                <a
                  href={role.href}
                  className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  {role.linkLabel}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.3} y={30} className="flex">
            <PlaceholderImage
              src="/images/replace-spreadsheets/role-experience.png"
              alt="A team collaborating around a laptop at a meeting table"
              label="A better experience for every role"
              className="h-full min-h-[220px] w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
