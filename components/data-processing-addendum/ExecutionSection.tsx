"use client";

import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const ROUTES = [
  {
    title: "Public review",
    description:
      "No authentication required for current public DPA where approved public.",
    action: "Review current DPA →",
    href: "#dpa-package",
    accent: true,
  },
  {
    title: "Prospect request",
    description:
      "Minimum business contact + organization + purpose. No employee or personal data.",
    action: "Request legal review →",
    href: "#legal-review",
    accent: true,
  },
  {
    title: "Customer account",
    description:
      "Authenticated organization-scoped agreement status — not public.",
    action: "Sign in →",
    href: "#",
    muted: true,
  },
  {
    title: "Authorized signer",
    description:
      "Identity and authority verification required. Exact method not invented.",
    action: "Verified route only",
    muted: true,
    disabled: true,
  },
];

// No approved request-type list is established, so the control offers the
// placeholder only rather than inventing options.
const REQUEST_TYPES: string[] = [];

const FIELD_CLASSES =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/30";

function RequiredMark() {
  return (
    <span aria-hidden className="text-rose-400">
      {" "}
      *
    </span>
  );
}

export function ExecutionSection() {
  return (
    <section id="legal-review" className="border-b border-slate-200 bg-slate-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="Section 14"
          title="Execution, legal review request, version history and archive."
        >
          Public review requires no authentication. Execution requires identity
          and authority verification. Custom terms request does not imply
          acceptance or turnaround.
        </SectionHeading>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ROUTES.map((route, i) => (
            <Reveal key={route.title} delay={Math.min(i * 0.06, 0.3)}>
              <div
                className={`flex h-full flex-col rounded-xl border px-5 py-4 ${
                  route.muted
                    ? "border-slate-200 bg-slate-100"
                    : "border-primary/25 bg-white"
                }`}
              >
                <h3
                  className={`text-sm font-semibold ${
                    route.muted ? "text-slate-500" : "text-primary"
                  }`}
                >
                  {route.title}
                </h3>
                <p className="mt-1.5 flex-1 text-xs leading-5 text-slate-500">
                  {route.description}
                </p>
                {route.disabled ? (
                  <span className="mt-3 text-xs font-semibold text-slate-400">
                    {route.action}
                  </span>
                ) : (
                  <Link
                    href={route.href!}
                    className={`mt-3 text-xs font-semibold ${
                      route.muted
                        ? "text-slate-500 hover:text-primary"
                        : "text-primary hover:text-primary-dark"
                    }`}
                  >
                    {route.action}
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
          <Reveal delay={0.14} className="h-full">
            <PlaceholderImage
              src="/images/data-processing-addendum/execution.png"
              alt="Two people discussing an agreement across a table"
              label="Discussing an agreement"
              className="aspect-[841/433] w-full rounded-2xl lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <Reveal delay={0.18} className="min-w-0">
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5">
              <h3 className="font-heading text-lg font-extrabold text-ink">
                Request legal review
              </h3>
              <p className="mt-1 text-[11px] leading-4 text-slate-400">
                Minimum business data only. No employee, personal or
                contract-sensitive data. Does not imply acceptance or
                turnaround.
              </p>

              <form
                // No approved legal-review intake endpoint is wired up yet, so
                // submission stays inert rather than dropping a request.
                onSubmit={(event) => event.preventDefault()}
                className="mt-4"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="dpa-email"
                      className="block pb-1 text-xs font-semibold text-ink"
                    >
                      Work email
                      <RequiredMark />
                    </label>
                    <input
                      id="dpa-email"
                      name="dpa-email"
                      type="email"
                      required
                      className={FIELD_CLASSES}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="dpa-name"
                      className="block pb-1 text-xs font-semibold text-ink"
                    >
                      Name
                      <RequiredMark />
                    </label>
                    <input
                      id="dpa-name"
                      name="dpa-name"
                      type="text"
                      required
                      className={FIELD_CLASSES}
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label
                    htmlFor="dpa-org"
                    className="block pb-1 text-xs font-semibold text-ink"
                  >
                    Organization
                    <RequiredMark />
                  </label>
                  <input
                    id="dpa-org"
                    name="dpa-org"
                    type="text"
                    required
                    className={FIELD_CLASSES}
                  />
                </div>

                <div className="mt-3">
                  <label
                    htmlFor="dpa-role"
                    className="block pb-1 text-xs font-semibold text-ink"
                  >
                    Legal / procurement role
                    <RequiredMark />
                  </label>
                  <input
                    id="dpa-role"
                    name="dpa-role"
                    type="text"
                    required
                    className={FIELD_CLASSES}
                  />
                </div>

                <div className="mt-3">
                  <label
                    htmlFor="dpa-request-type"
                    className="block pb-1 text-xs font-semibold text-ink"
                  >
                    Request type
                    <RequiredMark />
                  </label>
                  <select
                    id="dpa-request-type"
                    name="dpa-request-type"
                    required
                    defaultValue=""
                    className={FIELD_CLASSES}
                  >
                    <option value="">Select type</option>
                    {REQUEST_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <p className="mt-2.5 text-[10px] leading-4 text-slate-400">
                  No vulnerability, HR data or contract text. See{" "}
                  <Link
                    href="/trust-center"
                    className="font-semibold text-primary hover:text-primary-dark"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>

                <button
                  type="submit"
                  className="mt-3 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
