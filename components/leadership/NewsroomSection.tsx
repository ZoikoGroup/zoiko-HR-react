import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function NewsroomSection() {
  return (
    <section className="bg-[#F5F7FA] py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-black/10 bg-white p-6 text-center sm:p-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/leadership/newsroom-icon.png"
                alt=""
                aria-hidden
                className="mx-auto h-8 w-8"
              />
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink">
                Visit the Newsroom
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/60">
                Official announcements, press releases, and media materials for
                Zoiko HR and Zoiko Group entities are published through the
                Newsroom. Product update feeds, documentation changelogs, and
                blog posts are distinct from official corporate publications.
              </p>
              <div className="mt-6 flex justify-center">
                <Button href="/newsroom">Go to Newsroom →</Button>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-ink/40">
                Optional publication previews appear when eligible official
                publications meet the freshness and eligibility criteria defined
                in the Publication Registry.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} y={36}>
            <PlaceholderImage
              src="/images/leadership/newsroom.png"
              alt="Two colleagues in conversation in a lounge area"
              label="Visit the Newsroom"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
