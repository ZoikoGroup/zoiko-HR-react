import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function DocumentsHeroSection() {
  return (
    <section className="bg-slate-900 bg-[radial-gradient(110%_90%_at_50%_0%,#164e63_0%,#082f49_55%,#0f172a_100%)] py-16 text-white sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,581px)_minmax(0,583px)] lg:gap-6">
          <div className="flex flex-col gap-5">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-indigo-400">
                Documents &amp; Policies
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:leading-[47.2px]">
                Keep workforce documents current. Make distribution and
                acknowledgment traceable.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="max-w-[480px] font-bold leading-7 text-slate-300">
                Manage approved templates, document and policy versions, scope,
                distribution, acknowledgments and review history with clear
                ownership, access, language and effective-state controls.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href="/book-a-demo"
                  className="rounded-2xl bg-primary px-7 pb-4 pt-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Book a Demo
                </Link>
                <Link
                  href="#document-lifecycle"
                  className="rounded-2xl border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Explore Document Lifecycle
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <Link
                href="#product-proof"
                className="text-sm font-semibold text-indigo-400 transition-colors hover:text-white"
              >
                Explore Product Proof →
              </Link>
            </Reveal>

            <Reveal delay={0.34}>
              <p className="max-w-[460px] text-xs font-bold leading-5 text-slate-400">
                Software publication, delivery, viewing or acknowledgment does
                not by itself establish signature, consent, enforceability or
                legal compliance.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/documents-policies/hero.webp"
              alt="A document being stamped for approval on a desk"
              label="Documents & Policies"
              className="aspect-[583/502] w-full rounded-2xl border border-blue-950 bg-slate-900 shadow-[0px_30px_60px_0px_rgba(0,0,0,0.35)]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
