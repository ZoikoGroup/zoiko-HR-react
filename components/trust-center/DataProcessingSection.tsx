import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const AUTHORITIES = [
  {
    title: "Data Processing Addendum",
    description:
      "The authority for approved data-processing terms, or a controlled request route where access is required.",
    linkLabel: "Review DPA",
  },
  {
    title: "Subprocessors",
    description:
      "The authority for the current approved subprocessor list and the change-notification process.",
    linkLabel: "Review Subprocessors",
  },
];

export function DataProcessingSection() {
  return (
    <section id="data-processing" className="py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Data processing &amp; subprocessor overview.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            This hub may summarize availability and status — it does not
            reinterpret binding terms, roles or retention obligations.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {AUTHORITIES.map((authority, i) => (
            <Reveal key={authority.title} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-slate-100 p-6 sm:p-7">
                <h3 className="font-bold text-ink">{authority.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {authority.description}
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-4">
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-teal-600">
                    Current
                  </span>
                  <Link
                    href="#procurement-request"
                    className="text-sm font-semibold text-primary hover:text-primary-dark"
                  >
                    {authority.linkLabel} →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
