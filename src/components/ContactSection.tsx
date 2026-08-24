import React, { useState } from 'react';
import { Send, MapPin, Mail, Building, CheckCircle2, ShieldCheck } from 'lucide-react';

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
    <section className="py-16 lg:py-24 bg-[#140c07] border-b border-[#3a2618] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#22160d] border border-[#422d1f] rounded-full text-xs font-serif text-[#d4af37] uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5 text-[#d97742]" />
            MERCHANT COMMUNICATIONS
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[#f5eee6]">
            CONTACT EA-NASIR
          </h2>

          <p className="text-base text-[#cbb8a1] font-sans">
            Send your trade inquiry, volume quote request, or dispatch query directly to our storehouse clerk.
          </p>

          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#b87333] to-transparent mx-auto pt-2"></div>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#1b120a] border border-[#3d291b] p-6 sm:p-10 rounded-lg shadow-2xl relative">
            
            {sentToast && (
              <div className="mb-6 p-4 bg-[#1b2b20] border border-[#2d543c] rounded text-xs font-serif text-[#6ecf99] flex items-start gap-3 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-[#6ecf99]" />
                <div>
                  <strong className="block text-sm font-bold text-[#f5eee6]">TABLET MESSAGE DISPATCHED!</strong>
                  Your clay message tablet has been encoded and dispatched to Ea-Nasir's storehouse. Expect a written response within 3-5 lunar phases.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-serif text-[#cbb8a1] uppercase mb-2">
                    YOUR NAME / TITLE
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nanni of Ur"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-[#140c07] border border-[#4a3424] focus:border-[#d97742] rounded text-sm text-[#f5eee6] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif text-[#cbb8a1] uppercase mb-2">
                    CITY OF RESIDENCE
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ur, Eridu, Babylon"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 bg-[#140c07] border border-[#4a3424] focus:border-[#d97742] rounded text-sm text-[#f5eee6] outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-serif text-[#cbb8a1] uppercase mb-2">
                  TYPE OF TRADE INQUIRY
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-4 py-3 bg-[#140c07] border border-[#4a3424] focus:border-[#d97742] rounded text-sm text-[#f5eee6] outline-none transition-colors"
                >
                  <option value="Wholesale Ingot Purchase">Wholesale Ingot Purchase</option>
                  <option value="Raw Copper Ore Bulk Order">Raw Copper Ore Bulk Order</option>
                  <option value="Dispute & Ledger Clarification">Dispute & Ledger Clarification</option>
                  <option value="Custom Smelting Request">Custom Smelting Request</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-serif text-[#cbb8a1] uppercase mb-2">
                  MESSAGE / TRADE SPECIFICATIONS
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Inscribe your inquiry for Ea-Nasir..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-[#140c07] border border-[#4a3424] focus:border-[#d97742] rounded text-sm text-[#f5eee6] outline-none transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#b87333] via-[#d97742] to-[#b87333] hover:from-[#d97742] hover:to-[#a85e27] text-[#120c08] font-serif font-bold text-xs tracking-wider uppercase rounded shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>SEND MESSAGE</span>
              </button>
            </form>

          </div>

          {/* Right Column: Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6 bg-[#18100a] border border-[#3d291b] p-8 rounded-lg text-left shadow-xl">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#f5eee6]">
                EA-NASIR & ASSOCIATES
              </h3>
              <p className="text-xs font-serif text-[#a87139] uppercase tracking-wider mt-1">
                COPPER MERCHANTS OF UR
              </p>
            </div>

            <div className="space-y-4 text-xs font-sans text-[#cbb8a1] pt-4 border-t border-[#342419]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d97742] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#f5eee6] font-serif uppercase">LOCATION</strong>
                  <span>Ur, Sumer</span>
                  <span className="block text-[11px] text-[#a89582]">Near the Great Ziggurat (Room 3 Archive)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#d97742] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#f5eee6] font-serif uppercase">EMAIL DISPATCH</strong>
                  <a href="mailto:sendme@ea-nasir.com" className="text-[#d97742] hover:underline font-mono text-sm">
                    sendme@ea-nasir.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building className="w-5 h-5 text-[#d97742] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#f5eee6] font-serif uppercase">STOREHOUSE HOURS</strong>
                  <span>Sun–Thu: Sunrise to Sunset</span>
                  <span className="block text-[11px] text-[#a89582]">Closed during temple ritual festivals</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#120c08] border border-[#342419] rounded text-[11px] font-sans text-[#a89582] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#d97742] shrink-0" />
              <span>All disputes are reviewed individually by house clerks.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
