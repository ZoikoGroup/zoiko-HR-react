import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function PayrollCtaSection() {
  return (
    <section className="bg-slate-950 py-20">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Bring governed payroll preparation to your implementation review.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-5 leading-7 text-slate-400">
              See how source authority, readiness, cutoff handling,
              approval/release, intake and reconciliation work together — with no
              payroll authority claimed and no mandatory suite adoption implied.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/book-a-demo"
                className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Book a Demo
              </Link>
              <Link
                href="/contact-sales"
                className="rounded-full border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Talk to Payroll Integration
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              <Link
                href="#payroll-preparation"
                className="text-sm font-semibold text-primary transition-colors hover:text-white"
              >
                Review Source Authority &amp; Effective Context →
              </Link>
              <Link
                href="#intake-boundary"
                className="text-sm font-semibold text-primary transition-colors hover:text-white"
              >
                Read the Payroll Result Reference Boundary →
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
