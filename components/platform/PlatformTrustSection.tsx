import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const CARDS = [
  {
    title: "Security & Privacy",
    description:
      "Access controls, data protection, secure development, and incident management.",
  },
  {
    title: "AI Governance",
    description:
      "Human review, permission controls, transparency, and logging for governed AI assistance.",
  },
  {
    title: "Accessibility",
    description: "Conformance target, known limitations, and a feedback route.",
  },
  {
    title: "Data Processing",
    description:
      "Approved DPA route, current subprocessors, and change notification.",
  },
];

export function PlatformTrustSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Security, privacy & trust
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Assurance information, without unverified guarantees.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:bg-white/[0.08]">
                <p className="font-semibold">{card.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.36}>
          <p className="mt-8 max-w-2xl text-xs text-white/40">
            Zoiko HR does not provide legal, tax, payroll, employment,
            compliance, or other professional advice and does not
            guarantee compliance.
          </p>
        </Reveal>

        <Reveal delay={0.42}>
          <Link
            href="/trust-center"
            className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
          >
            Visit the Trust Center
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
