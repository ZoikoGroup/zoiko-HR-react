import { Container, Reveal, Button } from "@/components/ui";

export function GlobalHrOperationsFinalCtaSection() {
  return (
    <section className="bg-[#040d18] py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[45px] lg:leading-[1.25]">
              Build one HR operating foundation for the next stage of growth.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              See how Zoiko HR can help structure entities, workforce
              records, permissions and HR workflows as your organization
              expands — while keeping local differences governed and group
              visibility clear.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button href="/book-a-demo" className="!rounded-lg !px-8 !py-3.5">
                Book a Demo
              </Button>
              <Button
                href="/Implementation-guide"
                variant="outline"
                className="!rounded-lg !border-white/20 !px-8 !py-3.5 !text-white hover:!border-primary hover:!text-primary"
              >
                Explore Implementation & Migration
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <a
              href="/global-hr-management"
              className="mt-6 inline-block text-sm text-white/40 underline underline-offset-4 hover:text-white/70"
            >
              Explore Zoiko HR
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
