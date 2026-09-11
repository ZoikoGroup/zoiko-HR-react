import { Container, Reveal } from "@/components/ui";

const ROUTES = [
  { title: "Leadership", description: "There is an approved executive and governance leadership destination.", linkLabel: "Explore Leadership", href: "/leadership" },
  { title: "Newsroom", description: "Company announcements and press contacts have a verified destination.", linkLabel: "Visit Newsroom", href: "/newsroom" },
  { title: "Partners", description: "Technology, implementation, and reseller routes are clearly separated from sales.", linkLabel: "Explore Partners", href: "/partners" },
  { title: "Contact", description: "General, media, partnership, and privacy inquiries have a dedicated path.", linkLabel: "Go to Contact", href: "/contact-zoiko-hr" },
];

export function TrustGovernanceRoutesSection() {
  return (
    <section className="bg-[#F1F5F9] py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Trust &amp; governance
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Company trust and governance routes.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Verifiable routes replace generic statements — useful for
              procurement, media, existing customers, and enterprise
              evaluators.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ROUTES.map((route, i) => (
            <Reveal key={route.title} delay={0.06 + i * 0.06}>
              <div className="h-full rounded-2xl bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-light text-primary">
                  −
                </span>
                <p className="mt-4 font-semibold text-ink">{route.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{route.description}</p>
                <a
                  href={route.href}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  {route.linkLabel} →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
