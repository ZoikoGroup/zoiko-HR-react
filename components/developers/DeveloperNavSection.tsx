"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui";

const NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Get started", href: "#get-started" },
  { label: "Build", href: "#build" },
  { label: "Run reliably", href: "#run-reliably" },
  { label: "Support & FAQ", href: "#support-faq" },
];

export function DeveloperNavSection() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = NAV_ITEMS.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-30 border-b border-[#E3E8EF] bg-white/95 backdrop-blur-md">
      <Container>
        <div className="flex items-center overflow-x-auto py-2.5 scrollbar-none">
          <ul className="flex items-center gap-1.5 sm:gap-3">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`inline-block whitespace-nowrap rounded-lg px-3.5 py-1.5 text-[13.5px] font-semibold transition-colors ${
                      isActive
                        ? "bg-[#F1F5F9] text-[#2147C9]"
                        : "text-[#475569] hover:bg-slate-50 hover:text-[#0C1234]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
