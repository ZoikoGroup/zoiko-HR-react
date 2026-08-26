import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function ExistingCustomerHelpSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Existing Customer Help
          </span>
          <h2 className="mt-3 max-w-[620px] font-heading text-3xl font-bold leading-10 text-slate-900">
            Direct task routes for existing customers — no sales friction.
          </h2>
          <p className="mt-4 max-w-[560px] leading-6 text-slate-500">
            All support and documentation routes are reachable without
            encountering a commercial form first.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-black/10 bg-white px-5 py-3.5">
            <p className="text-sm text-slate-600">
              <span aria-hidden className="mr-2">
                📡
              </span>
              Service Status — check live and historical service health
            </p>
            <Link
              href="/service-status"
              className="text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Status page →
            </Link>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1fr)]">
          <Reveal delay={0.12} className="h-full">
            <Link
              href="/help-center"
              className="block h-full rounded-xl border border-black/10 border-t-2 border-t-primary bg-white p-6 transition-colors hover:border-primary/40"
            >
              <span aria-hidden className="block text-lg leading-6">
                ❓
              </span>
              <p className="mt-4 font-heading font-bold text-slate-900">
                Help Center
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Troubleshooting, support guidance and safe escalation routes.
              </p>
              <p className="mt-5 text-xs font-semibold text-primary">
                Open Help Center →
              </p>
            </Link>
          </Reveal>

          <Reveal delay={0.16} className="h-full">
            <PlaceholderImage
              src="/images/resource-center/existing-customer-help.png"
              alt="Three colleagues reviewing a tablet at a table"
              label="Existing customer help"
              className="h-full min-h-56 w-full rounded-xl bg-white"
            />
          </Reveal>

          <Reveal delay={0.2} className="h-full">
            <Link
              href="/contact-us"
              className="block h-full rounded-xl border border-black/10 border-t-2 border-t-indigo-400 bg-white p-6 transition-colors hover:border-indigo-400/50"
            >
              <span aria-hidden className="block text-lg leading-6">
                💬
              </span>
              <p className="mt-4 font-heading font-bold text-slate-900">
                Contact Support
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Direct support route — no demo gate before getting help.
              </p>
              <p className="mt-5 text-xs font-semibold text-indigo-500">
                Contact Support →
              </p>
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <p className="mt-6 text-center text-xs leading-5 text-slate-400">
            Support entry never requests passwords, credentials, employee records
            or confidential payroll data.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
