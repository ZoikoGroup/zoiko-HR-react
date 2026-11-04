import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function SalesFinalCtaSection() {
  return (
    <section className="bg-[#0b1b2d] py-14">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white">
                Ready to discuss Zoiko HR?
              </h2>
              <p className="mt-2 text-sm leading-5 text-slate-400">
                Choose an evaluation topic and share only the information needed
                for a sales conversation.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#sales-inquiry"
                className="rounded-[10px] bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Start a sales conversation
              </Link>
              <Link
                href="/contact-support"
                className="rounded-[10px] border border-blue-950 px-6 py-3.5 text-sm text-indigo-400 transition-colors hover:border-indigo-400"
              >
                Already a customer? Get help →
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
