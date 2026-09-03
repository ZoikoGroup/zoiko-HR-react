import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function PartnerHeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 bg-[radial-gradient(110%_90%_at_50%_0%,#164e63_0%,#082f49_55%,#0f172a_100%)] py-16 text-white sm:py-20 lg:py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_30%,rgba(49,94,251,0.1)_0%,rgba(49,94,251,0)_65%)]"
      />
      <Container className="relative">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,716px)_minmax(0,384px)] lg:gap-20">
          <div>
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-indigo-400">
                Partner with Zoiko HR
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[48px] lg:leading-[58.32px]">
                Explore a partnership
                <br />
                <span className="text-primary">with Zoiko HR.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-[520px] leading-7 text-slate-400">
                If your organization wants to integrate with, implement, advise,
                extend, or collaborate with the Zoiko HR ecosystem, choose the
                relationship area that best fits and send a short partnership
                inquiry. Available paths depend on current program and regional
                eligibility.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-3 max-w-[717px] text-xs leading-5 text-slate-500">
                An inquiry is not acceptance, certification, endorsement,
                exclusivity, territory authorization, referral/reseller right,
                or contract.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="#partner-inquiry"
                  className="rounded-[10px] bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Start partner inquiry
                </Link>
                <Link
                  href="/partners"
                  className="rounded-[10px] border border-blue-950 px-5 py-3 text-sm text-indigo-400 transition-colors hover:border-indigo-400"
                >
                  Explore current Zoiko HR partners →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="mt-5 flex flex-wrap items-center gap-5 text-xs leading-5 text-slate-500">
                <span>
                  Buying Zoiko HR?{" "}
                  <Link href="/contact-sales" className="hover:text-indigo-400">
                    Contact Sales
                  </Link>
                </span>
                <span aria-hidden className="text-base leading-6 text-blue-950">
                  ·
                </span>
                <span>
                  Already a partner?{" "}
                  <Link href="/partners" className="hover:text-indigo-400">
                    Partner resources
                  </Link>
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/partner-with-us/hero.png"
              alt="Two colleagues collaborating at a computer in an open office"
              label="Exploring a partnership"
              className="aspect-[384/491] w-full rounded-2xl bg-white lg:ml-auto lg:max-w-[384px]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
