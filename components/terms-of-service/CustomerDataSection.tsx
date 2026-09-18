import React from "react";

export default function CustomerDataSection() {
  const tableData = [
    {
      topic: "Customer Data ownership",
      term: "Customer owns and retains all right, title, and interest in Customer Data.",
    },
    {
      topic: "License to process",
      term: "Customer grants Zoiko HR a limited license to host, process, and use Customer Data solely to provide and support the Services.",
    },
    {
      topic: "Processing roles",
      term: "Where the DPA applies, Zoiko HR processes Customer Data as a processor acting on Customer's instructions.",
    },
    {
      topic: "Privacy of business contacts",
      term: "Personal information collected from website visitors and business contacts is handled under the Privacy Notice.",
    },
    {
      topic: "Data location & subprocessors",
      term: "Hosting locations and approved subprocessors are described in the Trust Center and Subprocessors registry, not restated here.",
    },
    {
      topic: "Retention & deletion",
      term: "Retention and deletion obligations are set out in the DPA and are not altered by these Terms.",
    },
    {
      topic: "AI training",
      term: "Customer Data is not used to train Zoiko HR's underlying AI models except as expressly agreed in writing.",
    },
  ];

  return (
    <div className="w-full max-w-[1424.80px] h-[699px] relative bg-[#F5F7FA] overflow-hidden mx-auto">
      {/* Main Content Wrapper */}
      <div className="w-[1160px] max-w-[1160px] left-[132.40px] top-[88px] absolute inline-flex flex-col justify-start items-start gap-8">
        {/* Header Section */}
        <div className="w-[720px] max-w-[720px] flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch flex flex-col justify-start items-start">
            <span className="text-[#315EFB] text-xs font-bold font-['IBM_Plex_Sans'] uppercase tracking-wider">
              SECTION 09
            </span>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="text-[#102A43] text-3xl font-extrabold font-['Manrope']">
              Customer data, privacy &amp; DPA.
            </h2>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <p className="text-[#42526B] text-base font-normal font-['IBM_Plex_Sans'] leading-6">
              These Terms set the contractual data-use boundary only. Rights,
              retention, and transfer detail live in the
              <br />
              Privacy Notice and DPA.
            </p>
          </div>
        </div>

        {/* Table Container */}
        <div className="self-stretch p-[0.80px] bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] flex flex-col justify-start items-start overflow-hidden shadow-sm">
          <div className="self-stretch flex flex-col justify-start items-start">
            {/* Table Header */}
            <div className="self-stretch bg-[#EEF1F5] inline-flex justify-center items-start">
              <div className="w-72 px-4 py-3 inline-flex flex-col justify-start items-start">
                <span className="text-[#8895AA] text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wider">
                  Topic
                </span>
              </div>
              <div className="w-[880.39px] px-4 py-3 inline-flex flex-col justify-start items-start">
                <span className="text-[#8895AA] text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wider">
                  Term
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
                    {row.topic}
                  </span>
                </div>
                <div className="w-[880.39px] px-4 py-3.5 inline-flex flex-col justify-start items-start">
                  <p className="text-[#5A6B85] text-xs font-normal font-['IBM_Plex_Sans'] leading-5">
                    {row.term}
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
