import Link from "next/link";
import { Container, Reveal, Button } from "@/components/ui";

const NEXT_LINKS: [string, string][] = [
  ["Take Product Tour", "/product-tour"],
  ["Open HR Guides", "/hr-guides"],
  ["Implementation Guide", "/implementation-guide"],
  ["Read FAQ", "/faq"],
  ["Help Center", "/help-center"],
  ["Documentation", "/developer-documentation"],
  ["Customer Stories", "/customer-stories"],
  ["Compare Zoiko HR", "/compare"],
  ["Trust Center", "/trust-center"],
];

export function ResourceCenterFinalCtaSection() {
  return (
    <section className="bg-[#0a1729] py-20 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
              What do you want to do next?
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-10">
              Continue your task or start the evaluation journey.
            </h2>
            <p className="mt-4 leading-6 text-slate-400">
              No preselected consent, countdown or data request.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {NEXT_LINKS.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition-colors hover:border-white/40 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mx-auto mt-10 h-px w-full max-w-md bg-white/10" />
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/book-a-demo" className="px-7 py-3">
                Book a Demo
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                className="!border-white/20 px-7 py-3 !text-white hover:!border-white/40 hover:!text-white"
              >
                Request Pricing
              </Button>
            </div>
            <p className="mt-6 text-xs leading-5 text-slate-500">
              Use business contact information only. Do not submit employee
              records, credentials, payroll values, health data or other
              sensitive HR information.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
