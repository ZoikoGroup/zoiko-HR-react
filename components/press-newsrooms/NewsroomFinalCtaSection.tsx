import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function NewsroomFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 bg-[radial-gradient(50%_70%_at_50%_0%,rgba(49,94,251,0.2)_0%,transparent_100%)] py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Build a stronger foundation for global people operations.
            </h2>
            <p className="mx-auto mt-6 max-w-[440px] text-base leading-7 text-slate-400">
              Take the product tour, request current pricing, or book a
              conversation with a solutions consultant.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
              <Link
                href="/book-a-demo"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Book a Demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-colors hover:border-white/60"
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
