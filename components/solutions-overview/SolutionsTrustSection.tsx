import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CARDS = [
  {
    icon: "🔒",
    title: "Trust Center",
    description: "Assurance material and trust evidence.",
    href: "/trust-center",
  },
  {
    icon: "🛡️",
    title: "Security & Privacy",
    description: "Security and privacy explanation and controls.",
    href: "/security-privacy",
  },
  {
    icon: "⚙️",
    title: "AI Governance",
    description: "AI-related product behavior and boundaries.",
    href: "/ai-governance",
  },
  {
    icon: "♿",
    title: "Accessibility",
    description: "Accessibility statement and conformance evidence.",
    href: "/accessibility",
  },
];

export function SolutionsTrustSection() {
  return (
    <section className="border-t border-slate-200 py-16">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Trust, Security, Privacy and Responsibility
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Evaluation routes for due diligence.
          </h2>
        </Reveal>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {CARDS.map((card, i) => (
              <Reveal key={card.href} delay={i * 0.06}>
                <Link
                  href={card.href}
                  className="block h-full rounded-xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-lg hover:shadow-primary/10"
                >
                  <span aria-hidden className="text-xl leading-none">
                    {card.icon}
                  </span>
                  <p className="mt-4 font-semibold text-ink">{card.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/50">
                    {card.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/solutions-overview/trust.png"
              alt="Two people shaking hands after a due diligence meeting"
              label="Due diligence routes"
              fit="contain"
              className="w-full rounded-xl border border-slate-200 shadow-sm shadow-slate-900/[0.06]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
