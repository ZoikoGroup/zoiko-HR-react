"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui";

type NavItem = {
  label: string;
  href: string;
  items?: { label: string; href: string; description?: string }[];
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "Platform",
    href: "/platform",
    items: [
      { label: "Platform Overview", href: "/platform" },
      { label: "Core HR", href: "/platform/core-hr" },
      { label: "Global HR Management", href: "/platform/global-hr-management" },
      { label: "Employee Records", href: "/platform/employee-records" },
      { label: "Onboarding & Lifecycle", href: "/platform/onboarding-lifecycle" },
      { label: "Workflows & Approvals", href: "/platform/workflows-approvals" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      { label: "Solutions Overview", href: "/solutions" },
      { label: "Growing Businesses", href: "/solutions/growing-businesses" },
      { label: "Mid-Market Organizations", href: "/solutions/mid-market" },
      { label: "Global Organizations", href: "/solutions/global-organizations" },
      { label: "HR Teams", href: "/solutions/hr-teams" },
      { label: "Managers", href: "/solutions/managers" },
    ],
  },
  {
    label: "Integrations",
    href: "/integrations",
    items: [
      { label: "Connect HR, Time & Payroll", href: "/integrations" },
      { label: "Payroll", href: "/integrations/payroll" },
      { label: "Time & Attendance", href: "/integrations/time-attendance" },
      { label: "SSO & Identity", href: "/integrations/sso-identity" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    items: [
      { label: "Resource Center", href: "/resources" },
      { label: "Product Tour", href: "/resources/product-tour" },
      { label: "HR Guides", href: "/resources/hr-guides" },
      { label: "Customer Stories", href: "/resources/customer-stories" },
      { label: "Implementation Guide", href: "/resources/implementation-guide" },
      { label: "FAQ", href: "/resources/faq" },
    ],
  },
  {
    label: "Company",
    href: "/company",
    items: [
      { label: "About Zoiko HR", href: "/about" },
      { label: "About Zoiko Group", href: "/company/about-zoiko-group" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/company/careers" },
      { label: "Partners", href: "/company/partners" },
      { label: "Newsroom", href: "/company/newsroom" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200 bg-white/90 shadow-sm backdrop-blur-md"
          : "border-transparent bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 text-xl font-bold tracking-tight">
          <span className="text-ink">Zoiko</span>
          <span className="text-primary">HR</span>
        </Link>

        {/* Centered nav */}
        <nav className="hidden justify-self-center lg:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors duration-150 hover:bg-primary-light hover:text-primary"
                >
                  {item.label}
                  {item.items && (
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-3.5 w-3.5 text-ink/40 transition-transform duration-200 group-hover:rotate-180 group-hover:text-primary"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>

                {item.items && (
                  <div
                    className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-2 scale-95 rounded-2xl border border-slate-100 bg-white p-2 opacity-0 shadow-xl shadow-slate-900/10 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-1 group-hover:scale-100 group-hover:opacity-100"
                  >
                    {item.items.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink/80 transition-colors duration-150 hover:bg-primary-light hover:text-primary"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-2 justify-self-end lg:flex">
          <Link
            href="/sign-in"
            className="rounded-full px-4 py-2.5 text-sm font-semibold text-ink/80 transition-colors duration-150 hover:text-primary"
          >
            Sign In
          </Link>
          <Button href="/book-a-demo">Book a Demo</Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="justify-self-end rounded-full p-2 text-ink transition-colors hover:bg-primary-light hover:text-primary lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition-all duration-200 ${
                mobileOpen ? "top-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 block h-0.5 w-5 bg-current transition-all duration-200 ${
                mobileOpen ? "top-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <div className="max-h-[75vh] overflow-y-auto px-6 py-4">
              <ul className="flex flex-col divide-y divide-slate-100">
                {NAV_ITEMS.map((item) =>
                  item.items ? (
                    <li key={item.label} className="py-1">
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-2 py-3 text-sm font-semibold text-ink">
                          {item.label}
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            className="h-4 w-4 text-ink/40 transition-transform duration-200 group-open:rotate-180"
                          >
                            <path
                              d="M5 7.5L10 12.5L15 7.5"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </summary>
                        <div className="flex flex-col pb-2 pl-3">
                          {item.items.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="rounded-lg px-2 py-2 text-sm text-ink/70 hover:text-primary"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </details>
                    </li>
                  ) : (
                    <li key={item.label} className="py-1">
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-2 py-3 text-sm font-semibold text-ink"
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>

              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="/sign-in"
                  onClick={() => setMobileOpen(false)}
                  className="text-center text-sm font-semibold text-ink/80"
                >
                  Sign In
                </Link>
                <Button href="/book-a-demo" className="w-full">
                  Book a Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
