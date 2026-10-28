import React from "react";

export default function IntegrationsSection() {
  const tableData = [
    {
      topic: "Third-party services",
      term: "Zoiko HR integrations may connect to identity, payroll, time, benefits, and other third-party systems that Customer chooses to enable.",
      py: "py-3.5",
    },
    {
      topic: "No endorsement",
      term: "Enabling a third-party integration does not make Zoiko HR a party to, or warrantor of, that third party service.",
      py: "py-3.5",
    },
    {
      topic: "Third-party terms",
      term: "Connected services may have their own terms, fees, and privacy practices, which apply in addition to these Terms.",
      py: "py-3.5",
    },
    {
      topic: "Credentials & authorization",
      term: "Customer is responsible for obtaining any licenses or consents required to connect a third-party account.",
      py: "py-3.5",
    },
    {
      topic: "Availability",
      term: "Provider availability and integration scope may change; material changes affecting purchased functionality will be communicated where required.",
      py: "py-6",
    },
  ];

  return (
    <div className="w-full max-w-[1424.80px] h-[604px] relative bg-white overflow-hidden mx-auto">
      {/* Main Content Wrapper */}
      <div className="w-[1160px] max-w-[1160px] left-[132.40px] top-[88px] absolute inline-flex flex-col justify-start items-start gap-8">
        {/* Header Section */}
        <div className="w-[720px] max-w-[720px] flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch flex flex-col justify-start items-start">
            <span className="text-[#315EFB] text-xs font-bold font-['IBM_Plex_Sans'] uppercase tracking-wider">
              SECTION 11
            </span>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="text-[#102A43] text-3xl font-extrabold font-['Manrope']">
              Integrations &amp; third-party services.
            </h2>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <p className="text-[#42526B] text-base font-normal font-['IBM_Plex_Sans'] leading-6">
              Connecting a third-party service does not make Zoiko HR a party
              to, or warrantor of, that service.
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
              <div className="w-[857.23px] px-4 py-3 inline-flex flex-col justify-start items-start">
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
                <div
                  className={`w-72 px-4 ${row.py} inline-flex flex-col justify-start items-start`}
                >
                  <span className="text-[#102A43] text-sm font-semibold font-['IBM_Plex_Sans']">
                    {row.topic}
                  </span>
                </div>
                <div className="w-[857.23px] px-4 py-3 inline-flex flex-col justify-start items-start">
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
