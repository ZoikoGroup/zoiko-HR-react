import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function ImplementationMigrationSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                Implementation &amp; Migration
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Move with a plan, not a data dump.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-white/70">
                Work through source inventory, target-state design, data
                preparation, configuration, validation, testing and
                cutover with an implementation scope aligned to your
                organization.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/implementation-guide">
                  Explore Implementation &amp; Migration
                </Button>
                <Button
                  href="/book-a-demo"
                  variant="outline"
                  className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
                >
                  Book a Demo
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/replace-spreadsheets/implementation-migration.png"
              alt="A team planning a migration together at a workspace with laptops and notes"
              label="Move with a plan"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
