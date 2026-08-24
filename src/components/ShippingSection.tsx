import React from 'react';
import { Anchor, Compass, MapPin, Clock, ShieldCheck } from 'lucide-react';

export const ShippingSection: React.FC = () => {
  const destinations = ['Ur', 'Lagash', 'Eridu', 'Babylon', 'Nippur', 'Other Trading Settlements'];

  const methods = [
    {
      title: 'River Delivery',
      sub: 'Via the Euphrates.',
      icon: Anchor,
      estimate: '7–30 days',
      details: 'Transported on flat-bottom river barges. Vessel captains navigate seasonal currents and downstream sandbars.'
    },
    {
      title: 'Caravan Delivery',
      sub: 'For inland trade routes.',
      icon: Compass,
      estimate: 'Depends on conditions',
      details: 'Donkey caravans equipped with woven palm panniers. Route progression subject to desert weather and regional security.'
    },
    {
      title: 'Local Delivery',
      sub: 'Within Ur and surrounding settlements.',
      icon: MapPin,
      estimate: 'Arrangements to be made',
      details: 'Hand-cart or messenger pickup directly from Ea-Nasir’s storehouse courtyard.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#120c08] border-b border-[#3a2618] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#22160d] border border-[#422d1f] rounded-full text-xs font-serif text-[#d4af37] uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            MESOPOTAMIAN LOGISTICS NETWORK
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[#f5eee6]">
            SHIPPING & DELIVERY
          </h2>

          <p className="text-base text-[#cbb8a1] font-sans">
            Reliable delivery across Mesopotamia. Operating continuous transport logistics connecting Dilmun, Magan, Ur, and northern trade centers.
          </p>

          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#b87333] to-transparent mx-auto pt-2"></div>
        </div>

        {/* Shipping Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 max-w-6xl mx-auto">
          {methods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <div
                key={idx}
                className="bg-[#1b120a] border border-[#3d291b] hover:border-[#8c5a2b] p-8 rounded-lg shadow-xl flex flex-col justify-between space-y-6 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#281b11] border border-[#523723] rounded-full flex items-center justify-center text-[#d97742] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#f5eee6]">
                      {method.title}
                    </h3>
                    <p className="text-xs font-sans text-[#d97742] font-semibold mt-0.5">
                      {method.sub}
                    </p>
                  </div>

                  <p className="text-xs font-sans text-[#a89582] leading-relaxed">
                    {method.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#342419] flex items-center justify-between text-xs font-serif">
                  <span className="text-[#a89582] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#d97742]" /> EST. TRANSIT:
                  </span>
                  <span className="text-[#f5eee6] font-bold bg-[#26180f] px-2.5 py-1 rounded border border-[#422d1f]">
                    {method.estimate}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Destinations & Map Box */}
        <div className="max-w-5xl mx-auto bg-[#1a110a] border border-[#3a271a] p-8 rounded-lg shadow-2xl space-y-6">
          <div className="text-center">
            <h4 className="font-serif text-lg font-bold text-[#f5eee6] uppercase tracking-wider">
              REGIONAL TRADING DESTINATIONS SERVED
            </h4>
            <p className="text-xs text-[#a89582] mt-1 font-sans">
              Regular dispatch ledgers maintained for all major city-states.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {destinations.map((dest, i) => (
              <div
                key={i}
                className="px-4 py-2 bg-[#24170d] border border-[#4a3424] rounded-md text-xs font-serif text-[#f5eee6] flex items-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-[#d97742]" />
                <span>{dest}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#342419] text-center text-xs font-serif text-[#a89582] flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#d97742]" />
            <span>Transit risks over enemy territory remain the responsibility of buyer's agent.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
