import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const STATES = [
  {
    label: "Submitted",
    description: "Report received through protected intake. Not a response-time commitment.",
  },
  {
    label: "Validation needed",
    description:
      "Additional information required before triage can proceed. Contact through protected channel.",
  },
  {
    label: "Routed",
    description:
      "Case routed to appropriate internal team. No sensitive routing detail in reporter-facing state.",
  },
  {
    label: "Duplicate / related",
    description:
      "Issue matches an existing case. Receipt confirmed. No case merge details shared.",
  },
  {
    label: "Triage",
    description:
      "Under security review. Internal triage details are restricted and not shared publicly.",
  },
  {
    label: "Accepted for review",
    description:
      "Accepted as a potential security issue. Not a severity promise or remediation commitment.",
  },
  {
    label: "Non-security / rerouted",
    description:
      "Issue does not meet security vulnerability threshold. Rerouted to appropriate channel.",
  },
  {
    label: "Remediation in progress",
    restricted: true,
    description:
      "Only surfaced publicly when approved as safe by Security. Not a timeline commitment.",
  },
  {
    label: "Resolved / closed",
    description: "Case closed. Closure reason provided in safe/neutral category only.",
  },
  {
    label: "Coordinated disclosure review",
    description:
      "Security/Legal reviewing publication or disclosure coordination. No default deadline.",
  },
  {
    label: "Service unavailable",
    description:
      "Intake system temporarily unavailable. Alternate secure route shown. Report is not lost.",
  },
];

export function CaseStatesSection() {
  return (
    <section className="border-b border-white/5 bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Section 09"
          title="Submission receipt and case states."
        >
          Non-sensitive acknowledgment and status only. No SLA, response-time,
          or remediation commitment. Reporter-specific case status is only
          available through the protected channel.
        </SectionHeading>

        {/* No items-start: the image stretches to the height of the state list. */}
        <div className="mt-9 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_400px]">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {STATES.map((state, i) => (
              <Reveal key={state.label} delay={Math.min(i * 0.03, 0.3)}>
                <div
                  className={`flex items-start gap-3 border-b border-slate-100 px-6 py-4 last:border-b-0 ${
                    state.restricted ? "bg-amber-50/60" : ""
                  }`}
                >
                  <span
                    aria-hidden
                    className={`mt-1.5 size-1.5 flex-none rounded-full ${
                      state.restricted ? "bg-amber-400" : "bg-emerald-400"
                    }`}
                  />
                  <div>
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-ink">
                        {state.label}
                      </span>
                      {state.restricted && (
                        <span className="rounded-full border border-amber-400/25 bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold text-amber-500">
                          Restricted
                        </span>
                      )}
                    </span>
                    <p className="mt-0.5 text-xs leading-5 text-slate-500">
                      {state.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} className="h-full">
            <PlaceholderImage
              src="/images/security-reporting/case-states.png"
              alt="A security team reviewing case status around a table"
              label="Reviewing case status together"
              className="aspect-[504/802] w-full rounded-2xl lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 flex max-w-4xl items-start gap-2.5 rounded-xl border border-slate-200 bg-white px-5 py-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/security-reporting/info.png"
              alt=""
              aria-hidden
              className="mt-0.5 size-4 flex-none"
            />
            <p className="text-xs leading-5 text-slate-500">
              Case references are protected and non-indexed. No case ID enters
              general analytics. Reporter-specific communication is only
              through the approved protected channel, not general support.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
