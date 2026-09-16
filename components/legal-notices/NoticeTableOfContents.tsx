"use client";

import { useEffect, useState } from "react";

export const NOTICE_SECTIONS = [
  { id: "operator-company", label: "Operator & company information" },
  { id: "terms-policies", label: "Terms and policies" },
  { id: "copyright", label: "Copyright and site content" },
  { id: "trademarks", label: "Trademarks and brand" },
  { id: "advice-boundary", label: "Information & advice boundary" },
  { id: "product-service", label: "Product and service information" },
  { id: "third-party", label: "Third-party sites and services" },
  { id: "legal-communications", label: "Legal and rights communications" },
  { id: "regional-disclosures", label: "Regional legal disclosures" },
  { id: "changes", label: "Changes to these notices" },
  { id: "related-resources", label: "Related trust resources" },
];

export function NoticeTableOfContents() {
  const [activeId, setActiveId] = useState(NOTICE_SECTIONS[0].id);

  useEffect(() => {
    // Headings sit under the sticky navbar, so the observer band is offset
    // from the top of the viewport rather than centred on it.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-112px 0px -70% 0px", threshold: 0 }
    );

    const nodes = NOTICE_SECTIONS.map(({ id }) => document.getElementById(id)).filter(
      (node): node is HTMLElement => node !== null
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="On this page" className="lg:sticky lg:top-28">
      <p className="text-xs font-bold uppercase leading-4 tracking-[0.08em] text-slate-500">
        On this page
      </p>
      <ul className="mt-3 flex flex-col gap-0.5 lg:max-h-[calc(100vh-10rem)] lg:overflow-y-auto">
        {NOTICE_SECTIONS.map((section) => {
          const isActive = section.id === activeId;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`block rounded-lg px-3 py-2 text-xs leading-4 transition-colors ${
                  isActive
                    ? "bg-primary-light font-semibold text-primary"
                    : "text-slate-500 hover:bg-slate-50 hover:text-ink"
                }`}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
