import React from "react";
import Image from "next/image";

export default function EffectiveDateSection() {
  const versionData = [
    { label: "Version", value: "v1.0" },
    { label: "Status", value: "Current" },
    { label: "Effective", value: "Sep 15, 2026" },
    { label: "Published", value: "Sep 15, 2026" },
    { label: "Last reviewed", value: "Sep 15, 2026" },
    { label: "Applies to", value: "Website, product, orders, APIs, support" },
  ];

  return (
    <div className="w-full max-w-[1424.80px] h-[610.80px] relative bg-[#F5F7FA] overflow-hidden mx-auto">
      {/* Header Section */}
      <div className="w-[720px] max-w-[720px] left-[132.40px] top-[88px] absolute inline-flex flex-col justify-start items-start gap-3.5">
        <div className="self-stretch flex flex-col justify-start items-start">
          <span className="text-[#315EFB] text-xs font-bold font-['IBM_Plex_Sans'] uppercase tracking-wider">
            SECTION 20
          </span>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <h2 className="text-[#102A43] text-3xl font-extrabold font-['Manrope']">
            Effective date, changes &amp; archive model.
          </h2>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <p className="text-[#42526B] text-base font-normal font-['IBM_Plex_Sans'] leading-6">
            The current version is always primary on the canonical URL.
            Superseded versions display an archive
            <br />
            banner and a link to the current Terms.
          </p>
        </div>
      </div>

      {/* Version Details Card */}
      <div className="w-[568px] px-6 py-6 left-[132.40px] top-[252px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] inline-flex flex-col justify-start items-start shadow-sm">
        <div className="self-stretch flex flex-col justify-start items-start">
          {versionData.map((item, index) => (
            <div
              key={index}
              className="self-stretch border-b-[0.80px] border-[#EEF1F5] inline-flex justify-center items-start gap-[0px]"
            >
              <div className="w-56 px-1 py-2.5 inline-flex flex-col justify-start items-start">
                <span className="text-[#8895AA] text-xs font-normal font-['IBM_Plex_Sans']">
                  {item.label}
                </span>
              </div>
              <div className="w-72 px-1 py-2.5 inline-flex flex-col justify-start items-start">
                <span className="text-[#102A43] text-xs font-semibold font-['IBM_Plex_Sans']">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Illustration Card */}
      <div className="w-[568px] h-64 left-[724.40px] top-[252px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] overflow-hidden shadow-sm">
        <Image
          src="/images/terms-of-service/image 573.png"
          alt="Effective Date Illustration"
          width={568}
          height={270}
          className="w-full h-full left-0 top-0 absolute object-cover"
        />
      </div>
    </div>
  );
}
