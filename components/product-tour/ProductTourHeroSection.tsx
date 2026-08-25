import Link from "next/link";
import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function ProductTourHeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('/images/product-tour/hero-background.png')] bg-cover bg-center"
      />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                Product Tour
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 max-w-[613px] font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Explore how Zoiko HR works — at your own pace.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-[613px] leading-7 text-slate-300">
                Take a self-guided tour of representative Zoiko HR workflows for
                workforce information, employee records, global organization
                context, lifecycle events, approvals, role-based experiences,
                reporting, integrations and governance — no account or form
                required.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-2.5 max-w-[602px] border-l border-white/10 pl-2.5">
                <p className="text-xs leading-5 text-slate-400">
                  Designed for HR leaders, administrators, managers, IT/security,
                  payroll stakeholders and implementation teams evaluating Zoiko
                  HR.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <p className="mt-2 max-w-[613px] text-xs leading-4 text-slate-500">
                Capabilities, market availability, integrations, plan scope and
                jurisdiction coverage can vary by plan, contract, configuration
                and market.
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="#tour-chapters" className="px-7 py-3">
                  Start the Product Tour
                </Button>
                <Button
                  href="#tour-paths"
                  variant="outline"
                  className="!border-white/10 !bg-white/10 px-7 py-3 !text-white hover:!border-white/30 hover:!text-white"
                >
                  Choose a Path
                </Button>
                <Link
                  href="#tour-chapters"
                  className="group inline-flex items-center gap-1.5 px-1 py-3 text-base font-medium text-indigo-400 hover:text-white"
                >
                  Take the Product Tour
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={30}>
            <PlaceholderImage
              src="/images/product-tour/hero-desk.png"
              alt="Colleagues working on laptops around a shared table"
              label="Product tour"
              className="aspect-[612/495] w-full rounded-2xl border border-white/10 bg-slate-900 shadow-[0_32px_64px_rgba(0,0,0,0.45)]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
