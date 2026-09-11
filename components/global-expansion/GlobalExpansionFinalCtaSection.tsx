import { Container, Reveal, Button } from "@/components/ui";

export function GlobalExpansionFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center"
      >
        <div className="h-72 w-[36rem] rounded-full bg-primary/20 blur-3xl" />
      </div>

      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Build one HR operating foundation for the next stage of
            growth.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            See how Zoiko HR can help structure entities, workforce
            records, permissions and HR workflows as your organization
            expands — while keeping local differences governed and group
            visibility clear.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/book-a-demo">Book a Demo</Button>
            <Button
              href="/implementation-guide"
              variant="outline"
              className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
            >
              Explore Implementation &amp; Migration
            </Button>
          </div>
          <a
            href="/global-hr-management"
            className="mt-6 inline-block text-sm font-semibold text-white/60 underline underline-offset-4 hover:text-white"
          >
            Explore Zoiko HR
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
