"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const EXAMPLES = [
  {
    language: "HTTP",
    title: "Read employee record",
    code: `GET /employees/{EMPLOYEE_ID}
Authorization: Bearer {YOUR_ACCESS_TOKEN}
Accept: application/json

# Response — illustrative
# {
#   "id": "[synthetic-uuid]",
#   "given_name": "[Synthetic Name]",
#   "employment_status": "[enum from registry]"
# }`,
  },
  {
    language: "cURL",
    title: "List employees (paginated)",
    code: `curl -X GET "{BASE_URL}/employees?page_size={PAGE_SIZE}" \\
  -H "Authorization: Bearer {YOUR_ACCESS_TOKEN}" \\
  -H "Accept: application/json"

# Pagination parameters and response envelope are defined by the
# approved Operation Registry for the stated version.`,
  },
  {
    language: "Pseudocode",
    title: "Verify webhook",
    code: `signature = header("{APPROVED_SIGNATURE_HEADER}")
expected  = hmac(secret = {WEBHOOK_SIGNING_SECRET}, payload = raw_body)

if not constant_time_equals(signature, expected):
    reject(400)

# Algorithm, header name, and encoding come from the approved
# event source — never assumed from ecosystem convention.`,
  },
];

export function CodeExamplesSection() {
  const [activeTitle, setActiveTitle] = useState(EXAMPLES[0].title);
  const active =
    EXAMPLES.find((example) => example.title === activeTitle) ?? EXAMPLES[0];

  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Section 09"
          title="SDKs, samples and code examples."
        >
          Illustrative examples only. Support label, verification state,
          version, environment, and auth assumptions shown on every example.
        </SectionHeading>

        <Reveal delay={0.1}>
          <div className="mt-9 overflow-hidden rounded-2xl border border-slate-200">
            <div className="flex overflow-x-auto border-b border-slate-200">
              {EXAMPLES.map((example) => {
                const isActive = example.title === active.title;
                return (
                  <button
                    key={example.title}
                    type="button"
                    onClick={() => setActiveTitle(example.title)}
                    aria-pressed={isActive}
                    className={`flex flex-none items-center gap-2 border-b-2 px-5 py-4 text-sm transition-colors ${
                      isActive
                        ? "border-primary text-primary"
                        : "border-transparent text-slate-600 hover:text-primary"
                    }`}
                  >
                    <span
                      className={`rounded px-1.5 py-0.5 font-mono text-[10px] ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {example.language}
                    </span>
                    <span className="font-semibold">{example.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-slate-200 px-5 py-3.5 text-[10px] uppercase tracking-wide text-slate-400">
              <span>
                Status:{" "}
                <span className="ml-1 rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold normal-case text-amber-600">
                  Illustrative
                </span>
              </span>
              <span>
                Version:{" "}
                <span className="font-mono normal-case text-slate-500">
                  [v from registry]
                </span>
              </span>
              <span>
                Environment:{" "}
                <span className="font-mono normal-case text-slate-500">
                  [test / production — see Environment Registry]
                </span>
              </span>
              <button
                type="button"
                onClick={() => navigator.clipboard?.writeText(active.code)}
                className="ml-auto text-xs font-semibold normal-case tracking-normal text-slate-500 hover:text-primary"
              >
                Copy
              </button>
            </div>

            <pre className="overflow-x-auto bg-[#0A1B2E] px-6 py-6 font-mono text-xs leading-6 text-slate-300">
              <code>{active.code}</code>
            </pre>

            <p className="bg-slate-50 px-5 py-3.5 text-xs text-slate-400">
              This example is illustrative. Production use requires validation
              against the current approved technical source and version.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
