import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { CookieSettingsPanel } from "@/components/legal";

export const metadata: Metadata = {
  title: "Cookie Settings | Zoiko HR",
  description:
    "Manage your cookie preferences for zoikohr.com — control analytics and preference cookies.",
};

export default function CookieSettingsPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-100 bg-gradient-to-b from-primary-light/60 to-white py-16">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal &amp; Trust
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Cookie Settings
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/70">
            Choose which optional cookies we may use. Strictly necessary
            cookies are always active because the site cannot function without
            them. See the{" "}
            <Link href="/cookie-notice" className="font-semibold text-primary hover:underline">
              Cookie Notice
            </Link>{" "}
            for full details.
          </p>
        </Container>
      </section>

      <CookieSettingsPanel />
    </main>
  );
}
