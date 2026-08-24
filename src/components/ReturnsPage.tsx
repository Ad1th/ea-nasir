import React, { useState } from 'react';

interface ReturnsPageProps {
  onOpenRecordModal: () => void;
}

export const ReturnsPage: React.FC<ReturnsPageProps> = ({ onOpenRecordModal }) => {
  const [claimSubmitted, setClaimSubmitted] = useState(false);

  const steps = [
    {
      num: '01',
      title: 'SUBMIT CONCERN',
      desc: 'Inscribe a formal clay tablet detailing ingot dimensions, silver weight exchanged, and messenger identity.'
    },
    {
      num: '02',
      title: 'MERCHANT REVIEW',
      desc: 'House clerks cross-examine storehouse inventory ledgers against Magan fleet shipping manifests.'
    },
    {
      num: '03',
      title: 'ASSESSMENT',
      desc: 'Metallurgical evaluation of sample scrap or ingot shavings conducted by senior foundry overseer.'
    },
    {
      num: '04',
      title: 'DETERMINATION',
      desc: 'Ea-Nasir personally determines whether silver refund, exchange, or claim dismissal is warranted.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#120c08] border-b border-[#2d1e13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-left border-b border-[#2d1e13] pb-6 mb-12">
          <span className="text-xs font-serif text-[#a87139] tracking-widest uppercase block mb-1">
            COMPLIANCE • DISPUTE RESOLUTION PROTOCOL
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-[#f5eee6]">
            RETURNS & COMPLAINTS
          </h2>
        </div>

        {/* 4-Step Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="space-y-3 border-t border-[#2d1e13] pt-6">
              <span className="font-serif text-3xl font-bold text-[#8c5027] block">
                {step.num}
              </span>

              <h3 className="font-serif text-lg font-bold text-[#f5eee6]">
                {step.title}
              </h3>

              <p className="text-xs font-sans text-[#a89582] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Editorial Timeline Statement */}
        <div className="border-t border-[#2d1e13] pt-12 text-center space-y-4">
          <div className="text-xs font-serif text-[#a87139] tracking-widest uppercase">
            ESTIMATED RESOLUTION TIMELINE
          </div>

          <div className="font-serif text-3xl font-bold text-[#f5eee6]">
            Average resolution time: 3–6 business cycles*
          </div>

          <p className="text-xs font-sans text-[#a89582]">
            (*Business cycles correspond to annual trade caravan seasons across Mesopotamian river routes.)
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-8 text-xs font-serif">
            <button
              onClick={() => setClaimSubmitted(true)}
              className="text-[#f5eee6] hover:text-[#d97742] tracking-widest uppercase border-b border-[#523723] pb-0.5 transition-colors cursor-pointer"
            >
              SUBMIT FORMAL CLAIM TABLET →
            </button>

            <button
              onClick={onOpenRecordModal}
              className="text-[#d97742] hover:text-[#f4c28c] tracking-widest uppercase border-b border-[#d97742] pb-0.5 transition-colors cursor-pointer font-bold"
            >
              VIEW ARCHIVED CASE STUDY (UET V 81) →
            </button>
          </div>

          {claimSubmitted && (
            <div className="mt-4 text-xs font-serif text-[#e05345] uppercase tracking-wider">
              CLAIM TABLET LOGGED. Please allow up to 6 caravan cycles for assessment.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
