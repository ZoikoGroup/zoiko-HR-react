import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const AREAS = [
  {
    title: "Organization Setup",
    description: "Foundational configuration, defaults and ownership.",
    href: "#organization-setup",
  },
  {
    title: "People & Access",
    description: "User lifecycle, roles and delegated administration.",
    href: "#people-access",
  },
  {
    title: "Integrations",
    description: "Admin-level setup for connected systems.",
    href: "#integrations",
  },
  {
    title: "Operational Health",
    description: "Configuration and connection health surfaces.",
    href: "#audit-health",
  },
];

export function ResponsibilitiesSection() {
  return (
    <section id="responsibilities" className="py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Administrator responsibilities &amp; scope.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Source-approved responsibility areas only — a card never implies a
            module or capability that product authority hasn&apos;t established.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-2">
          <div className="grid gap-5 sm:grid-cols-2">
            {AREAS.map((area, i) => (
              <Reveal key={area.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-slate-100 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/5">
                  <h3 className="text-sm font-bold text-ink">{area.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {area.description}
                  </p>
                  <Link
                    href={area.href}
                    className="mt-auto pt-4 text-xs font-semibold text-primary hover:text-primary-dark"
                  >
                    Open guide →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.14}>
            <PlaceholderImage
              src="/images/administrator-guide/responsibilities.png"
              alt="Two administrators reviewing equipment in a server room"
              label="Administrator responsibilities"
              className="aspect-[16/9] w-full rounded-xl border border-slate-200 bg-slate-100 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
