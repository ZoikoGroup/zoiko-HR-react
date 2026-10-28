import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const CATEGORIES = [
  {
    glyph: "◈",
    accent: "text-primary",
    title: "Contract templates",
    body: "Employment agreements and workforce contracts used as template sources for instance creation.",
    authority: "Docs Pro — template source authority",
  },
  {
    glyph: "◎",
    accent: "text-sky-700",
    title: "Policy documents",
    body: "Workforce policies referenced or copied for HR workflows, with version binding.",
    authority: "Docs Pro — policy document repository",
  },
  {
    glyph: "⊟",
    accent: "text-amber-700",
    title: "HR form templates",
    body: "Approved form templates generating instances with exact template version provenance.",
    authority: "Docs Pro — form template repository",
  },
  {
    glyph: "⊞",
    accent: "text-green-700",
    title: "Reference documents",
    body: "Links or references to current approved policy/guidance documents in the source repository.",
    authority: "Docs Pro — document reference source",
  },
];

function CategoryCard({ category }: { category: (typeof CATEGORIES)[number] }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <span aria-hidden className={`text-xl leading-8 ${category.accent}`}>
          {category.glyph}
        </span>
        <p className="text-sm font-semibold text-slate-950">{category.title}</p>
      </div>
      <p className="flex-1 text-xs leading-5 text-slate-600">{category.body}</p>
      <div className="border-t border-slate-100 pt-2">
        <p
          className={`text-[10px] font-medium uppercase tracking-wide ${category.accent}`}
        >
          Source authority
        </p>
        <p className="pt-1 font-mono text-xs leading-4 text-gray-500">
          {category.authority}
        </p>
      </div>
    </div>
  );
}

export function WhatCanConnectSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="What can connect"
          title="Approved workforce-documentation categories — exact objects from Product Truth"
        >
          These are the high-level content classes supported by the Zoiko Docs
          Pro relationship. Exact file formats, object lists, sync behavior,
          storage location and availability are source-governed — not invented
          here.
        </SectionHeading>

        {/* Two card columns with the photo spanning both rows beside them. */}
        <div className="mt-10 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0.06}>
            <CategoryCard category={CATEGORIES[0]} />
          </Reveal>
          <Reveal delay={0.12}>
            <CategoryCard category={CATEGORIES[1]} />
          </Reveal>

          <Reveal
            delay={0.18}
            className="order-last h-full sm:col-span-2 lg:order-none lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:row-start-1"
          >
            <PlaceholderImage
              src="/images/zoiko-docs-pro/what-can-connect.webp"
              alt="A presenter addressing colleagues in a training room"
              label="Approved categories"
              className="aspect-video w-full rounded-xl border border-slate-200 bg-white lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <Reveal delay={0.24}>
            <CategoryCard category={CATEGORIES[2]} />
          </Reveal>
          <Reveal delay={0.3}>
            <CategoryCard category={CATEGORIES[3]} />
          </Reveal>
        </div>

        <Reveal delay={0.34}>
          <p className="mt-5 text-xs font-medium leading-4 text-gray-400">
            No specific file format, file size limit, format conversion, virus
            scanning, DLP or storage region is implied by any category above.
            Capabilities come from the current approved product contract.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
