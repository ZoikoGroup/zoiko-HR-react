import Link from "next/link";
import { Container, Reveal, Button } from "@/components/ui";

export function GlobalOrgFinalCtaSection() {
  return (
    <section className="border-t border-white/10 bg-[#0A1220] py-24 text-white">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">
            Evaluate Zoiko HR for your global operating model.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            See how Zoiko HR can help your teams coordinate shared HR
            structures, approved local configuration, distributed
            responsibilities, workforce records, workflows, reporting,
            integrations, and rollout governance.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/book-a-demo" className="px-7 py-3.5">
              Book a Demo
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              className="!border-white/30 !bg-white/10 px-7 py-3.5 !text-white hover:!border-primary hover:!text-primary"
            >
              Request Pricing
            </Button>
            <Link
              href="/resources/product-tour"
              className="group inline-flex items-center gap-1.5 px-1 py-3 text-sm font-semibold text-indigo-400 hover:text-white"
            >
              Take the Product Tour
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-xs leading-5 text-slate-500">
            Your evaluation should validate the exact organizational scope,
            market availability, localization, integrations, privacy / security
            requirements, implementation approach, and support model that apply
            to you.
          </p>

          <p className="mt-3 text-xs text-slate-500">
            Already using Zoiko HR?{" "}
            <Link href="/help-center" className="text-indigo-400 hover:text-white">
              Help Center
            </Link>{" "}
            ·{" "}
            <Link
              href="/contact-support"
              className="text-indigo-400 hover:text-white"
            >
              Contact Support
            </Link>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
