import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const TEMPLATES = [
  {
    title: "Policy Template",
    body: "Structured sections for scope, purpose, requirements and review ownership.",
    version: "v3 · Approved & current",
  },
  {
    title: "Acknowledgment Form Template",
    body: "Captures a version-bound acknowledgment action with an issue-report path.",
    version: "v4 · Approved & current",
  },
];

function TemplateCard({
  title,
  body,
  version,
}: (typeof TEMPLATES)[number]) {
  return (
    <div className="flex h-full flex-col gap-2 rounded-xl border border-slate-200 px-6 py-6">
      <span aria-hidden className="w-8 border-t-2 border-primary" />
      <h3 className="pt-2 text-base font-bold text-sky-950">{title}</h3>
      <p className="pb-1.5 text-sm font-bold leading-5 text-slate-500">{body}</p>
      <p className="mt-auto rounded-md bg-emerald-50 px-2.5 py-2 text-xs font-semibold leading-4 text-teal-600">
        {version}
      </p>
    </div>
  );
}

export function TemplatesSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Start from an approved structure, not a blank page."
          className="max-w-[700px]"
        >
          Templates give new documents and policies a governed starting
          structure — only approved, current templates are selectable.
        </SectionHeading>

        {/* The photo sits between the two template cards on desktop and drops
            below them once the row collapses. */}
        <div className="mt-10 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-[minmax(0,288px)_minmax(0,1fr)_minmax(0,288px)]">
          <Reveal delay={0.06}>
            <TemplateCard {...TEMPLATES[0]} />
          </Reveal>

          <Reveal
            delay={0.12}
            className="order-last sm:col-span-2 lg:order-none lg:col-span-1"
          >
            <PlaceholderImage
              src="/images/documents-policies/templates.webp"
              alt="A colleague reviewing a printed document at a desk"
              label="Approved templates"
              className="aspect-[16/9] w-full rounded-xl border border-slate-200 bg-slate-100 lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <Reveal delay={0.18}>
            <TemplateCard {...TEMPLATES[1]} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
