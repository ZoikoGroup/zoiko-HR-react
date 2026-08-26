import Link from "next/link";
import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function GroupHeroSection() {
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
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Zoiko Group
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Built as a group, designed to work with clarity.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-white/70">
                Zoiko Group provides the broader portfolio context for Zoiko
                HR. This page explains how Zoiko HR relates to the wider
                group and where to find verified company, leadership,
                partnership, careers, and news information.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Button href="#portfolio-map">Explore the portfolio →</Button>
                <Link
                  href="/about"
                  className="text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors duration-150 hover:text-primary hover:decoration-primary"
                >
                  About Zoiko HR →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <p className="mt-6 text-xs text-white/40">
                All group relationships and portfolio facts are
                source-governed and periodically reviewed.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/about-zoiko-group/hero.png"
              alt="Colleagues celebrating with a high-five in an office"
              label="Built as a group"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
