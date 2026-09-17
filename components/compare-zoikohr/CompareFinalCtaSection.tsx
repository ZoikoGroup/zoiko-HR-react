import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const OUTLINE =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-slate-950 px-8 text-base font-semibold text-white transition-colors hover:border-white/50";

export function CompareFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(49,94,251,0.18)_0%,transparent_100%)] py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[680px] text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Validate the requirements that matter to your organization.
            </h2>
            <p className="mx-auto mt-6 max-w-[540px] text-base leading-7 text-slate-400">
              Evaluate Zoiko HR against your requirements. Take the Product Tour,
              request current pricing, or book a conversation with a solutions
              consultant — without changing how comparison evidence is scored or
              displayed.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
              <Link
                href="/book-a-demo"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Book a Demo
              </Link>
              <Link href="/pricing" className={OUTLINE}>
                Request Pricing
              </Link>
              <Link href="/product-tour" className={OUTLINE}>
                Take the Product Tour
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
              <Link href="/trust-center" className="text-sm font-semibold text-indigo-400 transition-colors hover:text-white">
                Visit Trust Center →
              </Link>
              <Link
                href="/Implementation-guide"
                className="text-sm font-semibold text-indigo-400 transition-colors hover:text-white"
              >
                View Implementation Guide →
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
