"use client";

import { CautionNote } from "./shared";

const INQUIRY_TYPES = [
  "General legal inquiry",
  "Copyright or trademark permission",
  "Copyright or trademark complaint",
  "Brand or press-asset usage",
  "Other legal notice question",
];

const FIELD_CLASSES =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary/30";

function RequiredMark() {
  return (
    <span aria-hidden className="text-red-400">
      {" "}
      *
    </span>
  );
}

export function LegalContactForm() {
  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 px-5 py-5 sm:px-6">
      <h3 className="text-base font-semibold leading-6 text-ink">
        Legal contact form
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        For general legal notices and IP inquiries. For privacy requests and
        security reports, use the specialist routes above.
      </p>

      <CautionNote>
        <span className="font-semibold">Do not include</span> passwords,
        authentication codes, payment-card data, government identifiers, medical
        information, employee records, or other sensitive personal data in a
        public legal inquiry. If secure information is required, Zoiko HR will
        provide an approved secure channel after initial contact.
      </CautionNote>

      <form
        // No approved legal intake endpoint is wired up yet, so submission
        // stays inert rather than silently dropping an inquiry.
        onSubmit={(event) => event.preventDefault()}
        className="mt-5 flex flex-col gap-4"
      >
        <div>
          <label
            htmlFor="legal-inquiry-type"
            className="block pb-1.5 text-xs font-semibold leading-5 text-slate-900"
          >
            Inquiry type
            <RequiredMark />
          </label>
          <select id="legal-inquiry-type" name="inquiry-type" required className={FIELD_CLASSES}>
            <option value="">Select inquiry type</option>
            {INQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="legal-business-email"
            className="block pb-1.5 text-xs font-semibold leading-5 text-slate-900"
          >
            Business email
            <RequiredMark />
          </label>
          <input
            id="legal-business-email"
            name="business-email"
            type="email"
            required
            placeholder="you@company.com"
            className={FIELD_CLASSES}
          />
        </div>

        <div>
          <label
            htmlFor="legal-inquiry-description"
            className="block pb-1.5 text-xs font-semibold leading-5 text-slate-900"
          >
            Inquiry description
            <RequiredMark />
          </label>
          <p className="pb-1.5 text-xs leading-5 text-slate-500">
            Do not include sensitive personal data, credentials, or employee
            records.
          </p>
          <textarea
            id="legal-inquiry-description"
            name="inquiry-description"
            required
            rows={5}
            placeholder="Describe your inquiry briefly and precisely."
            className={`${FIELD_CLASSES} resize-y`}
          />
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Submit inquiry
          </button>
        </div>
      </form>
    </div>
  );
}
