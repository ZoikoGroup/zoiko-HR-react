export type SitemapLink = {
  label: string;
  description: string;
  href: string;
};

export type SitemapGroup = {
  id: string;
  title: string;
  description: string;
  /** Alternating light/dark bands, as the design shows them. */
  tone: "light" | "dark";
  image: { src: string; alt: string; label: string };
  links: SitemapLink[];
};

export const SITEMAP_GROUPS: SitemapGroup[] = [
  {
    id: "product-platform",
    title: "Product & Platform",
    description: "Core HR product capabilities and platform features.",
    tone: "light",
    image: {
      src: "/images/sitemap/product-platform.png",
      alt: "Someone reviewing printed HR documents at a desk",
      label: "Reviewing HR documents",
    },
    links: [
      {
        label: "Platform Overview",
        description: "Explore the full Zoiko HR platform and what it does.",
        href: "/platform",
      },
      {
        label: "Core HR",
        description: "Employee records, org structure, and foundational HR data.",
        href: "/core-hr",
      },
      {
        label: "Employee Records",
        description: "Centralised, permission-sensitive workforce data.",
        href: "/employee-records",
      },
      {
        label: "Onboarding & Lifecycle",
        description: "Structured journeys from offer acceptance to offboarding.",
        href: "/onboarding-lifecycle",
      },
      {
        label: "Leave & Attendance",
        description: "Time off, absence tracking, and attendance policies.",
        href: "/leave-attendance",
      },
      {
        label: "Workflows & Approvals",
        description: "Configurable approval chains and automated HR workflows.",
        href: "/workflows-approvals",
      },
      {
        label: "AI Assistance",
        description: "AI-powered features where approved across the platform.",
        href: "/ai-assistance",
      },
      {
        label: "Zoiko Insights",
        description: "People analytics and workforce reporting dashboards.",
        href: "/integrations/zoiko-insights",
      },
      {
        label: "Pricing",
        description: "Plans, packaging, and how to get a quote.",
        href: "/pricing",
      },
      {
        label: "Global HR Management",
        description: "Multi-country, multi-entity HR operations in one place.",
        href: "/global-hr-management",
      },
    ],
  },
  {
    id: "solutions",
    title: "Solutions",
    description: "Outcome- and audience-led paths to the right Zoiko HR fit.",
    tone: "dark",
    image: {
      src: "/images/sitemap/solutions.png",
      alt: "A team working together around a boardroom table",
      label: "Team meeting around a table",
    },
    links: [
      {
        label: "Solutions Overview",
        description: "All solutions and use cases in one view.",
        href: "/solutions",
      },
      {
        label: "Growing Businesses",
        description: "HR foundations for companies scaling fast.",
        href: "/growing-businesses",
      },
      {
        label: "Global Organizations",
        description: "Cross-border workforce management at scale.",
        href: "/global-organizations",
      },
      {
        label: "Multi-Entity Enterprises",
        description: "Connected HR across multiple legal entities.",
        href: "/multi-entity-enterprises",
      },
      {
        label: "Managers",
        description: "Self-service and visibility for people managers.",
        href: "/managers",
      },
      {
        label: "Connect HR, Time & Payroll",
        description: "Unified data flow between HR, time, and payroll systems.",
        href: "/connect-hr",
      },
      {
        label: "Global Expansion",
        description: "HR infrastructure for entering new markets.",
        href: "/global-expansion",
      },
      {
        label: "Mid-Market Organizations",
        description: "Structured HR for complex, growing teams.",
        href: "/mid-market",
      },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    description: "Education, evaluation support, and ongoing enablement.",
    tone: "light",
    image: {
      src: "/images/sitemap/resources.png",
      alt: "A leader presenting performance charts to a seated team",
      label: "Presenting to a team",
    },
    links: [
      {
        label: "Resource Center",
        description: "Guides, templates, and learning content for HR professionals.",
        href: "/resource-center",
      },
      {
        label: "Product Tour",
        description: "See Zoiko HR in action without a sales call.",
        href: "/product-tour",
      },
      {
        label: "HR Glossary",
        description: "Plain-language definitions of common HR terms and concepts.",
        href: "/hr-glossary",
      },
      {
        label: "Customer Stories",
        description: "How organizations use Zoiko HR.",
        href: "/customer-stories",
      },
      {
        label: "Compare Zoiko HR",
        description: "Side-by-side comparisons to help evaluate your options.",
        href: "/compare-hr",
      },
      {
        label: "Product Updates",
        description: "Release notes and new feature announcements.",
        href: "/product-updates",
      },
      {
        label: "FAQ",
        description: "Answers to common questions about the platform.",
        href: "/resources/faq",
      },
      {
        label: "Developer Documentation",
        description: "API references, webhooks, and integration guides.",
        href: "/developer-documentation",
      },
    ],
  },
  {
    id: "company",
    title: "Company",
    description: "Institutional information, team, and company culture.",
    tone: "dark",
    image: {
      src: "/images/sitemap/company.png",
      alt: "Colleagues in discussion across a meeting table",
      label: "Colleagues in discussion",
    },
    links: [
      {
        label: "Company Overview",
        description: "Who Zoiko HR is, what it stands for, and where it operates.",
        href: "/company",
      },
      {
        label: "About Zoiko HR",
        description: "Mission, approach, and platform principles.",
        href: "/about",
      },
      {
        label: "Leadership",
        description: "Executive team and company leadership.",
        href: "/leadership",
      },
      {
        label: "Careers",
        description: "Open roles and working at Zoiko HR.",
        href: "/careers",
      },
      {
        label: "Partners",
        description: "Partner ecosystem and partnership opportunities.",
        href: "/partners",
      },
      {
        label: "Company Locations",
        description: "Where Zoiko HR teams and offices are based.",
        href: "/company/locations",
      },
      {
        label: "Contact",
        description: "General inquiries, media, partnerships, and support routes.",
        href: "/contact-us",
      },
      {
        label: "About Zoiko Group",
        description: "The broader Zoiko Group and its businesses.",
        href: "/about-zoiko-group",
      },
    ],
  },
  {
    id: "trust-legal-privacy",
    title: "Trust, Legal & Privacy",
    description: "Policies, assurances, and legal documents governing Zoiko HR.",
    tone: "light",
    image: {
      src: "/images/sitemap/trust-legal-privacy.png",
      alt: "Two people talking across a desk in a quiet office",
      label: "A conversation across a desk",
    },
    links: [
      {
        label: "Security & Privacy",
        description: "Overview of Zoiko HR's security program and privacy stance.",
        href: "/security-privacy",
      },
      {
        label: "Trust Center",
        description:
          "Enterprise trust documentation, compliance context, and legal resources.",
        href: "/trust-center",
      },
      {
        label: "Cookie Notice",
        description: "Cookie categories, purposes, and preference controls.",
        href: "/cookie-notice",
      },
      {
        label: "Terms of Service",
        description: "Terms governing use of Zoiko HR services.",
        href: "/terms-of-service",
      },
      {
        label: "Legal Notices",
        description: "Trademarks, disclaimers, and related legal information.",
        href: "/legal-notices",
      },
      {
        label: "Data Processing Addendum",
        description:
          "Customer data processing terms and controller/processor definitions.",
        href: "/data-processing-addendum",
      },
      {
        label: "AI Governance",
        description: "Scope, oversight, and data-use boundaries for AI features.",
        href: "/ai-governance",
      },
      {
        label: "Accessibility",
        description:
          "Zoiko HR's accessibility statement and conformance information.",
        href: "/accessibility",
      },
    ],
  },
  {
    id: "support-contact",
    title: "Support & Contact",
    description: "Help, direct next actions, and contact routes for every audience.",
    tone: "dark",
    image: {
      src: "/images/sitemap/support-contact.png",
      alt: "An adviser going through a document with a colleague",
      label: "Going through a document together",
    },
    links: [
      {
        label: "Support Center",
        description: "Help articles, troubleshooting, and self-service resources.",
        href: "/help-center",
      },
      {
        label: "Contact Us",
        description: "General inquiries, media, partnerships, and privacy requests.",
        href: "/contact-us",
      },
      {
        label: "Media Inquiries",
        description: "Press and analyst contact route.",
        href: "/media-inquiries",
      },
      {
        label: "Partner with Us",
        description: "Start a conversation about becoming a Zoiko HR partner.",
        href: "/partner-with-us",
      },
      {
        label: "Contact Support",
        description: "Raise a support ticket or reach the support team.",
        href: "/contact-support",
      },
      {
        label: "Contact Zoiko HR",
        description: "Connect HR, time, and payroll inquiry routes.",
        href: "/contact-zoiko-hr",
      },
    ],
  },
];

export const QUICK_ACCESS_LINKS: { label: string; href: string }[] = [
  { label: "Privacy Notice", href: "/privacy-notice" },
  { label: "Cookie Notice", href: "/cookie-notice" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Acceptable Use Policy", href: "/acceptable-use-policy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Security Reporting", href: "/security-reporting" },
  { label: "Support Center", href: "/help-center" },
  { label: "Trust Center", href: "/trust-center" },
];
