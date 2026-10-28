import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function PartnerFinalCtaSection() {
  return (
    <section className="bg-[#071428] py-14">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-[28px]">
                Ready to explore a partnership?
              </h2>
              <p className="mt-2 text-sm leading-5 text-slate-400">
                Choose a relationship area and submit a short inquiry — no
                attachments, no commitments.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#partner-inquiry"
                className="rounded-[10px] bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Start partner inquiry
              </Link>
              <Link
                href="/partners"
                className="rounded-[10px] border border-blue-950 px-6 py-3.5 text-sm text-indigo-400 transition-colors hover:border-indigo-400"
              >
                Explore current partners →
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
