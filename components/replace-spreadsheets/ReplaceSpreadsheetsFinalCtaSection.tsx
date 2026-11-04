import { Container, Reveal, Button } from "@/components/ui";

export function ReplaceSpreadsheetsFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center"
      >
        <div className="h-72 w-[36rem] rounded-full bg-primary/20 blur-3xl" />
      </div>

      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to move HR beyond the spreadsheet?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            See how Zoiko HR can help you centralize workforce records,
            standardize recurring HR work and plan a controlled transition
            from fragmented administration.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/book-a-demo">Book a Demo</Button>
            <Button
              href="/implementation-guide"
              variant="outline"
              className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
            >
              Explore Implementation &amp; Migration
            </Button>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-white/40">
            No employee data, HR exports or migration files are requested
            through this form.{" "}
            <a href="/privacy-notice" className="font-semibold text-primary hover:text-white">
              Privacy Notice
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
