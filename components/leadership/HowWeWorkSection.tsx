import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PRINCIPLES = [
  {
    title: "Customer Clarity",
    accent: "border-primary",
    description:
      "All public communications prioritize accuracy. Material claims require source ownership and a current review date.",
  },
  {
    title: "Accountable Decisions",
    accent: "border-emerald-400",
    description:
      "Decision accountability is documented and assigned. Areas of ownership are public where approved.",
  },
  {
    title: "Respectful Data Use",
    accent: "border-violet-400",
    description:
      "Customer data is handled according to product-specific contracts and privacy boundaries. No cross-product data assumptions.",
  },
  {
    title: "Accessible Product Thinking",
    accent: "border-amber-500",
    description:
      "Accessibility is a design requirement, not an afterthought. WCAG 2.2 AA applies across Zoiko HR products and communications.",
  },
  {
    title: "Disciplined Execution",
    accent: "border-cyan-400",
    description:
      "Product and roadmap commitments are scoped, communicated, and governed. No unverified roadmap claims appear in public communications.",
  },
];

export function HowWeWorkSection() {
  return (
    <section className="bg-[#0A1B2E] py-16 text-white sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                How we work — documented principles.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-5 leading-relaxed text-white/60">
                The following principles reflect how the Zoiko HR leadership
                team approaches customer relationships, product decisions, and
                organizational accountability. These are commitments, not
                certification claims or cultural slogans.
              </p>
            </Reveal>

            <Reveal delay={0.16} y={36}>
              <PlaceholderImage
                src="/images/leadership/how-we-work.png"
                alt="A team member working at a laptop showing a global network map"
                label="How we work"
                fit="contain"
                className="mt-8 w-full rounded-xl border border-white/10"
              />
            </Reveal>
          </div>

          <div className="space-y-4">
            {PRINCIPLES.map((principle, i) => (
              <Reveal key={principle.title} delay={0.1 + i * 0.06}>
                <div
                  className={`rounded-xl border-l-4 bg-[#1E3450] p-5 transition-all duration-300 hover:-translate-y-0.5 ${principle.accent}`}
                >
                  <p className="text-sm font-bold">{principle.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
