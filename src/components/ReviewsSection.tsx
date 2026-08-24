import React, { useState } from 'react';
import { REVIEWS_DATA } from '../data/reviews';

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
    <section className="py-20 lg:py-28 bg-[#120c08] border-b border-[#2d1e13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-left border-b border-[#2d1e13] pb-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-serif text-[#a87139] tracking-widest uppercase block mb-1">
              TESTIMONIALS • REPUTATIONAL ARCHIVE
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-[#f5eee6]">
              WHAT OUR CUSTOMERS SAY
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-serif text-[#a89582] uppercase tracking-wider hidden sm:inline">FILTER:</span>
            <div className="flex items-center space-x-2">
              {[
                { id: 'verified', label: 'VERIFIED' },
                { id: 'all', label: 'ALL' },
                { id: 'recent', label: 'RECENT' },
                { id: 'records', label: 'MERCHANT RECORDS' }
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
                    className={`text-xs font-serif tracking-widest uppercase px-2.5 py-1 transition-colors cursor-pointer ${
                      isActive
                        ? 'text-[#f4c28c] font-bold border-b border-[#d97742]'
                        : 'text-[#a89582] hover:text-[#f5eee6]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Printed Testimonials Layout (No floating cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left py-4">
          {filteredReviews().map((review) => (
            <div key={review.id} className="space-y-3 border-b md:border-b-0 md:border-r border-[#2d1e13] pb-8 md:pb-0 md:pr-8 last:border-none">
              <blockquote className="font-serif text-lg text-[#f5eee6] leading-relaxed italic">
                "{review.content}"
              </blockquote>

              <div className="pt-2 text-xs font-serif text-[#a87139]">
                <strong className="text-[#d97742] uppercase block">{review.author}</strong>
                <span>{review.city} • {review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Historical Dispute Record */}
        <div className="mt-16 pt-8 border-t border-[#2d1e13] text-center">
          <button
            onClick={onOpenRecordModal}
            className="text-xs font-serif font-bold tracking-widest uppercase text-[#a87139] hover:text-[#d97742] transition-colors border-b border-[#523723] pb-0.5 cursor-pointer"
          >
            LOOKING FOR A SPECIFIC HISTORICAL CORRESPONDENCE? VIEW MERCHANT RECORDS →
          </button>
        </div>

      </div>
    </section>
  );
};
