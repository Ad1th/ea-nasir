import React from 'react';
import { CuneiformLogoEmblem } from './CopperVisuals';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#120c08] border-b border-[#2d1e13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left border-b border-[#2d1e13] pb-6 mb-12">
          <span className="text-xs font-serif text-[#a87139] tracking-widest uppercase block mb-1">
            MERCHANT PROFILE • INSTITUTIONAL HERITAGE
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-[#f5eee6]">
            THE HOUSE OF EA-NASIR
          </h2>
        </div>

        {/* Asymmetric Editorial Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          <div className="lg:col-span-8 space-y-6 text-sm font-sans text-[#cbb8a1] leading-relaxed">
            <blockquote className="font-serif text-xl italic text-[#f5eee6] border-l-2 border-[#d97742] pl-6 py-1">
              "For generations, the House of Ea-Nasir has connected merchants throughout Mesopotamia with dependable copper supplies."
            </blockquote>

            <p>
              Headquartered in the thriving ancient metropolis of Ur, near the Great Ziggurat, the House of Ea-Nasir stands as one of Mesopotamia's principal copper trading institutions. Under the leadership of Ea-Nasir, our merchant house manages maritime trade routes across the Persian Gulf to Dilmun and the legendary copper mines of Magan.
            </p>

            <p>
              We specialize in bulk wholesale copper ingots, refined smelter bars, raw ore lumps, and secondary foundry materials. By maintaining continuous river barge fleets along the Euphrates and coordinated desert caravan networks, we ensure seamless delivery to royal contractors, temple workshops, and independent smiths across Sumer and Akkad.
            </p>

            <p>
              Our storehouse facilities in Ur operate under strict accounting standards. All weights are verified according to customary silver shekel equivalencies, and every dispatch is documented on permanent clay tablets filed within our central archive chambers.
            </p>
          </div>

          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#2d1e13] pt-6 lg:pt-0 lg:pl-10 space-y-6">
            <div className="w-16 h-16 bg-[#26180f] border border-[#6e4624] flex items-center justify-center">
              <CuneiformLogoEmblem className="w-10 h-10" />
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-[#f5eee6]">EA-NASIR</h3>
              <span className="text-xs font-serif text-[#d4af37] tracking-widest uppercase block mt-1">
                PRINCIPAL MERCHANT & MANAGING TRADER
              </span>
            </div>

            <p className="text-xs font-serif italic text-[#a89582] border-t border-[#2d1e13] pt-4">
              "Every transaction matters. Quality is our tradition, and we value our merchant relationships above all else."
            </p>

            <div className="text-[10px] font-serif text-[#a87139] uppercase tracking-widest pt-4">
              REGISTERED MERCHANT HOUSE • CITY STATE OF UR ~1750 BC
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
