import Link from "next/link";
import { Container } from "@/components/ui";

const LINKS = [
  { label: "Latest news", href: "#latest-news" },
  { label: "Press releases", href: "#press-releases" },
  { label: "External coverage", href: "#external-coverage" },
  { label: "Media resources", href: "#media-resources" },
  { label: "Media inquiries", href: "#media-inquiries" },
];

export function QuickAccessBar() {
  return (
    <section className="bg-[#0A1B2E] text-white">
      <Container className="py-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-xs text-white/40">Quick access:</span>

          {LINKS.map((link, i) => (
            <div key={link.label} className="flex items-center gap-4">
              {i > 0 && (
                <span aria-hidden className="text-white/30">
                  ·
                </span>
              )}
              <Link
                href={link.href}
                className="text-xs font-semibold text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </div>
          ))}

          <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary sm:ml-auto">
            Official Newsroom
          </span>
        </div>
      </Container>
    </section>
  );
}
