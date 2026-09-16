import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";

type SitemapGroup = {
  title: string;
  links: { label: string; href: string }[];
};

/**
 * Human-readable sitemap, grouped the same way as the footer navigation.
 * Keep in sync when new routes are added under app/.
 */
const SITEMAP_GROUPS: SitemapGroup[] = [
  {
    title: "Platform",
    links: [
      { label: "Platform Overview", href: "/platform" },
      { label: "Core HR", href: "/core-hr" },
      { label: "Employee Records", href: "/employee-records" },
      { label: "Onboarding & Lifecycle", href: "/onboarding-lifecycle" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Solutions Overview", href: "/solutions" },
      { label: "Growing Businesses", href: "/growing-businesses" },
      { label: "Mid-Market Organizations", href: "/mid-market" },
      { label: "Global Organizations", href: "/global-organizations" },
      { label: "Multi-Entity Enterprises", href: "/multi-entity-enterprises" },
      { label: "HR Teams", href: "/hr-teams" },
      { label: "HR People & Teams", href: "/hr-people-teams" },
      { label: "Managers", href: "/managers" },
      { label: "Connect HR, Time & Payroll", href: "/connect-hr" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resource Center", href: "/resource-center" },
      { label: "Product Tour", href: "/product-tour" },
      { label: "HR Guides", href: "/hr-guides" },
      { label: "Customer Stories", href: "/customer-stories" },
      { label: "Implementation Guide", href: "/Implementation-guide" },
      { label: "Compare Zoiko HR", href: "/compare-hr" },
      { label: "FAQ", href: "/faq" },
      { label: "Resources FAQ", href: "/resources/faq" },
      { label: "Help Center", href: "/help-center" },
      { label: "Documentation", href: "/documentation" },
      { label: "Administrator Guide", href: "/administrator-guide" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Zoiko HR", href: "/about" },
      { label: "About Zoiko Group", href: "/company/about-zoiko-group" },
      { label: "Careers", href: "/company/careers" },
      { label: "Leadership", href: "/leadership" },
      { label: "Partners", href: "/partners" },
      { label: "Newsroom", href: "/newsroom" },
    ],
  },
  {
    title: "Trust & Legal",
    links: [
      { label: "Trust Center", href: "/trust-center" },
      { label: "Privacy Notice", href: "/privacy-notice" },
      { label: "Cookie Notice", href: "/cookie-notice" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Acceptable Use Policy", href: "/acceptable-use-policy" },
      { label: "Legal Notices", href: "/legal-notices" },
    ],
  },
];

export const metadata: Metadata = {
  title: "Sitemap | Zoiko HR",
  description:
    "All pages on zoikohr.com, grouped by Platform, Solutions, Resources, Company, and Trust & Legal.",
};

export default function SitemapPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-100 bg-gradient-to-b from-primary-light/60 to-white py-16">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Zoiko HR
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Sitemap
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/70">
            Every page on zoikohr.com, organized the same way as our site
            navigation. If you cannot find what you are looking for, visit the{" "}
            <Link href="/help-center" className="font-semibold text-primary hover:underline">
              Help Center
            </Link>{" "}
            or{" "}
            <Link href="/book-a-demo" className="font-semibold text-primary hover:underline">
              book a demo
            </Link>
            .
          </p>
        </Container>
      </section>

      <Container className="grid gap-x-8 gap-y-12 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {SITEMAP_GROUPS.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">
              {group.title}
            </h2>
            <ul className="mt-4 space-y-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink/60 transition-colors duration-150 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>
    </main>
  );
}
