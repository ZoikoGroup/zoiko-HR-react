import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const DESTINATIONS = [
  { number: "01", title: "Platform Overview", description: "Category, operating model, capabilities, trust, implementation, and evaluation pathways.", href: "/platform" },
  { number: "02", title: "Core HR", description: "Structured employee, position, organization, document, and lifecycle records.", href: "/core-hr" },
  { number: "03", title: "Global HR Management", description: "Multi-entity, multi-location, and jurisdictional workforce administration.", href: "/global-hr-management" },
  { number: "04", title: "Employee Records", description: "Structured employee and employment information, history, and documents.", href: "/employee-records" },
  { number: "05", title: "Onboarding & Lifecycle", description: "Onboarding, changes, transitions, and separation administration.", href: "/onboarding-lifecycle" },
  { number: "06", title: "Workflows & Approvals", description: "Roles, permissions, approvals, effective dates, ownership, and auditability.", href: "/workflows-approvals" },
  { number: "07", title: "Integrations", description: "Approved connectors, identity, payroll, and developer documentation.", href: "/integrations" },
];

export function ProductScopeSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Product scope
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              One governed platform. Seven approved destinations.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              The existence of a public product page does not confirm
              commercial inclusion or availability in a package.
              Entitlement states — Included, Limited, Optional,
              Sales-assisted, Contract-dependent, Unavailable — are only
              defined through approved commercial content.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DESTINATIONS.map((dest, i) => (
            <Reveal key={dest.title} delay={0.06 + i * 0.05}>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="text-xs font-semibold text-primary">
                  {dest.number}
                </span>
                <p className="mt-1.5 font-semibold text-ink">{dest.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {dest.description}
                </p>
                <Link
                  href={dest.href}
                  className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  Explore
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.06 + DESTINATIONS.length * 0.05} y={30}>
            <PlaceholderImage
              src="/images/pricing/product-scope.png"
              alt="Person reviewing information on a phone near shipping boxes"
              label="Seven destinations"
              fit="contain"
              className="h-full min-h-[180px] w-full rounded-2xl shadow-sm shadow-slate-900/[0.03]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
