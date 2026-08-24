import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [inquiryType, setInquiryType] = useState('Wholesale Ingot Purchase');
  const [message, setMessage] = useState('');
  const [sentToast, setSentToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSentToast(true);
    setName('');
    setCity('');
    setMessage('');
    setTimeout(() => setSentToast(false), 5000);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#160e09] border-b border-[#2d1e13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left border-b border-[#2d1e13] pb-6 mb-12">
          <span className="text-xs font-serif text-[#a87139] tracking-widest uppercase block mb-1">
            COMMUNICATIONS • STOREHOUSE INQUIRIES
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-[#f5eee6]">
            CONTACT EA-NASIR
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {sentToast && (
              <div className="p-4 border border-[#d97742] bg-[#24170d] text-xs font-serif text-[#f4c28c]">
                TABLET MESSAGE DISPATCHED! Written response expected within 3-5 lunar phases.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-serif text-[#a87139] uppercase tracking-wider mb-2">
                    YOUR NAME / TITLE
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nanni of Ur"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-[#120c08] border border-[#3d2716] focus:border-[#d97742] text-xs text-[#f5eee6] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif text-[#a87139] uppercase tracking-wider mb-2">
                    CITY OF RESIDENCE
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ur, Eridu, Babylon"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 bg-[#120c08] border border-[#3d2716] focus:border-[#d97742] text-xs text-[#f5eee6] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-serif text-[#a87139] uppercase tracking-wider mb-2">
                  TYPE OF TRADE INQUIRY
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-4 py-3 bg-[#120c08] border border-[#3d2716] focus:border-[#d97742] text-xs text-[#f5eee6] outline-none"
                >
                  <option value="Wholesale Ingot Purchase">Wholesale Ingot Purchase</option>
                  <option value="Raw Copper Ore Bulk Order">Raw Copper Ore Bulk Order</option>
                  <option value="Dispute & Ledger Clarification">Dispute & Ledger Clarification</option>
                  <option value="Custom Smelting Request">Custom Smelting Request</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-serif text-[#a87139] uppercase tracking-wider mb-2">
                  MESSAGE / SPECIFICATIONS
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Inscribe your inquiry for Ea-Nasir..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-[#120c08] border border-[#3d2716] focus:border-[#d97742] text-xs text-[#f5eee6] outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-8 py-4 bg-[#b87333] hover:bg-[#d97742] text-[#120c08] font-serif font-bold text-xs tracking-widest uppercase transition-colors cursor-pointer"
              >
                SEND MESSAGE →
              </button>
            </form>

          </div>

          {/* Location & Details (5 cols) */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#2d1e13] pt-6 lg:pt-0 lg:pl-10 space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#f5eee6]">
                EA-NASIR & ASSOCIATES
              </h3>
              <span className="text-xs font-serif text-[#a87139] tracking-widest uppercase block mt-1">
                COPPER MERCHANTS OF UR
              </span>
            </div>

            <div className="space-y-4 text-xs font-serif text-[#a89582] border-t border-[#2d1e13] pt-4">
              <div>
                <strong className="block text-[#f5eee6] uppercase">LOCATION</strong>
                <span>Ur, Sumer (Near Great Ziggurat, Room 3 Archive)</span>
              </div>

              <div>
                <strong className="block text-[#f5eee6] uppercase">EMAIL DISPATCH</strong>
                <a href="mailto:sendme@ea-nasir.xyz" className="text-[#d97742] font-mono hover:underline">
                  sendme@ea-nasir.xyz
                </a>
              </div>

              <div>
                <strong className="block text-[#f5eee6] uppercase">STOREHOUSE HOURS</strong>
                <span>Sun–Thu: Sunrise to Sunset</span>
              </div>
            </div>

            <div className="text-[11px] font-serif text-[#a87139] uppercase tracking-wider border-t border-[#2d1e13] pt-4">
              ALL DISPUTES ARE REVIEWED INDIVIDUALLY BY HOUSE CLERKS.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
