import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function DocsProCtaSection() {
  return (
    <section className="bg-slate-950 py-16">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,200px)]">
          <Reveal>
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
              Use approved workforce documents and templates with Zoiko HR —
              governed, version-bound and boundary-clear.
            </h2>
            <p className="mt-4 max-w-[480px] text-sm leading-6 text-white/60">
              No storage provider, unlimited storage, automatic sync, e-signature,
              malware scanning or retention period is claimed. Product proof and
              governance precede the commercial invitation.
            </p>
            <p className="mt-6 text-xs leading-5 text-white/30">
              Existing-customer Documentation, Support, Status and Trust routes
              remain direct and are not sales-gated.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-3">
              <Link
                href="/book-a-demo"
                className="rounded-sm bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Book a demo
              </Link>
              <Link
                href="/contact-sales"
                className="rounded-sm border border-white/20 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:border-white/40"
              >
                Contact sales
              </Link>
              <Link
                href="/documentation"
                className="text-center text-xs font-semibold text-white/40 transition-colors hover:text-white"
              >
                Support &amp; documentation →
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
