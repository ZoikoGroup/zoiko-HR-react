"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Reveal, Button } from "@/components/ui";

export function DeveloperFinalCtaSection() {
  return (
    <section className="bg-[#102A43] py-20 text-white sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading, Subtitle, Actions and Note */}
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Planning an integration? Scope it with our team.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#C3CADF] sm:text-lg">
                Talk through the surfaces, scopes and environments your integration needs, and the
                plan and configuration that include them.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  href="/book-a-demo"
                  className="!rounded-full !bg-[#305CF8] !px-7 !py-3.5 !text-[15px] !font-semibold text-white shadow-lg hover:!bg-[#2547CE]"
                >
                  Book a Demo
                </Button>
                <Button
                  href="/product-tour"
                  variant="outline"
                  className="!rounded-full !border !border-white/30 !bg-transparent !px-7 !py-3.5 !text-[15px] !font-semibold !text-white hover:!border-white hover:!bg-white/10"
                >
                  Take the Product Tour →
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-8 max-w-lg border-t border-white/10 pt-5 text-xs leading-relaxed text-[#8A93B2]">
                When you contact us, describe your integration in general terms. Never include
                credentials, tokens, keys or employee data.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Image Composition */}
          <div className="lg:col-span-6">
            <Reveal delay={0.16}>
              <div className="grid grid-cols-2 gap-4">
                {/* Large Main Image spanning both rows on the left */}
                <div className="row-span-2 overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-lg">
                  <Image
                    src="/images/developers/cta-team.png"
                    alt="Team collaborating around laptops"
                    width={600}
                    height={800}
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Top Right Thumbnail */}
                <div className="overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-md">
                  <Image
                    src="/images/developers/cta-code-thumb.png"
                    alt="Code editor closeup"
                    width={400}
                    height={260}
                    unoptimized
                    className="h-[140px] w-full object-cover sm:h-[180px]"
                  />
                </div>

                {/* Bottom Right Thumbnail */}
                <div className="overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-md">
                  <Image
                    src="/images/developers/cta-collab-thumb.png"
                    alt="Developers discussing integration logic"
                    width={400}
                    height={260}
                    unoptimized
                    className="h-[140px] w-full object-cover sm:h-[180px]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
