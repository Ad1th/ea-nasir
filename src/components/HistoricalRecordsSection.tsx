import React from 'react';
import { ClayTabletGraphic } from './CopperVisuals';
import { FileText, Archive } from 'lucide-react';
import { HISTORICAL_RECORD_NANNI } from '../data/reviews';

interface HistoricalRecordsSectionProps {
  onOpenRecordModal: () => void;
}

export const HistoricalRecordsSection: React.FC<HistoricalRecordsSectionProps> = ({
  onOpenRecordModal
}) => {
  return (
    <section className="py-16 lg:py-24 bg-[#160e08] border-b border-[#3a2618] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#22160d] border border-[#422d1f] rounded-full text-xs font-serif text-[#a87139] uppercase tracking-widest">
            <Archive className="w-3.5 h-3.5" />
            LEGAL & CORRESPONDENCE ARCHIVE
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[#f5eee6]">
            HISTORICAL MERCHANT RECORDS
          </h2>

          <p className="text-base text-[#cbb8a1] font-sans">
            A selection of preserved correspondence concerning the House of Ea-Nasir.
          </p>

          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#b87333] to-transparent mx-auto pt-2"></div>
        </div>

        {/* Record Card Showcase */}
        <div className="max-w-4xl mx-auto bg-[#1f150e] border border-[#422d1f] hover:border-[#8c5a2b] rounded-lg p-6 sm:p-10 shadow-2xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden">
          
          {/* Document Stamp */}
          <div className="absolute top-4 right-4 bg-[#2b1b11] border border-[#523723] px-3 py-1 rounded text-[10px] font-serif font-bold text-[#d4af37] tracking-widest uppercase">
            ARCHIVED DOCUMENT
          </div>

          {/* Left Tablet Preview */}
          <div className="md:col-span-5 flex justify-center items-center py-4">
            <div className="relative group cursor-pointer" onClick={onOpenRecordModal}>
              <ClayTabletGraphic className="w-48 h-64 group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-[#b87333]/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity flex items-center justify-center">
                <span className="bg-[#120c08] text-[#f5eee6] text-xs font-serif px-3 py-1.5 rounded border border-[#8c5a2b]">
                  EXAMINE TABLET
                </span>
              </div>
            </div>
          </div>

          {/* Right Record Details */}
          <div className="md:col-span-7 space-y-5 text-left">
            <div>
              <span className="text-[11px] font-serif text-[#a87139] tracking-widest uppercase block">
                {HISTORICAL_RECORD_NANNI.code} — {HISTORICAL_RECORD_NANNI.dateEst}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#f5eee6] mt-1">
                {HISTORICAL_RECORD_NANNI.title}
              </h3>
              <p className="text-xs font-serif text-[#d4af37] mt-0.5">
                FROM: {HISTORICAL_RECORD_NANNI.sender}
              </p>
            </div>

            <div className="p-4 bg-[#170e08] border-l-2 border-[#b87333] rounded-r text-xs font-sans text-[#cbb8a1] italic leading-relaxed">
              "{HISTORICAL_RECORD_NANNI.excerpt}"
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button
                onClick={onOpenRecordModal}
                className="px-6 py-3 bg-[#b87333] hover:bg-[#d97742] text-[#120c08] font-serif font-bold text-xs tracking-wider uppercase rounded shadow transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW ARCHIVED DOCUMENT →</span>
              </button>

              <span className="text-[10px] font-serif font-bold text-[#e05345] bg-[#311411] border border-[#6b251f] px-2.5 py-1 rounded tracking-wider uppercase">
                STATUS: DISPUTED BY MERCHANT
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
