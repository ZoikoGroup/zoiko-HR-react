import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ScopedEvaluationSection() {
  return (
    <section className="bg-[#F1F5F9] py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Published packages
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Current pricing is provided through a scoped commercial
              evaluation.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Share business-level requirements to receive current
              approved package, scope, implementation, support, and
              commercial information. Do not submit employee records,
              credentials, or sensitive HR data.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid items-center gap-6 lg:grid-cols-2">
          <Reveal delay={0.14}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light">
                <ClockIcon />
              </span>
              <p className="mt-4 font-semibold text-ink">
                Package information requires a scoped evaluation
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Current package names, entitlements, prices, and
                availability are governed commercial content. They are
                provided after a qualified evaluation is completed, not
                before. This prevents invented plan names, false
                entitlements, and unsupported price representations from
                reaching publication.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button href="/book-a-demo">Book a Demo</Button>
                <Button href="#request-pricing" variant="outline">
                  Request Pricing
                </Button>
                <a
                  href="/resources/product-tour"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  Take the Product Tour
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              <p className="mt-5 text-xs text-ink/40">
                Approved package names, prices, entitlements, and
                availability will appear only when validated by
                commercial, product, legal, and privacy authority. No
                placeholder plan names, blurred prices, or fictional
                ranges are shown.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/pricing/scoped-evaluation.png"
              alt="Person working at a desk in a small business setting"
              label="Scoped, not guessed"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
