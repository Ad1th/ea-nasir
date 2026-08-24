import React from 'react';
import { HISTORICAL_RECORD_NANNI } from '../data/reviews';
import { ClayTabletGraphic } from './CopperVisuals';
import { X } from 'lucide-react';

interface ComplaintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComplaintModal: React.FC<ComplaintModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080503]/92 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-[#140d08] border border-[#3d2716] max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-[#a89582] hover:text-[#f5eee6] transition-colors p-2"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="p-8 border-b border-[#2d1e13] bg-[#18100a] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-serif text-[#d4af37] tracking-widest uppercase block">
              MUSEUM ARCHIVE RECORD • {HISTORICAL_RECORD_NANNI.code}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#f5eee6] mt-1">
              {HISTORICAL_RECORD_NANNI.title}
            </h2>
          </div>

          <span className="text-xs font-serif text-[#e05345] uppercase tracking-widest font-bold self-start sm:self-center">
            STATUS: DISPUTED BY MERCHANT
          </span>
        </div>

        {/* Modal Grid */}
        <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Artifact Visual & Archive Spec */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-6">
            <ClayTabletGraphic className="w-56 h-72" />

            <div className="w-full text-xs font-serif space-y-2 border-t border-[#2d1e13] pt-4 text-[#a89582]">
              <div className="flex justify-between">
                <span>PERIOD:</span>
                <span className="text-[#f5eee6]">{HISTORICAL_RECORD_NANNI.dateEst}</span>
              </div>
              <div className="flex justify-between">
                <span>LOCATION:</span>
                <span className="text-[#f5eee6]">{HISTORICAL_RECORD_NANNI.locationFound}</span>
              </div>
              <div className="flex justify-between">
                <span>CORRESPONDENT:</span>
                <span className="text-[#d4af37]">{HISTORICAL_RECORD_NANNI.sender}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Historical Transcript */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-[11px] font-sans text-[#a89582] italic border-b border-[#2d1e13] pb-2">
              Archived correspondence. Translation adapted for modern readability.
            </div>

            {/* Transcript Paper Sheet */}
            <div className="bg-parchment-sheet p-6 shadow-inner text-[#2b1a0d] font-serif space-y-4 max-h-80 overflow-y-auto border border-[#c4a984]">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#5c3619] border-b border-[#c4a984] pb-2">
                TRANSCRIPT OF CUNEIFORM TABLET
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium">
                {HISTORICAL_RECORD_NANNI.fullTranslation}
              </p>
            </div>

            {/* Merchant Rebuttal */}
            <div className="border-t border-[#2d1e13] pt-4 space-y-2">
              <h4 className="text-xs font-serif font-bold text-[#d4af37] uppercase tracking-wider">
                OFFICIAL MERCHANT REBUTTAL STATEMENT
              </h4>
              <p className="text-xs font-sans text-[#a89582] leading-relaxed">
                {HISTORICAL_RECORD_NANNI.merchantResponse}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
