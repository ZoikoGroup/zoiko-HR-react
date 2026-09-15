import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function DpaHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_70%_-10%,#22406B_0%,#102A43_55%,#0A1B2E_100%)] py-16 text-white sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-indigo-400">
                Data Processing Addendum
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Review the current Zoiko HR Data Processing Addendum and related
                processing terms.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-4 max-w-lg leading-7 text-slate-400">
                Access the current approved DPA package, version lineage and
                related annex or evidence routes. Public standard terms or
                controlled request path — where supported by an approved
                record.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="#dpa-package"
                  className="rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Review current DPA
                </Link>
                <Link
                  href="#legal-review"
                  className="rounded-xl border border-white px-6 py-3 text-base font-semibold text-white transition-colors hover:border-primary hover:text-primary"
                >
                  Request legal review
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-4 max-w-xl text-xs leading-4 text-slate-500">
                No controller/processor role, data category, transfer
                mechanism, notice deadline or retention period is asserted
                without an approved source record.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/data-processing-addendum/hero.png"
              alt="Someone reviewing a printed processing agreement at a laptop"
              label="Reviewing a processing agreement"
              className="w-full rounded-[20px] border border-white/10 bg-slate-900"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
