import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const ACTIONS = [
  { label: "Review the Trust Center", href: "/trust-center", variant: "primary" as const },
  { label: "Take the Product Tour", href: "/product-tour", variant: "outline" as const },
  { label: "Book a Demo", href: "/book-a-demo", variant: "muted" as const },
];

const STYLES = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  outline: "border border-white/20 bg-white/5 text-indigo-300 hover:border-primary hover:text-white",
  muted: "border border-white/15 text-indigo-300 hover:border-primary hover:text-white",
};

export function AupCtaSection() {
  return (
    <section className="bg-[#0A1B2E] py-16">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
              Evaluate Zoiko HR with the right legal and trust context.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Review the Trust Center, product architecture, and commercial
              options without changing the policy authority above.
            </p>
            <div className="mt-7 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
              {ACTIONS.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className={`inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors ${STYLES[action.variant]}`}
                >
                  {action.label} <span aria-hidden className="ml-1.5">→</span>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
