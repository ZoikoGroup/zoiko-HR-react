"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const TABS = [
  {
    label: "Core HR & Organization",
    subheading:
      "One structured record for every employee and the org chart around them.",
    bullets: [
      "Employee profiles & effective-dated records",
      "Teams, departments & entities",
      "Roles, managers & reporting lines",
      "Locations & jurisdictions",
    ],
    linkLabel: "Explore all platform capabilities",
    href: "/platform",
    image: "/images/home/lifecycle-core-hr.png",
  },
  {
    label: "Onboarding & Lifecycle",
    subheading:
      "Guide every employee from offer to exit with structured, repeatable workflows.",
    bullets: [
      "Structured onboarding checklists",
      "Role and access provisioning",
      "Transfers, promotions & offboarding",
      "Effective-dated lifecycle events",
    ],
    linkLabel: "Explore onboarding & lifecycle",
    href: "/platform/onboarding-lifecycle",
    image: "/images/home/lifecycle-onboarding.png",
  },
  {
    label: "Leave & Attendance",
    subheading:
      "Track leave, time-off and attendance with policy-aware accuracy.",
    bullets: [
      "Configurable leave policies by entity",
      "Manager approval workflows",
      "Balance tracking & accruals",
      "Attendance and absence reporting",
    ],
    linkLabel: "Explore leave & attendance",
    href: "/platform/leave-attendance",
    image: "/images/home/lifecycle-leave.png",
  },
  {
    label: "Documents, Policies & Approvals",
    subheading:
      "Keep documents, policies and approvals structured and retrievable.",
    bullets: [
      "Document requests & retention",
      "Policy distribution & acknowledgment",
      "Configurable approval workflows",
      "Full audit trail on every action",
    ],
    linkLabel: "Explore documents & approvals",
    href: "/platform/documents-approvals",
    image: "/images/home/lifecycle-documents.png",
  },
  {
    label: "Performance & Self-Service",
    subheading: "Give employees and managers structured performance tools.",
    bullets: [
      "Goal setting & review cycles",
      "Manager and peer feedback",
      "Employee self-service actions",
      "Performance history & records",
    ],
    linkLabel: "Explore performance & self-service",
    href: "/platform/performance-self-service",
    image: "/images/home/lifecycle-performance.png",
  },
  {
    label: "Reporting & Insights",
    subheading: "See workforce data the way each role is authorized to see it.",
    bullets: [
      "Permission-scoped dashboards",
      "Headcount & org reporting",
      "Compliance & audit reports",
      "Exportable, structured data",
    ],
    linkLabel: "Explore reporting & insights",
    href: "/platform/reporting-insights",
    image: "/images/home/lifecycle-reporting.png",
  },
];

export function LifecycleTabsSection() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Everything required to manage the employee lifecycle.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Bring workforce information, organizational structure, HR
              processes, documents, approvals, employee access and reporting
              into one connected platform.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-b border-slate-200">
            {TABS.map((t, i) => (
              <button
                key={t.label}
                type="button"
                onClick={() => setActive(i)}
                className={`relative -mb-px whitespace-nowrap pb-3 text-sm font-medium transition-colors duration-200 ${
                  active === i
                    ? "text-primary"
                    : "text-ink/50 hover:text-ink"
                }`}
              >
                {t.label}
                {active === i && (
                  <motion.span
                    layoutId="lifecycle-tab-underline"
                    className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-primary"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <p className="text-xl font-semibold leading-snug text-ink">
                {tab.subheading}
              </p>
              <ul className="mt-6 space-y-3">
                {tab.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3">
                        <path
                          d="M4 10l4 4 8-8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-sm text-ink/70">{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={tab.href}
                className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                {tab.linkLabel}
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab.image}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <PlaceholderImage
                src={tab.image}
                alt={tab.subheading}
                label={tab.label}
                className="aspect-[4/3] w-full rounded-2xl border border-slate-100 shadow-xl shadow-slate-900/10"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
