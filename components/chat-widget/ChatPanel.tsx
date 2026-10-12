"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CHAT_CONFIG,
  STARTER_PROMPTS,
  TASK_CARDS,
  askPublicAssistant,
  lengthBand,
  track,
  type Source,
} from "./chatConfig";

/**
 * Public website chatbot panel — Zoiko HR Chatbot Detailed Wireframe v1.0.
 *
 * Layout (§1.2): CH-01 header pinned top; CH-02…CH-06 (intro, task cards,
 * welcome, starter prompts, demo CTA) inside the single scrollable pane;
 * CH-07 composer + CH-08 trust footer pinned bottom. Once the first turn is
 * sent, the first-run blocks give way to the conversation itself.
 */

type Message = {
  id: string;
  role: "user" | "assistant";
  text: string;
  sources?: Source[];
  answerType?: string;
  salesHandoff?: boolean;
};

type SubmitOptions = { salesHandoff?: boolean };

type ChatError = { message: string; question: string; options: SubmitOptions };

const SESSION_ID_KEY = "zoiko_public_assistant_session_id";
const TRANSCRIPT_KEY = "zoiko_public_assistant_transcript";
const HISTORY_PAIRS = 3;
const MAX_LEN = CHAT_CONFIG.maxMessageLength;

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

function newId() {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
}

// Session-scoped (not localStorage): an anonymous reference that ends with
// the browser session, per the privacy contract in §7.
function getOrCreateSessionId(): string | undefined {
  try {
    const existing = window.sessionStorage.getItem(SESSION_ID_KEY);
    if (existing) return existing;
    const id = newId();
    window.sessionStorage.setItem(SESSION_ID_KEY, id);
    return id;
  } catch {
    return undefined;
  }
}

function loadTranscript(): { startedAt: string; messages: Message[] } {
  try {
    const raw = window.sessionStorage.getItem(TRANSCRIPT_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed.messages) && typeof parsed.startedAt === "string") return parsed;
    }
  } catch {
    // Storage blocked or corrupt — start fresh.
  }
  return { startedAt: new Date().toISOString(), messages: [] };
}

