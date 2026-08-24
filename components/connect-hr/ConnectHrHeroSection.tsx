import Link from "next/link";
import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function ConnectHrHeroSection() {
  return (
    <section className="bg-slate-900 py-16 text-white sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3.5 py-1.5">
                <span className="size-1.5 rounded-full bg-sky-500" />
                <span className="text-[10px] font-semibold uppercase leading-4 tracking-widest text-sky-500">
                  Connect HR, Time &amp; Payroll
                </span>
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 max-w-[553px] font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Connect HR, time and payroll without hiding who owns each
                decision.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-[480px] leading-7 text-slate-300">
                Coordinate approved HR context, time context and payroll
                processes through explicit source ownership, effective dates,
                approvals, cutoffs, validation, exceptions, reconciliation and
                evidence.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/book-a-demo" className="!rounded-lg px-7 py-3">
                  Book a Demo
                </Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  className="!rounded-lg !border-sky-500/30 px-6 py-3 !text-sky-500 hover:!border-sky-400 hover:!text-sky-400"
                >
                  Request Pricing
                </Button>
                <Link
                  href="/resources/product-tour"
                  className="group inline-flex items-center gap-1.5 px-1 py-3 text-sm font-semibold text-slate-400 hover:text-white"
                >
                  Take the Product Tour
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-5 max-w-[553px] text-xs leading-4 text-slate-500">
                Authorized coordination across Zoiko HR, ZoikoTime and Zoiko
                Payroll. Capabilities, data flows, providers and availability
                depend on approved product scope, plan, contract, configuration
                and jurisdiction.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/connect-hr/hero.png"
              alt="An HR leader holding a tablet showing connected workforce reporting"
              label="Connected HR, time and payroll"
              className="aspect-[675/475] w-full rounded-2xl border border-white/10 bg-slate-950/80 shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
