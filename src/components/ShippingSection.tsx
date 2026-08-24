import React from 'react';

export const ShippingSection: React.FC = () => {
  const destinations = ['Ur', 'Lagash', 'Eridu', 'Babylon', 'Nippur', 'Other Trading Settlements'];

  const methods = [
    {
      title: 'RIVER DELIVERY',
      sub: 'Via the Euphrates.',
      estimate: '7–30 days',
      details: 'Transported on flat-bottom river barges. Vessel captains navigate seasonal currents and downstream sandbars.'
    },
    {
      title: 'CARAVAN DELIVERY',
      sub: 'For inland trade routes.',
      estimate: 'Depends on conditions',
      details: 'Donkey caravans equipped with woven palm panniers. Route progression subject to desert weather and regional security.'
    },
    {
      title: 'LOCAL DELIVERY',
      sub: 'Within Ur and surrounding settlements.',
      estimate: 'Arrangements to be made',
      details: 'Hand-cart or messenger pickup directly from Ea-Nasir’s storehouse courtyard.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#160e09] border-b border-[#2d1e13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-left border-b border-[#2d1e13] pb-6 mb-12">
          <span className="text-xs font-serif text-[#a87139] tracking-widest uppercase block mb-1">
            LOGISTICS • MESOPOTAMIAN TRADE NETWORK
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-[#f5eee6]">
            SHIPPING & DELIVERY
          </h2>
        </div>

        {/* Shipping Methods Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-16">
          {methods.map((method, idx) => (
            <div key={idx} className="space-y-4 border-l-2 border-[#8c5027] pl-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#f5eee6]">
                  {method.title}
                </h3>
                <span className="text-xs font-serif text-[#d97742] tracking-wider block">
                  {method.sub}
                </span>
              </div>

              <p className="text-xs font-sans text-[#a89582] leading-relaxed">
                {method.details}
              </p>

              <div className="pt-2 text-xs font-serif text-[#d4af37]">
                EST. TRANSIT: <strong>{method.estimate}</strong>
              </div>
            </div>
          ))}
        </div>

        {/* Destinations */}
        <div className="border-t border-[#2d1e13] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
          <div>
            <span className="text-xs font-serif font-bold text-[#f5eee6] uppercase tracking-widest block">
              DESTINATIONS SERVED:
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-serif text-[#a89582] mt-1">
              {destinations.map((d, i) => (
                <span key={i}>• {d}</span>
              ))}
            </div>
          </div>

          <div className="text-[11px] font-serif text-[#a87139] tracking-wider uppercase">
            TRANSIT RISKS OVER ENEMY TERRITORY REMAIN BUYER’S AGENT RESPONSIBILITY
          </div>
        </div>

      </div>
    </section>
  );
};
