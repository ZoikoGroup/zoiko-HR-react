import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

export function MobileFirstSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading title="A mobile-first operational experience.">
              Core self-service tasks stay usable at 320 CSS px, with accessible
              context switching, forms and status — not as an afterthought.
            </SectionHeading>

            <Reveal delay={0.12}>
              <Link
                href="/accessibility"
                className="mt-5 inline-block text-base font-semibold text-primary hover:underline"
              >
                View Accessibility →
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <PlaceholderImage
              src="/images/self-service/mobile-first.webp"
              alt="Two colleagues reviewing a document on a laptop"
              label="Mobile-first experience"
              className="aspect-[596/302] w-full rounded-xl bg-slate-100"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
