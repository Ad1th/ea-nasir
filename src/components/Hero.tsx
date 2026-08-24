import React from 'react';
import { CopperIngotGraphic } from './CopperVisuals';

interface HeroProps {
  onBrowse: () => void;
  onContact: () => void;
  onViewRecord: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBrowse, onContact }) => {
  return (
    <section className="relative bg-parchment-texture py-20 lg:py-32 border-b border-copper-thin overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Editorial Cover Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetric Typography & Subtitle (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Publication Sub-header */}
            <div className="text-xs font-serif text-[#a87139] tracking-widest uppercase flex items-center gap-3">
              <span className="h-px w-10 bg-[#8c5a2b]"></span>
              <span>ROYAL MERCHANT HOUSE • CITY STATE OF UR</span>
            </div>

            {/* Giant Serif Cover Headlines (sitting directly on the page) */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-black tracking-tight leading-none text-[#f5eee6]">
                FINE COPPER.
              </h1>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-black tracking-tight leading-none copper-text-gradient">
                FAIR DEALS.
              </h1>
            </div>

            {/* Editorial Lead Description */}
            <p className="text-lg sm:text-xl font-sans text-[#cbb8a1] max-w-xl leading-relaxed font-light">
              High quality copper ingots and raw copper, sourced directly from the best mines of Magan. Operating continuous river barge transport along the Euphrates.
            </p>

            {/* Restrained Actions */}
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <button
                onClick={onBrowse}
                className="text-sm font-serif font-bold tracking-widest uppercase text-[#f5eee6] hover:text-[#d97742] transition-colors flex items-center gap-2 group cursor-pointer border-b-2 border-[#d97742] pb-1"
              >
                <span>BROWSE COPPER</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <button
                onClick={onContact}
                className="text-sm font-serif font-bold tracking-widest uppercase text-[#a89582] hover:text-[#f5eee6] transition-colors cursor-pointer border-b border-[#523723] pb-1"
              >
                CONTACT EA-NASIR →
              </button>
            </div>

            {/* Thin Horizontal Rule */}
            <div className="pt-8 border-t border-[#291b11] max-w-lg">
              <div className="grid grid-cols-3 gap-6 text-[11px] font-serif uppercase tracking-wider text-[#a87139]">
                <div>
                  <span className="block text-[#f5eee6] font-bold">FAIR PRICES</span>
                  <span>Honest weights & silver rates</span>
                </div>
                <div>
                  <span className="block text-[#f5eee6] font-bold">MAGAN ORE</span>
                  <span>Direct Gulf mine import</span>
                </div>
                <div>
                  <span className="block text-[#f5eee6] font-bold">RIVER LOGISTICS</span>
                  <span>Euphrates barge transport</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Physical Archeological Copper Artwork (5 cols) */}
          <div className="lg:col-span-5 text-center flex flex-col items-center">
            {/* The Copper Ingot sits directly on the page background */}
            <div className="w-full relative group">
              <CopperIngotGraphic className="w-full h-72 lg:h-80" />
            </div>

            {/* Simple Editorial Image Caption */}
            <div className="mt-4 text-center space-y-1">
              <span className="text-xs font-serif font-bold text-[#f5eee6] tracking-widest uppercase block">
                STANDARD COPPER INGOT — MAGAN GRADE
              </span>
              <span className="text-xs font-serif text-[#d4af37] font-semibold block">
                10 SHEKELS OF SILVER / INGOT
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
