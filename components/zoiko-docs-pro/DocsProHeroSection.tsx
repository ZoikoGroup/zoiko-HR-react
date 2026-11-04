import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function DocsProHeroSection() {
  return (
    <section className="bg-slate-900 bg-[radial-gradient(110%_90%_at_50%_0%,#164e63_0%,#082f49_55%,#0f172a_100%)] py-16 text-white sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,476px)_minmax(0,756px)]">
          <div>
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-indigo-400">
                Zoiko Docs Pro
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[54px]">
                Connect workforce documents without losing version, permission
                or ownership.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-[460px] leading-6 text-white/60">
                Use approved Zoiko Docs Pro relationships for workforce
                documentation, storage and templates while preserving source
                authority, exact versions, permissions, lifecycle and Zoiko HR
                document governance. Specific storage, file, sync, retention and
                security capabilities remain source-controlled.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col items-start gap-3">
                <Link
                  href="#connection-model"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Explore the connection model
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="#document-controls"
                  className="rounded-sm border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  Review document controls
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/zoiko-docs-pro/hero.webp"
              alt="Colleagues reviewing a document together at a laptop"
              label="Zoiko Docs Pro"
              className="aspect-[756/563] w-full rounded-xl border border-white/10 bg-slate-900 shadow-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
