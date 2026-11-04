import React from "react";
import Image from "next/image";

export default function TermsOverviewSection() {
  const navItemsRow1 = [
    "Hierarchy",
    "Applicability",
    "Definitions",
    "Accounts",
    "Commercial terms",
    "Access & use",
    "Data & privacy",
    "Security",
    "Integrations",
    "AI terms",
  ];

  const navItemsRow2 = [
    "IP & confidentiality",
    "Support & beta",
    "Suspension",
    "Termination",
    "Liability",
    "Compliance & disputes",
    "General provisions",
    "Changes & FAQ",
  ];

  return (
    <div className="w-full max-w-[1424.80px] h-[635.80px] relative bg-[#F5F7FA] overflow-hidden mx-auto">
      {/* Title & Description */}
      <div className="w-[700px] max-w-[700px] left-[132.40px] top-[72px] absolute inline-flex flex-col justify-start items-start gap-3">
        <div className="self-stretch flex flex-col justify-start items-start">
          <h2 className="self-stretch justify-center text-[#102A43] text-3xl font-extrabold font-['Manrope']">
            Eight things to know before you read the full
            <br />
            Terms.
          </h2>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <p className="self-stretch justify-center text-[#42526B] text-base font-normal font-['IBM_Plex_Sans'] leading-6">
            A fast map for non-lawyers. Each summary links to the full section —
            it does not replace or narrow
            <br />
            the operative clauses below.
          </p>
        </div>
      </div>

      {/* Card 1: Agreement hierarchy */}
      <div className="w-72 p-5 left-[132.40px] top-[248px] absolute bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] inline-flex flex-col justify-start items-start gap-[5.18px] shadow-sm">
        <div className="self-stretch flex flex-col justify-start items-start">
          <h3 className="self-stretch justify-center text-[#102A43] text-sm font-bold font-['IBM_Plex_Sans']">
            Agreement hierarchy
          </h3>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <p className="self-stretch justify-center text-[#5A6B85] text-xs font-normal font-['IBM_Plex_Sans'] leading-5">
            See which document controls when
            <br />
            agreements overlap.
          </p>
        </div>
      </div>

      {/* Center Image Container */}
      <div className="w-[575px] h-[208px] left-[425px] top-[248px] absolute bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] overflow-hidden shadow-sm">
        <Image
          src="/images/terms-of-service/image 570.png"
          alt="Terms overview illustration"
          width={575}
          height={216}
          className="w-full h-full left-0 top-0 absolute object-cover"
        />
      </div>

      {/* Card 2: Access & acceptable use */}
      <div className="w-72 p-5 left-[1014.40px] top-[248px] absolute bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] inline-flex flex-col justify-start items-start gap-[5.18px] shadow-sm">
        <div className="self-stretch flex flex-col justify-start items-start">
          <h3 className="self-stretch justify-center text-[#102A43] text-sm font-bold font-['IBM_Plex_Sans']">
            Access &amp; acceptable use
          </h3>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <p className="self-stretch justify-center text-[#5A6B85] text-xs font-normal font-['IBM_Plex_Sans'] leading-5">
            Your license to use the Services and its
            <br />
            limits.
          </p>
        </div>
      </div>

      {/* Card 3: Data & privacy */}
      <div className="w-72 p-5 left-[132.40px] top-[364.30px] absolute bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] inline-flex flex-col justify-start items-start gap-[5.18px] shadow-sm">
        <div className="self-stretch flex flex-col justify-start items-start">
          <h3 className="self-stretch justify-center text-[#102A43] text-sm font-bold font-['IBM_Plex_Sans']">
            Data &amp; privacy
          </h3>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <p className="self-stretch justify-center text-[#5A6B85] text-xs font-normal font-['IBM_Plex_Sans'] leading-5">
            The contractual data-use boundary, not
            <br />
            the full policy.
          </p>
        </div>
      </div>

      {/* Card 4: Liability & disputes */}
      <div className="w-72 p-5 left-[1014.40px] top-[364.30px] absolute bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] inline-flex flex-col justify-start items-start gap-[5.18px] shadow-sm">
        <div className="self-stretch flex flex-col justify-start items-start">
          <h3 className="self-stretch justify-center text-[#102A43] text-sm font-bold font-['IBM_Plex_Sans']">
            Liability &amp; disputes
          </h3>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <p className="self-stretch justify-center text-[#5A6B85] text-xs font-normal font-['IBM_Plex_Sans'] leading-5">
            Warranties, liability caps, and how
            <br />
            disputes are resolved.
          </p>
        </div>
      </div>

      {/* Navigation Tags / Section Pills Container */}
      <div className="w-[1160px] h-16 left-[132.40px] top-[492.60px] absolute">
        {/* Row 1 Tags */}
        <div className="absolute left-0 top-0 flex gap-2.5 flex-wrap">
          {navItemsRow1.map((item, index) => (
            <div
              key={index}
              className="h-8 px-3.5 py-2 bg-white rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] inline-flex flex-col justify-start items-start cursor-pointer hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <span className="justify-center text-[#42526B] text-xs font-semibold font-['IBM_Plex_Sans']">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 Tags */}
        <div className="absolute left-0 top-[39.60px] flex gap-2.5 flex-wrap">
          {navItemsRow2.map((item, index) => (
            <div
              key={index}
              className="h-8 px-3.5 py-2 bg-white rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] inline-flex flex-col justify-start items-start cursor-pointer hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <span className="justify-center text-[#42526B] text-xs font-semibold font-['IBM_Plex_Sans']">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
