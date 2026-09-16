import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const STATUS_RULES = [
  'Use "reported," "under review," or "action taken under applicable terms" only where those statuses exist in an approved operational process.',
  "Internal risk scores, detection signals, investigator notes, or confidential evidence are never publicly exposed.",
  "A right to appeal is never implied unless the governing source establishes one; an approved review process is routed to clearly.",
];

export function EnforcementSection() {
  return (
    <section id="enforcement" className="scroll-mt-24 bg-[#102A43] py-14 sm:py-16">
      <Container>
        <SectionHeading tone="dark" title="How suspected violations are handled.">
          Zoiko may review suspected misuse and take actions permitted by the
          applicable agreement, policy, law, and operational/security
          requirements. Exact contractual rights and remedies are governed by
          the applicable Terms of Service or customer agreement.
        </SectionHeading>

        <Reveal>
          <div className="mt-8 rounded-xl border border-white/15 bg-[#0A1B2E] px-6 py-6">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-teal-400">
              Status language used only when an approved process establishes it
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {STATUS_RULES.map((rule) => (
                <li key={rule} className="flex gap-2 text-sm leading-6 text-slate-300">
                  <span aria-hidden className="flex-none">
                    —
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-5 text-slate-500">
              Account-specific restrictions or enforcement questions: use the
              authenticated Support / account route.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
