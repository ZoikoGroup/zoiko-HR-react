import { Container, Reveal } from "@/components/ui";

const CARDS = [
  { number: "01", title: "Role-based access", description: "Authorized access based on role and responsibility, not as an absolute data-security guarantee." },
  { number: "02", title: "Scope", description: "Entity, location, team or functional scope demonstrated where the product supports these boundaries." },
  { number: "03", title: "Least practical access", description: "Admin flows default toward the minimum scope needed for the job; elevated access is explicit and deliberate." },
  { number: "04", title: "Sensitive data", description: "Progressive disclosure and permission checks prevent sensitive fields from appearing in summary cards, notifications or search snippets." },
  { number: "05", title: "Auditability", description: "Where supported, who changed configuration or records and when. Not described as tamper-proof unless technically verified." },
  { number: "06", title: "Cross-border data", description: "Specific data-residency or international transfer arrangements are not stated here. See Privacy and DPA materials for authoritative detail." },
];

export function DataGovernanceSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Permissions &amp; data governance
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Give global teams visibility without making everything
              globally visible.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {CARDS.map((card, i) => (
            <Reveal key={card.number} delay={0.04 + i * 0.05}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                <span className="inline-flex rounded-md bg-primary/15 px-2 py-0.5 text-xs font-semibold text-primary">
                  {card.number}
                </span>
                <p className="mt-3 font-semibold">{card.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
