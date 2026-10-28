import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

export function AccessibleContentSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Accessible content first. Acknowledgment is explicit and version-bound."
          className="max-w-[700px]"
        >
          A receipt binds to the exact version identity — viewing a document is
          never treated as acknowledging it.
        </SectionHeading>

        <Reveal delay={0.12}>
          <div className="mt-10 grid items-stretch overflow-hidden rounded-xl border border-slate-200 lg:grid-cols-2">
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Employee Handbook · v6
              </p>
              <p className="mt-2 text-sm font-bold text-sky-950">
                Effective Aug 15, 2026 · Owner: HR Policy
              </p>

              <div className="mt-4 rounded-lg border border-slate-200 px-5 py-4">
                <p className="text-sm font-bold leading-6 text-slate-600">
                  Accessible HTML content renders here with headings, lists and
                  links navigable by keyboard and screen reader — reflowing at
                  200% and 400% zoom without losing context.
                </p>
              </div>
            </div>

            <PlaceholderImage
              src="/images/documents-policies/accessible-content.webp"
              alt="Colleagues talking together over a laptop"
              label="Accessible content"
              className="aspect-video w-full bg-slate-100 lg:aspect-auto lg:h-full"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
