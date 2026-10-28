import React from "react";
import Image from "next/image";

export default function AccountAgreementSection() {
  return (
    <div className="w-full max-w-[1424.80px] h-[849px] relative bg-white overflow-hidden mx-auto">
      {/* Top Notice Box */}
      <div className="w-[1160px] px-7 py-6 left-[132.40px] top-[72px] absolute bg-violet-50 rounded-xl inline-flex flex-col justify-start items-start gap-2">
        <div className="self-stretch flex flex-col justify-start items-start">
          <span className="text-blue-600 text-xs font-bold font-['IBM_Plex_Sans'] uppercase tracking-wide">
            ACCOUNT-SPECIFIC AGREEMENT NOTICE
          </span>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <p className="text-blue-950 text-base font-normal font-['IBM_Plex_Sans'] leading-6">
            Where an executed Master Services Agreement, Order Form, or
            amendment applies to your organization, that document may control
            over these standard
            <br />
            Terms to the extent of any conflict. This public page is never a
            substitute for reviewing your own agreement.
          </p>
        </div>
      </div>

      {/* Main Content Card with Image and Header Table */}
      <div className="w-[1160px] h-[550px] left-[132.40px] top-[227px] absolute bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden shadow-sm">
        {/* Background Image / Placeholder */}
        <div className="w-[1160px] h-[773px] left-[-0.40px] top-[-111px] absolute overflow-hidden">
          <Image
            src="/images/terms-of-service/Border.png"
            alt="Professional reviewing document"
            width={1160}
            height={773}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay Content Box */}
        <div className="w-[1158.40px] h-[548.40px] left-[0.80px] top-[0.80px] absolute pointer-events-none">
          {/* Table Header Row */}
          <div className="w-[1158.40px] h-10 left-0 top-0 absolute bg-slate-100 inline-flex justify-start items-start">
            <div className="w-64 px-4 py-3 inline-flex flex-col justify-start items-start">
              <span className="text-slate-400 text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wider">
                Authority
              </span>
            </div>
            <div className="w-96 h-10 px-4 py-3" />
            <div className="w-[471.01px] h-10 px-4 py-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
