import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const NOT_PROVIDED = [
  "Legal, tax, payroll, employment, compliance, accounting, or other professional advice.",
  "A guarantee of compliance with every law, regulation, policy, collective agreement, or contractual obligation.",
  "Automatic replacement of local professional advisers or accountable customer decision-makers.",
  "Autonomous high-impact employment decisions without meaningful human responsibility and approved governance.",
  "Employer-of-record, staffing, recruitment-agency, benefits-brokerage, or payroll-bureau services under the Zoiko HR product unless separately approved.",
  "Every capability, integration, language, hosting arrangement, or service model in every jurisdiction.",
  "Guaranteed financial, productivity, employee-experience, retention, compliance, or implementation outcomes without verified contractual commitments.",
];

export function ClearExpectationsSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Clear expectations
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Clear commitments. Clear boundaries.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Trust depends on explaining both what the platform is
              designed to do and what remains the responsibility of the
              customer and its accountable decision-makers.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-2xl border border-slate-100 shadow-xl shadow-slate-900/10 lg:grid-cols-2">
          <Reveal y={0} className="h-full">
            <PlaceholderImage
              src="/images/about/clear-expectations.png"
              alt="Colleagues collaborating at a laptop and tablet"
              label="Clear expectations"
              className="h-full min-h-[20rem] w-full"
            />
          </Reveal>

          <Reveal delay={0.08} y={0} className="h-full bg-ink p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              What Zoiko HR does not provide or guarantee
            </p>
            <ul className="mt-5 divide-y divide-white/10">
              {NOT_PROVIDED.map((item) => (
                <li
                  key={item}
                  className="py-3.5 text-sm leading-relaxed text-white/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-8">
            <p className="text-sm text-ink/70">
              <span className="font-semibold text-ink">
                Approved product and professional-advice boundary:
              </span>{" "}
              Zoiko HR provides software for workforce administration. It
              does not provide legal, tax, payroll, employment, compliance,
              or professional advice and does not guarantee compliance with
              any law. Customers remain responsible for their policies,
              employment decisions, configurations, and compliance
              obligations.
            </p>
            <Link
              href="/trust-center"
              className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Review Trust and Legal Information
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
