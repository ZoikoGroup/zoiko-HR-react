"use client";

import React, { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What are the Zoiko HR Terms of Service?",
      answer:
        "The current standard contractual terms for covered Zoiko HR services where applicable. Executed agreements, Order Forms, schedules, or amendments may govern or modify the standard terms.",
    },
    {
      question: "Which terms apply to my organization?",
      answer:
        "Your organization's specific executed Master Services Agreement, Order Form, or service schedule will govern and take precedence over these standard terms where applicable.",
    },
    {
      question: "Where is the Acceptable Use Policy?",
      answer:
        "The Acceptable Use Policy is referenced throughout our terms and is available as a dedicated policy document outlining permissible usage boundaries for our services.",
    },
    {
      question: "Where can I review privacy and data-processing terms?",
      answer:
        "Data-processing terms, privacy commitments, and our Data Processing Agreement (DPA) can be reviewed in our dedicated Privacy Notice and Trust Center documentation.",
    },
    {
      question: "Do these Terms contain pricing for my account?",
      answer:
        "No, standard Terms of Service do not contain account pricing. Pricing, user counts, and commercial terms are specifically detailed in your organization's executed Order Form.",
    },
    {
      question: "How do I cancel or not renew?",
      answer:
        "Cancellation and non-renewal procedures follow the timelines and notice requirements specified in your organization's Order Form or subscription agreement.",
    },
    {
      question: "Can Zoiko HR change these Terms?",
      answer:
        "Yes, we may update our standard terms from time to time. Current versions are maintained on our canonical URL, and material changes are communicated in accordance with our agreements.",
    },
    {
      question: "How do I report a security issue?",
      answer:
        "Security issues can be reported responsibly through our security reporting channels or Trust Center following our authorized vulnerability testing and reporting guidelines.",
    },
    {
      question: "Does Zoiko HR provide legal or employment advice?",
      answer:
        "No, Zoiko HR does not provide legal, tax, payroll, employment, or compliance advice. Customers remain solely responsible for their own employment decisions and compliance obligations.",
    },
    {
      question: "Which version applies?",
      answer:
        "The current version published on our canonical Terms of Service URL applies to general use, subject to any governing terms in your organization's executed agreement.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[1424.80px] h-[1016.63px] relative bg-white overflow-hidden mx-auto">
      {/* Main Container */}
      <div className="w-[900px] max-w-[900px] left-[262.40px] top-[100px] absolute inline-flex flex-col justify-start items-start">
        {/* Header Section */}
        <div className="w-[680px] max-w-[680px] pb-9 flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch flex flex-col justify-start items-start">
            <span className="text-blue-600 text-xs font-bold font-['IBM_Plex_Sans'] uppercase tracking-wider">
              QUESTIONS
            </span>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="text-[#102A43] text-3xl font-extrabold font-['Manrope'] leading-10">
              Direct answers about these Terms.
            </h2>
          </div>
        </div>

        {/* FAQ Accordion List */}
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="self-stretch pt-[0.80px] border-t-[0.80px] border-stone-200 flex flex-col justify-start items-start"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="self-stretch py-5 inline-flex justify-between items-center gap-4 text-left cursor-pointer hover:bg-slate-50/50 transition-colors"
              >
                <div className="flex-1 inline-flex flex-col justify-start items-start">
                  <span className="self-stretch text-gray-800 text-base font-bold font-['Arial'] leading-6">
                    {item.question}
                  </span>
                </div>
                <div className="w-6 pb-[0.80px] inline-flex flex-col justify-start items-start">
                  <span className="text-slate-500 text-sm font-normal font-['Arial']">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
              </button>

              {isOpen && item.answer && (
                <div className="w-[760px] max-w-[760px] pb-6 flex flex-col justify-start items-start animate-fadeIn">
                  <p className="text-slate-500 text-sm font-normal font-['IBM_Plex_Sans'] leading-6">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
