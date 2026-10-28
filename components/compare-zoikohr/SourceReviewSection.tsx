import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const STEPS = [
  {
    title: "Identify authority",
    body: "Select a primary or approved secondary authoritative source: official product docs, legal terms, trust/security pages, pricing pages, or help-center guides.",
  },
  {
    title: "Capture metadata",
    body: "Record source URL, title, publication or update date when available, retrieval date, and a bounded excerpt or structured evidence summary.",
  },
  {
    title: "Apply status and qualifier",
    body: "Review the evidence against the stable criterion definition. Assign a governed status. Attach any plan, region, configuration, or date qualifier directly.",
  },
  {
    title: "Publish and schedule review",
    body: "Publish source, date, and qualifier publicly. Schedule review for the freshness threshold. Re-review on material source change, dispute, or methodology change.",
  },
];

/**
 * The exported screenshot of this section has a black background with dark
 * text, which reads as a transparency artifact — it is built as a light section.
 */
export function SourceReviewSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading title="How sources and dates are reviewed." className="max-w-[640px]">
          A four-step workflow governs every criterion from initial evidence capture
          to re-review. Freshness thresholds and dispute signals trigger earlier
          review without waiting for a scheduled cycle.
        </SectionHeading>

        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 0.06}>
                <div className="flex items-center gap-3">
                  <span className="flex size-10 flex-none items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 text-sm font-bold leading-5 text-primary">
                    {i + 1}
                  </span>
                  <span aria-hidden className="h-px flex-1 bg-slate-200" />
                </div>
                <h3 className="mt-5 text-sm font-semibold leading-5 text-ink">{step.title}</h3>
                <p className="mt-3 text-xs leading-5 text-slate-500 sm:text-sm">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <PlaceholderImage
            src="/images/compare-zoikohr/source-review.png"
            alt="A team shaking hands and smiling after a meeting"
            label="Team agreeing a reviewed outcome"
            loading="lazy"
            className="mt-10 aspect-video w-full rounded-2xl border border-slate-200 sm:aspect-[1200/362]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
