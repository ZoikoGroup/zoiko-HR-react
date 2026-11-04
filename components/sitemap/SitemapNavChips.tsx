import { Container } from "@/components/ui";
import { SITEMAP_GROUPS } from "./sitemapData";

export function SitemapNavChips() {
  return (
    <nav
      aria-label="Sitemap sections"
      className="border-b border-slate-200 bg-slate-50"
    >
      <Container className="py-4">
        {/* Scrolls sideways on phones rather than stacking into a tall block. */}
        <ul className="-mx-6 flex gap-1 overflow-x-auto px-6 lg:mx-0 lg:flex-wrap lg:px-0">
          {SITEMAP_GROUPS.map((group) => (
            <li key={group.id} className="flex-none">
              <a
                href={`#${group.id}`}
                className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-200 px-3.5 py-1.5 text-xs font-medium leading-5 text-slate-600 transition-colors hover:border-primary hover:text-primary"
              >
                {group.title}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
