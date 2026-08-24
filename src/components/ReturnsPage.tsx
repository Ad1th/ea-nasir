import React, { useState } from 'react';
import { Clock, FileQuestion } from 'lucide-react';

interface ReturnsPageProps {
  onOpenRecordModal: () => void;
}

export const ReturnsPage: React.FC<ReturnsPageProps> = ({ onOpenRecordModal }) => {
  const [claimSubmitted, setClaimSubmitted] = useState(false);

  const steps = [
    {
      num: 'STEP 1',
      title: 'Submit your concern',
      desc: 'Inscribe a formal clay tablet detailing ingot dimensions, silver weight exchanged, and messenger identity.'
    },
    {
      num: 'STEP 2',
      title: 'Merchant review',
      desc: 'House clerks cross-examine storehouse inventory ledgers against Magan fleet shipping manifests.'
    },
    {
      num: 'STEP 3',
      title: 'Internal assessment',
      desc: 'Metallurgical evaluation of sample scrap or ingot shavings conducted by senior foundry overseer.'
    },
    {
      num: 'STEP 4',
      title: 'Final determination',
      desc: 'Ea-Nasir personally determines whether silver refund, exchange, or claim dismissal is warranted.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#120c08] border-b border-[#3a2618] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#22160d] border border-[#422d1f] rounded-full text-xs font-serif text-[#d4af37] uppercase tracking-widest">
            <FileQuestion className="w-3.5 h-3.5" />
            COMPLIANCE & DISPUTE PROTOCOL
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[#f5eee6]">
            RETURNS & COMPLAINTS
          </h2>

          <p className="text-base text-[#cbb8a1] font-sans">
            The House of Ea-Nasir operates a structured, multi-stage protocol for all commercial quality inquiries.
          </p>

          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#b87333] to-transparent mx-auto pt-2"></div>
        </div>

        {/* 4-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-14">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#1b120a] border border-[#3d291b] hover:border-[#8c5a2b] p-6 rounded-lg shadow-xl space-y-3 relative group transition-all duration-300"
            >
              <div className="text-[11px] font-serif font-extrabold text-[#d97742] bg-[#281b11] border border-[#523723] px-2.5 py-1 rounded inline-block">
                {step.num}
              </div>

              <h3 className="font-serif text-lg font-bold text-[#f5eee6] group-hover:text-[#d4af37] transition-colors">
                {step.title}
              </h3>

              <p className="text-xs font-sans text-[#a89582] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Resolution Time Banner (Subtle Bureaucracy Joke) */}
        <div className="max-w-3xl mx-auto bg-[#1f140c] border border-[#4a3424] p-6 rounded-lg shadow-2xl text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-serif text-[#d4af37]">
            <Clock className="w-4 h-4 text-[#d97742]" />
            <span>ESTIMATED RESOLUTION TIMELINE</span>
          </div>

          <div className="font-serif text-2xl font-bold text-[#f5eee6]">
            Average resolution time: 3–6 business cycles
          </div>

          <p className="text-xs font-sans text-[#a89582]">
            (*Business cycles correspond to annual trade caravan seasons across Mesopotamian river routes.)
          </p>

          <div className="pt-4 border-t border-[#342419] flex flex-wrap items-center justify-center gap-4 text-xs font-serif">
            <button
              onClick={() => setClaimSubmitted(true)}
              className="px-5 py-2.5 bg-[#2b1b11] hover:bg-[#382417] border border-[#8c5a2b] text-[#f5eee6] rounded font-bold transition-all cursor-pointer"
            >
              SUBMIT FORMAL CLAIM TABLET
            </button>

            <button
              onClick={onOpenRecordModal}
              className="px-5 py-2.5 bg-[#b87333] hover:bg-[#d97742] text-[#120c08] rounded font-bold transition-all cursor-pointer"
            >
              VIEW ARCHIVED CASE STUDY (UET V 81)
            </button>
          </div>

          {claimSubmitted && (
            <div className="mt-4 p-3 bg-[#24150c] border border-[#6b251f] rounded text-xs font-serif text-[#e05345]">
              CLAIM TABLET LOGGED. Please allow up to 6 caravan cycles for storehouse assessment.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
