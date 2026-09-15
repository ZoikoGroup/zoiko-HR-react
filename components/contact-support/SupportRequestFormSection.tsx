"use client";

import { Container, Reveal, PlaceholderImage } from "@/components/ui";

// The approved route taxonomy is the same one offered by the support path
// cards above — no category is introduced here that the page does not establish.
const ISSUE_CATEGORIES = [
  "Product help",
  "Administrator / configuration",
  "Developer / integration",
  "Account / access",
  "Service issue",
  "Security / privacy / legal",
  "Not sure",
];

const FIELD_CLASSES =
  "w-full rounded-xl border border-black/10 bg-white px-3.5 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-primary focus:ring-1 focus:ring-primary/30";

function OptionalTag({ children = "optional" }: { children?: string }) {
  return (
    <span className="ml-2 text-xs font-normal text-slate-400">{children}</span>
  );
}

function RequiredMark() {
  return (
    <span aria-hidden className="text-rose-400">
      {" "}
      *
    </span>
  );
}

export function SupportRequestFormSection() {
  return (
    <section id="support-request" className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_405px]">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-indigo-400">
                Support request
              </span>

              <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                Submit a support request.
              </h2>
              <p className="mt-1.5 leading-relaxed text-slate-500">
                Provide the minimum context needed for the selected issue.
                Fields adjust based on category. All required fields are marked.
              </p>

              <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-rose-400/20 bg-rose-400/5 px-4 py-3">
                <span aria-hidden className="flex-none text-base leading-6 text-rose-400">
                  ⚠
                </span>
                <p className="text-xs leading-5 text-rose-400">
                  Do not include passwords, MFA / OTP codes, secret keys,
                  payment-card data, health or payroll records, or unrestricted
                  employee exports in any field or attachment.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form
                // No approved support intake endpoint is wired up yet, so
                // submission stays inert rather than silently dropping a request.
                onSubmit={(event) => event.preventDefault()}
                className="mt-7 flex flex-col gap-5"
              >
                <div>
                  <label
                    htmlFor="issue-category"
                    className="block pb-1.5 text-sm font-semibold text-ink"
                  >
                    Issue category
                    <RequiredMark />
                  </label>
                  <select
                    id="issue-category"
                    name="issue-category"
                    required
                    defaultValue=""
                    className={FIELD_CLASSES}
                  >
                    <option value="" disabled>
                      Select a category…
                    </option>
                    {ISSUE_CATEGORIES.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="reply-email"
                    className="block pb-1.5 text-sm font-semibold text-ink"
                  >
                    Reply email address
                    <RequiredMark />
                  </label>
                  <input
                    id="reply-email"
                    name="reply-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className={FIELD_CLASSES}
                  />
                  <p className="mt-1 text-xs leading-4 text-slate-400">
                    Used to reply to this request only. Not used for marketing
                    without separate consent.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block pb-1.5 text-sm font-semibold text-ink"
                  >
                    Subject
                    <OptionalTag />
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="One-line summary of the issue"
                    className={FIELD_CLASSES}
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-semibold text-ink"
                  >
                    Description
                    <RequiredMark />
                  </label>
                  <p className="py-1.5 text-xs leading-4 text-slate-400">
                    Include: what happened, what you expected, when it occurred,
                    and how many users are affected. Do not include credentials,
                    secret keys, or unnecessary personal data.
                  </p>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={6}
                    placeholder="Describe the issue using the prompts above…"
                    className={`${FIELD_CLASSES} min-h-28 resize-y`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="business-impact"
                    className="block text-sm font-semibold text-ink"
                  >
                    Business impact
                    <OptionalTag />
                  </label>
                  <p className="py-1.5 text-xs leading-4 text-slate-400">
                    Selecting an impact level does not imply a specific response
                    time or priority commitment.
                  </p>
                  {/* No approved impact scale exists yet, so the control offers
                      the placeholder only rather than inventing levels. */}
                  <select
                    id="business-impact"
                    name="business-impact"
                    defaultValue=""
                    className={FIELD_CLASSES}
                  >
                    <option value="">Select business impact…</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="attachment"
                    className="block text-sm font-semibold text-ink"
                  >
                    Attachment
                    <OptionalTag>
                      optional — if Attachment Policy permits
                    </OptionalTag>
                  </label>
                  <div className="mt-1.5 flex items-start gap-2 rounded-[10px] border border-amber-400/20 bg-amber-400/5 px-3.5 py-2.5">
                    <span aria-hidden className="flex-none text-base leading-6 text-amber-400">
                      ℹ
                    </span>
                    <p className="text-xs leading-4 text-amber-400">
                      Redact passwords, tokens, employee names, health data, and
                      payroll values before attaching. File types, size limits,
                      and retention are governed by the approved Attachment
                      Policy.
                    </p>
                  </div>
                  <label className="mt-2.5 flex cursor-pointer items-center gap-3 rounded-xl border border-black/20 px-4 py-3.5 text-sm text-slate-500 transition-colors hover:border-primary/40">
                    <span aria-hidden className="text-xl leading-8">
                      📎
                    </span>
                    Choose file…
                    <input
                      id="attachment"
                      name="attachment"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="rounded-xl bg-primary px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    Submit support request
                  </button>
                  <p className="text-xs leading-4 text-slate-400">
                    A confirmation is shown only after the request is
                    authoritatively received.
                  </p>
                </div>
              </form>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row lg:flex-col">
            <Reveal delay={0.14} className="flex-1">
              <PlaceholderImage
                src="/images/contact-support/request-aside-top.png"
                alt="A customer submitting a support request on their phone"
                label="Submitting a request on a phone"
                className="w-full rounded-3xl"
              />
            </Reveal>
            <Reveal delay={0.2} className="flex-1">
              <PlaceholderImage
                src="/images/contact-support/request-aside-bottom.png"
                alt="A customer giving a thumbs up beside their phone"
                label="A resolved support request"
                className="w-full rounded-3xl"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
