import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function OneHeroSection() {
  return (
    <section className="bg-[radial-gradient(at_50%_0%,#164e63_0%,#082f49_55%,#0f172a_100%)] py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,513px)_minmax(0,719px)] lg:gap-14">
          <div>
            <Reveal>
              <p className="text-xs font-medium uppercase leading-4 tracking-[0.1em] text-indigo-400">
                Zoiko One
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-3 text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl sm:leading-[54px]">
                Use Zoiko HR in a wider suite without giving up product-level
                control.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[460px] leading-6 text-white/60">
                Bring approved Zoiko HR relationships into a wider Zoiko suite
                context while preserving product-specific source authority,
                permissions, lifecycle, optionality and mixed-stack coexistence.
                Exact shared navigation, context, commercial packaging and
                cross-product capabilities remain source-governed.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col items-start gap-3">
                <Link
                  href="#authority-contract"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Explore suite relationship model
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="#dependencies"
                  className="inline-flex items-center rounded-sm border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  Review authority and optionality
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Link
                  href="/integration-security"
                  className="text-xs font-semibold leading-5 text-primary transition-colors hover:text-white"
                >
                  Integration Security →
                </Link>
                <Link
                  href="/integration-overview"
                  className="text-xs font-semibold leading-5 text-primary transition-colors hover:text-white"
                >
                  Integrations Overview →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <p className="mt-5 max-w-[400px] text-xs leading-4 text-white/30">
                Use Zoiko HR within the wider integrated suite. Zoiko One is not
                mandatory for Zoiko HR. No shared database, one login, universal
                admin, unified billing, seamless data or migration claim is made
                without current source authority.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <PlaceholderImage
              src="/images/zoiko-one/hero.webp"
              alt="Two colleagues reviewing a document beside a laptop"
              label="Zoiko One"
              className="aspect-[719/563] w-full rounded-xl border border-white/10 bg-slate-900 shadow-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
