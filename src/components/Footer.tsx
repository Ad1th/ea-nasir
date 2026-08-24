import React, { useState } from 'react';
import type { NavTab } from '../types';
import { CuneiformLogoEmblem } from './CopperVisuals';
import { MapPin, Mail, Sparkles, Award } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenRecordModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenRecordModal }) => {
  const [sealClicks, setSealClicks] = useState(0);

  const getSealText = () => {
    if (sealClicks >= 6) return 'Disputes must be submitted in person with original clay receipts.';
    if (sealClicks >= 4) return 'Very seriously.';
    if (sealClicks >= 2) return 'We take merchant satisfaction seriously.';
    return 'SATISFACTION GUARANTEED*';
  };

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e0805] text-[#cbb8a1] border-t-2 border-[#3a2618] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#291b11]">
          
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
              <CuneiformLogoEmblem className="w-10 h-10" />
              <div>
                <span className="font-decorative text-2xl font-bold text-[#f5eee6] tracking-wider block">
                  EA-NASIR
                </span>
                <span className="text-[10px] font-serif text-[#a87139] uppercase tracking-widest block">
                  COPPER MERCHANT OF UR
                </span>
              </div>
            </div>

            <p className="text-xs font-sans leading-relaxed text-[#a89582] max-w-sm">
              Proudly serving traders across Mesopotamia. Premium copper ingots, unrefined smelter ore, and bulk trade supplies direct from Magan mines.
            </p>

            <div className="text-[11px] font-serif text-[#d4af37] flex items-center gap-1.5 pt-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FINE COPPER. FAIR DEALS. ~1750 BC</span>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="font-serif text-xs font-bold text-[#f5eee6] uppercase tracking-widest border-b border-[#2d1e13] pb-2">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs font-serif">
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-[#d97742] transition-colors">
                  About Ea-Nasir
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('copper')} className="hover:text-[#d97742] transition-colors">
                  Our Copper Products
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('shipping')} className="hover:text-[#d97742] transition-colors">
                  Shipping & Delivery
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('orders')} className="hover:text-[#d97742] transition-colors">
                  Trade Ledger & Orders
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('returns')} className="hover:text-[#d97742] transition-colors">
                  Returns & Claims Process
                </button>
              </li>
              <li>
                <button onClick={onOpenRecordModal} className="hover:text-[#d97742] transition-colors text-[#a87139]">
                  Historical Merchant Records (UET V 81)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Destinations (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="font-serif text-xs font-bold text-[#f5eee6] uppercase tracking-widest border-b border-[#2d1e13] pb-2">
              CONTACT & SHIPPING
            </h4>
            <div className="space-y-2 text-xs font-sans text-[#a89582]">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d97742]" /> Ur, Sumer (Near Great Ziggurat)
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d97742]" /> sendme@ea-nasir.com
              </p>
              <div className="pt-2">
                <strong className="block font-serif text-[11px] text-[#f5eee6] uppercase">SHIPPING TO:</strong>
                <span>Ur • Lagash • Eridu • Babylon • And beyond...</span>
              </div>
            </div>
          </div>

          {/* Column 4: Satisfaction Seal Easter Egg (2 cols) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center text-center space-y-2">
            <div
              onClick={() => setSealClicks(prev => prev + 1)}
              className="w-24 h-24 bg-gradient-to-br from-[#2b1c11] to-[#170e08] border-2 border-[#8c5a2b] hover:border-[#d4af37] rounded-full flex flex-col items-center justify-center p-2 shadow-2xl cursor-pointer select-none transition-all duration-300 hover:scale-105 active:scale-95 group"
              title="Click seal for merchant guarantee details"
            >
              <Award className="w-6 h-6 text-[#d4af37] group-hover:rotate-12 transition-transform" />
              <span className="font-serif text-[9px] font-black text-[#f5eee6] leading-tight uppercase mt-1">
                {sealClicks >= 2 ? 'VERIFIED' : 'SATISFACTION'}
              </span>
              <span className="font-serif text-[8px] text-[#d97742] font-bold">
                GUARANTEED*
              </span>
            </div>

            <p className="text-[10px] font-serif text-[#d97742] italic max-w-[140px] leading-tight">
              {getSealText()}
            </p>
            <span className="text-[9px] text-[#6e5844]">(*terms and conditions apply)</span>
          </div>

        </div>

        {/* Microcopy & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-serif text-[#a89582]">
          <p>© ~1750 BC House of Ea-Nasir. All rights reserved across Mesopotamia.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>"Every transaction matters."</span>
            <span>•</span>
            <span>"Quality is our tradition."</span>
            <span>•</span>
            <span>"Historical records maintained."</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
