import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function ReportingSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Stop rebuilding the same report from scattered files.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                Standardized workforce records make it easier to use the
                reporting and operational views available in Zoiko HR
                without repeatedly reconciling independent spreadsheets.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 text-sm text-ink/40">
                Reporting quality depends on configured data quality,
                permissions and available modules.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/replace-spreadsheets/reporting.png"
              alt="Colleagues discussing workforce reporting together"
              label="Report-ready workforce records"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
