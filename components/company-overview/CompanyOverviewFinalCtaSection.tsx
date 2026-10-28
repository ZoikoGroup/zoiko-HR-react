import { Container, Reveal, Button } from "@/components/ui";

export function CompanyOverviewFinalCtaSection() {
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
            Ready to evaluate Zoiko HR for your organization?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Move from company context to a focused commercial
            conversation. Talk with the Zoiko HR team about fit,
            requirements, and the right evaluation path.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact-sales">Talk to Sales</Button>
            <Button
              href="/about"
              variant="outline"
              className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
            >
              Explore Zoiko HR
            </Button>
          </div>
          <a
            href="/contact-zoiko-hr"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
          >
            Contact →
          </a>
          <p className="mt-6 text-xs leading-relaxed text-white/40">
            Clear company context first. Product and commercial
            evaluation when you are ready.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
