import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, EmojiIcon } from "./shared";

export function PrivacyRoutingSection() {
  return (
    <section className="bg-white py-14">
      <Container>
        <SectionHeading
          eyebrow="08 / Privacy & Security Routing"
          title="Sensitive inquiries have dedicated, governed paths."
        >
          Privacy rights requests and security reports must not be sent through
          the general inquiry form. Each has its own authoritative route.
        </SectionHeading>

        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal delay={0.06} className="h-full">
            <div className="h-full rounded-r-xl border border-l-[3px] border-blue-400 bg-blue-50 p-6">
              <div className="flex items-center gap-2.5">
                <EmojiIcon glyph="🔏" className="text-xl leading-8" />
                <h3 className="text-base font-semibold leading-6 text-slate-900">
                  Privacy / data request
                </h3>
              </div>
              <p className="pb-4 pt-2.5 text-xs leading-5 text-cyan-900">
                Exercise data subject rights, request data deletion or access,
                ask about data handling practices, or submit a privacy-related
                inquiry through the approved privacy-rights process.
              </p>
              <Link
                href="/security-privacy"
                className="text-xs font-semibold leading-5 text-blue-800 hover:underline"
              >
                Privacy / data request route →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="h-full">
            <PlaceholderImage
              src="/images/contact-zoiko-hr/privacy-routing.png"
              alt="Two colleagues reviewing a laptop together"
              label="Governed sensitive routes"
              className="h-full min-h-48 w-full rounded-r-xl border border-l-[3px] border-red-400 bg-stone-50"
            />
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="mt-4 rounded-lg border border-slate-200 bg-gray-50 px-4 py-3">
            <p className="text-xs leading-5 text-slate-500">
              <span className="font-semibold text-slate-600">
                Boundary rule:
              </span>{" "}
              Contact Us explains where to go — it is not the system of record
              for privacy-rights requests, vulnerability reports, incident
              notifications, or legally privileged communications.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
