import React from "react";

export default function SuspensionSection() {
  const tableData = [
    {
      question: "What can trigger suspension",
      rule: "Material breach of these Terms or the Acceptable Use Policy, non-payment, suspected unauthorized access, or a security risk to the Services or other customers.",
      py: "py-6",
    },
    {
      question: "What may be suspended",
      rule: "Zoiko HR may suspend the affected account, user, feature, or integration rather than the entire Service where reasonably possible.",
      py: "py-3.5",
    },
    {
      question: "Notice",
      rule: "Zoiko HR will provide advance notice where practical, except where immediate action is necessary to protect the Services or other users.",
      py: "py-3.5",
    },
    {
      question: "Cure period",
      rule: "For non-emergency suspensions, Customer will generally be given an opportunity to cure before suspension takes effect.",
      py: "py-3.5",
    },
    {
      question: "Emergency action",
      rule: "Zoiko HR may act immediately to prevent harm to the Services, other customers, or third parties, with notice provided as soon as reasonably possible.",
      py: "py-6",
    },
    {
      question: "Restoration",
      rule: "Access is restored once the condition giving rise to suspension has been resolved to Zoiko HR's reasonable satisfaction.",
      py: "py-3.5",
    },
  ];

  return (
    <div className="w-full max-w-[1424.80px] h-[780.80px] relative bg-[#0B192C] overflow-hidden mx-auto">
      {/* Main Content Wrapper */}
      <div className="w-[1160px] max-w-[1160px] left-[132.40px] top-[88px] absolute inline-flex flex-col justify-start items-start gap-6">
        {/* Header Section */}
        <div className="w-[760px] max-w-[760px] flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch flex flex-col justify-start items-start">
            <span className="text-indigo-400 text-xs font-bold font-['IBM_Plex_Sans'] uppercase tracking-wider">
              SECTION 15
            </span>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="text-white text-3xl font-extrabold font-['Manrope']">
              Suspension &amp; protective action.
            </h2>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <p className="text-slate-300 text-base font-normal font-['IBM_Plex_Sans'] leading-6">
              Because suspension can materially affect workforce operations, the
              triggers and process are stated exactly
              <br />
              here rather than buried in miscellaneous provisions.
            </p>
          </div>
        </div>

        {/* Table Container */}
        <div className="self-stretch px-[0.80px] pt-[4.80px] pb-[0.80px] rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-900 flex flex-col justify-start items-start overflow-hidden bg-[#0B192C] shadow-lg">
          <div className="self-stretch flex flex-col justify-start items-start">
            {/* Table Header */}
            <div className="self-stretch bg-[#102A43] inline-flex justify-center items-start">
              <div className="w-80 px-4 py-3 inline-flex flex-col justify-start items-start">
                <span className="text-slate-400 text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wider">
                  Question
                </span>
              </div>
              <div className="w-[834.05px] px-4 py-3 inline-flex flex-col justify-start items-start">
                <span className="text-slate-400 text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wider">
                  Rule
                </span>
              </div>
            </div>

            {/* Table Rows */}
            {tableData.map((row, index) => (
              <div
                key={index}
                className="self-stretch border-t-[0.80px] border-[#102A43] inline-flex justify-center items-start hover:bg-[#102A43]/50 transition-colors"
              >
                <div
                  className={`w-80 px-4 ${row.py} inline-flex flex-col justify-start items-start`}
                >
                  <span className="text-white text-sm font-semibold font-['IBM_Plex_Sans']">
                    {row.question}
                  </span>
                </div>
                <div className="w-[834.05px] px-4 py-3 inline-flex flex-col justify-start items-start">
                  <p className="text-slate-300 text-xs font-normal font-['IBM_Plex_Sans'] leading-5">
                    {row.rule}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note Box */}
        <div className="self-stretch px-6 py-6 bg-slate-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-blue-950 flex flex-col justify-start items-start">
          <p className="text-slate-400 text-xs font-normal font-['IBM_Plex_Sans'] leading-5">
            A restriction narrowly scoped to an account, user, feature, or
            integration is preserved as such — it is never presented as a full
            account suspension unless it is one.
          </p>
        </div>
      </div>
    </div>
  );
}
