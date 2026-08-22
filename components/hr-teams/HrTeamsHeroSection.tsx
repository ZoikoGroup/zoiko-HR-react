import Link from "next/link";
import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function HrTeamsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 to-sky-950 py-20 text-white sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Solutions → HR Teams
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 max-w-[564px] font-heading text-4xl font-extrabold leading-tight tracking-tight">
                Give HR teams one governed place to manage the work behind
                people operations.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-[420px] leading-7 text-slate-300">
                Coordinate permitted employee records, HR workflows, reporting,
                policy and document operations, employee services, exceptions
                and evidence — built around roles, scope and accountability.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/book-a-demo" className="px-6 py-3">
                  Book a Demo
                </Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  className="!border-white/10 !bg-white/5 px-6 py-3 !text-slate-300 hover:!border-primary hover:!text-primary"
                >
                  Request Pricing
                </Button>
                <Link
                  href="/resources/product-tour"
                  className="group inline-flex items-center gap-1.5 py-3 text-sm font-semibold text-primary hover:text-white"
                >
                  Take the Product Tour
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-5 max-w-[420px] text-xs leading-5 text-slate-500">
                Role- and scope-aware administration with visible ownership,
                approvals, effective dates, exceptions and evidence.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/hr-teams/hero.png"
              alt="An HR team joining hands over a table of reports"
              label="One governed place for HR work"
              className="h-96 w-full rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/45"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