function buildHistory(messages: Message[]) {
  const pairs: { question: string; answer: string }[] = [];
  for (let i = 0; i < messages.length - 1; i++) {
    if (messages[i].role === "user" && messages[i + 1]?.role === "assistant") {
      pairs.push({ question: messages[i].text, answer: messages[i + 1].text });
    }
  }
  return pairs.slice(-HISTORY_PAIRS);
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

// ── Icons (inline so the public bundle stays dependency-free) ───────────────

function Icon({ children, className = "h-5 w-5" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

const ICONS = {
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  layers: (
    <>
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </>
  ),
  tag: (
    <>
      <path d="M12.59 2.59A2 2 0 0 0 11.17 2H4a2 2 0 0 0-2 2v7.17a2 2 0 0 0 .59 1.42l8.7 8.7a2.43 2.43 0 0 0 3.42 0l6.58-6.58a2.43 2.43 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r="1" fill="currentColor" />
    </>
  ),
  headset: (
    <>
      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
      <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </>
  ),
  shield: (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  chevronRight: <path d="m9 18 6-6-6-6" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  more: (
    <>
      <circle cx="5" cy="12" r="1.25" fill="currentColor" />
      <circle cx="12" cy="12" r="1.25" fill="currentColor" />
      <circle cx="19" cy="12" r="1.25" fill="currentColor" />
    </>
  ),
  send: (
    <>
      <path d="M14.54 21.69a.5.5 0 0 0 .94-.03l6.5-19a.5.5 0 0 0-.64-.64l-19 6.5a.5.5 0 0 0-.02.94l7.93 3.18a2 2 0 0 1 1.11 1.11z" />
      <path d="m21.85 2.15-10.94 10.94" />
    </>
  ),
  stop: <rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" />,
  alert: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4M12 16h.01" />
    </>
  ),
} as const;

const CARD_TONES = {
  blue: "bg-[#E8F1FD] text-[#1D5FD1]",
  green: "bg-[#E4F5EC] text-[#15803D]",
  purple: "bg-[#F1EAFE] text-[#7C3AED]",
  orange: "bg-[#FFEFE3] text-[#C2410C]",
} as const;

// Internal routes go through next/link so the root-layout widget (and its
// thread) survives the navigation; anything absolute opens in a new tab.
function ActionLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function Avatar({ size }: { size: 24 | 32 }) {
  return (
    <Image
      src="/zoikohr-icon-svg.svg"
      alt=""
      width={size}
      height={size}
      className={`${size === 32 ? "h-8 w-8" : "h-6 w-6"} flex-shrink-0`}
    />
  );
}

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--chat-blue)]";

export default function ChatPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [{ startedAt, messages }, setTranscript] = useState(loadTranscript);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState<AbortController | null>(null);
  const [error, setError] = useState<ChatError | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [salesChoiceOpen, setSalesChoiceOpen] = useState(false);
  const [showLatest, setShowLatest] = useState(false);
  const [sessionId, setSessionId] = useState(getOrCreateSessionId);

  const panelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const stickToBottomRef = useRef(true);

  const setMessages = useCallback(
    (update: (prev: Message[]) => Message[]) => setTranscript((t) => ({ ...t, messages: update(t.messages) })),
    []
  );

  const loading = pending !== null;
  const hasConversation = messages.length > 0;

  // Restore the thread across close/reopen and in-site navigation within the
  // same browser session (§6.1 Close / reopen).
  useEffect(() => {
    try {
      window.sessionStorage.setItem(TRANSCRIPT_KEY, JSON.stringify({ startedAt, messages }));
    } catch {
      // Storage blocked — thread still lives in memory for this page.
    }
  }, [startedAt, messages]);

  useEffect(() => {
    if (open) requestAnimationFrame(() => titleRef.current?.focus());
  }, [open]);

  const closePanel = useCallback(() => {
    setMenuOpen(false);
    onClose();
  }, [onClose]);

  // Scroll contract (§3.2): follow new messages unless the visitor has
  // deliberately scrolled up, in which case offer a "Latest message" jump.
  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    stickToBottomRef.current = true;
    setShowLatest(false);
  }, []);

  useEffect(() => {
    if (!hasConversation) return;
    if (stickToBottomRef.current) scrollToBottom();
    else setShowLatest(true);
  }, [messages.length, loading, hasConversation, scrollToBottom]);

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
    stickToBottomRef.current = atBottom;
    if (atBottom) setShowLatest(false);
  };

  // 1–5 line auto-expanding composer.
  useLayoutEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  }, [input, open]);

  useEffect(() => {
    if (!menuOpen) return;
    requestAnimationFrame(() => menuRef.current?.querySelector<HTMLElement>('[role="menuitem"]')?.focus());
    const onPointerDown = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node) && !menuButtonRef.current?.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [menuOpen]);

  const submit = async (rawText: string, options: SubmitOptions = {}) => {
    const question = rawText.trim().slice(0, MAX_LEN);
    if (!question || loading) return;

    setError(null);
    setSalesChoiceOpen(false);
    const history = buildHistory(messages);
    const userMessage: Message = { id: newId(), role: "user", text: question };
    setMessages((prev) => [...prev, userMessage]);
    setInput((current) => (current.trim() === question ? "" : current));
    stickToBottomRef.current = true;

    const controller = new AbortController();
    setPending(controller);
    track("chat_message_sent", { message_length_band: lengthBand(question.length), session_age_bucket: messages.length ? "returning" : "first_turn" });
    try {
      const result = await askPublicAssistant(question, history, sessionId, controller.signal);
      setMessages((prev) => [
        ...prev,
        {
          id: newId(),
          role: "assistant",
          text: result.answer_text,
          sources: result.sources,
          answerType: result.answer_type,
          salesHandoff: options.salesHandoff,
        },
      ]);
      const elapsed = result.elapsedMs;
      track("chat_response_completed", {
        knowledge_hit: result.answer_type !== "no_answer",
        response_status: result.answer_type,
        response_time_bucket: elapsed < 2000 ? "<2s" : elapsed < 5000 ? "2-5s" : ">5s",
      });
      if (options.salesHandoff) track("chat_sales_handoff", { route_type: "assistant_response", outcome: "offered" });
    } catch (e) {
      // Never leave an orphaned user bubble: the question goes back into the
      // composer so a retry can't create a duplicate turn (§6.2).
      setMessages((prev) => prev.filter((m) => m.id !== userMessage.id));
      setInput((current) => (current.trim() ? current : question));
      if ((e as Error).name === "AbortError") return;
      const status = (e as { status?: number }).status;
      const offline = typeof navigator !== "undefined" && !navigator.onLine;
      setError({
        question,
        options,
        message: offline
          ? "You appear to be offline. Your message is saved — retry when you’re back online."
          : status === 429
            ? "You’re sending questions a bit too quickly. Please wait a moment, then retry."
            : "We couldn’t load a reply.",
      });
      track("chat_error", { error_class: offline ? "offline" : status === 429 ? "rate_limited" : "network", retry_count: 0 });
    } finally {
      setPending(null);
    }
  };

  const restart = () => {
    setMenuOpen(false);
    if (hasConversation && !window.confirm("Restart the conversation? This clears the current chat.")) return;
    pending?.abort();
    try {
      window.sessionStorage.removeItem(TRANSCRIPT_KEY);
      window.sessionStorage.removeItem(SESSION_ID_KEY);
    } catch {
      // ignore
    }
    setTranscript({ startedAt: new Date().toISOString(), messages: [] });
    setSessionId(getOrCreateSessionId());
    setInput("");
    setError(null);
    setSalesChoiceOpen(false);
    requestAnimationFrame(() => titleRef.current?.focus());
  };

  const onPanelKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      // Escape closes the menu first, then the panel (CH-01 Close).
      if (menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      } else {
        closePanel();
      }
      return;
    }
    if (e.key === "Tab" && panelRef.current) {
      const focusables = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === titleRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  const onMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const items = Array.from(menuRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? []);
    const index = items.indexOf(document.activeElement as HTMLElement);
    const next = e.key === "ArrowDown" ? (index + 1) % items.length : (index - 1 + items.length) % items.length;
    items[next]?.focus();
  };

  const onCardClick = (card: (typeof TASK_CARDS)[number]) => {
    track("task_card_selected", { card_id: card.id });
    if (card.query) {
      void submit(card.query);
      return;
    }
    // TC-04: configured sales choice. If neither destination is set up,
    // fall back to an assistant turn rather than showing empty choices.
    if (CHAT_CONFIG.bookingUrl || CHAT_CONFIG.contactSalesUrl) setSalesChoiceOpen((v) => !v);
    else void submit("Can I speak to sales?", { salesHandoff: true });
  };

  const welcomeTime = new Date(startedAt).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const demoHref = CHAT_CONFIG.bookingUrl ?? CHAT_CONFIG.contactSalesUrl;

  const salesLinks = (placement: string) => (
    <div className="flex flex-wrap gap-2">
      {CHAT_CONFIG.bookingUrl && (
        <ActionLink
          href={CHAT_CONFIG.bookingUrl}
          onClick={() => {
            track("chat_demo_clicked", { placement, referral_page: window.location.pathname });
            closePanel();
          }}
          className={`inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-[var(--chat-blue)] px-4 text-sm font-semibold text-white hover:bg-[var(--chat-blue-hover)] ${FOCUS_RING}`}
        >
          Book a demo
        </ActionLink>
      )}
      {CHAT_CONFIG.contactSalesUrl && (
        <ActionLink
          href={CHAT_CONFIG.contactSalesUrl}
          onClick={() => {
            track("chat_sales_handoff", { route_type: "contact_sales", outcome: "opened" });
            closePanel();
          }}
          className={`inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-[var(--chat-border)] bg-white px-4 text-sm font-semibold text-[var(--chat-blue)] hover:bg-[var(--chat-surface-alt)] ${FOCUS_RING}`}
        >
          Contact sales
        </ActionLink>
      )}
    </div>
  );

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="zhr-chat-title"
      hidden={!open}
      onKeyDown={onPanelKeyDown}
      className="chat-panel fixed z-[60] flex flex-col overflow-hidden bg-[var(--chat-surface)] text-[var(--chat-navy)]
        max-[600px]:inset-0 max-[600px]:h-[100dvh] max-[600px]:w-screen
        min-[601px]:bottom-[92px] min-[601px]:right-4 min-[601px]:h-[min(780px,calc(100dvh-108px))] min-[601px]:w-[min(480px,calc(100vw-32px))]
        min-[601px]:rounded-[18px] min-[601px]:border min-[601px]:border-[var(--chat-border)] min-[601px]:shadow-[0_24px_48px_-12px_rgba(16,27,60,0.28)]
        lg:right-6"
    >
      {/* CH-01 Branded header */}
      <header className="relative flex min-h-[64px] shrink-0 items-center justify-between gap-3 border-b border-[var(--chat-border)] px-4 pt-[env(safe-area-inset-top)] min-[601px]:px-5">
        <h2 id="zhr-chat-title" ref={titleRef} tabIndex={-1} className="outline-none">
          <span className="sr-only">Zoiko HR Assistant</span>
          <Image
            src="/zoikohr-logo-svg.svg"
            alt=""
            width={154}
            height={26}
            priority
            className="h-auto w-[132px] min-[400px]:w-[154px]"
          />
        </h2>
        <div className="flex items-center gap-2">
          {/* Language picker deliberately omitted: it renders only once ≥2
              QA'd chatbot locales exist (§8.3). English is the only one. */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="More options"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            aria-controls="zhr-chat-menu"
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-[var(--chat-border)] text-[var(--chat-navy)] hover:bg-[var(--chat-surface-alt)] ${FOCUS_RING}`}
          >
            <Icon>{ICONS.more}</Icon>
          </button>
          <button
            type="button"
            onClick={closePanel}
            aria-label="Close Zoiko HR Assistant"
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-[var(--chat-border)] text-[var(--chat-navy)] hover:bg-[var(--chat-surface-alt)] ${FOCUS_RING}`}
          >
            <Icon>{ICONS.close}</Icon>
          </button>
        </div>

        {menuOpen && (
          <div
            ref={menuRef}
            id="zhr-chat-menu"
            role="menu"
            aria-label="Assistant options"
            onKeyDown={onMenuKeyDown}
            className="absolute right-4 top-[calc(100%-4px)] z-20 w-56 rounded-xl border border-[var(--chat-border)] bg-white p-1.5 shadow-[0_12px_32px_-8px_rgba(16,27,60,0.25)]"
          >
            <button
              type="button"
              role="menuitem"
              onClick={restart}
              className={`flex min-h-[40px] w-full items-center rounded-lg px-3 text-left text-sm font-medium hover:bg-[var(--chat-surface-alt)] ${FOCUS_RING}`}
            >
              Restart conversation
            </button>
            {CHAT_CONFIG.privacyUrl && (
              <a
                role="menuitem"
                href={CHAT_CONFIG.privacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className={`flex min-h-[40px] w-full items-center rounded-lg px-3 text-sm font-medium hover:bg-[var(--chat-surface-alt)] ${FOCUS_RING}`}
              >
                Privacy Policy<span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
            {CHAT_CONFIG.contactSupportUrl && (
              <a
                role="menuitem"
                href={CHAT_CONFIG.contactSupportUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className={`flex min-h-[40px] w-full items-center rounded-lg px-3 text-sm font-medium hover:bg-[var(--chat-surface-alt)] ${FOCUS_RING}`}
              >
                Contact support<span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </div>
        )}
      </header>

      {/* Only this pane scrolls; header and composer stay put. */}
      <div className="relative min-h-0 flex-1">
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="h-full overflow-y-auto overscroll-contain px-4 py-5 min-[601px]:px-5"
        >
          {!hasConversation && (
            <div className="flex flex-col gap-5">
              {/* CH-02 Intro */}
              <div className="flex items-start gap-3">
                <Avatar size={32} />
                <div className="min-w-0">
                  <h3 className="text-[22px] font-bold leading-tight tracking-tight text-[var(--chat-navy)] min-[601px]:text-2xl">
                    Hi! I’m the Zoiko HR Assistant.
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--chat-text-secondary)]">
                    I can help you understand Zoiko HR, explore features, pricing, onboarding, integrations and more — or
                    connect you with our team.
                  </p>
                </div>
              </div>

              {/* CH-03 Task cards */}
              <div>
                <ul className="grid grid-cols-2 gap-3 max-[360px]:grid-cols-1">
                  {TASK_CARDS.map((card) => (
                    <li key={card.id}>
                      <button
                        type="button"
                        onClick={() => onCardClick(card)}
                        aria-expanded={card.query ? undefined : salesChoiceOpen}
                        className={`group flex h-full min-h-[44px] w-full flex-col gap-3 rounded-2xl border border-[var(--chat-border)] bg-white p-4 text-left transition-colors hover:border-[var(--chat-blue)] hover:bg-[var(--chat-surface-alt)] ${FOCUS_RING}`}
                      >
                        <span className="flex w-full items-start justify-between">
                          <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${CARD_TONES[card.tone]}`}>
                            <Icon className="h-5 w-5">{ICONS[card.icon]}</Icon>
                          </span>
                          <Icon className="h-4 w-4 text-[var(--chat-blue)] transition-transform group-hover:translate-x-0.5">
                            {ICONS.chevronRight}
                          </Icon>
                        </span>
                        <span>
                          <span className="block text-[15px] font-semibold leading-snug text-[var(--chat-navy)]">{card.title}</span>
                          <span className="mt-1 block text-[13px] leading-snug text-[var(--chat-text-secondary)]">{card.subtext}</span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>

                {salesChoiceOpen && (
                  <div
                    role="group"
                    aria-label="Talk to our team"
                    className="mt-3 rounded-2xl border border-[var(--chat-border)] bg-[var(--chat-surface-alt)] p-4"
                  >
                    <p className="mb-3 text-sm font-semibold">How would you like to connect with our team?</p>
                    {salesLinks("task_card")}
                  </div>
                )}
              </div>

              {/* CH-04 Welcome message + CH-05 starter prompts */}
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2.5">
                  <Avatar size={24} />
                  <div>
                    <div className="rounded-2xl rounded-tl-md bg-[#F1F4F9] px-4 py-3 text-[15px] leading-relaxed">
                      <span className="sr-only">Zoiko HR Assistant (AI): </span>
                      <span className="block font-semibold">Welcome! I’m the Zoiko HR Assistant.</span>
                      <span className="block text-[var(--chat-text-secondary)]">
                        Here are some popular questions to get you started:
                      </span>
                    </div>
                    <time dateTime={startedAt} className="mt-1.5 block pl-1 text-xs text-[var(--chat-text-muted)]">
                      {welcomeTime}
                    </time>
                  </div>
                </div>

                <ul className="flex flex-col gap-2" aria-label="Popular questions">
                  {STARTER_PROMPTS.map((prompt) => (
                    <li key={prompt.id}>
                      <button
                        type="button"
                        onClick={() => {
                          track("starter_prompt_selected", { prompt_id: prompt.id });
                          void submit(prompt.label, { salesHandoff: "salesHandoff" in prompt });
                        }}
                        className={`flex min-h-[44px] w-full items-center justify-between gap-3 rounded-full border border-[var(--chat-border)] bg-white px-5 py-2 text-left text-[15px] text-[var(--chat-blue)] transition-colors hover:border-[var(--chat-blue)] hover:bg-[var(--chat-surface-alt)] ${FOCUS_RING}`}
                      >
                        <span>{prompt.label}</span>
                        <Icon className="h-4 w-4 flex-shrink-0">{ICONS.chevronRight}</Icon>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CH-06 Conversion CTA — one primary CTA; never an empty link. */}
              {demoHref && (
                <div className="flex flex-wrap items-center gap-x-4 gap-y-3 rounded-2xl bg-gradient-to-r from-[#0A4C93] to-[#0B5FCC] p-4 text-white">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Icon className="h-6 w-6">{ICONS.calendar}</Icon>
                  </span>
                  <div className="min-w-[150px] flex-1">
                    <p className="text-[17px] font-bold leading-tight">See Zoiko HR in action</p>
                    <p className="mt-0.5 text-[13px] text-white/90">Get a personalized walkthrough with our team.</p>
                  </div>
                  <ActionLink
                    href={demoHref}
                    onClick={() => {
                      track(CHAT_CONFIG.bookingUrl ? "chat_demo_clicked" : "chat_sales_handoff", {
                        placement: "cta_banner",
                        referral_page: window.location.pathname,
                      });
                      closePanel();
                    }}
                    className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-white px-5 text-sm font-semibold text-[var(--chat-blue)] hover:bg-[#EEF4FC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {CHAT_CONFIG.bookingUrl ? "Book a demo" : "Contact sales"}
                    <Icon className="h-4 w-4">{ICONS.arrowRight}</Icon>
                  </ActionLink>
                </div>
              )}
            </div>
          )}

          {/* Conversation. role=log announces only additions (§8.1). */}
          <div role="log" aria-live="polite" aria-relevant="additions" aria-label="Conversation" className="flex flex-col gap-4">
            {messages.map((m) =>
              m.role === "user" ? (
                <div key={m.id} className="ml-auto max-w-[85%]">
                  <span className="sr-only">You said: </span>
                  <p className="whitespace-pre-wrap break-words rounded-2xl rounded-tr-md bg-[var(--chat-blue)] px-4 py-2.5 text-[15px] leading-relaxed text-white">
                    {m.text}
                  </p>
                </div>
              ) : (
                <div key={m.id} className="flex max-w-[92%] items-start gap-2.5">
                  <Avatar size={24} />
                  <div className="min-w-0 flex-1">
                    <div className="rounded-2xl rounded-tl-md bg-[#F1F4F9] px-4 py-3 text-[15px] leading-relaxed">
                      <span className="sr-only">Zoiko HR Assistant (AI) said: </span>
                      <p className="whitespace-pre-wrap break-words">{m.text}</p>
                      {m.sources && m.sources.length > 0 && (
                        <ul className="mt-2.5 flex flex-wrap gap-1.5 border-t border-[var(--chat-border)] pt-2.5" aria-label="Sources">
                          {m.sources.map((s, j) => (
                            <li
                              key={j}
                              className="rounded-full border border-[var(--chat-border)] bg-white px-2.5 py-0.5 text-xs font-medium text-[var(--chat-text-secondary)]"
                            >
                              Source: {s.title}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {m.answerType === "no_answer" && CHAT_CONFIG.contactSalesUrl && (
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-[13px] text-[var(--chat-text-secondary)]">
                        <span>This isn’t confirmed in our published information.</span>
                        <ActionLink
                          href={CHAT_CONFIG.contactSalesUrl}
                          onClick={() => {
                            track("chat_sales_handoff", { route_type: "no_answer", outcome: "opened" });
                            closePanel();
                          }}
                          className={`font-semibold text-[var(--chat-blue)] underline underline-offset-2 ${FOCUS_RING}`}
                        >
                          Talk to our team
                        </ActionLink>
                      </div>
                    )}

                    {m.salesHandoff && <div className="mt-2.5">{salesLinks("assistant_response")}</div>}

                    <p className="mt-1.5 pl-1 text-xs text-[var(--chat-text-muted)]">AI-generated</p>
                  </div>
                </div>
              )
            )}
          </div>

          {loading && (
            <div className="mt-4 flex items-start gap-2.5">
              <Avatar size={24} />
              <div role="status" className="flex items-center gap-1.5 rounded-2xl rounded-tl-md bg-[#F1F4F9] px-4 py-3.5">
                <span className="sr-only">Zoiko HR Assistant is responding…</span>
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-slate-400 motion-safe:animate-bounce motion-safe:[animation-delay:-0.3s]" />
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-slate-400 motion-safe:animate-bounce motion-safe:[animation-delay:-0.15s]" />
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-slate-400 motion-safe:animate-bounce" />
              </div>
            </div>
          )}
        </div>

        {showLatest && (
          <button
            type="button"
            onClick={scrollToBottom}
            className={`absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-[var(--chat-border)] bg-white px-3.5 py-2 text-[13px] font-semibold text-[var(--chat-blue)] shadow-md ${FOCUS_RING}`}
          >
            <Icon className="h-4 w-4">{ICONS.arrowDown}</Icon>
            Latest message
          </button>
        )}
      </div>

      {/* CH-07 Composer + CH-08 trust footer — always visible. */}
      <div className="shrink-0 border-t border-[var(--chat-border)] bg-white px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] min-[601px]:px-5">
        {error && (
          <div
            role="alert"
            className="mb-2.5 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-[13px] text-red-800"
          >
            <Icon className="h-4 w-4 flex-shrink-0">{ICONS.alert}</Icon>
            <span className="flex-1">{error.message}</span>
            <button
              type="button"
              onClick={() => void submit(error.question, error.options)}
              className={`rounded-full border border-red-300 bg-white px-3 py-1 text-xs font-semibold text-red-800 hover:bg-red-100 ${FOCUS_RING}`}
            >
              Retry
            </button>
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            void submit(input);
          }}
        >
          <div className="flex items-end gap-2 rounded-[28px] border border-[var(--chat-border)] bg-white py-1.5 pl-5 pr-1.5 focus-within:border-[var(--chat-blue)] focus-within:ring-2 focus-within:ring-[var(--chat-blue)]/15">
            <label htmlFor="zhr-chat-input" className="sr-only">
              Ask a question about Zoiko HR
            </label>
            <textarea
              id="zhr-chat-input"
              ref={textareaRef}
              rows={1}
              value={input}
              maxLength={MAX_LEN}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                // Enter sends, Shift+Enter breaks a line; never send mid-IME composition.
                if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing && e.keyCode !== 229) {
                  e.preventDefault();
                  void submit(input);
                }
              }}
              placeholder="Ask a question about Zoiko HR…"
              className="max-h-[120px] min-h-[24px] flex-1 resize-none self-center bg-transparent py-2 text-[15px] leading-6 text-[var(--chat-navy)] outline-none placeholder:text-[var(--chat-text-muted)]"
            />
            {loading ? (
              <button
                type="button"
                onClick={() => pending?.abort()}
                aria-label="Stop generating"
                className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[var(--chat-navy)] text-white ${FOCUS_RING}`}
              >
                <Icon className="h-4 w-4">{ICONS.stop}</Icon>
              </button>
            ) : (
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send message"
                className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[var(--chat-blue)] text-white transition-colors hover:bg-[var(--chat-blue-hover)] disabled:cursor-not-allowed disabled:opacity-40 ${FOCUS_RING}`}
              >
                <Icon className="h-5 w-5">{ICONS.send}</Icon>
              </button>
            )}
          </div>
          {input.length > MAX_LEN - 100 && (
            <p className="mt-1 pr-2 text-right text-xs text-[var(--chat-text-muted)]" aria-live="polite">
              {input.length}/{MAX_LEN}
            </p>
          )}
        </form>

        <div className="mt-2.5 flex items-start gap-2.5 text-xs leading-relaxed text-[var(--chat-text-muted)]">
          <Icon className="mt-0.5 h-4 w-4 flex-shrink-0">{ICONS.shield}</Icon>
          <p className="flex-1">
            This AI assistant may make mistakes. It provides general information about Zoiko HR. Do not share confidential or
            personal employee data.
          </p>
          {CHAT_CONFIG.privacyUrl && (
            <a
              href={CHAT_CONFIG.privacyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-shrink-0 self-center border-l border-[var(--chat-border)] pl-2.5 font-semibold text-[var(--chat-blue)] hover:underline ${FOCUS_RING}`}
            >
              Privacy Policy<span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
