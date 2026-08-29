import { Container, Reveal, Button } from "@/components/ui";

const ROWS = [
  { label: "See the product", tag: "no signup", linkLabel: "Product Tour →", href: "/resources/product-tour", primary: false },
  { label: "Plan implementation", tag: null, linkLabel: "Implementation Guide →", href: "/resources/implementation-guide", primary: false },
  { label: "Compare options", tag: null, linkLabel: "Compare Zoiko HR →", href: "/resources/compare", primary: false },
  { label: "Review proof", tag: null, linkLabel: "Customer Stories →", href: "/resources/customer-stories", primary: false },
  { label: "Get current pricing", tag: null, linkLabel: "Request Pricing →", href: "/pricing", primary: false },
  { label: "Get tailored evaluation", tag: "primary", linkLabel: "Book a Demo →", href: "/book-a-demo", primary: true },
  { label: "Need customer help", tag: null, linkLabel: "Help / Docs / Support →", href: "/help-center", primary: false },
];

export function FaqFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center"
      >
        <div className="h-72 w-[36rem] rounded-full bg-primary/20 blur-3xl" />
      </div>

      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to evaluate Zoiko HR for your organization?
          </h2>
          <p className="mt-4 text-white/60">
            Choose the path that matches where you are in your
            evaluation.
          </p>
        </Reveal>

        <Reveal delay={0.14} y={20}>
          <div className="mx-auto mt-8 max-w-2xl divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
            {ROWS.map((row) => (
              <a
                key={row.label}
                href={row.href}
                className={`flex items-center justify-between gap-4 px-6 py-4 text-sm transition-colors duration-150 ${
                  row.primary ? "bg-primary/15 hover:bg-primary/20" : "hover:bg-white/5"
                }`}
              >
                <span className="font-medium">{row.label}</span>
                <span className="flex items-center gap-2">
                  {row.tag && (
                    <span className="text-xs text-white/40">{row.tag}</span>
                  )}
                  <span className={`font-semibold ${row.primary ? "text-white" : "text-primary"}`}>
                    {row.linkLabel}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/book-a-demo">Book a Demo</Button>
            <Button
              href="/pricing"
              variant="outline"
              className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
            >
              Request Pricing
            </Button>
            <a
              href="/resources/product-tour"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
            >
              Take the Product Tour
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-4 text-center text-xs text-white/40">
            No urgency. No countdown. Your data is handled according to
            the Privacy Policy.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
