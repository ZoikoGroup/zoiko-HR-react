import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function ComplyHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(at_50%_0%,#164e63_0%,#082f49_55%,#0f172a_100%)] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,581px)_minmax(0,682px)] lg:gap-12">
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-indigo-400">
                Zoiko Ecosystem | Zoiko Comply
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[36px] lg:leading-[47px]">
                Connect policies, controls and evidence without turning workflow
                status into a compliance claim.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-4 max-w-[480px] leading-7 text-slate-300">
                Use approved Zoiko Comply relationships to coordinate policies,
                controls, evidence and compliance workflows while preserving
                scope, source authority, exact versions, permissions, evidence
                currentness, review state and professional boundaries. Exact
                frameworks, jurisdictions, automation and compliance conclusions
                remain source-controlled.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-7 flex flex-col items-start gap-3.5">
                <Link
                  href="#compliance-operating-model"
                  className="rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Explore Compliance Operating Model
                </Link>
                <Link
                  href="#evidence-review"
                  className="rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Review Evidence Controls
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <PlaceholderImage
              src="/images/zoiko-comply/hero-collaboration.webp"
              alt="A team reviewing documents and laptops around a table, seen from above"
              label="Zoiko Comply"
              className="aspect-square w-full rounded-2xl border border-blue-950 bg-slate-900 shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
