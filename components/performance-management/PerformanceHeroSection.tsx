import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { CautionNote, CtaButtons, Eyebrow } from "./shared";

export function PerformanceHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0F172A_100%)] py-16 text-white sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow tone="dark">Performance Management · Zoiko HR</Eyebrow>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">
                Run performance processes with clearer goals, accountable reviews
                and human judgment.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-base leading-7 text-slate-400">
                Structure goals, check-ins, feedback, review cycles, calibration
                and development actions in one permission-aware workflow — with
                visible ownership, evidence and next steps for employees,
                managers and HR.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <CautionNote className="mt-4">
                Zoiko HR supports configured performance processes; it does not
                autonomously make high-impact employment decisions. Capabilities
                vary by plan, configuration and jurisdiction.
              </CautionNote>
            </Reveal>

            <Reveal delay={0.28}>
              <CtaButtons variant="dark" className="mt-8" />
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/performance-management/hero.png"
              alt="Three colleagues reviewing printed performance material together"
              label="Colleagues reviewing performance material"
              // Portrait only beside the copy — stacked below it on smaller
              // screens, a 568×683 frame pushes everything else far down.
              className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-white shadow-xl shadow-black/10 sm:aspect-video lg:aspect-[568/683]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
