import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * The design ships only the first answer expanded; the rest were written from
 * the boundaries the sections above establish, and route every contractual or
 * account-specific question back to its owning authority rather than
 * answering it here.
 */
const FAQS: { question: string; answer: string }[] = [
  {
    question: "What is the Zoiko HR Acceptable Use Policy?",
    answer:
      "A public policy describing prohibited and restricted uses of covered Zoiko HR services and responsible-use expectations. Contractual remedies remain in applicable Terms/customer agreements.",
  },
  {
    question: "What uses of Zoiko HR are prohibited?",
    answer:
      "Unlawful, harmful, and unauthorized use — including accessing data or systems without authorization, misusing credentials, bypassing security controls or configured approvals, disrupting availability, misusing employee or confidential data, and making unreviewed high-impact employment decisions. The sections above set out each boundary; they are not an exhaustive list of permitted conduct.",
  },
  {
    question: "Can Zoiko HR AI make employment decisions automatically?",
    answer:
      "No. You must not configure or use Zoiko HR, including AI assistance or automation, to produce autonomous high-impact employment outcomes without meaningful human responsibility and any required approved governance. A reviewer who merely confirms a machine output without the ability or context to assess it is treated as insufficient where approved policy requires meaningful review.",
  },
  {
    question: "Can I penetration-test or scan Zoiko HR?",
    answer:
      "Not without explicit approved authorization. Scanning, load testing, social engineering, credential use beyond your own authorized account, and destructive testing are authorized only through Security Reporting, which controls testing scope. The absence of an explicit rule here is never permission to test.",
  },
  {
    question: "Can I export employee data?",
    answer:
      "Only within your authorized role, purpose, and scope. Exporting or extracting data outside an approved business purpose, or to bypass access or retention controls, is prohibited. Privacy rights, lawful bases, retention, and transfers are governed by the Privacy Notice and DPA rather than by this policy.",
  },
  {
    question: "What rules apply to integrations and APIs?",
    answer:
      "The same boundaries as the product itself: authorized access only, no automation that circumvents documented limits or required approvals, no sharing of credentials, tokens, or signing secrets, and no unnecessary logging of sensitive data. Contractual and API restrictions are governed by the applicable Terms and Developer Documentation.",
  },
  {
    question: "What happens if this policy is violated?",
    answer:
      "Zoiko may review suspected misuse and take actions permitted by the applicable agreement, policy, law, and operational/security requirements. Exact contractual rights and remedies, including suspension and termination mechanics, are governed by the applicable Terms of Service or customer agreement. Account-specific restrictions or enforcement questions use the authenticated Support / account route.",
  },
  {
    question: "How do I report a security issue?",
    answer:
      "Use Security Reporting rather than general support, legal, sales, or public channels. Do not include passwords, API keys, private keys, employee records, government identifiers, medical information, payroll data, or unnecessary vulnerability details, and do not access more data than is necessary to demonstrate and report the issue.",
  },
  {
    question: "Does this policy replace my employer's policies?",
    answer:
      "No. This policy applies to the Zoiko HR services and surfaces identified in the current approved policy. Customer-specific agreements, workforce policies, and stricter controls configured by your administrator may also apply, and the stricter requirement governs your use.",
  },
  {
    question: "Which version applies?",
    answer:
      "The version published on this canonical URL is always the current one, with its version, effective, published, and last-reviewed dates shown above. Superseded versions display an archive banner and a link to the current policy.",
  },
];

export function AupFaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-14 sm:py-16">
      <Container>
        <div className="mx-auto max-w-[900px]">
          <SectionHeading eyebrow="Questions" title="Direct answers about acceptable use." />

          <div className="mt-8 border-t border-slate-200">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.24)}>
                <details
                  open={i === 0}
                  className="group border-b border-slate-200 py-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-base font-semibold text-ink">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className="flex-none text-lg text-slate-400 transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[760px] text-sm leading-6 text-slate-500">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
