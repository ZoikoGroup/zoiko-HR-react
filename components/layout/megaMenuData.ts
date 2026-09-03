export type MegaMenuLink = {
  label: string;
  description: string;
  href: string;
};

export type MegaMenuColumn = {
  heading: string;
  links: MegaMenuLink[];
};

export type MegaMenuFeatured = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  image?: string;
};

export type MegaMenuConfig = {
  label: string;
  href: string;
  heading: string;
  intro: string;
  columns: MegaMenuColumn[];
  featured?: MegaMenuFeatured;
  secondaryRoute?: { label: string; href: string; note?: string };
  ruleNote?: string;
};

export const MEGA_MENUS: MegaMenuConfig[] = [
  {
    label: "Platform",
    href: "/platform",
    heading: "Explore the Zoiko HR Platform",
    intro:
      "One governed HR platform for workforce records, employee lifecycle processes, organizational administration, self-service, workflows, reporting, and global operations.",
    columns: [
      {
        heading: "Foundation",
        links: [
          { label: "Platform Overview", description: "See the connected HR platform", href: "/platform" },
          { label: "Core HR", description: "Build a structured HR foundation", href: "/core-hr" },
          { label: "Employee Records", description: "Employee profiles and full history", href: "/employee-records" },
          { label: "Organization Management", description: "Model entities, teams, and structure", href: "/organization-management" },
        ],
      },
      {
        heading: "Workforce Operations",
        links: [
          { label: "Onboarding & Lifecycle", description: "Coordinate onboarding and employee transitions", href: "/onboarding-lifecycle" },
          { label: "Leave & Attendance", description: "Manage leave and attendance policies", href: "/leave-attendance" },
          { label: "Documents & Policies", description: "Control workforce documents and policies", href: "/documents-policies" },
          { label: "Workflows & Approvals", description: "Configure routing, approvals, and evidence", href: "/workflows-approvals" },
        ],
      },
      {
        heading: "Experience & Intelligence",
        links: [
          { label: "Employee & Manager Self-Service", description: "Role-appropriate access and self-service", href: "/self-service" },
          { label: "Performance Management", description: "Run structured reviews and goals", href: "/performance-management" },
          { label: "Reporting & Insights", description: "Create permission-sensitive workforce reports", href: "/reporting-insights" },
          { label: "Governed AI Assistance", description: "Governed AI search and drafting", href: "/ai-assistance" },
        ],
      },
    ],
    featured: {
      eyebrow: "Featured",
      title: "Global HR Management",
      description: "Consistent operations across entities and jurisdictions.",
      ctaLabel: "Explore Global HR",
      href: "/global-hr-management",
      image: "/mega-menu.png",
    },
    secondaryRoute: {
      label: "Take the Product Tour",
      href: "/product-tour",
      note: "Text link only; no signup wall before the tour.",
    },
  },
  {
    label: "Solutions",
    href: "/solutions",
    heading: "Find the Right Zoiko HR Solution",
    intro:
      "Explore Zoiko HR by organizational complexity, operating responsibility, and the HR outcomes your organization needs to achieve.",
    columns: [
      {
        heading: "By Organization",
        links: [
          { label: "Growing Businesses", description: "Replace spreadsheets with scale-ready HR", href: "/growing-businesses" },
          { label: "Mid-Market Organizations", description: "Standardize records across complex teams", href: "/mid-market" },
          { label: "Global Organizations", description: "Coordinate administration across jurisdictions", href: "/global-organizations" },
          { label: "Multi-Entity Enterprises", description: "Manage entities and reporting structures", href: "/multi-entity-enterprises" },
        ],
      },
      {
        heading: "By Role",
        links: [
          { label: "HR Teams", description: "Centralize records, workflows, and reporting", href: "/hr-teams" },
          { label: "Business Leaders", description: "Gain visibility into workforce activity", href: "/business-leaders" },
          { label: "Managers", description: "Complete approvals and team administration", href: "/managers" },
          { label: "Employees", description: "Access personal records and requests", href: "/employees" },
        ],
      },
      {
        heading: "By Business Priority",
        links: [
          { label: "Replace Spreadsheets & Legacy HR", description: "Move fragmented HR into governance", href: "/replace-spreadsheets" },
          { label: "Standardize HR Operations", description: "Create consistent processes and records", href: "/standardize-hr-operations" },
          { label: "Support Global Expansion", description: "Add entities, locations, and configuration", href: "/global-expansion" },
          { label: "Connect HR, Time & Payroll", description: "Coordinate HR, time, and payroll", href: "/connect-hr" },
        ],
      },
    ],
    featured: {
      eyebrow: "Featured",
      title: "Implementation & Migration",
      description: "A guided path from discovery to adoption.",
      ctaLabel: "Explore Implementation",
      href: "/implementation-guide",
      image: "/mega-menu.png",
    },
  },
  {
    label: "Integrations",
    href: "/integrations",
    heading: "Connect Zoiko HR",
    intro:
      "Use Zoiko HR independently or connect authorized workforce information and workflows with approved Zoiko and third-party systems.",
    columns: [
      {
        heading: "Zoiko Ecosystem",
        links: [
          { label: "ZoikoTime", description: "Connect schedule and attendance data", href: "/hr-people-teams" },
          { label: "Zoiko Payroll", description: "Feed employee payroll preparation data", href: "/integrations/zoiko-payroll" },
          { label: "Zoiko Docs Pro", description: "Connect documentation and distribution workflows", href: "/integrations/zoiko-docs-pro" },
          { label: "Zoiko Comply", description: "Connect policies and compliance evidence", href: "/integrations/zoiko-comply" },
          { label: "Zoiko Insights", description: "Extend cross-product workforce intelligence", href: "/integrations/zoiko-insights" },
          { label: "ZoikoID", description: "Support identity and access control", href: "/integrations/zoikoid" },
          { label: "Zoiko One", description: "Use the integrated business suite", href: "/integrations/zoiko-one" },
        ],
      },
      {
        heading: "Connect & Control",
        links: [
          { label: "Integrations Overview", description: "Understand connection models and controls", href: "/integrations" },
          { label: "Identity & Single Sign-On", description: "Connect approved identity providers securely", href: "/integrations/identity-sso" },
          { label: "Data Import & Export", description: "Prepare, validate, and export data", href: "/integrations/data-import-export" },
          { label: "API & Developer Documentation", description: "Access API and integration guidance", href: "/developers" },
          { label: "Integration Security", description: "Review authentication and access controls", href: "/integrations/security" },
        ],
      },
    ],
    featured: {
      eyebrow: "Featured",
      title: "Controlled Interoperability",
      description: "Explicit permissions and defined data contracts — never mandatory suite adoption.",
      ctaLabel: "Explore All Integrations",
      href: "/integrations",
      image: "/mega-menu.png",
    },
    ruleNote:
      "Zoiko One must never be described as required to purchase, deploy, or operate standalone Zoiko HR.",
  },
  {
    label: "Resources",
    href: "/resource-center",
    heading: "Learn, Evaluate, and Get Support",
    intro:
      "Explore HR guidance, product evidence, implementation resources, trust information, documentation, and customer support.",
    columns: [
      {
        heading: "Learn",
        links: [
          { label: "Resource Center", description: "Browse guides, research, and checklists", href: "/resource-center" },
          { label: "HR Guides", description: "Practical guidance for HR teams", href: "/hr-guides" },
          { label: "HR Glossary", description: "Clear definitions of HR terms", href: "/hr-glossary" },
          { label: "FAQs", description: "Direct answers to common questions", href: "/resources/faq" },
        ],
      },
      {
        heading: "Evaluate",
        links: [
          { label: "Product Tour", description: "Explore a self-guided product tour", href: "/product-tour" },
          { label: "Customer Stories", description: "Review verified implementations and outcomes", href: "/customer-stories" },
          { label: "Implementation Guide", description: "Understand configuration, migration, and launch", href: "/implementation-guide" },
          { label: "Compare Zoiko HR", description: "Compare Zoiko HR to alternatives", href: "/compare" },
        ],
      },
      {
        heading: "Trust",
        links: [
          { label: "Trust Center", description: "Access approved security and trust", href: "/trust-center" },
          { label: "Security & Privacy", description: "Review access controls and protection", href: "/security-privacy" },
          { label: "AI Governance", description: "Understand AI boundaries and review", href: "/ai-governance" },
          { label: "Accessibility", description: "Review accessibility commitments and routes", href: "/accessibility" },
        ],
      },
      {
        heading: "For Customers",
        links: [
          { label: "Help Center", description: "Find product support and troubleshooting", href: "/help-center" },
          { label: "Documentation", description: "Access product and integration documentation", href: "/documentation" },
          { label: "Product Updates", description: "Review release notes and changes", href: "/product-updates" },
          { label: "Service Status", description: "View service availability and notices", href: "/service-status" },
        ],
      },
    ],
  },
  {
    label: "Company",
    href: "/about",
    heading: "About Zoiko HR",
    intro:
      "Learn why Zoiko HR exists, how the company operates, who is behind the platform, and how to work with or contact the organization.",
    columns: [
      {
        heading: "About",
        links: [
          { label: "About Zoiko HR", description: "Our mission, vision, and principles", href: "/about" },
          { label: "Leadership", description: "Meet our approved leadership team", href: "/leadership" },
          { label: "Zoiko Group", description: "Our place in the Zoiko Group", href: "/company/about-zoiko-group" },
        ],
      },
      {
        heading: "Work With Us",
        links: [
          { label: "Partners", description: "Explore technology and channel partnerships", href: "/partners" },
          { label: "Careers", description: "Explore open roles at Zoiko", href: "/company/careers" },
        ],
      },
      {
        heading: "News & Contact",
        links: [
          { label: "Newsroom", description: "Read approved company announcements", href: "/newsroom" },
          { label: "Press & Media", description: "Access media contacts and resources", href: "/company/press" },
          { label: "Contact Us", description: "Reach sales, support, or media", href: "/contact-zoiko-hr" },
          { label: "Locations", description: "View our approved office locations", href: "/company/locations" },
        ],
      },
    ],
    featured: {
      eyebrow: "Featured",
      title: "Mission & Vision",
      description: "Why Zoiko HR exists, and where it's headed.",
      ctaLabel: "Read About Zoiko HR",
      href: "/about",
      image: "/mega-menu.png",
    },
  },
];
