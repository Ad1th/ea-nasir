import React from 'react';
import { ClayTabletGraphic } from './CopperVisuals';
import { HISTORICAL_RECORD_NANNI } from '../data/reviews';

interface HistoricalRecordsSectionProps {
  onOpenRecordModal: () => void;
}

export const HistoricalRecordsSection: React.FC<HistoricalRecordsSectionProps> = ({
  onOpenRecordModal
}) => {
  return (
    <section className="py-20 lg:py-28 bg-[#160e09] border-b border-[#2d1e13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left border-b border-[#2d1e13] pb-6 mb-12">
          <span className="text-xs font-serif text-[#a87139] tracking-widest uppercase block mb-1">
            ARCHIVAL EXHIBIT • PRESERVED TABLET RECORD
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-[#f5eee6]">
            HISTORICAL MERCHANT RECORDS
          </h2>
          <p className="text-sm font-sans text-[#a89582] mt-2">
            A selection of preserved correspondence concerning the House of Ea-Nasir.
          </p>
        </div>

        {/* Museum Archive Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-6">
          
          {/* Tablet Exhibit Graphic (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={onOpenRecordModal}
              className="cursor-pointer group relative"
            >
              <ClayTabletGraphic className="w-56 h-72 group-hover:scale-105 transition-transform duration-300" />
            </div>
          </div>

          {/* Archival Metadata & Excerpt (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="space-y-1">
              <div className="text-xs font-serif text-[#d4af37] tracking-widest uppercase">
                MERCHANT CORRESPONDENCE • UR — c. 1750 BC • ARCHIVE NO. 01
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#f5eee6]">
                {HISTORICAL_RECORD_NANNI.title}
              </h3>
              <p className="text-xs font-serif text-[#a87139] uppercase tracking-wider">
                SENDER: {HISTORICAL_RECORD_NANNI.sender}
              </p>
            </div>

            <blockquote className="border-l-2 border-[#d97742] pl-4 py-1 text-sm font-serif italic text-[#cbb8a1] leading-relaxed">
              "{HISTORICAL_RECORD_NANNI.excerpt}"
            </blockquote>

            <div className="flex items-center justify-between pt-4 border-t border-[#2d1e13]">
              <button
                onClick={onOpenRecordModal}
                className="text-xs font-serif font-bold tracking-widest uppercase text-[#f5eee6] hover:text-[#d97742] transition-colors border-b-2 border-[#d97742] pb-0.5 cursor-pointer"
              >
                VIEW ARCHIVED DOCUMENT →
              </button>

              <span className="text-[10px] font-serif text-[#e05345] uppercase tracking-widest font-bold">
                STATUS: DISPUTED BY MERCHANT
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
