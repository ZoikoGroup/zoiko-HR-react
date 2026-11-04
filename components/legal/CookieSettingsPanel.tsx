"use client";

import { useEffect, useState } from "react";
import { Container, Button } from "@/components/ui";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  preference: boolean;
  savedAt: string;
};

const STORAGE_KEY = "zoiko-cookie-preferences";

const CATEGORIES: {
  key: "analytics" | "preference";
  name: string;
  description: string;
}[] = [
  {
    key: "analytics",
    name: "Analytics cookies",
    description:
      "Help us understand which pages are visited and how visitors move through the site so we can improve content. We use Google Analytics for this purpose.",
  },
  {
    key: "preference",
    name: "Preference cookies",
    description:
      "Remember choices you make, such as cookie settings, to give you a more consistent experience.",
  },
];

function loadPreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CookiePreferences) : null;
  } catch {
    return null;
  }
}

export function CookieSettingsPanel() {
  const [analytics, setAnalytics] = useState(true);
  const [preference, setPreference] = useState(true);
  const [saved, setSaved] = useState<CookiePreferences | null>(null);
  const [justSaved, setJustSaved] = useState(false);

  // Load stored preferences after mount (client only).
  useEffect(() => {
    const stored = loadPreferences();
    if (stored) {
      setAnalytics(stored.analytics);
      setPreference(stored.preference);
      setSaved(stored);
    }
  }, []);

  const savePreferences = (prefs: Omit<CookiePreferences, "necessary" | "savedAt">) => {
    const next: CookiePreferences = {
      necessary: true,
      ...prefs,
      savedAt: new Date().toISOString(),
    };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Storage may be unavailable (private mode); still show confirmation.
    }
    setSaved(next);
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 4000);
  };

  const acceptAll = () => {
    setAnalytics(true);
    setPreference(true);
    savePreferences({ analytics: true, preference: true });
  };

  const rejectOptional = () => {
    setAnalytics(false);
    setPreference(false);
    savePreferences({ analytics: false, preference: false });
  };

  const savedLabel = saved
    ? new Date(saved.savedAt).toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : null;

  return (
    <Container className="py-16">
      {/* Status banner */}
      <div
        role="status"
        aria-live="polite"
        className={`mb-8 rounded-2xl border p-5 text-sm transition-colors ${
          justSaved
            ? "border-primary/30 bg-primary-light text-ink"
            : saved
              ? "border-slate-200 bg-slate-50 text-ink/70"
              : "border-slate-200 bg-slate-50 text-ink/70"
        }`}
      >
        {justSaved
          ? "Your cookie preferences have been saved."
          : saved
            ? `Preferences last saved ${savedLabel}.`
            : "You have not saved cookie preferences yet. Optional cookies are managed per your choice below."}
      </div>

      {/* Strictly necessary (always on) */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-base font-semibold text-ink">
              Strictly necessary cookies
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/60">
              Required for core site functions such as security and load
              balancing. These cookies cannot be switched off.
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-ink/50">
            Always active
          </span>
        </div>
      </div>

      {/* Optional categories */}
      {CATEGORIES.map((category) => {
        const checked = category.key === "analytics" ? analytics : preference;
        const toggle = category.key === "analytics" ? setAnalytics : setPreference;
        return (
          <div
            key={category.key}
            className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-base font-semibold text-ink">
                  {category.name}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/60">
                  {category.description}
                </p>
              </div>
              {/* Accessible switch */}
              <button
                type="button"
                role="switch"
                aria-checked={checked}
                aria-label={category.name}
                onClick={() => toggle(!checked)}
                className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ${
                  checked ? "bg-primary" : "bg-slate-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all duration-200 ${
                    checked ? "left-[1.375rem]" : "left-0.5"
                  }`}
                />
              </button>
            </div>
          </div>
        );
      })}

      {/* Actions */}
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button onClick={acceptAll}>Accept all cookies</Button>
        <Button variant="outline" onClick={rejectOptional}>
          Reject optional cookies
        </Button>
        <Button
          variant="ghost"
          onClick={() =>
            savePreferences({ analytics, preference })
          }
        >
          Save my choices
        </Button>
      </div>

      <p className="mt-6 max-w-2xl text-xs leading-relaxed text-ink/40">
        Preferences are stored in your browser on this device only. You can
        change them at any time from this page. See the{" "}
        <a href="/cookie-notice" className="font-semibold text-primary hover:underline">
          Cookie Notice
        </a>{" "}
        for details on the categories we use.
      </p>
    </Container>
  );
}
