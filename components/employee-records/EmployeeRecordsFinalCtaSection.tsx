import { Container, Reveal, Button } from "@/components/ui";

export function EmployeeRecordsFinalCtaSection() {
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
            Give every employee record a source, an owner, and a history.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            See how Zoiko HR structures employee and employment
            information with clear permissions, effective dating,
            documents, and auditability.
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
          <a
            href="/product-tour"
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
