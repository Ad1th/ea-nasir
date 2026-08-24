import React from 'react';

export const TrustStats: React.FC = () => {
  return (
    <section className="bg-[#160e09] border-b border-[#2d1e13] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single Editorial Strip separated by thin vertical rules */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#342419] text-center">
          
          <div className="py-3 md:py-0 md:px-6">
            <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#f5eee6] tracking-tight">
              12,847+
            </div>
            <div className="font-serif text-[11px] font-bold text-[#d97742] tracking-widest uppercase mt-1">
              TRANSACTIONS RECORDED
            </div>
            <div className="text-[11px] font-sans text-[#a89582] mt-0.5">
              Preserved in storehouse clay ledgers
            </div>
          </div>

          <div className="py-3 md:py-0 md:px-6">
            <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#f5eee6] tracking-tight">
              37
            </div>
            <div className="font-serif text-[11px] font-bold text-[#d97742] tracking-widest uppercase mt-1">
              TRADE ROUTES SERVED
            </div>
            <div className="text-[11px] font-sans text-[#a89582] mt-0.5">
              Connecting Dilmun, Magan & Euphrates
            </div>
          </div>

          <div className="py-3 md:py-0 md:px-6">
            <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#f5eee6] tracking-tight">
              99.8%
            </div>
            <div className="font-serif text-[11px] font-bold text-[#d97742] tracking-widest uppercase mt-1">
              CUSTOMER SATISFACTION
            </div>
            <div className="text-[11px] font-sans text-[#a89582] mt-0.5">
              Unquestioned merchant reputation
            </div>
          </div>

          <div className="py-3 md:py-0 md:px-6">
            <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#f5eee6] tracking-tight">
              ~1750 BC
            </div>
            <div className="font-serif text-[11px] font-bold text-[#d97742] tracking-widest uppercase mt-1">
              HOUSE ESTABLISHED
            </div>
            <div className="text-[11px] font-sans text-[#a89582] mt-0.5">
              Centuries of commercial heritage in Ur
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
