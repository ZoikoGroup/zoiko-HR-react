"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { ChatWidget } from "@/components/chat-widget";
import { BlackFridayPopup } from "@/components/black-friday";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

/** Routes that render their own header and footer (auth screens). */
const BARE_ROUTES = ["/sign-in"];

/** Routes where the Black Friday popup would be redundant (the offer is already the page). */
const BLACK_FRIDAY_POPUP_HIDDEN_ROUTES = ["/black-friday"];

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isBare = BARE_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
  const hidePopup = BLACK_FRIDAY_POPUP_HIDDEN_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  if (isBare) {
    return <main className="w-full min-w-0 flex-1">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="w-full min-w-0 flex-1">{children}</main>
      <Footer />
      <ChatWidget />
      {!hidePopup && <BlackFridayPopup />}
    </>
  );
}
