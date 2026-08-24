import React from 'react';
import { CuneiformLogoEmblem } from './CopperVisuals';
import { Building2, Globe2, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#160e08] border-b border-[#3a2618] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#22160d] border border-[#422d1f] rounded-full text-xs font-serif text-[#d4af37] uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" />
            CORPORATE PROFILE & HERITAGE
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[#f5eee6]">
            THE HOUSE OF EA-NASIR
          </h2>

          <p className="text-base text-[#cbb8a1] font-sans italic">
            "For generations, the House of Ea-Nasir has connected merchants throughout Mesopotamia with dependable copper supplies."
          </p>

          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#b87333] to-transparent mx-auto pt-2"></div>
        </div>

        {/* Corporate Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4 text-sm font-sans text-[#cbb8a1] leading-relaxed">
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

            {/* Corporate Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-[#1f140c] border border-[#3d291b] rounded flex items-start gap-3">
                <Globe2 className="w-5 h-5 text-[#d97742] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-xs font-bold text-[#f5eee6] uppercase">DIRECT MAGAN TRADE</h4>
                  <p className="text-[11px] text-[#a89582] mt-0.5">Direct sourcing from primary gulf mines.</p>
                </div>
              </div>

              <div className="p-4 bg-[#1f140c] border border-[#3d291b] rounded flex items-start gap-3">
                <Users className="w-5 h-5 text-[#d97742] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-xs font-bold text-[#f5eee6] uppercase">LONGSTANDING PARTNERSHIPS</h4>
                  <p className="text-[11px] text-[#a89582] mt-0.5">Serving royal and merchant clients across Ur.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Visual & Corporate Seal (5 cols) */}
          <div className="lg:col-span-5 bg-[#1b120a] border border-[#422d1f] p-8 rounded-lg text-center space-y-6 shadow-2xl relative">
            <div className="w-20 h-20 mx-auto bg-[#2b1c11] border-2 border-[#8c5a2b] rounded-full flex items-center justify-center">
              <CuneiformLogoEmblem className="w-12 h-12" />
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-[#f5eee6]">EA-NASIR</h3>
              <p className="text-xs font-serif text-[#d4af37] tracking-widest uppercase mt-1">
                PRINCIPAL MERCHANT & MANAGING TRADER
              </p>
            </div>

            <blockquote className="text-xs font-serif italic text-[#cbb8a1] bg-[#140c07] p-4 rounded border-l-2 border-[#d97742]">
              "Every transaction matters. Quality is our tradition, and we value our merchant relationships above all else."
            </blockquote>

            <div className="pt-2 text-[10px] font-serif text-[#a89582] uppercase tracking-widest">
              REGISTERED MERCHANT HOUSE — CITY STATE OF UR ~1750 BC
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
