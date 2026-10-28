import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function InteropCtaSection() {
  return (
    <section className="bg-[#0b1b2d] bg-[radial-gradient(80%_120%_at_80%_50%,#12305a_0%,#0b1b2d_60%)] py-20 text-white">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Bring permission-controlled interoperability to your architecture
              review.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-5 leading-7 text-slate-400">
              See how optionality, source authority, data boundaries, lifecycle
              and offboarding work together — with no suite adoption assumed and
              no hidden dependency.
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
                Talk to Integration Architecture
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              <Link
                href="#source-authority"
                className="text-sm font-semibold text-primary transition-colors hover:text-white"
              >
                Review the Source Authority Map →
              </Link>
              <Link
                href="#flow-contract"
                className="text-sm font-semibold text-primary transition-colors hover:text-white"
              >
                Read the Optionality Contract →
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
