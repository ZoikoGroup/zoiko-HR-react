"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Can I trust the numbers?", href: "#trust-numbers" },
  { label: "Who sees what?", href: "#who-sees-what" },
  { label: "Beyond the dashboard", href: "#beyond-dashboard" },
  { label: "Support & FAQ", href: "#support-faq" },
];

export function ReportingNavSection() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="On this page navigation"
      className="sticky top-0 z-40 border-b border-[#EEF1F5] bg-white/95 backdrop-blur-md"
    >
      <Container>
        <div className="flex items-center overflow-x-auto py-3 scrollbar-none">
          <ol className="flex items-center gap-1.5 sm:gap-2">
            {navItems.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <li key={item.href} className="shrink-0">
                  <a
                    href={item.href}
                    className={`inline-flex items-center rounded-lg px-3.5 py-1.5 text-[13.5px] font-medium transition-all ${
                      isActive
                        ? "bg-[#EAF0FF] font-semibold text-[#2147C9]"
                        : "text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0C1234]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </nav>
  );
}
