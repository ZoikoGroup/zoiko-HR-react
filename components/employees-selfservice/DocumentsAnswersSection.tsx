import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, NotePanel } from "./shared";

const PRINCIPLES = [
  {
    title: "Version clarity",
    body: "Current version and effective date displayed where meaningful. No superseded content presented as active.",
  },
  {
    title: "Search and guidance",
    body: "Plain-language search with useful zero-result guidance rather than a dead end.",
  },
  {
    title: "Permissions-first",
    body: "Documents and policy content appear only within the employee's permitted scope and organizational context.",
  },
];

export function DocumentsAnswersSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Documents & answers"
              title="Give employees a trusted place to find the right information."
            >
              Relevant HR documents, handbook content, assigned acknowledgments
              and organization guidance should be discoverable through clear
              categories where the organization has configured them.
            </SectionHeading>

            <Reveal delay={0.1} amount={0}>
              <ul className="mt-6 flex flex-col gap-4">
                {PRINCIPLES.map((principle) => (
                  <li
                    key={principle.title}
                    className="border-l-2 border-slate-200 pl-4"
                  >
                    <p className="break-words text-sm font-semibold leading-5 text-slate-950">
                      {principle.title}
                    </p>
                    <p className="pt-0.5 break-words text-xs leading-5 text-slate-600">
                      {principle.body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-6">
                <NotePanel title="Answer layer guardrail">
                  Software-generated answers must cite approved source content
                  and respect access permissions. They must not be presented as
                  legal, tax, immigration, medical or other regulated
                  professional advice.
                </NotePanel>
              </div>
            </Reveal>
          </div>

          {/*
            h-full down the whole chain — grid item → Reveal → panel → image —
            so the photo fills whatever height the left column sets instead of
            resolving against its own aspect ratio.
          */}
          <Reveal delay={0.12} className="h-full">
            {/* The design frames the photo as a product surface with a title
                bar and a search affordance. */}
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3">
                <p className="text-xs leading-5 text-gray-500">
                  Documents — Alex&apos;s view
                </p>
                <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-gray-400">
                  <span aria-hidden>⌕</span>
                  Search documents...
                </span>
              </div>
              <PlaceholderImage
                src="/images/employees-selfservice/documents.webp"
                alt="Colleagues talking over coffee in an office"
                label="Documents"
                className="aspect-[804/618] w-full flex-1 bg-slate-100 lg:aspect-auto"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
