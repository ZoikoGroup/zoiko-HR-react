import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CARDS = [
  {
    title: "HR and People Systems",
    description: "Worker profile, organization, role, manager and employment-status synchronization.",
  },
  {
    title: "Calendars and Communication",
    description: "Schedule context, approved communications and Zoiko Sema integration where operational.",
  },
];

export function IntegrationsSystemFitSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              Integrations and system fit
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Fits the Systems You Already Run.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Categories shown below; named integrations publish only once
              production-ready, documented, supported, and approved for
              public use.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid items-center gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            {CARDS.map((card, i) => (
              <Reveal key={card.title} delay={0.14 + i * 0.08}>
                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="font-semibold text-ink">{card.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.22} y={30}>
            <PlaceholderImage
              src="/images/hr-people-teams/integrations-system-fit.png"
              alt="Team meeting around a table with a laptop"
              label="Fits what you already run"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>
        </div>

        <Reveal delay={0.36}>
          <Link
            href="/book-a-demo"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
          >
            Request Enterprise Demo
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
