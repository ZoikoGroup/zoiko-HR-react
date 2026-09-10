import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function OneCtaSection() {
  return (
    <section className="bg-[#071428] py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,205px)]">
          <div>
            <Reveal>
              <h2 className="break-words text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl sm:leading-10">
                Optional suite context — with product-level authority preserved
                at every boundary.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-4 max-w-[560px] break-words text-sm leading-6 text-white/60">
                No shared database, one login, universal admin, unified billing,
                seamless data or mandatory adoption claim without current source
                authority. Architecture and optionality proof precede the
                commercial invitation.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 break-words text-xs leading-5 text-white/30">
                Existing-customer Documentation, Support, Status and Trust routes
                remain direct and are never sales-gated.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-3">
              <Link
                href="/book-a-demo"
                className="rounded-lg bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Book a suite evaluation
              </Link>
              <Link
                href="/contact-sales"
                className="rounded-lg border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact sales
              </Link>
              <Link
                href="/documentation"
                className="text-center text-xs font-medium text-white/40 transition-colors hover:text-white"
              >
                Support &amp; documentation →
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
