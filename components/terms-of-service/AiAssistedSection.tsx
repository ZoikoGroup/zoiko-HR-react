import React from "react";
import Image from "next/image";

export default function AiAssistedSection() {
  const tableData = [
    {
      rule: "Availability",
      requirement:
        "AI-assisted features are available only where included in Customer's plan or Order Form and may be labeled as such in-product.",
      py: "py-6",
    },
    {
      rule: "Human accountability",
      requirement:
        "AI assistance is designed to support, not replace, accountable human judgment for high-impact employment decisions.",
      py: "py-6",
    },
    {
      rule: "Outputs",
      requirement:
        "Zoiko HR does not warrant the accuracy of AI-generated outputs; Customer is responsible for reviewing outputs before relying on them.",
      py: "py-6",
    },
    {
      rule: "Prohibited uses",
      requirement:
        "Use of AI features remains subject to the Acceptable Use Policy and AI Governance, including restrictions on unauthorized inference of sensitive traits.",
      py: "py-8",
    },
    {
      rule: "Professional advice",
      requirement:
        "AI outputs are not legal, tax, payroll, employment, or other professional advice.",
      py: "py-6",
    },
  ];

  return (
    <div className="w-full max-w-[1424.80px] h-[745.65px] relative bg-[#F5F7FA] overflow-hidden mx-auto">
      {/* Header Section */}
      <div className="w-[720px] max-w-[720px] left-[132.40px] top-[88px] absolute inline-flex flex-col justify-start items-start gap-3.5">
        <div className="self-stretch flex flex-col justify-start items-start">
          <span className="text-[#315EFB] text-xs font-bold font-['IBM_Plex_Sans'] uppercase tracking-wider">
            SECTION 12
          </span>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <h2 className="text-[#102A43] text-3xl font-extrabold font-['Manrope']">
            AI-assisted functionality &amp; human
            <br />
            accountability.
          </h2>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <p className="text-[#42526B] text-base font-normal font-['IBM_Plex_Sans'] leading-6">
            This is the contractual AI boundary, not a second AI policy.
            Detailed governance lives in AI Governance.
          </p>
        </div>
      </div>

      {/* Table Section */}
      <div className="w-[662.67px] p-[0.80px] left-[132.40px] top-[272px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] inline-flex flex-col justify-start items-start overflow-hidden shadow-sm">
        <div className="self-stretch flex flex-col justify-start items-start">
          {/* Table Header */}
          <div className="self-stretch bg-[#EEF1F5] inline-flex justify-center items-start gap-[0px]">
            <div className="w-48 px-4 py-3 inline-flex flex-col justify-start items-start">
              <span className="text-[#8895AA] text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wider">
                Rule
              </span>
            </div>
            <div className="w-[475.98px] px-4 py-3 inline-flex flex-col justify-start items-start">
              <span className="text-[#8895AA] text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wider">
                Requirement
              </span>
            </div>
          </div>

          {/* Table Rows */}
          {tableData.map((row, index) => (
            <div
              key={index}
              className="self-stretch border-t-[0.80px] border-[#EEF1F5] inline-flex justify-center items-start gap-[0px] hover:bg-slate-50/50 transition-colors"
            >
              <div
                className={`w-48 px-4 ${row.py} inline-flex flex-col justify-start items-start`}
              >
                <span className="text-[#102A43] text-sm font-semibold font-['IBM_Plex_Sans']">
                  {row.rule}
                </span>
              </div>
              <div className="w-[475.98px] px-4 py-3 inline-flex flex-col justify-start items-start">
                <p className="text-[#5A6B85] text-xs font-normal font-['IBM_Plex_Sans'] leading-5">
                  {row.requirement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Illustration Card */}
      <div className="w-[473px] h-96 left-[819px] top-[271.95px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] overflow-hidden shadow-sm">
        <Image
          src="/images/terms-of-service/Background+Border.png"
          alt="AI-assisted functionality illustration"
          width={473}
          height={386}
          className="w-full h-full left-0 top-0 absolute object-cover"
        />
      </div>
    </div>
  );
}
