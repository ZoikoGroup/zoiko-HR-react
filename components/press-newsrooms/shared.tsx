import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";

export function SectionHeading({
  title,
  children,
  tone = "light",
  className = "",
}: {
  title: string;
  children?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <Reveal className={className}>
      <h2
        className={`text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {children && (
        <p className={`mt-3 text-sm leading-6 sm:text-base ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          {children}
        </p>
      )}
    </Reveal>
  );
}

export function InfoNote({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`flex gap-3 rounded-xl border border-indigo-200 bg-blue-50 px-5 py-3.5 text-xs leading-5 text-primary sm:text-sm ${className}`}
    >
      <span aria-hidden className="text-base leading-5">
        ℹ
      </span>
      <p>{children}</p>
    </div>
  );
}
