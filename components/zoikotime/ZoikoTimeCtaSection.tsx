import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function ZoikoTimeCtaSection() {
  return (
    <section className="bg-slate-950 py-16">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,250px)]">
          <Reveal>
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
              Connect approved workforce-time context with Zoiko HR — with the
              authority, purpose and boundaries visible.
            </h2>
            <p className="mt-4 max-w-[520px] text-sm leading-6 text-white/60">
              Understand the source authority model, permission boundaries and
              effective-time semantics before configuring. Existing customers can
              reach docs and support directly.
            </p>
            <p className="mt-6 text-xs leading-5 text-white/30">
              No &quot;real-time sync,&quot; &quot;automatic attendance,&quot;
              &quot;accurate payroll,&quot; &quot;always connected,&quot;
              &quot;zero setup,&quot; &quot;employee productivity,&quot;
              &quot;workforce risk&quot; or &quot;included with every plan&quot;
              claim is made here.
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
                Contact implementation team
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
