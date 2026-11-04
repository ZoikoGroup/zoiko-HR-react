import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { RuleRow, SectionHeading } from "./shared";

const RULES: { kind: "Prohibited" | "Required"; text: string }[] = [
  { kind: "Prohibited", text: "Final legal advice or guaranteed compliance conclusions" },
  { kind: "Prohibited", text: "Fabricated disciplinary evidence or adverse-performance narratives" },
  { kind: "Prohibited", text: "Hidden persuasion intended to manipulate an employee into waiving rights" },
  { kind: "Required", text: "Draft badge persistent until user-controlled finalization" },
  { kind: "Required", text: "Regenerate preserves previous version or confirms replacement" },
];

export function DraftAssistanceSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Draft assistance"
              title="Draft means draft — until an authorized person makes it final."
            >
              Generated drafts are visibly labeled and remain non-final until the
              authorized user reviews, edits and routes the content to the owning
              workflow. Final communications are attributable to the authorized
              user, not to &quot;AI.&quot;
            </SectionHeading>

            <ul className="mt-6 flex flex-col gap-3">
              {RULES.map((rule, i) => (
                <li key={rule.text}>
                  <Reveal delay={i * 0.05}>
                    <RuleRow kind={rule.kind}>{rule.text}</RuleRow>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={0.12}>
            <PlaceholderImage
              src="/images/ai-assistance/draft-assistance.png"
              alt="Two colleagues shaking hands in a bright office"
              label="Colleagues agreeing on a finished draft"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-white sm:aspect-video lg:aspect-[568/532]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
