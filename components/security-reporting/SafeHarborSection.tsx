import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";
import { WarningIcon } from "./icons";

const TERMS = [
  {
    icon: "🛡️",
    title: "Safe Harbor",
    description:
      "No safe-harbor text, legal protection, immunity, testing authorization, or confidentiality commitment is established by this page. Absence of a published SafeHarborRecord creates no implied legal protection.",
    warning:
      "Do not infer safe-harbor protection from this page, good-faith wording, or general industry practice. Protection appears only from exact Security/Legal-approved language.",
  },
  {
    icon: "📋",
    title: "Bug Bounty / Reward Program",
    description:
      "No bug-bounty program, reward, payment, or compensation is established by this page. A BountyRecord is published only if an actual approved program exists. No reward is implied from reporting.",
    warning:
      "Do not infer reward or compensation from any wording on this page. Bounty terms appear only from an approved current BountyRecord.",
  },
  {
    icon: "🗓",
    title: "Coordinated Disclosure Terms",
    description:
      "No disclosure deadline, publication expectation, confidentiality commitment, embargo period, CVE assignment promise, or reporter acknowledgement is established. Coordinated disclosure terms are Security/Legal-controlled.",
    warning:
      "No 30/60/90-day or other disclosure deadline is implied. Publication and disclosure are Security/Legal-controlled. Do not expect or assume a timeline.",
  },
];

export function SafeHarborSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Section 06"
          title="Safe harbor, bounty and disclosure terms."
        >
          These records are published only from current approved
          Security/Legal authority. Absence of a published record creates no
          implied promise, protection, or deadline.
        </SectionHeading>

        <div className="mt-9 space-y-4">
          {TERMS.map((term, i) => (
            <Reveal key={term.title} delay={Math.min(i * 0.08, 0.3)}>
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <div className="flex items-start gap-4 bg-slate-50 px-6 py-5">
                  <span aria-hidden className="flex-none text-2xl leading-9">
                    {term.icon}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-base font-semibold text-ink">
                        {term.title}
                      </h3>
                      <span className="rounded-full border border-amber-400/25 bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold text-amber-500">
                        Not Established
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {term.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 bg-amber-400/5 px-6 py-3.5">
                  <WarningIcon className="mt-0.5 size-3.5 flex-none text-amber-400" />
                  <p className="text-xs leading-5 text-amber-700">
                    {term.warning}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
