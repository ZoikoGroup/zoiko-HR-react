/** Shared Black Friday 2026 offer data — every price on the page derives from here. */

export const BF = {
  navy: "#102a43",
  navyDeep: "#0a1a2c",
  navyCard: "#1b3b5e",
  mint: "#3de0b0",
  mintInk: "#06281a",
  yellow: "#eec23b",
  blue: "#3563f6",
  red: "#e5484d",
  green: "#14a86b",
  tint: "#f6f7fb",
  rowTint: "#f2fbf6",
} as const;

export const DISCOUNT = 0.25;
export const PROMO_CODE = "BF25";

/** Countdown target. Time zone is still "[time zone]" in the design — confirm before launch. */
export const SALE_START = "2026-11-27T00:00:00";

/**
 * Where the "Claim 25% off <plan>" buttons go. The design has no checkout URL,
 * so this routes to Contact Sales until a real checkout link exists.
 */
export const claimHref = (planId: string) =>
  `/contact-sales?plan=${planId}&promo=${PROMO_CODE}`;

export type Plan = {
  id: "core" | "advanced" | "enterprise";
  name: string;
  short: string;
  eyebrow: string;
  listPrice: number;
  minimum: number;
  features: string[];
  popular?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: "core",
    name: "Zoiko HR Core",
    short: "Core",
    eyebrow: "For growing teams",
    listPrice: 6,
    minimum: 10,
    features: [
      "Employee records & organisation",
      "Documents & HR requests",
      "Leave & absence",
      "Role-based access",
      "Employee self-service",
      "Email support",
    ],
  },
  {
    id: "advanced",
    name: "Zoiko HR Advanced",
    short: "Advanced",
    eyebrow: "Most popular",
    listPrice: 10,
    minimum: 25,
    popular: true,
    features: [
      "Everything in Core",
      "Configurable change workflows",
      "Performance & reviews",
      "Reporting",
      "Manager self-service",
      "Priority support",
    ],
  },
  {
    id: "enterprise",
    name: "Zoiko HR Enterprise",
    short: "Enterprise",
    eyebrow: "Multi-entity & global",
    listPrice: 16,
    minimum: 100,
    features: [
      "Everything in Advanced",
      "Multi-entity & regional setup",
      "Advanced permissions",
      "Audit history exports",
      "Implementation support",
      "Named success manager",
    ],
  },
];

export const salePrice = (p: Plan) => p.listPrice * (1 - DISCOUNT);

export const usd = (n: number) =>
  `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
