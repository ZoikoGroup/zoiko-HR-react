import { Container, Reveal, Button } from "@/components/ui";

export function WorkflowsFinalCtaSection() {
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
            Bring consistency and accountability to workforce operations.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            See how Zoiko HR routes work, evaluates conditions and keeps
            every approval decision explainable and evidenced.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/book-a-demo">Book a Demo</Button>
            <Button
              href="/pricing"
              variant="outline"
              className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
            >
              Request Pricing
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a href="/self-service" className="font-semibold text-primary hover:text-white">
              Explore Self-Service →
            </a>
            <a href="/reporting-insights" className="font-semibold text-primary hover:text-white">
              Explore Reporting &amp; Insights →
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
