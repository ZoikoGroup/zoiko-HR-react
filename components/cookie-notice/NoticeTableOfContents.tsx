"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { COOKIE_SETTINGS_HREF, GearIcon } from "./shared";

export const NOTICE_SECTIONS = [
  { id: "what-we-mean", label: "What we mean by cookies" },
  { id: "cookie-categories", label: "Cookie categories" },
  { id: "technology-inventory", label: "Technology inventory" },
  { id: "how-choices-work", label: "How your choices work" },
  { id: "third-party", label: "Third-party technologies" },
  { id: "privacy-signals", label: "Browser and privacy signals" },
  { id: "browser-controls", label: "Browser controls" },
  { id: "updates", label: "Updates and versioning" },
  { id: "contact", label: "Contact and rights" },
  { id: "related-resources", label: "Related resources" },
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
      <ul className="mt-3 flex flex-col gap-0.5">
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

      <div className="mt-6 border-t border-slate-200 pt-4">
        <Link
          href={COOKIE_SETTINGS_HREF}
          className="inline-flex items-center gap-1.5 text-xs font-semibold leading-4 text-primary transition-colors hover:text-primary-dark"
        >
          <GearIcon className="size-3.5" />
          Manage cookie settings
        </Link>
      </div>
    </nav>
  );
}
