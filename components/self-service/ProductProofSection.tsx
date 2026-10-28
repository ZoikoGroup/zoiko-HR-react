import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const TABS = [
  "Overview",
  "My Records",
  "My Tasks",
  "Request Center",
  "Documents",
  "Leave & Attendance",
];

const STATS = [
  { value: "3", label: "Open tasks" },
  { value: "2", label: "Requests in progress" },
  { value: "1", label: "Document to acknowledge" },
  { value: "12.5 days", label: "Leave balance" },
];

const QUEUE = [
  "Document upload required — work authorization",
  "Policy acknowledgment pending — Code of Conduct v3",
  "Manager approval pending — leave request",
];

export function ProductProofSection() {
  return (
    <section className="bg-sky-950 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Product proof"
          title={
            <>
              One operational home for tasks, requests, records and documents.
            </>
          }
          tone="dark"
          className="max-w-[680px]"
        >
          A context bar, task rail, request rail and record/document/leave cards
          bring role-appropriate work into a single governed workspace.
        </SectionHeading>

        <Reveal delay={0.12}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-blue-950 bg-slate-900">
            {/* Context bar */}
            <div className="flex gap-2 overflow-x-auto border-b border-blue-950 px-5 pb-5 pt-4">
              {TABS.map((tab, i) => (
                <span
                  key={tab}
                  className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold ${
                    i === 0
                      ? "bg-primary text-white"
                      : "bg-blue-950 text-slate-300"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>

            {/* Stat rail — the gap-px on a blue ground draws the dividers */}
            <div className="grid gap-px bg-blue-950 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-slate-900 px-5 py-4">
                  <p className="text-xl font-extrabold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Attention queue
              </p>
              <div className="grid gap-3 lg:grid-cols-3">
                {QUEUE.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-cyan-900 bg-blue-950 px-4 py-3.5"
                  >
                    <p className="text-xs text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <Link
            href="/product-tour"
            className="mt-6 inline-block text-base font-semibold text-indigo-400 transition-colors hover:text-white"
          >
            Take the Product Tour →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
