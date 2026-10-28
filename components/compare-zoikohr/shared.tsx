import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";

export type Status =
  | "Verified current"
  | "Limited / conditional"
  | "Not verified"
  | "Not applicable"
  | "Under review"
  | "Source conflict"
  | "Withdrawn";

export const STATUS_STYLES: Record<Status, string> = {
  "Verified current": "border-green-300 bg-emerald-50 text-green-800",
  "Limited / conditional": "border-orange-300 bg-orange-50 text-yellow-800",
  "Not verified": "border-slate-300 bg-slate-50 text-slate-500",
  "Not applicable": "border-slate-200 bg-white text-slate-400",
  "Under review": "border-orange-300 bg-orange-50 text-yellow-800",
  "Source conflict": "border-red-300 bg-red-50 text-red-800",
  Withdrawn: "border-slate-200 bg-slate-50 text-slate-300",
};

export function StatusPill({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full border px-3 py-0.5 text-xs font-semibold leading-4 ${STATUS_STYLES[status]}`}
    >
      {status}
    </span>
  );
}

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
        <p className={`mt-3 text-base leading-6 ${isDark ? "text-slate-400" : "text-slate-500"}`}>{children}</p>
      )}
    </Reveal>
  );
}
