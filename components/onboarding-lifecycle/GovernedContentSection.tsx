import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const CARDS = [
  {
    title: "Documents & Policies",
    description:
      "Versioned templates, distribution, and acknowledgment tracking attached to the event.",
  },
  {
    title: "Communications",
    description:
      "Employee and manager messages recorded alongside the event they relate to.",
  },
  {
    title: "Approvals & Exceptions",
    description:
      "Lifecycle-specific decisions and escalation, linked to the deeper Workflows & Approvals system.",
  },
];

export function GovernedContentSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Governed content, delivery and decisions attached to the
              event.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Documents, communications, approvals and exceptions stay
              linked to the event that created them — with a clear
              escalation path.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={0.1 + i * 0.08}>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/10">
                <p className="font-semibold text-ink">{card.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.36}>
          <Link
            href="/workflows-approvals"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            See Workflows & Approvals
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
