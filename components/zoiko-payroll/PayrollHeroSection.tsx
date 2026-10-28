import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function PayrollHeroSection() {
  return (
    <section className="bg-slate-900 bg-[radial-gradient(110%_90%_at_50%_0%,#164e63_0%,#082f49_55%,#0f172a_100%)] py-16 text-white sm:py-20">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,581px)_minmax(0,682px)]">
          <div className="flex flex-col gap-4">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-indigo-400">
                Zoiko Ecosystem | Zoiko Payroll
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:leading-[47.2px]">
                Prepare payroll context without hiding who owns the payroll
                decision.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="max-w-[480px] leading-7 text-slate-300">
                Coordinate approved employee and payroll-preparation information
                between Zoiko HR and Zoiko Payroll through explicit source
                ownership, effective dates, validation, approvals,
                pay-period/cutoff context, acknowledgments and reconciliation.
                Payroll calculation, statutory treatment, payment, filing and
                final payroll outcomes remain with the approved payroll process
                and reviewers.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex flex-wrap items-center gap-3.5 pt-1.5">
                <Link
                  href="#payroll-preparation"
                  className="rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Explore Payroll Preparation
                </Link>
                <Link
                  href="#intake-boundary"
                  className="rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Review Payroll Intake Boundary
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="max-w-[460px] text-xs leading-5 text-slate-400">
                No payroll field set, pay element, calculation, statutory
                treatment, filing, payment, provider, jurisdiction, cutoff or SLA
                is invented on this page.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/zoiko-payroll/hero.webp"
              alt="A specialist reviewing payroll paperwork at a desk"
              label="Zoiko Payroll"
              className="aspect-[682/518] w-full rounded-2xl border border-blue-950 bg-slate-900 shadow-[0px_30px_60px_0px_rgba(0,0,0,0.35)]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
