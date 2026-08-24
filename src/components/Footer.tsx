import React, { useState } from 'react';
import type { NavTab } from '../types';
import { CuneiformLogoEmblem } from './CopperVisuals';

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
    <footer className="bg-[#0b0704] text-[#a89582] border-t border-[#2d1e13] pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#24170e]">
          
          {/* Column 1: House Branding (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
              <CuneiformLogoEmblem className="w-9 h-9" />
              <div>
                <span className="font-decorative text-xl font-bold text-[#f5eee6] tracking-wider block">
                  EA-NASIR
                </span>
                <span className="text-[10px] font-serif text-[#a87139] uppercase tracking-widest block">
                  COPPER MERCHANT OF UR
                </span>
              </div>
            </div>

            <p className="text-xs font-sans text-[#a89582] max-w-sm leading-relaxed">
              Proudly serving traders across Mesopotamia. Premium copper ingots, unrefined smelter ore, and bulk trade supplies direct from Magan mines.
            </p>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-serif font-bold text-[#f5eee6] uppercase tracking-widest block mb-2">
              NAVIGATION
            </span>
            <ul className="space-y-1.5 text-xs font-serif">
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-[#d97742] transition-colors">
                  About Ea-Nasir
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('copper')} className="hover:text-[#d97742] transition-colors">
                  Copper Products
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('shipping')} className="hover:text-[#d97742] transition-colors">
                  Shipping Logistics
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('orders')} className="hover:text-[#d97742] transition-colors">
                  Trade Ledger
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('returns')} className="hover:text-[#d97742] transition-colors">
                  Returns & Claims
                </button>
              </li>
              <li>
                <button onClick={onOpenRecordModal} className="hover:text-[#d97742] transition-colors text-[#a87139]">
                  Historical Records (UET V 81)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Seal Guarantee Easter Egg (4 cols) */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end text-left md:text-right space-y-3">
            <div
              onClick={() => setSealClicks(prev => prev + 1)}
              className="border border-[#8c5027] hover:border-[#d97742] p-4 cursor-pointer select-none transition-colors w-full max-w-xs"
              title="Click seal for merchant details"
            >
              <span className="text-xs font-serif font-bold text-[#f5eee6] tracking-widest uppercase block">
                {sealClicks >= 2 ? 'VERIFIED MERCHANT' : 'SATISFACTION GUARANTEED*'}
              </span>
              <span className="text-[10px] font-serif text-[#d97742] block mt-1">
                {getSealText()}
              </span>
              <span className="text-[9px] text-[#69482d] block mt-2">
                (*terms and conditions apply)
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-serif text-[#a87139] uppercase tracking-wider">
          <div>
            © ~1750 BC HOUSE OF EA-NASIR • UR, SUMER • SENDME@EA-NASIR.XYZ
          </div>
          <div>
            FINE COPPER. FAIR DEALS.
          </div>
        </div>

      </div>
    </footer>
  );
};
