import React from "react";

export default function ApplicabilitySection() {
  const tableData = [
    {
      context: "Website visitors",
      rule: "Browsing the public site is governed by these Terms only to the extent stated here; separate website-use terms may apply to specific tools.",
    },
    {
      context: "Trial / evaluation users",
      rule: "Evaluation access may be subject to additional trial-specific terms, including duration and feature limits, presented at signup.",
    },
    {
      context: "Customer organizations",
      rule: "The organization identified in the applicable Order Form is the contracting party; its authorized representative accepts these Terms on its behalf.",
    },
    {
      context: "Authorized Users",
      rule: "Individual users are bound by these Terms and any policies referenced here while using the Services under a Customer account.",
    },
    {
      context: "Administrators",
      rule: "Product administrator permissions do not by themselves confer authority to accept, amend, or terminate an agreement.",
    },
    {
      context: "Developers / API users",
      rule: "API and integration use is additionally governed by the Developer Documentation and any applicable developer terms.",
    },
    {
      context: "Acceptance",
      rule: "By creating an account, signing an Order Form, or using the Services, Customer and its Authorized Users agree to these Terms as in effect at that time.",
    },
  ];

  return (
    <div className="w-full max-w-[1424.80px] h-[764.10px] relative bg-white overflow-hidden mx-auto">
      {/* Main Content Wrapper */}
      <div className="w-[1160px] max-w-[1160px] left-[132.40px] top-[88px] absolute inline-flex flex-col justify-start items-start gap-8">
        {/* Header Section */}
        <div className="w-[720px] max-w-[720px] flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch flex flex-col justify-start items-start">
            <span className="text-blue-600 text-xs font-bold font-['IBM_Plex_Sans'] uppercase tracking-wider">
              SECTION 04
            </span>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="text-[#102A43] text-3xl font-extrabold font-['Manrope']">
              Applicability &amp; acceptance.
            </h2>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <p className="text-[#42526B] text-base font-normal font-['IBM_Plex_Sans'] leading-6">
              These Terms describe who is covered and how an agreement is
              formed. The public page cannot
              <br />
              determine account-specific applicability — review your own
              agreement or use the contract route for that
              <br />
              question.
            </p>
          </div>
        </div>

        {/* Table Container */}
        <div className="self-stretch p-[0.80px] rounded-xl outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] flex flex-col justify-start items-start overflow-hidden bg-white shadow-sm">
          <div className="self-stretch flex flex-col justify-start items-start">
            {/* Table Header */}
            <div className="self-stretch bg-[#EEF1F5] inline-flex justify-center items-start">
              <div className="w-72 px-4 py-3 inline-flex flex-col justify-start items-start">
                <span className="text-[#8895AA] text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wider">
                  Context
                </span>
              </div>
              <div className="w-[857.23px] px-4 py-3 inline-flex flex-col justify-start items-start">
                <span className="text-[#8895AA] text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wider">
                  Rule
                </span>
              </div>
            </div>

            {/* Table Rows */}
            {tableData.map((row, index) => (
              <div
                key={index}
                className="self-stretch border-t-[0.80px] border-[#EEF1F5] inline-flex justify-center items-start hover:bg-slate-50/50 transition-colors"
              >
                <div className="w-72 px-4 py-3.5 inline-flex flex-col justify-start items-start">
                  <span className="text-[#102A43] text-sm font-semibold font-['IBM_Plex_Sans']">
                    {row.context}
                  </span>
                </div>
                <div className="w-[857.23px] px-4 py-3.5 inline-flex flex-col justify-start items-start">
                  <p className="text-[#5A6B85] text-xs font-normal font-['IBM_Plex_Sans'] leading-5">
                    {row.rule}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
