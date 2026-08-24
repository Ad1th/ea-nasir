import React from 'react';

export const TrustStats: React.FC = () => {
  const stats = [
    { value: '12,847+', label: 'Successful Transactions', subtext: 'Recorded in clay ledgers' },
    { value: '37', label: 'Trade Routes', subtext: 'Spanning Dilmun to Magan' },
    { value: '99.8%', label: 'Customer Satisfaction', subtext: 'Unquestioned reputational excellence' },
    { value: '~1750 BC', label: 'Serving Ur', subtext: 'Centuries of commercial heritage' }
  ];

  return (
    <section className="bg-[#150e09] border-b border-[#342419] py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#1e140d] border border-[#3a271a] hover:border-[#8c5a2b] p-6 rounded-md text-center transition-all duration-300 group shadow-lg"
            >
              <div className="font-serif text-3xl sm:text-4xl font-extrabold gold-gradient-text tracking-tight group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="font-serif text-xs font-bold text-[#f5eee6] tracking-widest uppercase mt-2">
                {stat.label}
              </div>
              <div className="text-[11px] font-sans text-[#a89582] mt-1">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
