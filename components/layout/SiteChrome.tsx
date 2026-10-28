"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { ChatWidget } from "@/components/chat-widget";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

/** Routes that render their own header and footer (auth screens). */
const BARE_ROUTES = ["/sign-in"];

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isBare = BARE_ROUTES.some(
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
    </>
  );
}
