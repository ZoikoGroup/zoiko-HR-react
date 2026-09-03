import { Container, Reveal } from "@/components/ui";
import { SectionHeading, RouteRow, type RouteTone } from "./shared";

const PATHS: {
  tone: RouteTone;
  label: string;
  description: string;
  linkLabel: string;
  href: string;
}[] = [
  {
    tone: "partner",
    label: "Partner With Us",
    description:
      "Explore approved partnership, integration, services, referral, or ecosystem opportunities with Zoiko HR.",
    linkLabel: "Partner With Us",
    href: "/partners",
  },
  {
    tone: "media",
    label: "Media Inquiries",
    description:
      "For press questions, interview requests, company comment, and approved media resources.",
    linkLabel: "Media Inquiries",
    href: "/newsroom",
  },
  {
    tone: "careers",
    label: "Careers",
    description:
      "Explore open roles and candidate information through the approved Zoiko HR careers experience.",
    linkLabel: "View Careers",
    href: "/careers",
  },
];

export function SpecializedPathsSection() {
  return (
    <section className="bg-gray-50 py-14">
      <Container>
        <SectionHeading
          eyebrow="07 / Partner · Media · Careers"
          title="Specialized contact paths"
        />

        <div className="mt-6 flex flex-col gap-2">
          {PATHS.map((path, i) => (
            <Reveal key={path.label} delay={0.06 + i * 0.06}>
              <RouteRow {...path} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
