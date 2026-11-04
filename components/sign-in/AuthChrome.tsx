import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const FOOTER_LINKS = [
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms-of-service" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Security & Trust", href: "/security" },
  { label: "Help", href: "/help-center" },
];

export function AuthHeader() {
  return (
    <header className="flex w-full items-center justify-between px-5 py-4 sm:px-6">
      <Link href="/" className="rounded-sm" aria-label="Zoiko HR home">
        <Image
          src="/images/sign-in/zoiko-hr-logo.png"
          alt="Zoiko HR"
          width={164}
          height={28}
          priority
          className="h-7 w-auto"
        />
      </Link>
      <Link
        href="/help-center"
        className="rounded-sm px-1 text-sm font-semibold text-[#5A6272] transition-colors hover:text-[#1A2332]"
      >
        Help
      </Link>
    </header>
  );
}

export function AuthFooter() {
  return (
    <footer className="flex w-full flex-col items-center gap-3 px-5 pb-6 pt-4 sm:px-6">
      <nav
        aria-label="Legal"
        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1"
      >
        {FOOTER_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-xs leading-4 text-[#9098A4] transition-colors hover:text-[#5A6272]"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <p className="text-center text-xs leading-4 text-[#9098A4]">
        Looking for Zoiko HR for your organization?{" "}
        <Link href="/book-a-demo" className="underline hover:text-[#5A6272]">
          Book a Demo
        </Link>
      </p>
    </footer>
  );
}

export function AuthShell({
  children,
  glow = false,
}: {
  children: ReactNode;
  glow?: boolean;
}) {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#F2F3F5]">
      {glow ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 top-16 size-72 rounded-full bg-[#4BC5D4] opacity-70 blur-[200px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 bottom-8 size-72 rounded-full bg-[#4BC5D4] opacity-70 blur-[200px]"
          />
        </>
      ) : null}
      <div className="relative flex w-full flex-1 flex-col">
        <AuthHeader />
        <main className="flex w-full flex-1 flex-col items-center justify-center px-5 py-8">
          {children}
        </main>
        <AuthFooter />
      </div>
    </div>
  );
}

export function AuthCard({ children }: { children: ReactNode }) {
  return (
    <section className="w-full max-w-[438px] rounded-2xl bg-white px-6 py-8 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.05),0px_1px_3px_0px_rgba(0,0,0,0.05)] outline outline-1 -outline-offset-1 outline-[#E3E6EA] sm:px-8 sm:py-9">
      {children}
    </section>
  );
}

export function AuthTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-heading text-2xl font-extrabold leading-8 text-[#1A2332]">
      {children}
    </h1>
  );
}

export function AuthSubtitle({ children }: { children: ReactNode }) {
  return <p className="pt-2 text-sm leading-6 text-[#5A6272]">{children}</p>;
}

export function HelpNote() {
  return (
    <p className="pt-4 text-center text-xs leading-4 text-[#9098A4]">
      Having trouble signing in?{" "}
      <Link href="/help-center" className="underline hover:text-[#5A6272]">
        Get help
      </Link>
    </p>
  );
}

export function ProtectedNote() {
  return (
    <p className="flex items-center justify-center gap-1.5 pt-4 text-center text-xs leading-4 text-[#9098A4]">
      <svg
        aria-hidden
        viewBox="0 0 12 12"
        className="size-3 shrink-0 fill-none stroke-current"
        strokeWidth="1"
      >
        <path d="M6 1 2.5 2.3v3.2c0 2.2 1.5 4.2 3.5 4.9 2-0.7 3.5-2.7 3.5-4.9V2.3L6 1Z" />
      </svg>
      Protected access to your organization&apos;s Zoiko HR workspace.
    </p>
  );
}
