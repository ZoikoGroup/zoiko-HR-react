import React from "react";
import Image from "next/image";

export default function SecuritySection() {
  const tableData = [
    {
      rule: "Customer environment",
      requirement:
        "Customer is responsible for its own devices, identity provider, network, and users' compliance with these Terms.",
      py: "py-6",
    },
    {
      rule: "Zoiko HR security program",
      requirement:
        "Zoiko HR maintains administrative, technical, and physical safeguards appropriate to the Services, as described in Security & Privacy.",
      py: "py-3.5",
    },
    {
      rule: "Security incidents",
      requirement:
        "Zoiko HR will notify Customer of confirmed security incidents affecting Customer Data as required by the DPA and applicable law.",
      py: "py-6",
    },
    {
      rule: "Vulnerability testing",
      requirement:
        "Security testing of the Services requires prior authorization through Security Reporting; unauthorized testing is a violation of these Terms.",
      py: "py-6",
    },
    {
      rule: "Shared responsibility",
      requirement:
        "Security is a shared responsibility between Zoiko HR, Customer, and Customer's connected third-party providers.",
      py: "py-6",
    },
  ];

  return (
    <div className="w-full max-w-[1424.80px] h-[684.50px] relative bg-slate-900 overflow-hidden mx-auto">
      {/* Header Section */}
      <div className="w-[720px] max-w-[720px] left-[132.40px] top-[88px] absolute inline-flex flex-col justify-start items-start gap-3.5">
        <div className="self-stretch flex flex-col justify-start items-start">
          <span className="text-indigo-400 text-xs font-bold font-['IBM_Plex_Sans'] uppercase tracking-wider">
            SECTION 10
          </span>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <h2 className="text-white text-3xl font-extrabold font-['Manrope']">
            Security, credentials &amp; incident handoffs.
          </h2>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <p className="text-slate-300 text-base font-normal font-['IBM_Plex_Sans'] leading-6">
            Security is a shared responsibility between Zoiko HR, Customer, and
            Customer&apos;s connected providers.
          </p>
        </div>
      </div>

      {/* Table Section */}
      <div className="w-[681.60px] p-[0.80px] left-[132.40px] top-[231px] absolute rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-900 inline-flex flex-col justify-start items-start overflow-hidden bg-slate-900 shadow-xl">
        <div className="self-stretch flex flex-col justify-start items-start">
          {/* Table Header */}
          <div className="self-stretch bg-blue-950 inline-flex justify-center items-start gap-[0px]">
            <div className="w-48 px-4 py-3 inline-flex flex-col justify-start items-start">
              <span className="text-slate-400 text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wider">
                Rule
              </span>
            </div>
            <div className="w-[489.60px] px-4 py-3 inline-flex flex-col justify-start items-start">
              <span className="text-slate-400 text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wider">
                Requirement
              </span>
            </div>
          </div>

          {/* Table Rows */}
          {tableData.map((row, index) => (
            <div
              key={index}
              className="self-stretch border-t-[0.80px] border-blue-950 inline-flex justify-center items-start gap-[0px] hover:bg-blue-950/40 transition-colors"
            >
              <div
                className={`w-48 px-4 ${row.py} inline-flex flex-col justify-start items-start`}
              >
                <span className="text-white text-sm font-semibold font-['IBM_Plex_Sans']">
                  {row.rule}
                </span>
              </div>
              <div className="w-[489.60px] px-4 py-3 inline-flex flex-col justify-start items-start">
                <p className="text-slate-300 text-xs font-normal font-['IBM_Plex_Sans'] leading-5">
                  {row.requirement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Illustration Card */}
      <div className="w-[454px] h-96 left-[838px] top-[231.45px] absolute bg-blue-950 rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-900 overflow-hidden shadow-xl">
        <Image
          src="/images/terms-of-service/image 572.png"
          alt="Security and Credentials Illustration"
          width={454}
          height={364}
          className="w-full h-full left-0 top-0 absolute object-cover"
        />
      </div>
    </div>
  );
}
