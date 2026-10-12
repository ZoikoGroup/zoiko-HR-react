// Runtime configuration and approved copy for the public chatbot
// (Zoiko HR Chatbot Detailed Wireframe v1.0, §9.2). Every visitor-facing
// destination comes from env so routes aren't hard-coded into markup.
// An env var set to an empty string disables that destination — the UI then
// hides it (or falls back) rather than rendering a dead link.

function configuredUrl(value: string | undefined, fallback: string): string | null {
  if (value === undefined) return fallback;
  return value.trim() || null;
}

export const CHAT_CONFIG = {
  apiBase: process.env.NEXT_PUBLIC_ASSISTANT_API_URL || "http://localhost:8000",
  bookingUrl: configuredUrl(process.env.NEXT_PUBLIC_CHAT_BOOKING_URL, "/book-a-demo"),
  contactSalesUrl: configuredUrl(process.env.NEXT_PUBLIC_CHAT_CONTACT_SALES_URL, "/contact-sales"),
  contactSupportUrl: configuredUrl(process.env.NEXT_PUBLIC_CHAT_CONTACT_SUPPORT_URL, "/contact-support"),
  privacyUrl: configuredUrl(process.env.NEXT_PUBLIC_CHAT_PRIVACY_URL, "/privacy-notice"),
  // Matches the backend's PublicAskRequest.question max_length.
  maxMessageLength: 500,
} as const;

export const TASK_CARDS = [
  {
    id: "TC-01",
    title: "Explore Zoiko HR",
    subtext: "What it is, who it’s for and key benefits",
    query: "What is Zoiko HR and who is it designed for?",
    icon: "users",
    tone: "blue",
  },
  {
    id: "TC-02",
    title: "Features & Solutions",
    subtext: "Explore Zoiko HR capabilities",
    query: "What features and solutions does Zoiko HR offer?",
    icon: "layers",
    tone: "green",
  },
  {
    id: "TC-03",
    title: "Pricing & Plans",
    subtext: "Compare plans and what’s included",
    query: "What are Zoiko HR’s current pricing plans?",
    icon: "tag",
    tone: "purple",
  },
  {
    id: "TC-04",
    title: "Talk to Our Team",
    subtext: "Book a demo or contact sales",
    query: null,
    icon: "headset",
    tone: "orange",
  },
] as const;

export const STARTER_PROMPTS = [
  { id: "P-01", label: "What is Zoiko HR?" },
  { id: "P-02", label: "Who is it for?" },
  { id: "P-03", label: "What are the pricing plans?" },
  { id: "P-04", label: "How does onboarding work?" },
  { id: "P-05", label: "What integrations are available?" },
  { id: "P-06", label: "Can I speak to sales?", salesHandoff: true },
] as const;

export type Source = { title: string; excerpt: string };

export type PublicAskResponse = {
  answer_text: string;
  answer_type: string;
  confidence_state: string;
  sources: Source[];
};

export async function askPublicAssistant(
  question: string,
  history: { question: string; answer: string }[],
  sessionId: string | undefined,
  signal?: AbortSignal
): Promise<PublicAskResponse & { elapsedMs: number }> {
  const started = performance.now();
  const res = await fetch(`${CHAT_CONFIG.apiBase}/assistant/public/ask`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question, history, session_id: sessionId }),
    signal,
  });
  if (!res.ok) {
    const err = new Error(`Request failed with status ${res.status}`) as Error & { status?: number };
    err.status = res.status;
    throw err;
  }
  const body: PublicAskResponse = await res.json();
  return { ...body, elapsedMs: performance.now() - started };
}

type Gtag = (command: "event", name: string, params: Record<string, unknown>) => void;

// Product analytics (§9.1) — properties are IDs and buckets only, never
// message text. No-ops when the site's gtag hasn't loaded / was declined.
export function track(event: string, props: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  try {
    gtag?.("event", event, props);
  } catch {
    // Analytics must never break the chat.
  }
}

export function lengthBand(n: number) {
  if (n <= 20) return "1-20";
  if (n <= 80) return "21-80";
  if (n <= 200) return "81-200";
  return "201+";
}
