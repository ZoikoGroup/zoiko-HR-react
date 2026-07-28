import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const AUDIENCES = [
  {
    title: "Growing businesses",
    description:
      "Create a structured HR foundation before spreadsheets, inboxes, and local files become operational liabilities.",
  },
  {
    title: "Mid-market organizations",
    description:
      "Standardize workforce records and processes as headcount, teams, managers, policies, and systems become more complex.",
  },
  {
    title: "Global organizations",
    description:
      "Maintain common global structures while configuring approved local fields, policies, calendars, documents, permissions, and workflows.",
  },
  {
    title: "Multi-entity enterprises",
    description:
      "Administer distinct legal entities, business units, teams, access boundaries, and reporting requirements within one governed environment.",
  },
];

export function WhoWeServeSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Who we serve
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Built for organizations that need HR to scale with the
              business.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Zoiko HR is designed for growing businesses, mid-market
              organizations, global organizations, and multi-entity
              enterprises — with role-appropriate experiences for HR teams,
              leaders, managers, employees, and authorized technical users.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 divide-y divide-slate-100 border-t border-slate-100">
          {AUDIENCES.map((audience, i) => (
            <Reveal key={audience.title} delay={i * 0.08}>
              <div className="group grid gap-2 py-6 transition-colors duration-200 hover:bg-slate-50/60 sm:grid-cols-2 sm:items-center sm:gap-8">
                <p className="text-lg font-semibold text-ink">
                  {audience.title}
                </p>
                <p className="text-sm text-ink/60">{audience.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} y={30}>
          <PlaceholderImage
            src="/images/about/who-we-serve.png"
            alt="Colleagues talking together in a meeting"
            label="Teams we serve"
            className="mt-10 w-full rounded-2xl"
          />
        </Reveal>
      </Container>
    </section>
  );
}
