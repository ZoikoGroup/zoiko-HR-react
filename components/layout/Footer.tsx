import Image from "next/image";
import Link from "next/link";
import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

const FOOTER_COLUMNS: { title: string; links: string[] }[] = [
  {
    title: "Platform",
    links: [
      "Platform Overview",
      "Core HR",
      "Global HR Management",
      "Employee Records",
      "Onboarding & Lifecycle",
      "Workflows & Approvals",
      "Integrations",
      "Pricing",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Solutions Overview",
      "Growing Businesses",
      "Mid-Market Organizations",
      "Global Organizations",
      "Multi-Entity Enterprises",
      "HR Teams",
      "Connect HR, Time & Payroll",
    ],
  },
  {
    title: "Resources",
    links: [
      "Resource Center",
      "Product Tour",
      "HR Guides",
      "Customer Stories",
      "Implementation Guide",
      "Compare Zoiko HR",
      "FAQ",
    ],
  },
  {
    title: "Company",
    links: [
      "About Zoiko HR",
      "Managers",
      "About Zoiko Group",
      "Leadership",
      "Careers",
      "Partners",
      "Newsroom",
    ],
  },
  {
    title: "Support",
    links: [
      "Help Center",
      "Documentation",
      "Administrator Guide",
      "Developer Documentation",
      "Product Updates",
      "Service Status",
      "Contact Support",
    ],
  },
  {
    title: "Legal & Trust",
    links: [
      "Trust Center",
      "Security & Privacy",
      "AI Governance",
      "Accessibility",
      "Data Processing Addendum",
      "Subprocessors",
      "Security Reporting",
    ],
  },
  {
    title: "Connect",
    links: [
      "Contact Us",
      "Contact Sales",
      "Contact Support",
      "Partner With Us",
      "Media Inquiries",
      "LinkedIn",
      "YouTube",
    ],
  },
];

const LEGAL_LINKS = [
  "Privacy Notice",
  "Cookie Notice",
  "Terms of Service",
  "Acceptable Use Policy",
  "Legal Notices",
  "Sitemap",
  "Cookie Settings",
];

function slugify(label: string) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const FOOTER_LINK_OVERRIDES: Record<string, string> = {
  "Platform Overview": "/platform",
  "Core HR": "/platform/core-hr",
  "Global HR Management": "/platform/global-hr-management",
  "Onboarding & Lifecycle": "/platform/onboarding-lifecycle",
  "Connect HR, Time & Payroll": "/connect-hr",
  "About Zoiko Group": "/company/about-zoiko-group",
  FAQ: "/resources/faq",
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#102A43] text-white">
      {/* Top CTA */}
      <Container className="border-b border-white/10 py-16">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Build a stronger foundation for global people operations.
              </h2>
              <p className="mt-4 max-w-md text-white/70">
                See how Zoiko HR can centralize workforce information,
                structure HR processes, improve employee and manager access,
                and connect your people operations.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/book-a-demo">Book a Demo</Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
                >
                  Request Pricing
                </Button>
                <Link
                  href="/resources/product-tour"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-white/80 hover:text-primary"
                >
                  Take the Product Tour <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            <PlaceholderImage
              src="/images/home/footer.png"
              alt="Team celebrating a milestone together"
              label="Team celebrating together"
              className="w-full rounded-2xl shadow-2xl shadow-black/30 "
            />
          </div>
        </Reveal>
      </Container>

      {/* Brand row */}
      <Container className="flex flex-col gap-2 border-b border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Image src="/logo.png" alt="Zoiko HR" width={140} height={40} className="h-10 w-auto" />
          <p className="mt-2 max-w-md text-sm text-white/60">
            A global HR management platform for structured, secure and
            accountable people operations.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-white/60">
          <span>Global · English</span>
          <Link
            href="/sign-in"
            className="inline-flex items-center gap-1 font-semibold text-white hover:text-primary"
          >
            Sign In <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>

      {/* Link columns */}
      <Container className="grid grid-cols-2 gap-x-8 gap-y-10 border-b border-white/10 py-12 sm:grid-cols-4">
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-semibold text-white">{col.title}</p>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <Link
                    href={FOOTER_LINK_OVERRIDES[link] ?? `/${slugify(link)}`}
                    className="text-sm text-white/60 transition-colors duration-150 hover:text-primary"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      {/* Headquarters */}
      <Container className="grid grid-cols-1 gap-8 border-b border-white/10 py-10 sm:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-white">Headquarters</p>
          <p className="mt-3 text-sm text-white/60">
            1401 21st Street, Suite R
            <br />
            Sacramento, CA 95811
            <br />
            USA
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">
            European Headquarters
          </p>
          <p className="mt-3 text-sm text-white/60">
            167–169 Great Portland Street
            <br />
            5th Floor
            <br />
            London W1W 5PF
            <br />
            UK
          </p>
        </div>
      </Container>

      {/* Bottom bar */}
      <Container className="py-8">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link}
              href={`/${slugify(link)}`}
              className="underline decoration-white/20 underline-offset-4 transition-colors duration-150 hover:text-primary"
            >
              {link}
            </Link>
          ))}
        </div>
        <p className="mt-6 text-xs text-white/40">
          © {year} Zoiko HR. Zoiko HR is a platform owned and operated by
          Zoiko Tech Inc., a Zoiko Group company. All rights reserved.
        </p>
        <p className="mt-3 max-w-4xl text-xs text-white/40">
          Zoiko HR provides software for workforce administration. It does
          not provide legal, tax, payroll, employment, compliance, or
          professional advice and does not guarantee compliance with any
          law. Customers remain responsible for their policies, employment
          decisions, configurations, and compliance obligations.
        </p>
        <p className="mt-2 max-w-4xl text-xs text-white/40">
          Product capabilities, integrations, hosting, implementation,
          support, and availability may vary by plan, contract, or
          configuration and jurisdiction.
        </p>
      </Container>
    </footer>
  );
}
