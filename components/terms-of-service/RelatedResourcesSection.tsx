import React from "react";
import Image from "next/image";

export default function RelatedResourcesSection() {
  const resources = [
    {
      title: "Acceptable Use Policy",
      description: "Prohibited and restricted use standards.",
    },
    {
      title: "Privacy Notice",
      description: "Rights, lawful bases, retention and transfers.",
    },
    {
      title: "AI Governance",
      description: "AI permissions, transparency and human review.",
    },
    {
      title: "Security Reporting",
      description: "Vulnerability reporting and testing authorization.",
    },
  ];

  return (
    <div className="w-full max-w-[1424.80px] h-[493px] relative bg-[#F5F7FA] overflow-hidden mx-auto">
      {/* Title */}
      <div className="w-[700px] left-[132.40px] top-[88px] absolute inline-flex flex-col justify-start items-start">
        <h2 className="self-stretch justify-center text-[#102A43] text-3xl font-extrabold font-['Manrope']">
          Related legal &amp; trust resources.
        </h2>
      </div>

      {/* Subtitle */}
      <div className="w-[700px] left-[132.40px] top-[138px] absolute inline-flex flex-col justify-start items-start">
        <p className="self-stretch justify-center text-[#42526B] text-base font-normal font-['IBM_Plex_Sans'] leading-6">
          Canonical links from the Legal Document Registry.
        </p>
      </div>

      {/* Card 1: Acceptable Use Policy */}
      <div className="w-72 px-5 pt-5 pb-9 left-[132.40px] top-[190px] absolute bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] inline-flex flex-col justify-start items-start gap-1.5 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <div className="self-stretch flex flex-col justify-start items-start">
          <h3 className="self-stretch justify-center text-[#102A43] text-sm font-bold font-['IBM_Plex_Sans']">
            {resources[0].title}
          </h3>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <p className="self-stretch justify-center text-[#5A6B85] text-xs font-normal font-['IBM_Plex_Sans'] leading-5">
            {resources[0].description}
          </p>
        </div>
      </div>

      {/* Card 2: Privacy Notice */}
      <div className="w-72 p-5 left-[426.40px] top-[190px] absolute bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] inline-flex flex-col justify-start items-start gap-[5.18px] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <div className="self-stretch flex flex-col justify-start items-start">
          <h3 className="self-stretch justify-center text-[#102A43] text-sm font-bold font-['IBM_Plex_Sans']">
            {resources[1].title}
          </h3>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <p className="self-stretch justify-center text-[#5A6B85] text-xs font-normal font-['IBM_Plex_Sans'] leading-5">
            Rights, lawful bases, retention and
            <br />
            transfers.
          </p>
        </div>
      </div>

      {/* Image Illustration Container */}
      <div className="w-[572px] h-52 left-[720px] top-[189.88px] absolute bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] overflow-hidden shadow-sm">
        <Image
          src="/images/terms-of-service/image 574.png"
          alt="Legal & Trust Resources Illustration"
          width={572}
          height={214}
          className="w-full h-full left-0 top-0 absolute object-cover"
        />
      </div>

      {/* Card 3: AI Governance */}
      <div className="w-72 p-5 left-[132.40px] top-[305.50px] absolute bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] inline-flex flex-col justify-start items-start gap-[5.18px] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <div className="self-stretch flex flex-col justify-start items-start">
          <h3 className="self-stretch justify-center text-[#102A43] text-sm font-bold font-['IBM_Plex_Sans']">
            {resources[2].title}
          </h3>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <p className="self-stretch justify-center text-[#5A6B85] text-xs font-normal font-['IBM_Plex_Sans'] leading-5">
            AI permissions, transparency and human
            <br />
            review.
          </p>
        </div>
      </div>

      {/* Card 4: Security Reporting */}
      <div className="w-72 p-5 left-[426.40px] top-[305.50px] absolute bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] inline-flex flex-col justify-start items-start gap-[5.18px] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <div className="self-stretch flex flex-col justify-start items-start">
          <h3 className="self-stretch justify-center text-[#102A43] text-sm font-bold font-['IBM_Plex_Sans']">
            {resources[3].title}
          </h3>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <p className="self-stretch justify-center text-[#5A6B85] text-xs font-normal font-['IBM_Plex_Sans'] leading-5">
            Vulnerability reporting and testing
            <br />
            authorization.
          </p>
        </div>
      </div>
    </div>
  );
}
