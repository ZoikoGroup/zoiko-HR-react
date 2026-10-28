import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function LocationsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0F172A_100%)] py-16 text-white sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,442px)] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase leading-4 tracking-[0.12em] text-indigo-400/70">
                Company Locations
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl xl:text-6xl">
                Find Zoiko HR company locations.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-[560px] text-base leading-7 text-slate-400">
                View the current published headquarters for Zoiko HR and use the
                right contact route before planning a visit or sending
                correspondence.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <a
                  href="#locations"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  View locations
                </a>
                <Link
                  href="/contact-zoiko-hr"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-colors hover:border-white/60"
                >
                  Contact Zoiko HR
                </Link>
              </div>
              <p className="mt-7 max-w-[520px] text-xs leading-5 text-slate-500">
                Only approved corporate locations are shown. Office locations do
                not define product availability, data residency, or customer
                support coverage.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/company-locations/hero.png"
              alt="Colleagues reviewing documents together around a meeting table"
              label="Colleagues meeting at a table"
              className="aspect-[4/3] w-full rounded-xl border border-white/10 bg-white/5 sm:aspect-video lg:aspect-[442/419]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
