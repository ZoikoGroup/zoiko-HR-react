import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, PolicyTable } from "./shared";

const ROWS = [
  [
    "Authorized context only",
    "Users must not use AI features to retrieve, summarize, infer, or expose information outside their permitted data and role scope.",
  ],
  [
    "Meaningful human review",
    "Material workforce decisions, communications, or outputs requiring judgment must remain subject to accountable human review where required.",
  ],
  [
    "No safeguard/policy evasion",
    "Do not prompt, automate, or chain tools to bypass permissions, approvals, safety controls, usage restrictions, or policy boundaries.",
  ],
  [
    "No deceptive fabrication",
    "Do not use AI to create false HR evidence, impersonate people, misrepresent approvals, or fabricate records.",
  ],
  [
    "No prohibited sensitive inference",
    "Do not infer or profile sensitive/protected traits except where explicitly authorized by approved policy, law, or product capability.",
  ],
  [
    "No credential/secrets disclosure",
    "Do not put passwords, tokens, private keys, or unnecessary confidential data into prompts or workflows.",
  ],
  [
    "Source awareness",
    "Where the product provides source links/status, do not present generated content as verified fact without appropriate review.",
  ],
  [
    "Detailed controls",
    "Model-specific permissions, transparency, logging, and prohibited-use detail live in AI Governance.",
  ],
];

export function AiAssistanceSection() {
  return (
    <section id="ai-assistance" className="scroll-mt-24 bg-white py-14 sm:py-16">
      <Container>
        <SectionHeading title="AI assistance acceptable-use boundary.">
          This is the AUP&apos;s high-level AI boundary, not a second AI policy.
          Detailed model, transparency, logging, and governance controls live in
          AI Governance.
        </SectionHeading>

        <div className="mt-9 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,473px)]">
          <Reveal amount={0.1}>
            <PolicyTable
              columns={["Rule", "Requirement"]}
              rows={ROWS}
              minWidth="min-w-[560px]"
            />
          </Reveal>

          <Reveal delay={0.12} className="lg:h-full">
            <PlaceholderImage
              src="/images/acceptable-use-policy/ai-assistance.png"
              alt="A team working together around laptops at a shared desk"
              label="Team working together"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl bg-indigo-50 sm:aspect-[16/9] lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
