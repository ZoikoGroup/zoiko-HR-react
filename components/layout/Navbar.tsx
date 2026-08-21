"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui";
import { MEGA_MENUS } from "./megaMenuData";
import { MegaMenu } from "./MegaMenu";

const SIMPLE_NAV_ITEMS = [{ label: "Pricing", href: "/pricing" }];

const OPEN_DELAY = 80;
const CLOSE_DELAY = 200;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const clearPendingTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const openMenu = (label: string) => {
    clearPendingTimeout();
    timeoutRef.current = setTimeout(() => setActiveMenu(label), OPEN_DELAY);
  };

  const closeMenu = () => {
    clearPendingTimeout();
    timeoutRef.current = setTimeout(() => setActiveMenu(null), CLOSE_DELAY);
  };

  const closeMenuImmediately = () => {
    clearPendingTimeout();
    setActiveMenu(null);
  };

  const activeConfig = MEGA_MENUS.find((menu) => menu.label === activeMenu) ?? null;

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200 bg-white/90 shadow-sm backdrop-blur-md"
          : "border-transparent bg-white/70 backdrop-blur-md"
      }`}
      onMouseLeave={closeMenu}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Zoiko HR" width={140} height={40} priority className="h-10 w-auto" />
        </Link>

        {/* Centered nav */}
        <nav className="hidden justify-self-center lg:block">
          <ul className="flex items-center gap-1">
            {MEGA_MENUS.map((menu) => (
              <li key={menu.label} onMouseEnter={() => openMenu(menu.label)}>
                <Link
                  href={menu.href}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 hover:bg-primary-light hover:text-primary ${
                    activeMenu === menu.label ? "bg-primary-light text-primary" : "text-ink/80"
                  }`}
                >
                  {menu.label}
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      activeMenu === menu.label ? "rotate-180 text-primary" : "text-ink/40"
                    }`}
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
            ))}
            {SIMPLE_NAV_ITEMS.map((item) => (
              <li key={item.label} onMouseEnter={closeMenuImmediately}>
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors duration-150 hover:bg-primary-light hover:text-primary"
                >
                  {item.label}
                </Link>
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

      {/* Desktop mega menu — always centered under the header, regardless of trigger */}
      <div className="relative hidden lg:block">
        <AnimatePresence>
          {activeConfig && (
            <motion.div
              key={activeConfig.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
              onMouseEnter={clearPendingTimeout}
              onMouseLeave={closeMenu}
              className="absolute left-1/2 top-2 z-50 w-[min(96vw,84rem)] -translate-x-1/2 px-6"
            >
              <MegaMenu config={activeConfig} onNavigate={() => setActiveMenu(null)} />
            </motion.div>
          )}
        </AnimatePresence>
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
                {MEGA_MENUS.map((menu) => (
                  <li key={menu.label} className="py-1">
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-2 py-3 text-sm font-semibold text-ink">
                        {menu.label}
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
                      <div className="flex flex-col gap-4 pb-3 pl-3">
                        {menu.columns.map((column) => (
                          <div key={column.heading}>
                            <p className="px-2 text-xs font-semibold uppercase tracking-wide text-ink/40">
                              {column.heading}
                            </p>
                            <div className="mt-1 flex flex-col">
                              {column.links.map((link) => (
                                <Link
                                  key={link.label}
                                  href={link.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="rounded-lg px-2 py-2 text-sm text-ink/70 hover:text-primary"
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                        {menu.featured && (
                          <div>
                            <p className="px-2 text-xs font-semibold uppercase tracking-wide text-primary">
                              {menu.featured.eyebrow}
                            </p>
                            <Link
                              href={menu.featured.href}
                              onClick={() => setMobileOpen(false)}
                              className="mt-1 block rounded-lg px-2 py-2 text-sm font-semibold text-ink hover:text-primary"
                            >
                              {menu.featured.title}
                            </Link>
                          </div>
                        )}
                        {menu.secondaryRoute && (
                          <Link
                            href={menu.secondaryRoute.href}
                            onClick={() => setMobileOpen(false)}
                            className="px-2 text-sm font-semibold text-primary"
                          >
                            {menu.secondaryRoute.label} →
                          </Link>
                        )}
                      </div>
                    </details>
                  </li>
                ))}
                {SIMPLE_NAV_ITEMS.map((item) => (
                  <li key={item.label} className="py-1">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-2 py-3 text-sm font-semibold text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
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
