import Link from "next/link";
import { Container, Reveal, Button } from "@/components/ui";

const NEXT_STEPS = [
  ["Platform Overview", "Understand the full product architecture.", "/platform"],
  [
    "Employee Records",
    "Explore structured record administration.",
    "/employee-records",
  ],
  ["Global HR", "See organization and entity structure.", "/global-hr-management"],
  [
    "Workflows & Approvals",
    "See request routing and audit evidence.",
    "/workflows-approvals",
  ],
  [
    "Implementation Guide",
    "Understand discovery-to-adoption lifecycle.",
    "/implementation-guide",
  ],
  [
    "Trust Center",
    "Security, privacy, AI governance and audit.",
    "/trust-center",
  ],
];

const SUPPORT_LINKS = [
  ["Documentation", "/developer-documentation"],
  ["Help Center", "/help-center"],
  ["Product Updates", "/product-updates"],
  ["Service Status", "/service-status"],
  ["Contact Support", "/contact-us"],
];

export function TourCompleteSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-[0_1px_4px_rgba(0,0,0,0.06)] sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Tour Complete
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900">
              You have explored the Zoiko HR Product Tour.
            </h2>
            <p className="mt-4 leading-7 text-slate-500">
              Chapters viewed are tracked in this browser session only — not as a
              certification, readiness score or account record. Restart or share
              at any time.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {NEXT_STEPS.map(([title, body, href]) => (
                <Link
                  key={title}
                  href={href}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  <p className="text-sm font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{body}</p>
                </Link>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="/book-a-demo" className="px-7 py-3">
                Book a Demo
              </Button>
              <Button href="/pricing" variant="outline" className="px-7 py-3">
                Request Pricing
              </Button>
              <Link
                href="/resource-center"
                className="group inline-flex items-center gap-1.5 px-1 py-3 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Resource Center
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-4xl rounded-xl bg-slate-900 px-6 py-5">
            <p className="text-sm font-semibold text-indigo-400">
              Already using Zoiko HR?
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2">
              {SUPPORT_LINKS.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white"
                >
                  {label}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
