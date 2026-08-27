"use client";

import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const ROUTES = [
  { label: "Support question", linkLabel: "Help Center", href: "/resources/faq" },
  { label: "Sales inquiry", linkLabel: "Talk to sales", href: "/book-a-demo" },
  { label: "Careers inquiry", linkLabel: "Careers", href: "/company/careers" },
  { label: "Partner inquiry", linkLabel: "Partners", href: "/partners" },
];

const TEXT_FIELDS = [
  { id: "media-name", label: "Name", type: "text" },
  { id: "media-email", label: "Work email", type: "email" },
  { id: "media-outlet", label: "Outlet / Organization", type: "text" },
];

const INQUIRY_TYPES = [
  "Press / media request",
  "Interview request",
  "Analyst inquiry",
  "Fact check",
];

const DEADLINES = [
  "No fixed deadline",
  "Within a week",
  "Within 48 hours",
  "Same day",
];

export function MediaInquirySection() {
  return (
    <section
      id="media-inquiries"
      className="bg-[#040D18] py-16 text-white sm:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Official media inquiry route.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-4 leading-relaxed text-white/60">
                For press, media, analyst, and interview requests. This form
                routes to the Zoiko HR communications team. Only information
                needed for triage and routing is requested.
              </p>
            </Reveal>

            <div className="mt-6 space-y-3">
              {ROUTES.map((route, i) => (
                <Reveal key={route.label} delay={0.14 + i * 0.05}>
                  <div className="rounded-xl border border-white/10 bg-[#1E3450] px-5 py-4 text-sm">
                    <span className="text-white/70">{route.label} → </span>
                    <Link
                      href={route.href}
                      className="font-semibold text-primary hover:text-white"
                    >
                      {route.linkLabel} ↗
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.34}>
              <p className="mt-5 text-sm leading-relaxed text-white/60">
                If your request is one of the above, use the dedicated route.
                The media form is for journalists, editors, and analysts only.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-3 text-xs leading-relaxed text-white/40">
                Response routing depends on inquiry type and team availability.
                No response time is guaranteed.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <form
              // No media inquiry endpoint is wired up yet — submission is
              // intentionally inert until an approved route is provided.
              onSubmit={(event) => event.preventDefault()}
              className="rounded-2xl border border-white/10 bg-[#0A1B2E] p-6 sm:p-8"
            >
              {TEXT_FIELDS.map((field) => (
                <div key={field.id} className="mb-4">
                  <label
                    htmlFor={field.id}
                    className="block text-sm text-white/70"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#1E3450] px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-primary"
                  />
                </div>
              ))}

              <div className="mb-4">
                <label
                  htmlFor="inquiry-type"
                  className="block text-sm text-white/70"
                >
                  Inquiry type
                </label>
                <select
                  id="inquiry-type"
                  name="inquiry-type"
                  defaultValue=""
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#1E3450] px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-primary"
                >
                  <option value="">Select…</option>
                  {INQUIRY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="inquiry-deadline"
                  className="block text-sm text-white/70"
                >
                  Deadline / time sensitivity
                </label>
                <select
                  id="inquiry-deadline"
                  name="inquiry-deadline"
                  defaultValue=""
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#1E3450] px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-primary"
                >
                  <option value="">Select…</option>
                  {DEADLINES.map((deadline) => (
                    <option key={deadline} value={deadline}>
                      {deadline}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="inquiry-message"
                  className="block text-sm text-white/70"
                >
                  Brief message
                </label>
                <textarea
                  id="inquiry-message"
                  name="inquiry-message"
                  rows={4}
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-[#1E3450] px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-primary"
                />
              </div>

              <label className="mb-5 flex items-start gap-2 text-xs leading-relaxed text-white/60">
                <input
                  type="checkbox"
                  name="acknowledge"
                  className="mt-0.5 h-4 w-4 flex-none rounded accent-[#315efb]"
                />
                I acknowledge the privacy notice and understand this form routes
                to the communications team.
              </label>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Submit media inquiry →
              </button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
