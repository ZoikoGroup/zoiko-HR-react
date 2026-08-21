import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const POINTS = [
  "Reliable workforce information",
  "Organization and role structure",
  "Repeatable onboarding workflows",
  "Permissions and role-based access",
  "Operational reporting",
];

export function GrowingBusinessesSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Growing Businesses
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink">
                Build more structured HR foundations as your organization
                grows.
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 leading-relaxed text-ink/70">
                Structured HR foundations for scaling organizations.
                Explore consistent records, organization and role
                structures, repeatable onboarding and change workflows,
                permissions, and reporting — subject to approved
                configuration and scope.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-7 flex flex-col gap-2.5">
                {POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                    <span className="text-sm font-medium text-ink/70">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.24}>
              <Link
                href="/solutions/growing-businesses"
                className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Explore Growing Businesses
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/solutions-overview/growing-businesses.png"
              alt="A leader presenting growth metrics to a small team"
              label="Structured HR foundations"
              fit="contain"
              className="w-full rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/[0.07]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
