import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";
import Link from "next/link";

export function GlobalPeopleOperationsHero() {
  return (
    <section className="border-b border-blue-950 bg-slate-950 py-14 text-white sm:py-16">
      <Container>
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Column: Text Content & Action Links */}
          <div className="flex max-w-2xl flex-col items-start">
            <Reveal>
              <h2 className="font-heading text-3xl font-extrabold leading-tight md:text-4xl">
                Build a stronger foundation for global people operations.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-4 leading-6 text-slate-300">
                See how Zoiko HR can centralize workforce information,
                structure HR processes, improve employee and manager access,
                and connect your people operations.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                <Button
                  href="#demo"
                  className="rounded-full px-6 py-3 text-base font-bold"
                >
                  Book a Demo
                </Button>
                <Button
                  href="#pricing"
                  variant="outline"
                  className="rounded-full !border-cyan-900 px-6 py-3 !text-white hover:!bg-white/5"
                >
                  Request Pricing
                </Button>
                <Link
                  href="#product-tour"
                  className="flex items-center justify-center text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
                >
                  Take the Product Tour →
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Image */}
          <Reveal delay={0.12}>
            <PlaceholderImage
              src="/images/global-hr/people-operations-hero.png"
              alt="Zoiko HR global people operations platform dashboard"
              label="Global People Operations"
              className="aspect-[16/9] w-full max-w-xl rounded-xl bg-blue-950 ring-1 ring-inset ring-cyan-900"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
