import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { CheckList, SectionHeading } from "./shared";

export function DevelopmentPlansSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Development plans"
              title="Turn review outcomes into owned development actions — not forgotten notes."
            >
              Development actions connect directly to agreed review themes. Each
              action carries an owner, supporter, target date and follow-up
              cadence — co-owned where appropriate, not framed solely as
              remediation.
            </SectionHeading>

            <Reveal delay={0.1}>
              <CheckList
                className="mt-6"
                items={[
                  "Owner and supporter named, with target date and status",
                  "Completion comes from user or approved source — not inferred from passive behavior",
                  "Resources linked without forcing employees into marketing journeys",
                  "Performance Improvement Plans are separate and require policy/legal design",
                ]}
              />
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <PlaceholderImage
              src="/images/performance-management/development-plans.png"
              alt="Colleagues working through a development plan together at a desk"
              label="Planning development actions together"
              loading="lazy"
              className="aspect-[569/429] w-full rounded-2xl border border-slate-200 shadow-lg shadow-black/5"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
