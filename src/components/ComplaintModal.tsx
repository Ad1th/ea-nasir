import React from 'react';
import { HISTORICAL_RECORD_NANNI } from '../data/reviews';
import { ClayTabletGraphic } from './CopperVisuals';
import { X, ShieldAlert, FileText, CheckCircle } from 'lucide-react';

interface ComplaintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComplaintModal: React.FC<ComplaintModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0704]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-[#170e08] border border-[#523723] rounded-lg max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#a89582] hover:text-[#f5eee6] hover:bg-[#2b1b11] rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#342419] bg-[#1e130b] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-serif text-[#d4af37] tracking-widest uppercase">
              <FileText className="w-4 h-4 text-[#d97742]" />
              <span>ARCHIVED TABLET: {HISTORICAL_RECORD_NANNI.code}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#f5eee6] mt-1">
              {HISTORICAL_RECORD_NANNI.title}
            </h2>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-[#e05345] bg-[#311411] border border-[#6b251f] px-3 py-1.5 rounded tracking-wider uppercase">
              <ShieldAlert className="w-4 h-4" />
              STATUS: DISPUTED BY MERCHANT
            </span>
          </div>
        </div>

        {/* Modal Body Grid */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Tablet Art & Metadata */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-4 bg-[#1f140c] p-6 border border-[#3a271a] rounded">
            <ClayTabletGraphic className="w-56 h-72" />

            <div className="w-full text-xs font-serif space-y-2 pt-2 border-t border-[#342419]">
              <div className="flex justify-between">
                <span className="text-[#a89582]">DATE OF ORIGIN:</span>
                <span className="text-[#f5eee6] font-semibold">{HISTORICAL_RECORD_NANNI.dateEst}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a89582]">DISCOVERY SITE:</span>
                <span className="text-[#f5eee6] font-semibold">{HISTORICAL_RECORD_NANNI.locationFound}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a89582]">SENDER:</span>
                <span className="text-[#d4af37] font-semibold">{HISTORICAL_RECORD_NANNI.sender}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a89582]">RECIPIENT:</span>
                <span className="text-[#f5eee6] font-semibold">{HISTORICAL_RECORD_NANNI.recipient}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Translation Text & Merchant Statement */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Disclaimer */}
            <div className="bg-[#24170d] border border-[#4a3424] p-3 rounded text-[11px] font-sans text-[#a89582] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d97742] shrink-0"></span>
              <span>Archived correspondence. Translation adapted for modern readability.</span>
            </div>

            {/* Translation Box */}
            <div className="bg-parchment p-6 rounded shadow-inner text-[#3d2716] font-serif space-y-4 max-h-80 overflow-y-auto border border-[#c4a984]">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#663d1e] border-b border-[#c4a984] pb-2">
                EXCERPT FROM CUNEIFORM TABLET TRANSCRIPT
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium">
                {HISTORICAL_RECORD_NANNI.fullTranslation}
              </p>
            </div>

            {/* Merchant PR Response Statement */}
            <div className="bg-[#22170f] border border-[#523723] p-5 rounded space-y-2">
              <h4 className="text-xs font-serif font-bold text-[#d4af37] uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#d97742]" />
                OFFICIAL MERCHANT REBUTTAL STATEMENT
              </h4>
              <p className="text-xs font-sans text-[#cbb8a1] leading-relaxed">
                {HISTORICAL_RECORD_NANNI.merchantResponse}
              </p>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#140b06] border-t border-[#342419] text-center text-xs font-serif text-[#a89582]">
          <span>House of Ea-Nasir Legal Archives — All historical records maintained for complete transparency.</span>
        </div>
      </div>
    </div>
  );
};
