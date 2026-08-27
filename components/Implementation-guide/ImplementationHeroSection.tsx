import Link from "next/link";
import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function ImplementationHeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column: Content */}
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                Implementation Guide
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 font-heading text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:leading-[36px]">
                Plan Zoiko HR implementation<br className="hidden sm:block" />
                with clear scope, evidence and<br className="hidden sm:block" />
                decision rights.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-[576px] leading-7 text-slate-400">
                A structured approach to HR system implementation covering
                scope, configuration, data, integrations, validation and launch
                — with explicit decision authority at every gate.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="#implementation-model" className="px-7 py-3">
                  Explore the implementation model
                </Button>
                <Button
                  href="#demo"
                  variant="outline"
                  className="!border-white/10 !bg-white/10 px-7 py-3 !text-white hover:!border-white/30 hover:!text-white"
                >
                  Book a Demo
                </Button>
                <Button
                  href="#pricing"
                  variant="outline"
                  className="!border-white/10 !bg-white/10 px-7 py-3 !text-white hover:!border-white/30 hover:!text-white"
                >
                  Request Pricing
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-4">
                <Link
                  href="#product-tour"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  Take the Product Tour
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <p className="mt-6 text-xs leading-4 text-slate-500">
                No fixed implementation timeline, readiness score, service
                scope or outcome is implied.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Image */}
          <Reveal delay={0.18} y={30}>
            <PlaceholderImage
              src="/images/implementation-guide/Heroo.png"
              alt="Implementation preview"
              label="Implementation Guide"
              className="aspect-[716/477] w-full rounded-2xl border border-white/10 bg-slate-900 shadow-[0_32px_64px_rgba(0,0,0,0.45)]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
