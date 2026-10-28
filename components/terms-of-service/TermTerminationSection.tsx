import React from "react";

export default function TermTerminationSection() {
  const tableData = [
    {
      topic: "Term",
      rule: "These Terms remain in effect for the Subscription Term stated in the Order Form and any renewal periods.",
      py: "py-3.5",
    },
    {
      topic: "Termination for cause",
      rule: "Either party may terminate for the other's uncured material breach following written notice.",
      py: "py-3.5",
    },
    {
      topic: "Termination for convenience",
      rule: "Either party may decline to renew a Subscription by providing notice as described in the Order Form.",
      py: "py-3.5",
    },
    {
      topic: "Effect of termination",
      rule: "Upon termination, Customer's access to the Services ends and unpaid fees for the remainder of the then-current term become due as stated in the Order Form.",
      py: "py-6",
    },
    {
      topic: "Data export",
      rule: "Customer may export Customer Data for a limited period after termination using the export tools described in product documentation.",
      py: "py-3.5",
    },
    {
      topic: "Deletion",
      rule: "Following the applicable retention period, Zoiko HR will delete or anonymize Customer Data in accordance with the DPA, subject to legal retention exceptions.",
      py: "py-6",
    },
    {
      topic: "Survival",
      rule: "Provisions that by their nature should survive termination, including confidentiality, IP, payment obligations, and limitation of liability, will survive.",
      py: "py-3.5",
    },
  ];

  return (
    <div className="w-full max-w-[1424.80px] h-[739.20px] relative bg-white overflow-hidden mx-auto">
      {/* Main Content Wrapper */}
      <div className="w-[1160px] max-w-[1160px] left-[132.40px] top-[88px] absolute inline-flex flex-col justify-start items-start gap-8">
        {/* Header Section */}
        <div className="w-[720px] max-w-[720px] flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch flex flex-col justify-start items-start">
            <span className="text-[#315EFB] text-xs font-bold font-['IBM_Plex_Sans'] uppercase tracking-wider">
              SECTION 16
            </span>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="text-[#102A43] text-3xl font-extrabold font-['Manrope']">
              Term, termination &amp; data after termination.
            </h2>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <p className="text-[#42526B] text-base font-normal font-['IBM_Plex_Sans'] leading-6">
              Exact renewal and notice mechanics live in your Order Form; the
              rules below describe the standard
              <br />
              structure.
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
                  Topic
                </span>
              </div>
              <div className="w-[880.39px] px-4 py-3 inline-flex flex-col justify-start items-start">
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
                <div
                  className={`w-72 px-4 ${row.py} inline-flex flex-col justify-start items-start`}
                >
                  <span className="text-[#102A43] text-sm font-semibold font-['IBM_Plex_Sans']">
                    {row.topic}
                  </span>
                </div>
                <div className="w-[880.39px] px-4 py-3 inline-flex flex-col justify-start items-start">
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
