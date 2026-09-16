import { Container, Reveal } from "@/components/ui";

const SUMMARY = [
  {
    title: "What we collect",
    body: "Business contact, account, device/usage, communications, and other categories described below.",
  },
  {
    title: "Why we use it",
    body: "Operate and secure our services, respond to requests, manage relationships, improve experiences, meet legal obligations, and other approved purposes.",
  },
  {
    title: "Your choices",
    body: "Access privacy rights, cookie controls, and marketing preferences through dedicated routes.",
  },
];

export function PrivacySummarySection() {
  return (
    <section className="border-b border-slate-200 bg-white py-12">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SUMMARY.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-sm font-semibold leading-5 text-ink">
                  {card.title}
                </h2>
                <p className="mt-2.5 text-xs leading-5 text-slate-500">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
