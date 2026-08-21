import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ORGANIZATION_PATHWAYS = [
  { label: "Growing Businesses", href: "/solutions/growing-businesses" },
  { label: "Mid-Market Organizations", href: "/solutions/mid-market" },
  { label: "Global Organizations", href: "/solutions/global-organizations" },
  {
    label: "Multi-Entity Enterprises",
    href: "/solutions/multi-entity-enterprises",
  },
];

const ROLE_PATHWAYS = [
  { label: "HR Teams", href: "/solutions/hr-teams" },
  { label: "Managers", href: "/solutions/managers" },
];

function PathwayCard({
  eyebrow,
  eyebrowClass,
  links,
}: {
  eyebrow: string;
  eyebrowClass: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/[0.04]">
      <p
        className={`text-xs font-semibold uppercase tracking-wider ${eyebrowClass}`}
      >
        {eyebrow}
      </p>
      <ul className="mt-3.5">
        {links.map((link) => (
          <li key={link.href} className="border-b border-slate-200">
            <Link
              href={link.href}
              className="group flex items-center gap-1.5 py-1.5 text-sm font-medium text-ink/70 transition-colors duration-150 hover:text-primary"
            >
              {link.label}
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SolutionsCoverageSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 xl:grid-cols-[1fr_400px]">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                What Zoiko HR Solutions Cover
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mt-4 max-w-3xl leading-relaxed text-ink/70">
                Zoiko HR Solutions organizes evaluation around seven
                approved pathways:{" "}
                <span className="font-bold text-ink">
                  Growing Businesses, Mid-Market Organizations, Global
                  Organizations, Multi-Entity Enterprises, HR Teams,
                  Managers,
                </span>{" "}
                and{" "}
                <span className="font-bold text-ink">
                  Connect HR, Time &amp; Payroll.
                </span>{" "}
                These pathways help visitors start from operating context
                or responsibility while evaluating the same Zoiko HR
                platform.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <Reveal delay={0.12}>
                <PathwayCard
                  eyebrow="Organization Pathways"
                  eyebrowClass="text-primary"
                  links={ORGANIZATION_PATHWAYS}
                />
              </Reveal>
              <Reveal delay={0.18}>
                <PathwayCard
                  eyebrow="Role Pathways"
                  eyebrowClass="text-violet-600"
                  links={ROLE_PATHWAYS}
                />
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/solutions-overview/coverage.png"
              alt="Overhead view of a team collaborating across laptops and documents"
              label="Seven approved pathways"
              fit="contain"
              className="w-full rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-900/[0.06]"
            />
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <p className="mt-8 text-xs leading-relaxed text-ink/40">
            Pathways are not mutually exclusive. An organization may
            reasonably explore more than one route.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
