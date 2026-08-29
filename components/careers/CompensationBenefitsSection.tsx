import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function CompensationBenefitsSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Compensation, Benefits &amp; Support
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-2 text-ink/60">
              Details appear on role pages where eligibility and
              disclosure requirements permit.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-6 max-w-3xl rounded-xl border-l-4 border-amber-400 bg-amber-50 px-5 py-3.5 text-center text-sm text-amber-900">
            Eligibility-aware rendering: compensation and benefit
            details are shown only where role-level disclosure
            conditions are satisfied. Generic benefit claims are omitted
            from this page.
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:items-center">
          <Reveal delay={0.16}>
            <div className="h-full rounded-2xl bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="text-2xl" aria-hidden>💰</span>
              <p className="mt-3 font-semibold text-ink">Compensation</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Compensation ranges are role- and jurisdiction-specific.
                Where applicable law or approved disclosure policy
                requires range publication, ranges appear on the
                individual role page. Generic salary claims are not
                published on this page.
              </p>
              <span className="mt-3 inline-flex items-center rounded-full bg-primary-light px-2.5 py-1 text-xs font-semibold text-primary">
                Source-governed — see role detail
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.22} y={30}>
            <PlaceholderImage
              src="/images/careers/compensation-benefits.png"
              alt="Presenter reviewing benefits information with colleagues"
              label="Compensation, benefits, and support"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>

          <Reveal delay={0.28}>
            <div className="h-full rounded-2xl bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="text-2xl" aria-hidden>🎗️</span>
              <p className="mt-3 font-semibold text-ink">Support</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Employee support programmes are published only from
                approved Benefit Claim records that carry a source
                owner, applicable population definition, and effective
                date.
              </p>
              <span className="mt-3 inline-flex items-center rounded-full bg-primary-light px-2.5 py-1 text-xs font-semibold text-primary">
                Source-governed — see role detail
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.36}>
          <div className="mt-6 rounded-xl bg-primary-light px-5 py-4 text-center text-sm text-primary">
            Compensation and benefit details appear on role pages where
            eligibility and disclosure requirements permit. Generic
            claims are omitted.
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
