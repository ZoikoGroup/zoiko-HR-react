import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { ArrowLink, CheckList, SectionHeading } from "./shared";

export function GoalsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Goals & objectives"
              title="Make expectations explicit, owned and reviewable."
            >
              Every goal record carries an owner, period, success definition,
              progress source and visibility scope. Progress may be
              self-reported, manager-confirmed, integrated or calculated — the
              source is always visible.
            </SectionHeading>

            <Reveal delay={0.1}>
              <CheckList
                className="mt-6"
                items={[
                  "Goal creation requires owner, period, success definition and visibility scope",
                  "Alignment cannot expose restricted goals outside authorized hierarchy",
                  "Editing after an agreed cutoff creates a revision, not a silent rewrite",
                  "Goals are not automatically employment-contract terms",
                ]}
              />
              <ArrowLink href="/managers" className="mt-7">
                See manager goal and review workflows
              </ArrowLink>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <PlaceholderImage
              src="/images/performance-management/goals.png"
              alt="A lead walking a colleague through work on a desktop screen"
              label="Reviewing goals at a workstation"
              loading="lazy"
              className="aspect-[569/468] w-full rounded-2xl border border-slate-200 shadow-lg shadow-black/5"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
