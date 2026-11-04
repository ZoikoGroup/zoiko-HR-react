import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function DocumentsCtaSection() {
  return (
    <section className="bg-[#0b1b2d] bg-[radial-gradient(80%_120%_at_80%_50%,#12305a_0%,#0b1b2d_60%)] py-20 text-white">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Bring version control and accountability to workforce documents.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-5 font-semibold leading-7 text-slate-400">
              See how Zoiko HR manages templates, versions, distribution and
              acknowledgment — with access, review and audit built in.
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
                href="/pricing"
                className="rounded-full border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Request Pricing
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/help-center"
                className="text-sm font-semibold text-primary transition-colors hover:text-white"
              >
                Visit Help Center →
              </Link>
              <Link
                href="/self-service"
                className="text-sm font-semibold text-primary transition-colors hover:text-white"
              >
                Explore Self-Service →
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
