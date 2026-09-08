import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const REQUESTS = [
  {
    title: "Leave Request",
    body: "Submit and track a leave request against your approved balance.",
  },
  {
    title: "Equipment Request",
    body: "Request approved equipment through your organization's catalog.",
  },
];

const TIMELINE = [
  "Draft",
  "Submitted",
  "Routing",
  "Decision",
  "Source effect",
  "Closed",
];

export function RequestTypesSection() {
  return (
    <section className="bg-slate-100 py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Discover permitted request types. Submit once, track to closure."
          className="max-w-[700px]"
        >
          Only request types you&apos;re eligible for appear — search, counts and
          facets follow the same permission filter as the records themselves.
        </SectionHeading>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)]">
          <div className="flex flex-col gap-6">
            {REQUESTS.map((request, i) => (
              <Reveal key={request.title} delay={0.06 + i * 0.06} className="flex-1">
                <div className="h-full rounded-[10px] border border-slate-200 bg-white p-5">
                  <p className="text-sm font-bold text-sky-950">
                    {request.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-5 text-slate-500">
                    {request.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Absolutely positioned so the photo's intrinsic height never drives
              the row — the request cards set the height. */}
          <div className="relative min-h-48">
            <Reveal delay={0.14} className="absolute inset-0">
              <PlaceholderImage
                src="/images/self-service/request-types.webp"
                alt="A team reviewing documents around a meeting table"
                label="Request types"
                className="h-full w-full rounded-[10px] border border-slate-200 bg-white"
              />
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-sky-950">
              Status timeline
            </p>
            <div className="mt-3.5 flex flex-wrap">
              {TIMELINE.map((step) => (
                <span
                  key={step}
                  className="flex items-center gap-2 py-2 pr-4"
                >
                  <span aria-hidden className="size-2 rounded-sm bg-primary" />
                  <span className="text-xs font-medium text-gray-800">
                    {step}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
