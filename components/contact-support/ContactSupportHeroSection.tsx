import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function ContactSupportHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0A1B2E_100%)] py-16 text-white sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-primary px-3.5 py-1 text-xs font-bold uppercase tracking-[0.1em] text-indigo-400">
                Contact Support
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Get to the right help without sharing more than necessary.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-xl leading-relaxed text-slate-400">
                Choose the type of help you need. Zoiko HR routes you to
                self-service guidance, Service Status, a specialist reporting
                path, or a support request only where that route is approved.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-5 flex max-w-xl items-start gap-2.5 rounded-xl border border-rose-400/20 bg-rose-400/10 px-4 py-3">
                <span aria-hidden className="flex-none text-base leading-6 text-rose-400">
                  ⚠
                </span>
                <p className="text-xs leading-5 text-rose-400">
                  Never send passwords, verification codes, secret keys,
                  payment-card data, or unnecessary employee information through
                  support.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="#support-paths"
                  className="rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Choose a support path ↓
                </Link>
                <Link
                  href="/service-status"
                  className="rounded-xl border border-white px-6 py-3 text-base font-semibold text-white transition-colors hover:border-primary hover:text-primary"
                >
                  Check Service Status →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="mt-5 flex flex-wrap items-center gap-5 text-xs font-semibold">
                <Link href="/help-center" className="text-indigo-400 hover:text-white">
                  Search Help Center →
                </Link>
                <Link href="/trust-center" className="text-slate-500 hover:text-white">
                  Report a security issue →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-6 max-w-xl text-xs leading-4 text-slate-500">
                Support intake is designed to collect the minimum information
                needed for the selected issue. Channel availability and response
                commitments are shown only from approved support sources.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/contact-support/hero.png"
              alt="A customer reading support guidance on their phone"
              label="Reading support guidance on a phone"
              className="w-full rounded-3xl bg-white"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
