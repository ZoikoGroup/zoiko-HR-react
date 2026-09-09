import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function ComplyCtaSection() {
  return (
    <section className="bg-[radial-gradient(at_50%_0%,#0f2b4a_0%,#0b1a2e_60%,#0a1626_100%)] py-20">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Bring governed compliance operations to your implementation review.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-5 leading-7 text-slate-400">
              See how policy-to-control mapping, evidence review, exceptions,
              workflow handoff and audit history work together — with no
              compliance guarantee claimed and no mandatory suite adoption
              implied.
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
                Talk to Compliance Integration
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              <Link
                href="#evidence-decision-boundary"
                className="text-sm font-semibold text-primary transition-colors hover:text-white"
              >
                Read the Evidence Review &amp; Decision Boundary →
              </Link>
              <Link
                href="#claim-boundary"
                className="text-sm font-semibold text-primary transition-colors hover:text-white"
              >
                Review the Compliance Claim Boundary →
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
