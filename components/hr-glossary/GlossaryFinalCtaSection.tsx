import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function GlossaryFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(49,94,251,0.18)_0%,transparent_100%)] py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[620px] text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              See how the concepts connect inside a governed HR platform.
            </h2>
            <p className="mx-auto mt-6 max-w-[500px] text-base leading-7 text-slate-400">
              Explore Zoiko HR product capabilities, take the product tour, or
              speak with the team about your organization&apos;s requirements.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
              <Link
                href="/book-a-demo"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Book a Demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-slate-950 px-7 text-base font-semibold text-white transition-colors hover:border-white/50"
              >
                Request Pricing
              </Link>
              <Link
                href="/product-tour"
                className="inline-flex min-h-11 items-center justify-center text-sm font-semibold text-indigo-400 transition-colors hover:text-white"
              >
                Take the Product Tour →
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
