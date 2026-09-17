export type NewsType = "Announcement" | "Press Release" | "External Coverage";

export type NewsItem = {
  type: NewsType;
  date: string;
  title: string;
  summary: string;
  topics: string[];
  outlet?: string;
  correction?: { date: string; text: string };
};

/** Also featured in the company announcements section. */
export const JULY_ANNOUNCEMENT: NewsItem = {
  type: "Announcement",
  date: "July 22, 2026",
  title:
    "Zoiko HR names current product suite trust routes and establishes editorial correction workflow.",
  summary:
    "A correction workflow and public correction model are now documented across the Zoiko HR suite. Material corrections attach to the affected item and remain dated.",
  topics: ["Trust & Security", "Company"],
  correction: {
    date: "August 1, 2026",
    text: "Entity attribution corrected from 'Zoiko Tech' to 'Zoiko HR' in the second paragraph.",
  },
};

/**
 * The design's index reads "6 items · Load more (2 remaining)" but shows only four
 * cards. The July announcement from further down the page is the fifth item, so
 * "Load more" has a real item to reveal; the sixth is not in the design.
 */
export const NEWS: NewsItem[] = [
  {
    type: "Announcement",
    date: "September 15, 2026",
    title: "Zoiko HR publishes sourced comparison methodology and comparison hub.",
    summary:
      "The comparison experience at /compare-hr is now live, covering sourced criteria, governed status vocabulary, a correction route, and a publicly documented review methodology.",
    topics: ["Company", "Product & Platform"],
  },
  {
    type: "Press Release",
    date: "September 12, 2026",
    title:
      "Zoiko HR launches public HR Glossary with editorial governance and professional-advice boundaries.",
    summary:
      "The Zoiko HR Glossary publishes definitions for HR, people operations, workforce data, and HR technology. Every term carries a named owner, review date, and explicit professional-advice boundary.",
    topics: ["Company", "Product & Platform"],
  },
  {
    type: "Announcement",
    date: "September 8, 2026",
    title:
      "Zoiko HR updates AI Assistance governance page with non-negotiable decision-authority boundary.",
    summary:
      "The AI Assistance product page now includes a human-review boundary statement and a list of consequential employment decisions that AI Assistance must not autonomously make or recommend.",
    topics: ["Trust & Security", "Product & Platform"],
  },
  {
    type: "External Coverage",
    date: "August 29, 2026",
    outlet: "HR Technology Quarterly",
    title: "Governing HR data at scale: what transparency in workforce platforms looks like.",
    summary:
      "Third-party reporting on data governance expectations in modern HR software — linked from the original publication.",
    topics: ["Trust & Security"],
  },
  JULY_ANNOUNCEMENT,
];

export const TOPICS = ["Company", "Product & Platform", "Trust & Security"];
