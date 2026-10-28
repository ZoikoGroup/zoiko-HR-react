import Link from "next/link";
import { Container } from "@/components/ui";

const LINKS = [
  { label: "Latest News", href: "#latest-news" },
  { label: "Press Releases", href: "#press-releases" },
  // No separate external-coverage section exists; the index filters it.
  { label: "External Coverage", href: "#latest-news" },
  { label: "Media Resources", href: "#media-resources" },
  { label: "Media Inquiries", href: "/media-inquiries" },
];

export function NewsroomSubNav() {
  return (
    <nav aria-label="Newsroom sections" className="border-b border-slate-200 bg-white">
      <Container>
        <ul className="-mx-4 flex overflow-x-auto">
          {LINKS.map((link) => (
            <li key={link.label} className="flex-none">
              <Link
                href={link.href}
                className="block whitespace-nowrap p-4 text-sm font-semibold leading-5 text-slate-500 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
