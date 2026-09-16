"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui";
import { SitemapHero } from "./SitemapHero";
import { SitemapNavChips } from "./SitemapNavChips";
import { SitemapGroupSection } from "./SitemapGroupSection";
import { QuickAccessSection } from "./QuickAccessSection";
import { SITEMAP_GROUPS } from "./sitemapData";

export function SitemapExplorer() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return SITEMAP_GROUPS.map((group) => ({ group, links: group.links }));
    }
    // A group whose own title matches keeps all of its pages, so searching
    // "solutions" shows the whole section rather than only exact page hits.
    return SITEMAP_GROUPS.map((group) => {
      const groupMatches = group.title.toLowerCase().includes(term);
      return {
        group,
        links: groupMatches
          ? group.links
          : group.links.filter(
              (link) =>
                link.label.toLowerCase().includes(term) ||
                link.description.toLowerCase().includes(term)
            ),
      };
    });
  }, [query]);

  const matchCount = results.reduce((total, entry) => total + entry.links.length, 0);
  const isFiltering = query.trim().length > 0;

  return (
    <>
      <SitemapHero query={query} onQueryChange={setQuery} />
      <SitemapNavChips />

      {isFiltering && (
        <Container className="pt-8">
          <p aria-live="polite" className="text-sm text-slate-500">
            {matchCount === 0
              ? `No pages match “${query.trim()}”.`
              : `${matchCount} ${matchCount === 1 ? "page" : "pages"} match “${query.trim()}”.`}
          </p>
        </Container>
      )}

      {results.map(({ group, links }) => (
        <SitemapGroupSection key={group.id} group={group} links={links} />
      ))}

      <QuickAccessSection />
    </>
  );
}
