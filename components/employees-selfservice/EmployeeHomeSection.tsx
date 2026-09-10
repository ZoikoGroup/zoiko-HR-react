import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, DetailItem, NotePanel } from "./shared";

const STEPS = [
  {
    title: "Required actions first",
    body: "Outstanding tasks, deadlines and document acknowledgments are surfaced immediately.",
  },
  {
    title: "Status and deadlines",
    body: "See the state of every request and task without asking HR for an update.",
  },
  {
    title: "Self-service shortcuts",
    body: "Reach personal information, documents and request forms with minimal steps.",
  },
  {
    title: "Informational content",
    body: "Policies, announcements and reference material are available but never buried.",
  },
];

export function EmployeeHomeSection() {
  return (
    <section id="employee-home" className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,664px)_minmax(0,520px)] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Employee home"
              title="Start with what you need to do, know or update."
            >
              Zoiko HR should give employees a focused home for required actions,
              request status, personal information and relevant
              documents—without making them navigate the full complexity of HR
              administration.
            </SectionHeading>

            <Reveal delay={0.1} amount={0}>
              <ul className="mt-7 flex flex-col gap-4">
                {STEPS.map((step, i) => (
                  <DetailItem
                    key={step.title}
                    title={step.title}
                    body={step.body}
                    marker={
                      <span className="mt-0.5 flex size-6 flex-none items-center justify-center rounded-full bg-primary/10 font-mono text-[10px] leading-4 text-primary">
                        {i + 1}
                      </span>
                    }
                  />
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-7">
                <NotePanel title="When no actions are pending">
                  The employee home shows a clear &ldquo;You&apos;re up to
                  date.&rdquo; state with useful shortcuts rather than an empty
                  dashboard.
                </NotePanel>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <Link
                href="/book-a-demo"
                className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                See the Employee Experience
                <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <PlaceholderImage
              src="/images/employees-selfservice/employee-home.webp"
              alt="Colleagues standing together in an office corridor"
              label="Employee home"
              className="aspect-[520/584] w-full rounded-2xl border border-slate-200 bg-white shadow-[0_8px_40px_rgba(49,94,251,0.08)]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
