import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

export function CustomerHelpSection() {
  return (
    <section className="bg-slate-900 py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,555px)_minmax(0,609px)]">
          <div>
            <SectionHeading
              eyebrow="05 / Current Customer Help"
              title="Already using Zoiko HR?"
              tone="dark"
            >
              Use the approved customer support, help, or account-access path
              for product, implementation, billing, access, or technical
              assistance. This general form is not the fastest support route for
              existing customers.
            </SectionHeading>

            <Reveal delay={0.16}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact-support"
                  className="rounded-[10px] bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Get support
                </Link>
                <Link
                  href="/sign-in"
                  className="rounded-[10px] border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
                >
                  Sign in
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/contact-zoiko-hr/customer-help.png"
              alt="Two colleagues reviewing work together at a desk"
              label="Existing customer support"
              className="aspect-[16/9] w-full rounded-lg border border-cyan-900 bg-slate-900 sm:aspect-[21/9] lg:aspect-[609/224]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
