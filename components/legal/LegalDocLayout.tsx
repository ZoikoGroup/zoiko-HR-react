import Link from "next/link";
import { Container } from "@/components/ui";

export type LegalSection = {
  id: string;
  heading: string;
  /** Plain paragraphs. */
  paragraphs?: string[];
  /** Bulleted list rendered after paragraphs. */
  bullets?: string[];
};

export type LegalDoc = {
  title: string;
  /** e.g. "Last updated: January 15, 2026" */
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

/**
 * Shared layout for legal / policy pages linked from the footer.
 * Keeps every legal route visually consistent and reduces duplication.
 */
export function LegalDocLayout({ doc }: { doc: LegalDoc }) {
  return (
    <main className="bg-white">
      {/* Header band */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-primary-light/60 to-white py-16">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Legal &amp; Trust
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {doc.title}
          </h1>
          <p className="mt-2 text-sm text-ink/50">{doc.lastUpdated}</p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/70">
            {doc.intro}
          </p>
        </Container>
      </section>

      {/* Body */}
      <Container className="grid gap-12 py-16 lg:grid-cols-[16rem_1fr]">
        {/* On-page table of contents */}
        <nav aria-label="On this page" className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
            On this page
          </p>
          <ul className="mt-3 space-y-2">
            {doc.sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-sm text-ink/60 transition-colors duration-150 hover:text-primary"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <article className="min-w-0 max-w-3xl">
          {doc.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28 pb-10">
              <h2 className="text-xl font-bold text-ink">{section.heading}</h2>
              {section.paragraphs?.map((paragraph, i) => (
                <p
                  key={i}
                  className="mt-4 text-base leading-relaxed text-ink/70"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-ink/70">
                  {section.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Cross-links to sibling legal documents */}
          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold text-ink">Related documents</p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link href="/privacy-notice" className="text-primary hover:underline">
                Privacy Notice
              </Link>
              <Link href="/cookie-notice" className="text-primary hover:underline">
                Cookie Notice
              </Link>
              <Link href="/terms-of-service" className="text-primary hover:underline">
                Terms of Service
              </Link>
              <Link href="/acceptable-use-policy" className="text-primary hover:underline">
                Acceptable Use Policy
              </Link>
              <Link href="/legal-notices" className="text-primary hover:underline">
                Legal Notices
              </Link>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}
