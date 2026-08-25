import Link from "next/link";
import { Container, Reveal, Button } from "@/components/ui";

export function MultiEntityFinalCtaSection() {
  return (
    <section className="bg-sky-950 py-24 text-white">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">
            Ready to govern HR administration across distinct entities with
            clearer boundaries?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            See how Zoiko HR can help your organization model entity scopes,
            delegate administration, control shared configuration, coordinate
            workflows, review integrations and keep exceptions and evidence
            visible.
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

          <Link
            href="/product-tour"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
          >
            Take the Product Tour
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <p className="mx-auto mt-8 max-w-2xl text-xs leading-5 text-slate-500">
            Designed for governed administration across distinct entities and
            units — with product, plan, contract and implementation details
            validated for your requirements.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
