import React, { useState } from 'react';
import { REVIEWS_DATA } from '../data/reviews';
import { Star, Filter, ShieldCheck, FileText } from 'lucide-react';

interface ReviewsSectionProps {
  onOpenRecordModal: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenRecordModal }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'verified' | 'recent' | 'records'>('verified');

  const filteredReviews = () => {
    switch (activeFilter) {
      case 'verified':
        return REVIEWS_DATA.filter(r => r.verified);
      case 'recent':
        return [...REVIEWS_DATA].sort((a, b) => b.date.localeCompare(a.date));
      case 'all':
        return REVIEWS_DATA;
      default:
        return REVIEWS_DATA;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#140c07] border-b border-[#3a2618] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#22160d] border border-[#422d1f] rounded-full text-xs font-serif text-[#d4af37] uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 fill-[#d4af37]" />
            UNMATCHED CUSTOMER REPUTATION
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[#f5eee6]">
            WHAT OUR CUSTOMERS SAY
          </h2>

          <p className="text-base text-[#cbb8a1] font-sans">
            Read testimonials from satisfied merchants, noble traders, and copper buyers across Sumer.
          </p>

          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#b87333] to-transparent mx-auto pt-2"></div>
        </div>

        {/* The Review Filter Bar */}
        <div className="bg-[#1c120a] border border-[#3a271a] p-4 rounded-lg mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-md">
          <div className="flex items-center gap-2 text-xs font-serif text-[#cbb8a1]">
            <Filter className="w-4 h-4 text-[#d97742]" />
            <span>Showing: <strong className="text-[#f5eee6]">Verified Customer Reviews</strong></span>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'verified', label: 'Verified' },
              { id: 'all', label: 'All' },
              { id: 'recent', label: 'Recent' },
              { id: 'records', label: 'Merchant Records' }
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    if (tab.id === 'records') {
                      setActiveFilter('records');
                      onOpenRecordModal();
                    } else {
                      setActiveFilter(tab.id as any);
                    }
                  }}
                  className={`px-3.5 py-1.5 text-xs font-serif font-semibold rounded transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#b87333] text-[#120c08] shadow'
                      : 'bg-[#251910] text-[#cbb8a1] hover:text-[#f5eee6] hover:bg-[#322216]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Positive Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredReviews().map((review) => (
            <div
              key={review.id}
              className="bg-[#1b120a] border border-[#3d291b] hover:border-[#8c5a2b] p-6 rounded-lg shadow-lg flex flex-col justify-between space-y-4 transition-all duration-300 group"
            >
              <div className="space-y-3">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#d4af37]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                  ))}
                </div>

                <h4 className="font-serif text-base font-bold text-[#f5eee6]">
                  "{review.title}"
                </h4>

                <p className="text-xs font-sans text-[#cbb8a1] leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#342419] flex items-center justify-between text-xs font-serif">
                <div>
                  <span className="text-[#f5eee6] font-bold block">{review.author}</span>
                  <span className="text-[#a87139] text-[11px]">{review.city} • {review.date}</span>
                </div>
                {review.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] text-[#4e9e76] bg-[#12241b] border border-[#1e4531] px-2 py-0.5 rounded">
                    <ShieldCheck className="w-3 h-3" /> VERIFIED
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Link to Historical Dispute Record */}
        <div className="mt-14 pt-8 border-t border-[#2d1e13] text-center">
          <p className="text-xs font-serif text-[#a89582] mb-3">
            Looking for a specific historical correspondence?
          </p>
          <button
            onClick={onOpenRecordModal}
            className="inline-flex items-center gap-2 text-xs font-serif font-bold text-[#d97742] hover:text-[#f4c28c] underline underline-offset-4 transition-colors cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>View Merchant Records →</span>
          </button>
        </div>

      </div>
    </section>
  );
};
