import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const ROUTES = [
  { label: "Take the Product Tour", href: "/product-tour" },
  { label: "Request Pricing", href: "/pricing" },
  { label: "Visit the Trust Center", href: "/trust-center" },
];

export function NotReadySection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24">
      {/* Soft blue bloom bleeding off the right edge. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 size-[600px] translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(49,94,251,0.2)_0%,rgba(49,94,251,0)_70%)]"
      />

      <Container>
        <div className="relative mx-auto flex max-w-[700px] flex-col items-center gap-4 text-center">
          <Reveal>
            <h2 className="text-2xl font-extrabold leading-10 tracking-tight text-white sm:text-3xl">
              Not ready to talk to a person yet?
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="max-w-[520px] leading-7 text-slate-400">
              Explore Zoiko HR on your own first, check pricing, or review our
              trust and security posture — no form required.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
              {ROUTES.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <Link
              href="#top"
              className="text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
            >
              ↑ Back to Book a Demo
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
