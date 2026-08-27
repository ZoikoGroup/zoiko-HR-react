import Link from "next/link";
import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function PartnersHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0A1B2E_100%)] pb-16 pt-16 text-white sm:pb-20 sm:pt-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-primary bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                Partners
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Build with the right ecosystem around Zoiko HR.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Explore approved technology, services, and strategic
                relationships that help organizations connect, implement, and
                extend Zoiko HR. Partner status, capabilities, and availability
                are published only from approved records.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="#find-a-partner">Find a partner →</Button>
                <Button
                  href="#become-a-partner"
                  variant="outline"
                  className="border-white text-white hover:border-primary hover:text-primary"
                >
                  Become a partner →
                </Button>
                <Link
                  href="/book-a-demo"
                  className="px-2 py-2.5 text-sm text-white/60 underline underline-offset-4 transition-colors hover:text-white"
                >
                  Talk to sales →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <p className="mt-6 text-xs text-white/40">
                No organization is listed as certified, preferred, or endorsed
                without current source-governed evidence.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/partners/hero.png"
              alt="Two people shaking hands across a desk in an office"
              label="Zoiko HR partners"
              fit="contain"
              className="w-full rounded-2xl border border-white/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
