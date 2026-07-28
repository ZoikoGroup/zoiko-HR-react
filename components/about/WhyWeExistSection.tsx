import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PROBLEMS = [
  {
    title: "Fragmented workforce information",
    description:
      "Employee, employment, document, policy, and organizational information is scattered across uncontrolled sources.",
  },
  {
    title: "Manual and inconsistent processes",
    description:
      "Routine work depends on email, spreadsheets, memory, and informal approvals.",
  },
  {
    title: "Global and local complexity",
    description:
      "Common operating standards are difficult to maintain while respecting local requirements.",
  },
  {
    title: "Limited employee and manager access",
    description:
      "HR teams become the bottleneck for information and actions that should be role-appropriate and self-service.",
  },
  {
    title: "Disconnected systems",
    description:
      "HR, time, payroll, documents, identity, compliance, and reporting operate without controlled information flows.",
  },
  {
    title: "Weak evidence and accountability",
    description:
      "Organizations struggle to show who changed, approved, received, acknowledged, or completed a material HR action.",
  },
];

export function WhyWeExistSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Why we exist
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                HR systems should reduce complexity — not reproduce it.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-ink/60">
                Organizations rarely become fragmented by design.
                Fragmentation appears as teams grow, entities multiply,
                local practices diverge, and workforce information spreads
                across spreadsheets, inboxes, documents, point solutions,
                and manual approvals.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-4 text-ink/60">
                Zoiko HR was established to give organizations one governed
                operating foundation for people administration: structured
                enough for HR teams, accessible enough for employees and
                managers, and adaptable for global operations.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <Link
                href="/platform"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Explore the Platform
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>

            <Reveal delay={0.16} y={30}>
              <PlaceholderImage
                src="/images/about/why-we-exist-team.png"
                alt="Colleagues celebrating together"
                label="Zoiko HR team"
                className="mt-8 w-full rounded-2xl "
              />
            </Reveal>
          </div>

          <div className="divide-y divide-slate-100 border-t border-slate-100">
            {PROBLEMS.map((problem, i) => (
              <Reveal key={problem.title} delay={i * 0.06}>
                <div className="group flex gap-5 py-5 transition-colors duration-200 hover:bg-slate-50/60">
                  <span className="font-serif text-2xl italic text-primary/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{problem.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
