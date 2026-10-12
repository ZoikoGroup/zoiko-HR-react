"use client";

import { useCallback, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { track } from "./chatConfig";

// The panel (and everything it imports) is only fetched after the visitor's
// first intentional open, so the widget never competes with the marketing
// page's own LCP (wireframe §8.2). Once loaded it stays mounted while closed
// so the thread survives close/reopen.
const ChatPanel = dynamic(() => import("./ChatPanel"), { ssr: false });

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);

  const open = () => {
    setHasOpened(true);
    setIsOpen(true);
    track("chat_opened", {
      page_id: window.location.pathname,
      device_class: window.innerWidth <= 600 ? "mobile" : window.innerWidth < 1024 ? "tablet" : "desktop",
      locale: "en",
    });
  };

  const close = useCallback(() => {
    setIsOpen(false);
    launcherRef.current?.focus();
  }, []);

  return (
    <>
      {hasOpened && <ChatPanel open={isOpen} onClose={close} />}

      {/* CH-09 floating launcher. At ≤600px the panel is a full-screen sheet
          with its own close button, so the launcher steps out of the way
          instead of covering the composer. */}
      <button
        ref={launcherRef}
        type="button"
        onClick={() => (isOpen ? close() : open())}
        aria-label={isOpen ? "Close Zoiko HR Assistant" : "Open Zoiko HR Assistant"}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className={`chat-orb-btn fixed bottom-6 right-6 z-[70] flex h-14 w-14 items-center justify-center rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
          isOpen ? "is-open max-[600px]:hidden" : ""
        }`}
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6 text-white">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <Image src="/zoikohr-wave-glyph.svg" alt="" width={32} height={32} className="h-8 w-8" />
        )}
      </button>
      <span aria-hidden="true" className={`chat-orb-halo ${isOpen ? "is-open max-[600px]:hidden" : ""}`} />
    </>
  );
}
