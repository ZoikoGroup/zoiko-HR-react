import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function WorkflowLibrarySection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Every workflow, its status and its owner — in one library.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Search by name or purpose, then filter by status, owner,
              scope and currentness — never by exposing employee data.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <PlaceholderImage
            src="/images/workflows-approvals/workflow-library.webp"
            alt="Team reviewing workflow analytics on a monitor"
            label="One workflow library"
            fit="contain"
            className="mt-8 w-full rounded-2xl"
          />
        </Reveal>
      </Container>
    </section>
  );
}
