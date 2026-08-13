import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CARDS = [
  {
    title: "ZoikoTime",
    description: "Approved leave and attendance data flows to and from time tracking.",
  },
  {
    title: "Zoiko Payroll",
    description: "Employee data feeds payroll; calculation stays in Zoiko Payroll.",
  },
];

export function SystemHandoffsSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Approved system handoffs, not silent failures.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                Identity, time, payroll and document systems acknowledge or
                flag every lifecycle-related handoff within a defined
                boundary.
              </p>
            </Reveal>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {CARDS.map((card, i) => (
                <Reveal key={card.title} delay={0.14 + i * 0.08}>
                  <div className="h-full rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p className="font-semibold text-ink">{card.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                      {card.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <Link
                href="/integrations"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Explore Integrations
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/onboarding-lifecycle/system-handoffs.png"
              alt="Two colleagues reviewing a laptop together"
              label="Approved, acknowledged handoffs"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
