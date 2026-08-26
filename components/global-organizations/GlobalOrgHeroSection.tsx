import Link from "next/link";
import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function GlobalOrgHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_100%_at_60%_-10%,#1B3B76_0%,#102A43_55%,#0A1220_100%)] py-16 text-white sm:py-24">
      <Container>
        <Reveal>
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/solutions" className="hover:text-white">
              Solutions
            </Link>
            <span aria-hidden>→</span>
            <span className="text-indigo-400">Global Organizations</span>
          </nav>
        </Reveal>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                Solutions → Global Organizations
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 max-w-[620px] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Coordinate global HR with shared structure and local control.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-[620px] leading-7 text-slate-300">
                Give global, regional, and local teams a clearer way to work
                from consistent HR structures while keeping approved local
                configuration, ownership, effective dates, exceptions, and
                evidence visible.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-5 max-w-[610px] border-l border-white/10 pl-3 text-xs leading-5 text-slate-400">
                Designed for organizations coordinating people operations
                across regions, entities, locations, and distributed teams.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <p className="mt-3 max-w-[620px] text-xs leading-5 text-slate-500">
                Capabilities, market availability, localization, hosting,
                payroll connections, integrations, support, and jurisdiction
                coverage can vary by plan, contract, configuration, and
                market.
              </p>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/book-a-demo" className="px-7 py-3.5">
                  Book a Demo
                </Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  className="!border-white/30 !bg-white/10 px-7 py-3.5 !text-white hover:!border-primary hover:!text-primary"
                >
                  Request Pricing
                </Button>
                <Link
                  href="/product-tour"
                  className="group inline-flex items-center gap-1.5 px-1 py-3 text-sm font-semibold text-indigo-400 hover:text-white"
                >
                  Take the Product Tour
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/global-organizations/hero.png"
              alt="A person moving a card across a kanban board of doing, verify and done columns"
              label="Shared structure with local control"
              className="h-[384px] w-full rounded-2xl border border-white/10 bg-sky-950 shadow-2xl shadow-black/45"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
