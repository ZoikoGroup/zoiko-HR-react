import React from "react";
import Image from "next/image";

export default function AccessLicenseSection() {
  const tableData = [
    {
      topic: "Access grant",
      term: "Subject to these Terms and full payment of applicable fees, Zoiko HR grants Customer a non-exclusive, non-transferable right to access and use the Services during the Subscription Term.",
      py: "py-8",
    },
    {
      topic: "Use conditions",
      term: "Access is limited to the number of Authorized Users, entities, and modules identified in the Order Form.",
      py: "py-6",
    },
    {
      topic: "Restrictions",
      term: "Customer and Authorized Users must comply with the Acceptable Use Policy, which is incorporated into these Terms by reference.",
      py: "py-6",
    },
    {
      topic: "Reservation of rights",
      term: "Zoiko HR and its licensors retain all right, title, and interest in the Services, excluding Customer Data.",
      py: "py-6",
    },
    {
      topic: "Documentation",
      term: "Product documentation is provided for guidance and does not expand the rights granted under these Terms.",
      py: "py-6",
    },
  ];

  return (
    <div className="w-full max-w-[1424.80px] h-[729.65px] relative bg-white overflow-hidden mx-auto">
      {/* Header Section */}
      <div className="w-[720px] max-w-[720px] left-[132.40px] top-[88px] absolute inline-flex flex-col justify-start items-start gap-3.5">
        <div className="self-stretch flex flex-col justify-start items-start">
          <span className="text-[#315EFB] text-xs font-bold font-['IBM_Plex_Sans'] uppercase tracking-wider">
            SECTION 08
          </span>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <h2 className="text-[#102A43] text-3xl font-extrabold font-['Manrope']">
            Access, license &amp; acceptable use.
          </h2>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <p className="text-[#42526B] text-base font-normal font-['IBM_Plex_Sans'] leading-6">
            This section grants the right to use the Services and incorporates
            the Acceptable Use Policy — it does
            <br />
            not duplicate the full prohibited-use list.
          </p>
        </div>
      </div>

      {/* Table Section */}
      <div className="w-[662.67px] p-[0.80px] left-[132.40px] top-[256px] absolute rounded-xl outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] inline-flex flex-col justify-start items-start overflow-hidden bg-white shadow-sm">
        <div className="self-stretch flex flex-col justify-start items-start">
          {/* Table Header */}
          <div className="self-stretch bg-[#F4F7FE] inline-flex justify-center items-start">
            <div className="w-48 px-4 py-3 inline-flex flex-col justify-start items-start">
              <span className="text-[#8895AA] text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wider">
                Topic
              </span>
            </div>
            <div className="w-[462.75px] px-4 py-3 inline-flex flex-col justify-start items-start">
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
                className={`w-48 px-4 ${row.py} inline-flex flex-col justify-start items-start`}
              >
                <span className="text-[#102A43] text-sm font-semibold font-['IBM_Plex_Sans']">
                  {row.topic}
                </span>
              </div>
              <div className="w-[462.75px] px-4 py-3 inline-flex flex-col justify-start items-start">
                <p className="text-[#5A6B85] text-xs font-normal font-['IBM_Plex_Sans'] leading-5">
                  {row.term}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Illustration Card */}
      <div className="w-[473px] h-96 left-[819px] top-[256.10px] absolute bg-[#F4F7FE] rounded-xl overflow-hidden shadow-sm">
        <Image
          src="/images/terms-of-service/image 571.png"
          alt="Access and License Illustration"
          width={473}
          height={385}
          className="w-full h-full left-0 top-0 absolute object-cover"
        />
      </div>
    </div>
  );
}
