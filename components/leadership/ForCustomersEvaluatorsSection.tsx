import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const AUDIENCES: {
  title: string;
  accent: string;
  linkClass: string;
  description: string;
  linkLabel: string;
  href: string | null;
}[] = [
  {
    title: "Existing Customer",
    accent: "bg-emerald-400",
    linkClass: "text-emerald-600 hover:text-emerald-700",
    description:
      "Leadership accountability and current company context support ongoing confidence in Zoiko HR. Leadership visibility does not imply privileged access or cross-product entitlement.",
    linkLabel: "About Zoiko HR →",
    href: "/about",
  },
  {
    title: "Enterprise Evaluator",
    accent: "bg-primary",
    linkClass: "text-primary hover:text-primary-dark",
    description:
      "Published leadership roles, governance approach, and accountability context support procurement and due diligence review. Product-specific trust evidence is available through the owning Trust & Security destination.",
    linkLabel: "Zoiko HR Trust →",
    href: null,
  },
  {
    title: "Partner / Ecosystem",
    accent: "bg-violet-400",
    linkClass: "text-violet-600 hover:text-violet-700",
    description:
      "Partnership programs, partner types, and engagement pathways are managed through the Partners destination. This page provides leadership context only.",
    linkLabel: "Partners →",
    href: "/partners",
  },
];

export function ForCustomersEvaluatorsSection() {
  return (
    <section className="bg-[#F5F8FF] py-16 sm:py-24">
      <Container>
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            For customers, evaluators, and partners.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {AUDIENCES.map((audience, i) => (
            <Reveal key={audience.title} delay={0.08 + i * 0.06}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 sm:p-8 hover:-translate-y-1 hover:shadow-md">
                <span
                  aria-hidden
                  className={`absolute inset-x-0 top-0 h-[3px] ${audience.accent}`}
                />
                <p className="text-lg font-bold text-ink">{audience.title}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/60">
                  {audience.description}
                </p>
                {audience.href ? (
                  <Link
                    href={audience.href}
                    className={`mt-4 text-sm font-semibold ${audience.linkClass}`}
                  >
                    {audience.linkLabel}
                  </Link>
                ) : (
                  // Route not published yet — rendered exactly as the design
                  // shows it, without an href.
                  <span
                    className={`mt-4 text-sm font-semibold ${audience.linkClass}`}
                  >
                    {audience.linkLabel}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-ink/40">
            Sales actions appear only when a globally approved enterprise route
            is active. Leadership is a trust surface first.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
