import React from 'react';
import { CopperIngotGraphic } from './CopperVisuals';
import { ShieldCheck, Award, Anchor, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface HeroProps {
  onBrowse: () => void;
  onContact: () => void;
  onViewRecord: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBrowse, onContact, onViewRecord }) => {
  return (
    <section className="relative bg-clay-pattern overflow-hidden pt-12 pb-20 lg:py-24 border-b border-[#3a2618]">
      {/* Background Copper Radial Lighting */}
      <div className="absolute inset-0 bg-copper-radial pointer-events-none"></div>

      {/* Decorative Mesopotamian Ziggurat / Column Architecture Silhouettes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2a1b12] rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Merchant House Distinction Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#261910] border border-[#523723] rounded-full text-xs font-serif text-[#d97742] uppercase tracking-widest shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Royal Merchant House of Ur — Guild Approved</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight leading-none text-[#f5eee6]">
                FINE COPPER.
              </h1>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight leading-none copper-gradient-text">
                FAIR DEALS.
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#cbb8a1] max-w-2xl font-sans font-normal leading-relaxed">
              High quality copper ingots and raw copper, sourced from the best mines of Magan.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onBrowse}
                className="px-7 py-4 bg-gradient-to-r from-[#b87333] via-[#d97742] to-[#b87333] hover:from-[#d97742] hover:to-[#a85e27] text-[#120c08] font-serif font-bold text-sm tracking-wider uppercase rounded shadow-xl hover:shadow-[#b87333]/20 transition-all duration-300 flex items-center gap-2.5 group cursor-pointer"
              >
                <span>BROWSE COPPER</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContact}
                className="px-7 py-4 bg-[#261910] hover:bg-[#342317] border border-[#523723] hover:border-[#d97742] text-[#f5eee6] font-serif font-semibold text-sm tracking-wider uppercase rounded transition-all duration-300 cursor-pointer"
              >
                CONTACT EA-NASIR
              </button>
            </div>

            {/* Three Value/Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#342419]">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#22170f] border border-[#422d1f] rounded text-[#d97742] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold tracking-wider text-[#f5eee6] uppercase">
                    FAIR PRICES
                  </h4>
                  <p className="text-xs text-[#a89582] mt-0.5 font-sans">
                    Honest weights, honest prices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#22170f] border border-[#422d1f] rounded text-[#d97742] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold tracking-wider text-[#f5eee6] uppercase">
                    QUALITY COPPER
                  </h4>
                  <p className="text-xs text-[#a89582] mt-0.5 font-sans">
                    From trusted mines of Magan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#22170f] border border-[#422d1f] rounded text-[#d97742] shrink-0">
                  <Anchor className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold tracking-wider text-[#f5eee6] uppercase">
                    DELIVERED SAFELY
                  </h4>
                  <p className="text-xs text-[#a89582] mt-0.5 font-sans">
                    By land and river to your door.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Ingot Showcase & Prestigious Merchant Badge */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Visual Copper Ingot Card */}
            <div className="w-full max-w-md bg-gradient-to-b from-[#251910] to-[#1a120b] p-6 rounded-lg border border-[#4a3424] shadow-2xl relative group">
              <div className="absolute top-4 right-4 text-[10px] font-serif font-bold text-[#d4af37] tracking-widest bg-[#18100a] px-2.5 py-1 border border-[#5a3f2b] rounded">
                RESERVE STOCK
              </div>

              <div className="my-2">
                <CopperIngotGraphic className="w-full h-52 group-hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="mt-4 pt-4 border-t border-[#362418] flex items-center justify-between text-xs font-serif">
                <div>
                  <span className="text-[#a89582] block text-[10px]">CURRENT MARKET RATE</span>
                  <span className="text-[#f5eee6] font-bold text-sm">10 SHEKELS OF SILVER</span>
                </div>
                <button
                  onClick={onBrowse}
                  className="px-3 py-1.5 bg-[#b87333] hover:bg-[#d97742] text-[#120c08] font-bold rounded text-[11px] transition-colors"
                >
                  RESERVE INGOT
                </button>
              </div>
            </div>

            {/* Merchant Trust Badge - Serious & Prestigious */}
            <div 
              onClick={onViewRecord}
              className="mt-6 w-full max-w-md bg-[#1b120a] border-2 border-[#8c5a2b] hover:border-[#d97742] p-4 rounded-md shadow-xl flex items-center gap-4 text-left relative overflow-hidden cursor-pointer transition-colors"
            >
              <div className="w-14 h-14 bg-[#2b1b11] border border-[#a87139] rounded-full flex items-center justify-center text-[#d4af37] shrink-0 font-serif font-black text-lg">
                UR
              </div>
              <div>
                <div className="text-[10px] font-serif tracking-widest uppercase text-[#d4af37] font-bold">
                  OFFICIAL MERCHANT HOUSE
                </div>
                <div className="text-sm font-serif font-extrabold text-[#f5eee6] tracking-wider uppercase mt-0.5">
                  TRUSTED MERCHANT IN UR
                </div>
                <div className="text-xs font-serif text-[#cbb8a1] tracking-widest">
                  SINCE ~1750 BC
                </div>
              </div>
              <div className="ml-auto opacity-15">
                <CheckCircle2 className="w-16 h-16 text-[#d97742]" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
