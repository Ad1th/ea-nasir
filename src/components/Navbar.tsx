import React, { useState } from 'react';
import type { NavTab } from '../types';
import { CuneiformLogoEmblem } from './CopperVisuals';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  cartCount: number;
  openCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  openCart
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'copper', label: 'COPPER' },
    { id: 'orders', label: 'ORDERS' },
    { id: 'shipping', label: 'SHIPPING' },
    { id: 'reviews', label: 'REVIEWS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-[#120c08] border-b border-[#2d1e13] sticky top-0 z-40">
      {/* Letterhead Top Strip */}
      <div className="border-b border-[#24170e] py-2 px-4 text-center text-[11px] font-serif text-[#a87139] tracking-widest uppercase">
        HOUSE OF EA-NASIR • ROYAL MERCHANT OF UR • ESTABLISHED ~1750 BC
      </div>

      {/* Main Letterhead Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Merchant House Branding */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <CuneiformLogoEmblem className="w-9 h-9" />
            <div className="text-left">
              <span className="font-decorative text-xl sm:text-2xl font-bold tracking-wider text-[#f5eee6] group-hover:text-[#d97742] transition-colors block">
                EA-NASIR
              </span>
              <span className="text-[10px] font-serif tracking-widest text-[#a87139] uppercase block">
                COPPER MERCHANT OF UR
              </span>
            </div>
          </div>

          {/* Restrained Editorial Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs font-serif tracking-widest uppercase transition-colors py-1 relative cursor-pointer ${
                    isActive
                      ? 'text-[#f4c28c] font-bold'
                      : 'text-[#a89582] hover:text-[#f5eee6]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-[#d97742]"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Understated Text Link for Orders */}
          <div className="flex items-center gap-4">
            <button
              onClick={openCart}
              className="text-xs font-serif font-bold tracking-widest text-[#f5eee6] hover:text-[#d97742] transition-colors uppercase border-b border-[#523723] hover:border-[#d97742] pb-0.5 cursor-pointer"
            >
              MY ORDERS ({cartCount})
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#a89582] hover:text-[#f5eee6]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#160e09] border-b border-[#2d1e13] px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left font-serif text-xs tracking-widest uppercase py-2 ${
                activeTab === item.id ? 'text-[#d97742] font-bold' : 'text-[#a89582]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
