import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-emerald-400">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-violet-400">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18-2.5-2.6-2.5-15.4 0-18z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function AdvisoryChannelStrategicSection() {
  return (
    <section className="bg-[#040D18] py-16 text-white sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Advisory, channel &amp; strategic partners.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#1E3450] p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10">
                <CompassIcon />
              </span>
              <p className="mt-4 font-heading text-lg font-bold">
                Advisory &amp; Consulting
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Organizations providing strategic or operational expertise
                informing Zoiko HR use.
              </p>
              <p className="mt-3 text-xs italic leading-relaxed text-white/40">
                Does not imply co-delivery of Zoiko HR services, program
                exclusivity, or client referral rights.
              </p>
              <Link
                href="#find-a-partner"
                className="mt-4 pt-1 text-sm font-semibold text-primary hover:text-white"
              >
                Explore →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <PlaceholderImage
              src="/images/partners/advisory-channel-strategic.png"
              alt="Two people shaking hands across an office desk"
              label="Advisory, channel and strategic partners"
              className="h-full min-h-64 w-full rounded-2xl border border-white/10"
            />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#1E3450] p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-400/10">
                <GlobeIcon />
              </span>
              <p className="mt-4 font-heading text-lg font-bold">
                Strategic Alliance
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Organizations with a formally documented broader collaboration.
              </p>
              <p className="mt-3 text-xs italic leading-relaxed text-white/40">
                Does not imply joint product development, co-ownership,
                co-marketing exclusivity, or shared customer data unless an
                approved agreement explicitly states otherwise.
              </p>
              <Link
                href="#find-a-partner"
                className="mt-4 pt-1 text-sm font-semibold text-primary hover:text-white"
              >
                Explore →
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-white/40">
            Commission models, resale rights, exclusivity, territory rights,
            internal tiering, and legal terms are not publicly published on this
            page. Route program inquiries through the appropriate contact path.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
