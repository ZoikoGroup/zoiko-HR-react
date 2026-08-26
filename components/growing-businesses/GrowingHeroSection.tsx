import Link from "next/link";
import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function GrowingHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] pb-20 pt-16 text-white sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(55%_50%_at_55%_-5%,rgba(49,94,251,0.20),transparent)]"
      />

      <Container>
        <nav aria-label="Breadcrumb" className="text-xs text-white/40">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/solutions" className="hover:text-white/70">
                Solutions
              </Link>
            </li>
            <li aria-hidden>→</li>
            <li className="text-primary">Growing Businesses</li>
          </ol>
        </nav>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                Solutions → Growing Businesses
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Build more structured HR foundations as your organization
                grows.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 text-white/70">
                Explore reliable workforce information, repeatable people
                processes, clear permissions, reviewable exceptions and
                connected operations.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-2.5 border-l border-white/10 pl-2.5 text-xs leading-5 text-white/40">
                &quot;Growing Businesses&quot; is an operating-context
                pathway, not a published employee-count, revenue,
                geography or package threshold.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/book-a-demo">Book a Demo</Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  className="!border-white/10 !bg-white/10 !text-white hover:!border-primary hover:!text-primary"
                >
                  Request Pricing
                </Button>
                <a
                  href="/product-tour"
                  className="group inline-flex items-center gap-1.5 px-1 text-sm font-medium text-primary hover:text-white"
                >
                  Take the Product Tour
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/growing-businesses/hero.png"
              alt="Two people shaking hands across a desk in an office"
              label="Structured HR foundations"
              fit="contain"
              className="w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
