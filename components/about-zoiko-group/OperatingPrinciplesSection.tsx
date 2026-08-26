import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const DISCLAIMER = "A commitment; not a certification or compliance guarantee.";

const LEFT_PRINCIPLES = [
  {
    title: "Customer Clarity",
    dot: "bg-primary",
    description:
      "All group communications prioritize accuracy and verifiability over promotional appeal. Material claims require source, owner, and review date.",
  },
  {
    title: "Accessibility",
    dot: "bg-cyan-500",
    description:
      "Accessibility requirements apply across group products and communications. WCAG 2.2 AA is the baseline standard.",
  },
];

const RIGHT_PRINCIPLES = [
  {
    title: "Security-by-Design",
    dot: "bg-rose-500",
    description:
      "Security requirements are defined per product and service. This principle governs design and development standards, not certification status.",
  },
  {
    title: "Accountable Change Management",
    dot: "bg-amber-500",
    description:
      "Material changes to portfolio, facts, and public claims follow a governed workflow with source validation before publication.",
  },
];

function PrincipleCard({ title, dot, description }: { title: string; dot: string; description: string }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
      <p className="mt-3 font-semibold text-ink">{title}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{description}</p>
      <p className="mt-2 text-xs italic text-ink/40">{DISCLAIMER}</p>
    </div>
  );
}

export function OperatingPrinciplesSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Shared operating principles.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:items-center">
          <div className="flex flex-col gap-4">
            {LEFT_PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={0.08 + i * 0.08}>
                <PrincipleCard {...p} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} y={30}>
            <PlaceholderImage
              src="/images/about-zoiko-group/operating-principles.png"
              alt="Team meeting in a room with framed values on the wall"
              label="Experience, integrity, partnership"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>

          <div className="flex flex-col gap-4">
            {RIGHT_PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={0.12 + i * 0.08}>
                <PrincipleCard {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
