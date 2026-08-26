import Link from "next/link";
import { Container, Reveal, Button } from "@/components/ui";

const STEPS = [
  {
    step: "1",
    title: "Understand",
    body: "Platform and Solutions overview, approved explainers.",
    action: "Platform →",
    href: "/platform",
  },
  {
    step: "2",
    title: "Tour",
    body: "No-signup self-guided Product Tour — direct access.",
    action: "Product Tour →",
    href: "/product-tour",
  },
  {
    step: "3",
    title: "Evidence",
    body: "Customer Stories — verified, current, permissioned.",
    action: "Stories →",
    href: "/customer-stories",
  },
  {
    step: "4",
    title: "Compare",
    body: "Factual, dated, source-governed comparison pages.",
    action: "Compare →",
    href: "/compare",
  },
  {
    step: "5",
    title: "Implement",
    body: "Implementation Guide — discovery through adoption.",
    action: "Guide →",
    href: "/implementation-guide",
  },
  {
    step: "6",
    title: "Trust",
    body: "Trust Center: Security, Privacy, Accessibility, AI Gov.",
    action: "Trust →",
    href: "/trust-center",
  },
  {
    step: "7",
    title: "Commercial",
    body: "Pricing → Request Pricing → Book a Demo.",
    action: "Pricing →",
    href: "/pricing",
  },
];

export function EvaluationBuyingSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Evaluation &amp; Buying
          </span>
          <h2 className="mt-3 max-w-[620px] font-heading text-3xl font-bold leading-10 text-slate-900">
            A complete evaluation path — no contact required until you are ready.
          </h2>
          <p className="mt-4 max-w-[620px] leading-6 text-slate-500">
            Proceed through meaningful proof before providing business contact
            information. Book a Demo is always reachable but never blocks
            evaluation.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {STEPS.map((item, i) => (
            <Reveal key={item.step} delay={0.05 + i * 0.04} className="h-full">
              <Link
                href={item.href}
                className="flex h-full flex-col rounded-xl border border-black/10 bg-slate-50 p-4 transition-colors hover:border-primary/40"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {item.step}
                </span>
                <p className="mt-3 text-sm font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-2 flex-1 text-xs leading-5 text-slate-500">
                  {item.body}
                </p>
                <span className="mt-4 text-xs font-semibold text-primary">
                  {item.action}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/book-a-demo" className="px-7 py-3">
              Book a Demo
            </Button>
            <Button href="/pricing" variant="outline" className="px-7 py-3">
              Request Pricing
            </Button>
            <Link
              href="/product-tour"
              className="group inline-flex items-center gap-1.5 px-1 py-3 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Take the Product Tour
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
