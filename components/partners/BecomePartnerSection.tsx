"use client";

import { Container, Reveal } from "@/components/ui";

const CAPABILITIES = [
  "Identity & Access",
  "Payroll & Finance",
  "Implementation",
  "Advisory",
  "Other",
];

const FIT_POINTS = [
  "Describe your organization type and geography",
  "Select the partner relationship type you are exploring",
  "Share your capability context",
  "Acknowledge the privacy and partner program notice",
];

const TEXT_FIELDS = [
  { id: "organization-name", label: "Organization name", type: "text" },
  { id: "business-website", label: "Business website", type: "url" },
  { id: "work-email", label: "Work email", type: "email" },
  { id: "country-region", label: "Country / Region", type: "text" },
];

const PARTNER_TYPES = [
  "Technology & Integration",
  "Implementation & Services",
  "Advisory & Consulting",
  "Referral & Channel",
  "Strategic Alliance",
];

export function BecomePartnerSection() {
  return (
    <section id="become-a-partner" className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Become a partner — start a partner inquiry.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal delay={0.08}>
            <form
              // No partner inquiry endpoint is wired up yet — submission is
              // intentionally inert until an approved route is provided.
              onSubmit={(event) => event.preventDefault()}
              className="rounded-2xl border border-black/10 bg-[#F5F7FA] p-6 sm:p-8"
            >
              {TEXT_FIELDS.map((field) => (
                <div key={field.id} className="mb-4">
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-semibold text-ink"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    className="mt-1.5 w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-primary"
                  />
                </div>
              ))}

              <div className="mb-4">
                <label
                  htmlFor="partner-type"
                  className="block text-sm font-semibold text-ink"
                >
                  Partner type of interest
                </label>
                <select
                  id="partner-type"
                  name="partner-type"
                  defaultValue=""
                  className="mt-1.5 w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-primary"
                >
                  <option value="">Select type</option>
                  {PARTNER_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <fieldset className="mb-4">
                <legend className="text-sm font-semibold text-ink">
                  Capabilities of interest (select all that apply)
                </legend>
                <div className="mt-2 space-y-1.5">
                  {CAPABILITIES.map((capability) => (
                    <label
                      key={capability}
                      className="flex items-center gap-2 text-sm text-ink/70"
                    >
                      <input
                        type="checkbox"
                        name="capabilities"
                        value={capability}
                        className="h-4 w-4 rounded border-black/20 accent-[#315efb]"
                      />
                      {capability}
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="mb-5 flex items-start gap-2 text-xs text-ink/50">
                <input
                  type="checkbox"
                  name="acknowledge"
                  className="mt-0.5 h-4 w-4 rounded border-black/20 accent-[#315efb]"
                />
                I acknowledge the privacy notice and partner inquiry terms.
              </label>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Start partner inquiry →
              </button>
            </form>
          </Reveal>

          <div>
            <Reveal delay={0.14}>
              <p className="font-heading text-xl font-bold text-ink">
                Is this the right fit?
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-4 leading-relaxed text-ink/60">
                The partner inquiry process starts with the minimum information
                needed to understand your organization, geography, partner type
                interest, and capability context. No sensitive business data,
                API keys, customer lists, financial records, or confidential
                contracts are requested at this stage.
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <ul className="mt-5 space-y-2">
                {FIT_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-ink/70"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 h-2 w-2 flex-none rounded-full bg-emerald-500"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.32}>
              <p className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 text-sm leading-relaxed text-amber-800">
                Use &quot;partner inquiry&quot; — not &quot;apply&quot; — when
                formal program mechanics are not publicly specified. Acceptance
                criteria, fees, and program terms are not promised here.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
