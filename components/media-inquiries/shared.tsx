import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";

/**
 * Eyebrow + heading used across the page. The design carries an E-number in
 * the eyebrow so reviewers can cite sections directly.
 */
export function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
  className = "",
}: {
  eyebrow: string;
  title?: string;
  children?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <p
        className={`text-[11px] font-medium uppercase tracking-[0.1em] ${
          tone === "dark" ? "text-indigo-400" : "text-primary"
        }`}
      >
        {eyebrow}
      </p>
      {title && (
        <h2
          className={`mt-2 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl ${
            tone === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h2>
      )}
      {children && (
        <p
          className={`mt-2 leading-6 ${
            tone === "dark" ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {children}
        </p>
      )}
    </Reveal>
  );
}

/** Dark-section field styling shared by the media inquiry form. */
export const DARK_FIELD_CLASSES =
  "w-full rounded-lg border border-blue-950 bg-slate-900 px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-primary focus:ring-1 focus:ring-primary/30";

export function RequiredMark() {
  return (
    <span aria-hidden className="text-red-400">
      {" "}
      *
    </span>
  );
}

export function FieldNote({ children }: { children: ReactNode }) {
  return (
    <span className="ml-2 text-xs font-normal leading-4 text-slate-500">
      {children}
    </span>
  );
}

/**
 * Pill-style single-select used for media identity and deadline, where the
 * design shows chips rather than a dropdown.
 */
export function ChipGroup({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: string[];
  value: string;
  onChange: (next: string) => void;
}) {
  return (
    <div role="radiogroup" aria-label={name} className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = value === option;
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(option)}
            className={`rounded-md border px-3 py-1.5 text-xs leading-4 transition-colors ${
              active
                ? "border-primary bg-blue-950 text-indigo-400"
                : "border-blue-950 bg-slate-900 text-slate-400 hover:border-indigo-400/50"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
