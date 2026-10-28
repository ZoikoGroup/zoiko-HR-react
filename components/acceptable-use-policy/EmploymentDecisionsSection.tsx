import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, PolicyTable } from "./shared";

const ROWS = [
  [
    "Automatic hire/fire/promotion/pay/discipline outcome",
    "Prohibit autonomous high-impact outcome where current policy so establishes.",
    "AI Governance + Legal; customer remains decision maker.",
  ],
  [
    "Rubber-stamp review",
    "A human reviewer merely confirming a machine output without meaningful ability or context to assess.",
    "Treated as insufficient where approved policy requires meaningful review.",
  ],
  [
    "Bypassing configured approvers",
    "Using workarounds, alternate accounts, integrations, or bulk actions to avoid required approvals.",
    "Prohibited system/policy evasion.",
  ],
  [
    "Discriminatory targeting or exclusion",
    "Using data, workflows, reports, or AI to facilitate unlawful discrimination or prohibited harassment.",
    "Wording remains jurisdiction-aware.",
  ],
  [
    "Inferring unsupported protected/sensitive traits",
    "Creating or using sensitive inferences without approved lawful purpose or authority.",
    "Privacy/AI Governance cross-link; source-gated.",
  ],
  [
    "Fabricated evidence",
    "Generating false records, reasons, approvals, documents, or performance evidence to justify a decision.",
    "Prohibited deceptive use.",
  ],
  [
    "Unauthorized employee surveillance",
    "Using product/integrations for monitoring outside approved purpose, permission, policy, and law.",
    "Context-dependent; does not imply surveillance capability exists.",
  ],
];

export function EmploymentDecisionsSection() {
  return (
    <section id="employment-decisions" className="scroll-mt-24 bg-[#102A43] py-14 sm:py-16">
      <Container>
        <SectionHeading
          tone="dark"
          title="Employment decisions, discrimination & human accountability."
        >
          You must not configure or use Zoiko HR, including AI assistance or
          automation, to make autonomous high-impact employment decisions
          without meaningful human responsibility and any required approved
          governance.
        </SectionHeading>

        <Reveal amount={0.1}>
          <div className="mt-9">
            <PolicyTable
              tone="dark"
              columns={["Pattern", "AUP direction", "Authority / note"]}
              rows={ROWS}
              minWidth="min-w-[760px]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <PlaceholderImage
            src="/images/acceptable-use-policy/employment-decisions.png"
            alt="Colleagues talking together in an open office"
            label="Colleagues in conversation"
            loading="lazy"
            className="mt-10 aspect-[1160/240] w-full rounded-xl border border-white/10"
          />
        </Reveal>
      </Container>
    </section>
  );
}
