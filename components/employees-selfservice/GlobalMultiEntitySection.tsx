import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

export function GlobalMultiEntitySection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Global & multi-entity"
              title="Give employees the right experience for where they work."
            >
              Organizations operating across entities, teams and jurisdictions
              need shared structure without forcing every employee through
              identical processes. Zoiko HR can support organization-configured
              differences in workflows, content, fields and access where the
              product architecture permits.
            </SectionHeading>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-[440px] break-words text-xs leading-5 text-gray-400">
                &ldquo;Jurisdiction-aware&rdquo; means the product can be
                configured to account for local differences—not that it
                guarantees legal compliance in every country. Specific workflows
                and content should be validated for each operating context.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <PlaceholderImage
              src="/images/employees-selfservice/global-multi-entity.webp"
              alt="Colleagues celebrating together at a table"
              label="Global and multi-entity"
              className="aspect-[592/367] w-full rounded-2xl bg-slate-100"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
