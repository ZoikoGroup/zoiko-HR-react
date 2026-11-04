import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

export function ProductUiSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Product UI"
          title="Exception handling, correction history and currentness — all in one governed view"
        >
          Synthetic data only. Every screen is permission-filtered — no
          employee-level attendance leaderboard or productivity summary.
        </SectionHeading>

        <Reveal delay={0.12}>
          {/* Browser-chrome frame around the product screenshot. */}
          <div className="mt-10 overflow-hidden rounded-xl bg-slate-950">
            <div className="flex items-center justify-between gap-4 px-4 py-3">
              <div className="flex min-w-0 items-center gap-3">
                <span aria-hidden className="flex gap-1.5">
                  <span className="size-2 rounded-full bg-white/20" />
                  <span className="size-2 rounded-full bg-white/20" />
                  <span className="size-2 rounded-full bg-white/20" />
                </span>
                <p className="truncate font-mono text-xs text-white/50">
                  ZoikoTime — Zoiko HR Connection
                </p>
              </div>
              <p className="whitespace-nowrap font-mono text-[10px] text-white/40">
                Synthetic data
              </p>
            </div>
            <PlaceholderImage
              src="/images/zoikotime/product-ui.webp"
              alt="An operations team reviewing connected system status"
              label="ZoikoTime — Zoiko HR Connection"
              className="aspect-video w-full bg-slate-900 sm:aspect-[21/9] lg:aspect-[1279/348]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
