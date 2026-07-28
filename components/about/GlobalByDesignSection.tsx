import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CONFIG_ITEMS = [
  {
    title: "Global organization model",
    description:
      "Represent legal entities, business units, departments, teams, locations, roles, managers, positions, and reporting relationships.",
  },
  {
    title: "Jurisdiction-aware configuration",
    description:
      "Configure approved fields, policies, documents, calendars, workflows, access, and record requirements for different operating scopes.",
  },
  {
    title: "Regional and organizational access",
    description:
      "Limit information according to role, purpose, entity, geography, team, and authorized responsibility.",
  },
  {
    title: "Privacy and retention controls",
    description:
      "Support configured access, retention, deletion, export, and data-subject processes.",
  },
  {
    title: "Global reporting with local boundaries",
    description:
      "Consolidate authorized information without bypassing role, entity, jurisdiction, or privacy restrictions.",
  },
];

export function GlobalByDesignSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Global by design
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Global consistency. Local configuration. Human
              accountability.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Zoiko HR supports a common global operating model while
              allowing approved local configurations for fields, policies,
              documents, calendars, leave rules, workflows, permissions,
              retention requirements, and reporting. Responsible people
              remain accountable for employment and compliance decisions.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {CONFIG_ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} y={30}>
            <PlaceholderImage
              src="/images/about/global-by-design.png"
              alt="Team collaborating with reporting dashboards visible"
              label="Global operations"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <Link
            href="/platform/global-hr-management"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
          >
            Explore Global HR Management
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
