import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

export function LeaveAttendanceSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading title="Your own leave, balance and calendar — one tap away.">
              Self-Service surfaces your own leave request, balance and calendar
              entry points. Leave &amp; Attendance remains the policy, balance and
              approval authority.
            </SectionHeading>

            <Reveal delay={0.12}>
              <Link
                href="/leave-attendance"
                className="mt-5 inline-block text-base font-semibold text-primary hover:underline"
              >
                Explore Leave &amp; Attendance →
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <PlaceholderImage
              src="/images/self-service/leave-attendance.webp"
              alt="A presenter working through objectives at a whiteboard"
              label="Leave and attendance"
              className="aspect-video w-full rounded-xl border border-blue-200 bg-indigo-50 lg:aspect-[596/176]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
