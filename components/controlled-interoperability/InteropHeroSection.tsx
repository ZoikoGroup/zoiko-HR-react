import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function InteropHeroSection() {
  return (
    <section className="bg-slate-900 bg-[radial-gradient(110%_90%_at_50%_0%,#164e63_0%,#082f49_55%,#0f172a_100%)] py-16 text-white sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,581px)_minmax(0,682px)]">
          <div className="flex flex-col gap-4">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-indigo-400">
                Controlled Interoperability
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:leading-[47.2px]">
                Connect what you need. Keep every information flow under
                control.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="max-w-[480px] leading-7 text-slate-300">
                Use Zoiko HR with approved Zoiko or external systems through
                explicit flow permissions, source authority, data boundaries and
                lifecycle controls — without making wider suite adoption a
                prerequisite.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex flex-col items-start gap-3.5 pt-1.5">
                <Link
                  href="#flow-contract"
                  className="rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Explore the Interoperability Model
                </Link>
                <Link
                  href="#source-authority"
                  className="rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Review Source Authority Map
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="max-w-[460px] text-xs leading-5 text-slate-400">
                Specific connectors, data fields, write-back behavior, timing and
                availability remain source-governed. Optionality does not mean
                universal compatibility.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/controlled-interoperability/hero.webp"
              alt="An internal control dashboard concept with connected icons"
              label="Controlled Interoperability"
              className="aspect-[682/503] w-full rounded-2xl border border-blue-950 bg-slate-900 shadow-[0px_30px_60px_0px_rgba(0,0,0,0.35)]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
