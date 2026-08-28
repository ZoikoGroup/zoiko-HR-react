import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const ROUTES = [
  {
    title: "Service Status",
    description: "Current and historical service availability.",
    linkLabel: "View Service Status",
    href: "/help-center#service-status",
  },
  {
    title: "Product Updates",
    description: "Release notes, deprecations and customer actions.",
    linkLabel: "View Product Updates",
    href: "/resources",
  },
  {
    title: "Documentation",
    description: "Current product behavior and administration.",
    linkLabel: "Open Documentation",
    href: "/resources",
  },
  {
    title: "Contact Support",
    description: "Customer assistance and escalation route.",
    linkLabel: "Contact Support",
    href: "/help-center#contact-support",
  },
];

export function OperationalTrustSection() {
  return (
    <section className="bg-slate-100 py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Operational trust &amp; customer assurance.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Assurance evidence is distinct from live operational truth.
            Status/updates/docs/support routes are never gated.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ROUTES.map((route, i) => (
            <Reveal key={route.title} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/5">
                <h3 className="text-sm font-bold text-ink">{route.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {route.description}
                </p>
                <Link
                  href={route.href}
                  className="mt-auto pt-4 text-xs font-semibold text-primary hover:text-primary-dark"
                >
                  {route.linkLabel} →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
