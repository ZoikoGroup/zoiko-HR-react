import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

const STATS = [
  "Centralize records",
  "Standardize workflows",
  "Control access",
  "Improve reporting",
];

export function ReplaceSpreadsheetsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-20 text-white sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(60%_50%_at_20%_0%,rgba(49,94,251,0.35),transparent)]"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                Replace Spreadsheets &amp; Legacy HR
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Replace fragmented HR spreadsheets with one governed
                system.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-white/70">
                Bring employee records, recurring HR workflows, documents
                and reporting into a structured Zoiko HR environment — so
                teams can move beyond version conflicts, manual handoffs
                and disconnected administration without sacrificing
                control.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/book-a-demo">Book a Demo</Button>
                <Button
                  href="/implementation-guide"
                  variant="outline"
                  className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
                >
                  See the Modernization Path
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-white/50">
                {STATS.map((stat) => (
                  <span key={stat}>{stat}</span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/replace-spreadsheets/hero.webp"
              alt="A person tapping a laptop displaying an HR record and approval overlay"
              label="One governed HR system"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
