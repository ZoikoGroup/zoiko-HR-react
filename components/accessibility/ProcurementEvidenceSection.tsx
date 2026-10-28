import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

export function ProcurementEvidenceSection() {
  return (
    <section className="bg-[#0A1B2E] py-16 text-white">
      <Container>
        <SectionHeading
          eyebrow="13 / Procurement Evidence & Accessibility Review"
          title="Evidence classes and access states."
          tone="dark"
        >
          Procurement reviewers can access the public statement, conformance
          summary, scope and limitations without a sales gate. Controlled
          materials require a request with business context — availability is
          not guaranteed.
        </SectionHeading>

        <Reveal delay={0.1}>
          <PlaceholderImage
            src="/images/accessibility/procurement-review.png"
            alt="A reviewer walking colleagues through a document"
            label="Walking through review evidence"
            className="mt-10 aspect-[1216/391] w-full rounded-xl"
          />
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-6">
            <h3 className="text-sm font-semibold text-white">
              Request controlled accessibility materials
            </h3>
            <p className="mt-2 max-w-none text-xs leading-5 text-slate-400">
              If you need controlled testing or evaluation records for
              procurement review, submit a request with your organization name
              and review context. Submission does not guarantee access or
              document availability. No sales demo is required to complete a
              procurement accessibility review.
            </p>
            <Link
              href="#feedback"
              className="mt-5 inline-flex rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Submit evidence request
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
