import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const OVERVIEWS = [
  {
    title: "Security & Privacy",
    scope:
      "Access controls, data protection, secure development and incident management.",
    notPublished:
      "Encryption algorithms, hosting regions, certification lists, pen-test cadence or incident timelines.",
    linkLabel: "Review Security & Privacy",
  },
  {
    title: "Accessibility",
    scope:
      "Commitment, current conformance information, known limitations and feedback route.",
    notPublished:
      "Claims of full or universal conformance, or fixed remediation dates.",
    linkLabel: "Review Accessibility",
  },
];

function OverviewCard({ overview }: { overview: (typeof OVERVIEWS)[number] }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6">
      <h3 className="font-bold text-ink">{overview.title}</h3>

      <p className="mt-3 text-xs font-bold uppercase tracking-wide text-slate-400">
        Approved topic scope
      </p>
      <p className="mt-1 text-sm leading-relaxed text-slate-600">
        {overview.scope}
      </p>

      <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-400">
        Not published here
      </p>
      <p className="mt-1 text-xs leading-relaxed text-slate-500">
        {overview.notPublished}
      </p>

      <Link
        href="#trust-navigator"
        className="mt-auto pt-5 text-sm font-semibold text-primary hover:text-primary-dark"
      >
        {overview.linkLabel} →
      </Link>
    </div>
  );
}

export function TrustOverviewsSection() {
  return (
    <section id="overviews" className="bg-[#102A43] py-16 text-white sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            Security, AI governance &amp; accessibility overviews.
          </h2>
          <p className="mt-4 leading-relaxed text-white/80">
            This hub orients you to each authority without duplicating its
            detailed content.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-3">
          <Reveal>
            <OverviewCard overview={OVERVIEWS[0]} />
          </Reveal>

          <Reveal delay={0.08}>
            <PlaceholderImage
              src="/images/trust-center/overviews.png"
              alt="A team discussing work around a boardroom table"
              label="Trust overviews"
              className="aspect-[16/10] w-full rounded-xl border border-slate-200 bg-white sm:aspect-[21/9] lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <Reveal delay={0.16}>
            <OverviewCard overview={OVERVIEWS[1]} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
