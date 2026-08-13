import { Container, Reveal, Button } from "@/components/ui";

export function IntegrationsFinalCtaSection() {
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
            Build a stronger foundation for global people operations.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            See how Zoiko HR can centralize workforce information, structure
            HR processes, improve employee and manager access, and connect
            your people operations.
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
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              href="/resources/product-tour"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
            >
              Take the Product Tour
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="/resources/developer-documentation"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
            >
              View Developer Documentation
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
