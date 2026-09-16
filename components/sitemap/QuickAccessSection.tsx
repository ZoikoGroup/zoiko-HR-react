import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { QUICK_ACCESS_LINKS } from "./sitemapData";

export function QuickAccessSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-8">
      <Container>
        <Reveal>
          <p className="text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-slate-500">
            Quick access
          </p>
          <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
            {QUICK_ACCESS_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs font-medium text-slate-600 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
