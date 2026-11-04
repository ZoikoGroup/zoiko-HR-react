import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function SalesHeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 bg-[radial-gradient(110%_90%_at_50%_0%,#164e63_0%,#082f49_55%,#0f172a_100%)] py-16 text-white sm:py-20 lg:py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_60%,rgba(49,94,251,0.05)_0%,rgba(49,94,251,0)_70%)]"
      />
      <Container className="relative">
        <div className="mx-auto max-w-[760px] text-center">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-indigo-400">
              Contact Sales
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[60.9px]">
              Talk to Zoiko HR
              <br />
              <span className="text-primary">sales.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 leading-7 text-slate-400">
              Use Contact Sales to discuss Zoiko HR product fit, global or
              multi-entity needs, implementation, integrations, security or
              procurement evaluation, and commercial questions.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-2.5 text-sm leading-5 text-slate-500">
              Existing customers needing help should use the approved
              customer-support path. Choose what you want to discuss, then share
              the minimum information needed to route your inquiry.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="#sales-inquiry"
                className="rounded-[10px] bg-primary px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Start a sales conversation
              </Link>
              <Link
                href="/contact-support"
                className="rounded-[10px] border border-blue-950 px-5 py-3 text-sm text-indigo-400 transition-colors hover:border-indigo-400"
              >
                Already a customer? Get help →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.34}>
            <p className="mt-6 text-xs leading-4 text-slate-500">
              Response timing, demo availability, and commercial terms are shown
              only when approved source policy supports them.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
