import Link from "next/link";
import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function ManagersHeroSection() {
  return (
    <section className="bg-slate-900 py-20 text-white sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                Solutions → Managers
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 max-w-[564px] font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Give managers the right team actions — with the right authority
                and context.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-4 max-w-[480px] leading-7 text-slate-400">
                Complete assigned approvals, team lifecycle tasks, information
                requests and permitted administrative actions with clear
                deadlines, decision context, escalation paths and evidence.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-2.5 max-w-[480px] rounded-lg border border-primary/20 bg-primary/10 px-3.5 py-2">
                <p className="text-xs leading-4 text-slate-400">
                  Manager status or reporting line alone does not grant
                  unrestricted access to employee records, sensitive fields, HR
                  notes, documents, exports, audit history or administration.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button href="/book-a-demo" className="px-7 py-3">
                  Book a Demo
                </Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  className="!border-primary/30 !bg-primary/10 px-6 py-3 !text-indigo-400 hover:!border-primary hover:!text-primary"
                >
                  Request Pricing
                </Button>
                <Link
                  href="/product-tour"
                  className="group inline-flex items-center gap-1.5 px-1 py-3 text-sm font-semibold text-slate-400 hover:text-white"
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
              src="/images/managers/hero.png"
              alt="A manager presenting performance charts to a seated team"
              label="Manager team actions"
              className="h-96 w-full rounded-2xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/50"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
