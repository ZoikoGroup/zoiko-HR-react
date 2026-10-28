import Link from "next/link";
import { Container } from "@/components/ui";

const LINKS = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "/resource-center" },
  { label: "Company", href: "/company" },
];

/** Page-level bar that sits directly under the hero. */
export function AiSubNav() {
  return (
    <nav aria-label="AI Assistance" className="border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span aria-hidden className="flex size-7 items-center justify-center rounded-lg bg-primary">
            <span className="size-3 rounded-sm bg-white opacity-90" />
          </span>
          <span className="font-heading text-base font-extrabold leading-6 text-ink">Zoiko HR</span>
        </Link>

        {/* Links only from lg — logo, links and both actions need ~760px. */}
        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium leading-5 text-slate-600 transition-colors hover:bg-slate-50 hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/ai-governance"
            className="hidden text-sm font-semibold leading-5 text-primary transition-colors hover:text-primary-dark sm:inline"
          >
            Review AI Governance →
          </Link>
          <Link
            href="/book-a-demo"
            className="inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Book a Demo
          </Link>
        </div>
      </Container>
    </nav>
  );
}
