import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ACCEPTED = [
  "Press question / company comment",
  "Interview request",
  "Fact check or clarification",
  "Media-resource question",
];

const OTHER = [
  "Sales → Request Pricing",
  "Support → Help Center",
  "Partnerships → Partner team",
  "Security → Security Reporting",
];

function RouteList({ title, items, highlight }: { title: string; items: string[]; highlight?: boolean }) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        highlight ? "border-white/20 bg-white/10" : "border-white/10 bg-white/5"
      }`}
    >
      <p className="text-xs font-semibold uppercase leading-4 tracking-wide text-slate-400">{title}</p>
      <ul className="mt-3 flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm leading-5 text-slate-300">
            <span aria-hidden className="size-1 rounded-full bg-slate-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MediaInquiryRouteSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,418px)] lg:gap-8">
          <Reveal>
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Official media inquiry route.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              Media Inquiries is for journalists, editors, producers, analysts, and
              independent media with a legitimate press request. Sales, support,
              partnerships, privacy reporting, security reporting, and careers each
              have separate routes.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <RouteList title="Accepted requests" items={ACCEPTED} highlight />
              <RouteList title="Other routes" items={OTHER} />
            </div>
            <p className="mt-6 text-xs leading-5 text-slate-500">
              Submission does not guarantee a response, interview, embargo
              acceptance, or event participation. Do not include passwords,
              credentials, employee records, or confidential source material.
            </p>
            <Link
              href="/media-inquiries"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
            >
              Go to Media Inquiries →
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <PlaceholderImage
              src="/images/press-newsrooms/media-inquiry.png"
              alt="Three colleagues working through documents around a laptop"
              label="Colleagues handling an inquiry"
              loading="lazy"
              className="aspect-video w-full rounded-xl lg:aspect-[418/486]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
