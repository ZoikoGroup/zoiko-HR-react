import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const CARDS = [
  {
    title: "Source & storage",
    body: "Approved external document sources and storage providers only; no undocumented connector is implied.",
  },
  {
    title: "Mapping & reconciliation",
    body: "Imported metadata maps to the Document Registry with an explicit owner; failures surface for reconciliation, never silently drop.",
  },
  {
    title: "Delivery channels",
    body: "In-product and approved delivery channels declare their own confirmation contract — sent is never treated as delivered.",
  },
  {
    title: "Processing state",
    body: "A degraded or unavailable source marks affected content stale rather than guessing its current status.",
  },
];

function SourceCard({ title, body }: (typeof CARDS)[number]) {
  return (
    <div className="h-full rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-sky-950">{title}</h3>
      <p className="mt-2 text-sm font-bold leading-5 text-slate-500">{body}</p>
    </div>
  );
}

export function SourcesStorageSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Sources, storage and delivery declare their own state."
          className="max-w-[760px]"
        >
          Every external source, storage provider and delivery channel follows
          the same minimization and reconciliation contract — no undocumented
          connector is implied.
        </SectionHeading>

        {/* Two card columns with the photo spanning both rows between them. */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0.06}>
            <SourceCard {...CARDS[0]} />
          </Reveal>

          <Reveal
            delay={0.12}
            className="order-last sm:col-span-2 lg:order-none lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-1"
          >
            <PlaceholderImage
              src="/images/documents-policies/sources-storage.webp"
              alt="Colleagues talking together in a bright office"
              label="Sources and delivery"
              className="aspect-video w-full rounded-xl bg-slate-100 lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <Reveal delay={0.18}>
            <SourceCard {...CARDS[1]} />
          </Reveal>

          <Reveal delay={0.24}>
            <SourceCard {...CARDS[2]} />
          </Reveal>

          <Reveal delay={0.3}>
            <SourceCard {...CARDS[3]} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
