import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const RULES = [
  {
    title: "Traffic / load testing",
    description:
      "No approved testing authorization for traffic or load generation. Rules of engagement are not established by this page.",
  },
  {
    title: "Automated scanning",
    description:
      "Automated scanning authorization requires approved policy definition. Absence of a listing is not permission.",
  },
  {
    title: "Social engineering",
    description:
      "Social engineering techniques require explicit approved rules. Not inferred from common disclosure practice.",
  },
  {
    title: "Credential use",
    description:
      "Use of credentials beyond your own account requires explicit approved scope.",
  },
  {
    title: "Customer / employee data access",
    description:
      "Stop unnecessary access to customer or employee data immediately. Report through protected route with minimum evidence.",
  },
  {
    title: "Destructive / DoS techniques",
    description:
      "No destructive or denial-of-service testing without explicit approved rules. Do not attempt.",
  },
  {
    title: "Third-party / external assets",
    description:
      "Zoiko integration or subprocessor relationships do not authorize testing external systems.",
  },
  {
    title: "Physical testing",
    description:
      "Physical security testing requires explicit approval and is not in scope by default.",
  },
];

export function RulesOfEngagementSection() {
  return (
    <section className="border-b border-white/5 bg-[#0A1B2E] py-16 text-white sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Section 05"
          title="Rules of engagement."
          tone="dark"
        >
          Approved testing rules from the current Security/Legal policy only.
          No generic penetration-testing rules are imported as Zoiko HR
          policy. Current status: rules not yet established by approved
          source.
        </SectionHeading>

        <div className="mt-9 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            {RULES.map((rule, i) => (
              <Reveal key={rule.title} delay={Math.min(i * 0.04, 0.3)}>
                <div className="flex items-start gap-5 border-b border-white/5 py-4 last:border-b-0">
                  <span className="w-9 flex-none pt-0.5 font-mono text-xs text-slate-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-sm font-semibold text-white">
                        {rule.title}
                      </h3>
                      <span className="rounded-full border border-amber-400/25 bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold text-amber-500">
                        Not Established
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-5 text-slate-400">
                      {rule.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/security-reporting/rules-of-engagement.png"
              alt="Colleagues discussing testing rules and policy in an office"
              label="Discussing testing rules and policy"
              className="aspect-[369/645] w-full rounded-2xl lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
            <p className="text-xs leading-5 text-slate-400">
              Rules of engagement require an approved RuleRecord from Security
              and Legal. Unresolved conflict or missing record routes to
              Security/Legal — do not improvise precedence. When published,
              rules will be tied to policy version and currentness.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
