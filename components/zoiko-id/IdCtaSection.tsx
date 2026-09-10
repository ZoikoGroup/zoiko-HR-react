import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function IdCtaSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,200px)]">
          <div>
            <Reveal>
              <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl sm:leading-10">
                Identity and access governance, explicitly separated — not a
                suite login mandate.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-4 max-w-[560px] text-sm leading-6 text-white/60">
                No provider, protocol, MFA, provisioning, session or assurance
                claim is made without current source authority. Proof and
                governance precede the commercial invitation. Customer
                documentation, support and trust routes remain direct.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 text-xs leading-5 text-white/30">
                Existing-customer Documentation, Support, Status and Trust routes
                remain direct and are not sales-gated.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-3">
              <Link
                href="/book-a-demo"
                className="rounded-lg bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Book a demo
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
