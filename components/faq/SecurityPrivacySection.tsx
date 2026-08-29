"use client"
import Image from "next/image"
import { useState } from "react"

const FAQItem = ({ question, answer, isOpenInitial = false }: { question: string, answer?: string, isOpenInitial?: boolean }) => {
  const [isOpen, setIsOpen] = useState(isOpenInitial)
  const hasAnswer = !!answer
  
  return (
    <div className="border-b border-slate-200 last:border-b-0 bg-white">
      <button 
        onClick={() => hasAnswer && setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center text-left px-8 py-6 focus:outline-none ${hasAnswer ? 'cursor-pointer hover:bg-slate-50 transition-colors' : 'cursor-default'}`}
      >
        <span className="font-semibold text-[14px] text-slate-900 pr-8">{question}</span>
        <span className="flex-shrink-0 text-blue-600">
          {isOpen ? (
            <svg width="8" height="6" viewBox="0 0 8 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L0 0H8L4 6Z" />
            </svg>
          ) : (
            <svg width="6" height="8" viewBox="0 0 6 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4L0 8V0L6 4Z" />
            </svg>
          )}
        </span>
      </button>
      
      {isOpen && hasAnswer && (
        <div className="px-8 pb-6">
          <p className="text-[13px] text-slate-600 leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}

export const SecurityPrivacySection = () => {
  const faqs = [
    { q: "Is Zoiko HR GDPR compliant?" },
    { q: "Where is Zoiko HR data hosted?" },
    { q: "Who can access employee records?" },
    { q: "Does Zoiko HR use AI on employee data?" },
    { q: "How are security incidents handled?" }
  ]

  return (
    <section className="py-16 md:py-24 bg-[#f8fafe] border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">Security, privacy & access.</h2>
          <p className="text-[15px] text-slate-500">How Zoiko HR protects data and who can access it.</p>
        </div>
        
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-stretch">
          <div className="bg-white rounded-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-slate-200 overflow-hidden flex flex-col justify-center">
            <FAQItem 
              question="How does Zoiko HR protect employee data?" 
              answer="Zoiko HR applies encryption in transit and at rest, access controls, and audit logging. Full detail is in the Trust Center." 
              isOpenInitial={true} 
            />
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} />
            ))}
          </div>
          
          <div className="relative w-full min-h-[400px] lg:min-h-0 rounded-[24px] overflow-hidden">
            <Image 
              src="/images/faq/FAQSecurity.png" 
              alt="Security & Privacy" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
