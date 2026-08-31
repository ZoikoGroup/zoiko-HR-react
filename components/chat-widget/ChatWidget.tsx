"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Source = { title: string; excerpt: string };
type Message = { role: "user" | "assistant"; text: string; sources?: Source[] };

const SESSION_STORAGE_KEY = "zoiko_public_assistant_session_id";
const HISTORY_PAIRS = 3;

function getOrCreateSessionId(): string | undefined {
  if (typeof window === "undefined") return undefined; // SSR — computed again on the client
  try {
    const existing = window.localStorage.getItem(SESSION_STORAGE_KEY);
    if (existing) return existing;
    const id = crypto.randomUUID();
    window.localStorage.setItem(SESSION_STORAGE_KEY, id);
    return id;
  } catch {
    // Private browsing or storage disabled — the assistant still works,
    // it just won't correlate this visitor's audit rows across a session.
    return undefined;
  }
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

async function askPublicAssistant(
  question: string,
  history: { question: string; answer: string }[],
  sessionId: string | undefined
) {
  const base = process.env.NEXT_PUBLIC_ASSISTANT_API_URL || "http://localhost:8000";
  const res = await fetch(`${base}/assistant/public/ask`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question, history, session_id: sessionId }),
  });
  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }
  return res.json() as Promise<{
    answer_text: string;
    answer_type: string;
    confidence_state: string;
    sources: Source[];
  }>;
}

function AssistantAvatar() {
  return (
    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl">
      <Image src="/zoikohr-icon-svg.svg" alt="" width={32} height={32} className="h-full w-full object-cover" />
    </div>
  );
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState<string | undefined>(() => getOrCreateSessionId());
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const submit = async (text: string) => {
    const question = text.trim();
    if (!question || loading) return;
    setInput("");
    const history = buildHistory(messages);
    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setLoading(true);
    try {
      const result = await askPublicAssistant(question, history, sessionId);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: result.answer_text, sources: result.sources },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, I couldn't reach the assistant just now. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-5 z-40 flex h-[min(640px,calc(100dvh-11rem))] w-[min(92vw,420px)] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_48px_-12px_rgba(6,80,141,0.3)] sm:right-6">
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
            <h3 className="flex items-center gap-2 font-bold text-ink">
              <Image src="/zoikohr-icon-svg.svg" alt="" width={24} height={24} className="h-6 w-6 rounded-lg" />
              HR Assistant
            </h3>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.length === 0 && (
              <div className="flex h-full flex-col items-center justify-center gap-2 text-center text-sm text-slate-400">
                <p>Ask me what Zoiko HR is, who it&apos;s for, or how it handles onboarding and integrations.</p>
              </div>
            )}
            {messages.map((m, i) =>
              m.role === "user" ? (
                <div key={i} className="ml-auto flex max-w-[85%] justify-end">
                  <div className="rounded-2xl rounded-tr-none bg-primary px-3.5 py-2.5 text-sm text-white">
                    <p className="whitespace-pre-wrap leading-relaxed">{m.text}</p>
                  </div>
                </div>
              ) : (
                <div key={i} className="flex max-w-[90%] gap-2.5">
                  <AssistantAvatar />
                  <div
                    className="rounded-2xl rounded-tl-none border px-3.5 py-2.5 text-sm leading-relaxed"
                    style={{ background: "#F8F7FC", borderColor: "#F1F0F6", color: "#111827" }}
                  >
                    <p className="whitespace-pre-wrap">{m.text}</p>
                    {m.sources && m.sources.length > 0 && (
                      <div className="mt-2 space-y-1 border-t border-slate-200/70 pt-2">
                        {m.sources.map((s, j) => (
                          <p key={j} className="text-[11px] font-semibold text-slate-400">
                            Source: {s.title}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )
            )}
            {loading && (
              <div className="flex gap-2.5">
                <AssistantAvatar />
                <div
                  className="flex items-center gap-1 rounded-2xl rounded-tl-none border px-3.5 py-2.5"
                  style={{ background: "#F8F7FC", borderColor: "#F1F0F6" }}
                >
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-slate-100 px-3 py-2.5">
            <a
              href="/book-a-demo"
              className="mb-2 block text-center text-xs font-semibold text-primary hover:text-primary-dark"
            >
              Want a personalized walkthrough? Book a demo →
            </a>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                maxLength={500}
                disabled={loading}
                className="flex-1 rounded-full border border-slate-200 px-3.5 py-2 text-sm outline-none focus:border-primary disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark disabled:opacity-40"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
        className={`chat-orb-btn fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:bottom-6 sm:right-6 ${isOpen ? "is-open" : ""}`}
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <Image src="/zoikohr-wave-glyph.svg" alt="" width={32} height={32} className="h-8 w-8" />
        )}
      </button>
      <span aria-hidden="true" className={`chat-orb-halo ${isOpen ? "is-open" : ""}`} />
    </>
  );
}
