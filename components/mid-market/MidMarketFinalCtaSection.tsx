import { Container, Reveal, Button } from "@/components/ui";

export function MidMarketFinalCtaSection() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">
            Bring more consistency and control to complex HR operations.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Evaluate how Zoiko HR can structure records, policies,
            workflows, delegated responsibilities, exceptions, reporting
            and connected operations for your organization.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Button href="/book-a-demo" className="px-7 py-3.5">
              Book a Demo
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              className="!border-white/30 px-7 py-3.5 !text-white hover:!border-primary hover:!text-primary"
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

          <p className="mx-auto mt-8 max-w-2xl text-xs leading-5 text-slate-500">
            Capabilities, integrations, implementation, support and
            availability may vary by plan, contract, configuration and
            jurisdiction.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
