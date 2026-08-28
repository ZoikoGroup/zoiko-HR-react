import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const DESTINATIONS = [
  {
    title: "Help Center",
    description: "Support discovery and issue-oriented routing.",
    linkLabel: "Open Help Center",
    href: "/help-center",
  },
  {
    title: "Administrator Guide",
    description: "Organization/admin governance and policy depth.",
    linkLabel: "Open Administrator Guide",
    href: "/administrator-guide",
  },
  {
    title: "Developer Documentation",
    description: "APIs, authentication, webhooks and SDK reference.",
    linkLabel: "Open Developer Documentation",
    href: "/integrations",
  },
  {
    title: "Product Updates",
    description: "Release chronology and change communication.",
    linkLabel: "Open Product Updates",
    href: "/resources",
  },
  {
    title: "Service Status",
    description: "Live availability and incident status.",
    linkLabel: "View Service Status",
    href: "/help-center#service-status",
  },
  {
    title: "Contact Support",
    description: "Human intake and escalation.",
    linkLabel: "Contact Support",
    href: "/help-center#contact-support",
  },
  {
    title: "Legal & Trust",
    description: "Trust Center, security, privacy and accessibility.",
    linkLabel: "Visit Legal & Trust",
    href: "/trust-center",
  },
];

export function SupportHandoffsSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Support authority handoffs.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Each destination is a distinct authority. Documentation routes to it
            rather than duplicating its content.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DESTINATIONS.map((destination, i) => (
            <Reveal key={destination.title} delay={Math.min(i * 0.05, 0.3)}>
              <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/5">
                <h3 className="text-sm font-bold text-ink">
                  {destination.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {destination.description}
                </p>
                <Link
                  href={destination.href}
                  className="mt-auto pt-4 text-xs font-semibold text-primary hover:text-primary-dark"
                >
                  {destination.linkLabel} →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
