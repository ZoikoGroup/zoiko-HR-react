import React from "react";

export default function WarrantiesLiabilitySection() {
  const sectionsData = [
    {
      title: "Warranties",
      content:
        'Zoiko HR warrants that it will provide the Services in a manner consistent with general industry standards. Except as expressly stated in these Terms, the Services are provided "as is" and Zoiko HR disclaims all other warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement, to the extent permitted by law.',
    },
    {
      title: "Disclaimers",
      content:
        "Zoiko HR does not warrant that the Services will be uninterrupted or error-free, and does not provide legal, tax, payroll, employment, or compliance advice. Customer remains responsible for its employment decisions, policies, and compliance obligations.",
    },
    {
      title: "Limitation of liability",
      content:
        "Except for the excluded claims below, each party's total liability arising out of or related to these Terms will not exceed the fees paid or payable by Customer under the applicable Order Form in the twelve (12) months preceding the claim. Neither party will be liable for indirect, incidental, consequential, special, or punitive damages, or for lost profits or data, even if advised of the possibility.",
    },
    {
      title: "Exclusions from the cap",
      content:
        "The limitations above do not apply to a party's indemnification obligations, breach of confidentiality, infringement of the other party's intellectual property rights, or Customer's payment obligations, to the extent permitted by applicable law.",
    },
    {
      title: "Indemnification",
      content:
        "Each party will defend and indemnify the other against third-party claims arising from its breach of these Terms, violation of applicable law, or infringement of a third party intellectual property rights, subject to prompt notice and reasonable cooperation.",
    },
  ];

  return (
    <div className="w-full max-w-[1424.80px] h-[1067px] relative bg-[#0A1B2E] overflow-hidden mx-auto">
      {/* Main Container */}
      <div className="w-[900px] max-w-[900px] left-[262.40px] top-[88px] absolute inline-flex flex-col justify-start items-start gap-8">
        {/* Header Section */}
        <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch flex flex-col justify-start items-start">
            <span className="text-[#7FA6FF] text-xs font-bold font-['IBM_Plex_Sans'] uppercase tracking-wider">
              SECTION 17
            </span>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="text-[#FFFFFF] text-3xl font-extrabold font-['Manrope']">
              Warranties, disclaimers &amp; limitation of liability.
            </h2>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <p className="text-[#DCE4F2] text-base font-normal font-['IBM_Plex_Sans'] leading-6">
              These are the most material risk-allocation terms in this
              contract. They are rendered in full below at normal reading size —
              never
              <br />
              shrunk, summarized, or hidden in an accordion.
            </p>
          </div>
        </div>

        {/* Content Rows */}
        <div className="self-stretch flex flex-col justify-start items-start">
          {sectionsData.map((section, index) => (
            <div
              key={index}
              className={`self-stretch pt-7 pb-6 border-t-[0.80px] border-[#1E3450] flex flex-col justify-start items-start ${
                section.title === "Disclaimers" ||
                section.title === "Exclusions from the cap" ||
                section.title === "Indemnification"
                  ? "gap-2.5"
                  : "gap-2"
              }`}
            >
              <div className="self-stretch flex flex-col justify-start items-start">
                <h3 className="text-[#FFFFFF] text-base font-bold font-['IBM_Plex_Sans']">
                  {section.title}
                </h3>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <p className="text-[#B9C6DC] text-sm font-normal font-['IBM_Plex_Sans'] leading-6">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
