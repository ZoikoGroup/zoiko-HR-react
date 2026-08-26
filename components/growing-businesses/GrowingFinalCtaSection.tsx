import Link from "next/link";
import { Container, Reveal, Button } from "@/components/ui";

const HELP_LINKS = [
  { label: "Help Center", href: "/help-center" },
  { label: "Documentation", href: "/documentation" },
  { label: "Contact Support", href: "/contact-support" },
];

export function GrowingFinalCtaSection() {
  return (
    <section className="border-t border-white/10 bg-[#0A1B2E] py-24 text-white">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Build a stronger HR foundation for what comes next.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Discuss your people-operations needs, product scope,
            implementation questions and commercial evaluation.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/book-a-demo">Book a Demo</Button>
            <Button
              href="/pricing"
              variant="outline"
              className="!border-white/10 !bg-white/10 !text-white hover:!border-primary hover:!text-primary"
            >
              Request Pricing
            </Button>
            <a
              href="/product-tour"
              className="group inline-flex items-center gap-1.5 px-1 text-sm font-medium text-primary hover:text-white"
            >
              Take the Product Tour
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <p className="mt-8 text-xs text-white/40">
            Need help now?{" "}
            {HELP_LINKS.map((link, i) => (
              <span key={link.href}>
                {i > 0 && <span aria-hidden> · </span>}
                <Link
                  href={link.href}
                  className="text-primary hover:text-white"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
