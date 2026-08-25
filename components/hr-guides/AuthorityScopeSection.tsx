import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CARDS = [
  {
    icon: "🚀",
    title: "Implementation",
    body: "Guides support readiness and concept understanding. For the full step-by-step implementation plan, access the Implementation Guide through your account team.",
    action: "Access Implementation Guide →",
    href: "/implementation-guide",
  },
  {
    icon: "🛡️",
    title: "Trust & Security",
    body: "Security, privacy, and compliance documentation is maintained in the Zoiko Trust Center. Guides are not a substitute for SOC 2, DPA, or security evidence.",
    action: "Visit Trust Center →",
    href: "/trust-center",
  },
];

export function AuthorityScopeSection() {
  return (
    <section className="bg-slate-50 py-18">
      <Container>
        <Reveal>
          <span className="font-heading text-xs font-bold uppercase tracking-wide text-primary">
            Implementation, Trust &amp; Professional Boundaries
          </span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold leading-10 text-slate-900">
            Authority and professional scope
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={0.08 + i * 0.06} className="h-full">
              <div className="h-full rounded-xl border border-black/10 bg-white p-6">
                <span aria-hidden className="block text-lg leading-6">
                  {card.icon}
                </span>
                <p className="mt-4 font-heading font-bold text-slate-900">
                  {card.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {card.body}
                </p>
                <a
                  href={card.href}
                  className="mt-5 inline-block text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  {card.action}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <PlaceholderImage
            src="/images/hr-guides/implementation-trust.png"
            alt="Colleagues in conversation by a window"
            label="Authority and professional scope"
            className="mt-6 aspect-[1232/300] w-full rounded-xl bg-white"
          />
        </Reveal>
      </Container>
    </section>
  );
}
