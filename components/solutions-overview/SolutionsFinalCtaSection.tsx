import { Container, Reveal, Button } from "@/components/ui";

export function SolutionsFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#1A3A56_0%,#22406B_100%)] py-24 text-white">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Choose the Zoiko HR path that matches what you need to evaluate
            next.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Talk with Zoiko about your organization context, product scope,
            implementation, integrations, and commercial questions — or
            continue with the product tour.
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
            <a
              href="/resources/product-tour"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
            >
              Take the Product Tour
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
          <p className="mx-auto mt-8 max-w-lg text-xs leading-relaxed text-white/40">
            Use business contact information only. Do not submit employee
            records, credentials, payroll values, health data, or other
            sensitive HR information in public sales forms.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
