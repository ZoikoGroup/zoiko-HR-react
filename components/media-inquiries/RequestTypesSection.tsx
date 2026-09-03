import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

export const REQUEST_TYPES = [
  {
    glyph: "◎",
    title: "Company comment / statement",
    description: "Official comment on a topic, report, event, or developing story.",
  },
  {
    glyph: "⊞",
    title: "Press release / announcement question",
    description: "Question about a current published Zoiko HR Newsroom item.",
  },
  {
    glyph: "▷",
    title: "Event / podcast / panel / broadcast",
    description:
      "Invite an appropriate spokesperson to participate in a program or event.",
  },
  {
    glyph: "…",
    title: "Other media inquiry",
    description: "A legitimate press request not covered by the categories above.",
  },
];

function TypeCard({
  glyph,
  title,
  description,
}: {
  glyph: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex h-full flex-col gap-2.5 rounded-xl border border-blue-950 bg-slate-900 p-4">
      <span aria-hidden className="text-xl leading-5 text-slate-500">
        {glyph}
      </span>
      <p className="text-xs font-semibold leading-4 text-slate-300">{title}</p>
      <p className="text-xs leading-4 text-slate-500">{description}</p>
    </div>
  );
}

export function RequestTypesSection() {
  return (
    <section id="request-types" className="scroll-mt-24 bg-slate-950 py-16">
      <Container>
        <SectionHeading
          eyebrow="Request types · E8"
          title="What type of media request is this?"
          tone="dark"
          className="max-w-[760px]"
        >
          Choose the category that best fits. A topic field and up to two
          additional context fields appear after selection.
        </SectionHeading>

        {/* Two card columns with the image spanning both rows between them.
            Once the grid collapses the image moves below all four cards rather
            than splitting them. */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-[minmax(0,288px)_minmax(0,1fr)_minmax(0,288px)]">
          <Reveal delay={0.06}>
            <TypeCard {...REQUEST_TYPES[0]} />
          </Reveal>

          <Reveal delay={0.12} className="order-last sm:col-span-2 lg:order-none lg:col-span-1 lg:row-span-2">
            <PlaceholderImage
              src="/images/media-inquiries/request-types.png"
              alt="Colleagues laughing together over a laptop"
              label="Media request types"
              className="aspect-[16/9] w-full rounded-xl border border-blue-950 bg-slate-900 lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <Reveal delay={0.18}>
            <TypeCard {...REQUEST_TYPES[1]} />
          </Reveal>

          <Reveal delay={0.24}>
            <TypeCard {...REQUEST_TYPES[2]} />
          </Reveal>

          <Reveal delay={0.3}>
            <TypeCard {...REQUEST_TYPES[3]} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
