import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const OUTCOMES = [
  {
    label: "Security vulnerability",
    description: "Confirmed potential security issue — accepted for security review.",
  },
  {
    label: "Privacy incident",
    description: "Personal/customer data involved — routed to Privacy team per data handling policy.",
  },
  {
    label: "Third-party / vendor issue",
    description: "Asset owned by external party — ownership routing without authorizing external testing.",
  },
  {
    label: "Insufficient evidence",
    description: "Cannot reproduce or assess — more information may be requested through protected channel.",
  },
];

export function TriageSection() {
  return (
    <section className="border-b border-white/5 bg-[#0A1B2E] py-16 text-white sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Section 10"
          title="Triage, severity and routing boundaries."
          tone="dark"
        >
          Security triage is internal and restricted. Severity, exploitability,
          affected customer counts, root cause, and remediation details are not
          published publicly without Security/Legal approval.
        </SectionHeading>

        {/* Figma: two near-equal columns (604 / 605) separated by a tight ~10px
            gutter, with the landscape image matching the card stack's height. */}
        {/* No items-start: the image stretches to the height of the card stack. */}
        <div className="mt-9 grid gap-6 lg:grid-cols-2 lg:gap-3">
          <div className="space-y-3">
            {OUTCOMES.map((outcome, i) => (
              <Reveal key={outcome.label} delay={Math.min(i * 0.08, 0.3)}>
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                  <span aria-hidden className="flex-none pt-0.5 text-sm text-slate-500">
                    →
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {outcome.label}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="h-full">
            <PlaceholderImage
              src="/images/security-reporting/triage.png"
              alt="A leadership team discussing triage decisions around a table"
              label="Discussing triage decisions"
              className="aspect-[604/316] w-full rounded-2xl lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
            <p className="text-xs leading-5 text-slate-400">
              Internal severity scoring, exploitability rationale, remediation
              details, and affected customer counts are restricted unless
              approved for disclosure. No CVSS or severity number is published
              by default. Reporter-facing state is neutral and non-sensitive —
              triage label does not create a response or remediation
              commitment.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
