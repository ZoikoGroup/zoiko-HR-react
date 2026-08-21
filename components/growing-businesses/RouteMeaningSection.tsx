import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CARDS = [
  {
    icon: "📋",
    title: "Structure",
    description:
      "Records, organization, roles, ownership and effective dates.",
  },
  {
    icon: "🔄",
    title: "Repeatability",
    description:
      "Lifecycle events, workflows, approvals, service and exception handling.",
  },
];

export function RouteMeaningSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 xl:grid-cols-[1fr_413px]">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                What This Route Means
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mt-4 max-w-3xl text-base leading-8 text-ink/70">
                Zoiko HR for Growing Businesses is a solution pathway for
                organizations that want more structured HR foundations.{" "}
                <span className="font-bold text-ink">
                  Reliable workforce information, clearer organization and
                  role structures, repeatable lifecycle workflows,
                  permissioned employee and manager experiences,
                  reviewable reporting, and governed system connections.
                </span>{" "}
                It does not define a company-size eligibility threshold or
                guarantee compliance.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {CARDS.map((card, i) => (
                <Reveal key={card.title} delay={0.12 + i * 0.06}>
                  <div className="h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/[0.06]">
                    <span aria-hidden className="text-2xl leading-9">
                      {card.icon}
                    </span>
                    <p className="mt-3 font-heading text-base font-bold text-ink">
                      {card.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-ink/50">
                      {card.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/growing-businesses/route-means.png"
              alt="An HR representative greeting two colleagues"
              label="What this route means"
              fit="contain"
              className="w-full rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-900/[0.06]"
            />
          </Reveal>
        </div>

        <Reveal delay={0.26}>
          <p className="mt-8 text-xs leading-5 text-ink/40">
            Related:{" "}
            <Link
              href="/solutions"
              className="text-primary hover:text-primary-dark"
            >
              Solutions Overview →
            </Link>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
