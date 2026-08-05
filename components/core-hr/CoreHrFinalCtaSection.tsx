import { Container, Reveal, Button } from "@/components/ui";

export function CoreHrFinalCtaSection() {
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
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Get started
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Build a stronger foundation for{" "}
            <span style={{ color: "#93A9FF" }}>global people operations</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            See how Zoiko HR can centralize workforce information, structure
            HR processes, improve employee and manager access, and connect
            your people operations.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/book-a-demo">
              Book a Demo
              <span aria-hidden>→</span>
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
            >
              Request Pricing
            </Button>
          </div>
          <a
            href="/resources/product-tour"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
          >
            Take the Product Tour
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
