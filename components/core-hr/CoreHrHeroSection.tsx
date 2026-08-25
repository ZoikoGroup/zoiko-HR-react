import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

const TRUST_ITEMS = ["WCAG 2.2 AA", "Effective-dated", "Role-sensitive", "Audit-ready"];

export function CoreHrHeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-20 text-white sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(60%_50%_at_20%_0%,rgba(49,94,251,0.35),transparent)]"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <span className="h-1 w-1 rounded-full bg-primary" />
                Core HR · Platform
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Build a dependable{" "}
                <span style={{ color: "#93A9FF" }}>foundation</span> for
                employee and organizational data.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-white/70">
                Structure workforce records, employment relationships,
                positions, teams, entities, locations, permissions,
                documents, and effective-dated changes in one governed Core
                HR foundation.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/book-a-demo">
                  Book a Demo
                  <span aria-hidden>→</span>
                </Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
                >
                  Request Pricing
                </Button>
                <a
                  href="/product-tour"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
                >
                  Take the Product Tour
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/50">
                {TRUST_ITEMS.map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 text-primary">
                      <path
                        d="M4 10l4 4 8-8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/core-hr/hero.png"
              alt="Colleagues greeting each other with a handshake in an office"
              label="A dependable people foundation"
              fit="contain"
              className="w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
