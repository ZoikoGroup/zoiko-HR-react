import { Reveal } from "@/components/ui";

/**
 * Horizontal chip flow with arrow separators. Wraps rather than scrolling so
 * the steps stay readable on narrow screens.
 */
export function FlowSteps({
  steps,
  tone = "light",
}: {
  steps: string[];
  tone?: "light" | "dark";
}) {
  return (
    <Reveal delay={0.08}>
      <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
        {steps.map((step, i) => (
          <span key={step} className="flex items-center gap-1">
            <span
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
                tone === "dark"
                  ? "border border-white/10 bg-white/5 text-slate-300"
                  : "border border-slate-200 bg-slate-100 text-slate-700"
              }`}
            >
              {step}
            </span>
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className={tone === "dark" ? "text-slate-600" : "text-slate-300"}
              >
                →
              </span>
            )}
          </span>
        ))}
      </div>
    </Reveal>
  );
}
