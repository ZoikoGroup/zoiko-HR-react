import Link from "next/link";
import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function MultiEntityHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_100%_at_50%_0%,#164e63_0%,#082f49_55%,#0f172a_100%)] py-20 text-white sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Solutions / Multi-Entity Enterprises
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 max-w-[580px] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Govern HR administration across distinct entities without
                blurring their boundaries.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-[500px] leading-7 text-slate-300">
                Coordinate entity and unit structures, ownership, configuration,
                access, shared services, workflows, reporting and connected
                systems through one governed administration model — while
                keeping each boundary explicit and reviewable.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-6 flex flex-wrap items-center gap-3.5">
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
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <Link
                href="/product-tour"
                className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-white"
              >
                Take the Product Tour
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/multi-entity-enterprises/hero.png"
              alt="Two colleagues reviewing paperwork on a clipboard together"
              label="Governed multi-entity administration"
              className="h-[479px] w-full rounded-2xl border border-blue-950 bg-slate-900 shadow-2xl shadow-black/35"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
