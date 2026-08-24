import React, { useState, useEffect } from 'react';
import type { NavTab } from '../types';
import { CuneiformLogoEmblem } from './CopperVisuals';
import { ShoppingBag, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';

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
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      {/* Top Banner Tagline */}
      <div className="bg-[#18100a] border-b border-[#342419] py-1.5 px-4 text-center text-xs tracking-widest uppercase font-serif text-[#d97742] flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-[#8c5a2b]/40 hidden sm:inline-block"></span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
          FINE COPPER. FAIR DEALS. — ESTABLISHED IN UR ~1750 BC
        </span>
        <span className="h-px w-8 bg-[#8c5a2b]/40 hidden sm:inline-block"></span>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#120c08]/95 backdrop-blur-md shadow-2xl border-b border-[#3a2618]'
            : 'bg-[#150e09] border-b border-[#2a1d13]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Emblem */}
            <div
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3.5 cursor-pointer group"
            >
              <CuneiformLogoEmblem className="w-10 h-10 transition-transform duration-300 group-hover:scale-105" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-decorative text-xl sm:text-2xl font-bold tracking-wider text-[#f5eee6] group-hover:text-[#d97742] transition-colors">
                    EA-NASIR
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs font-serif tracking-widest text-[#a87139] uppercase">
                  COPPER MERCHANT OF UR
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-2 text-xs font-serif font-semibold tracking-widest transition-all duration-200 relative ${
                      isActive
                        ? 'text-[#f4c28c]'
                        : 'text-[#cbb8a1] hover:text-[#f5eee6] hover:bg-[#22170f]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-[#b87333] via-[#d97742] to-[#b87333] rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Side Action: My Orders (Count) */}
            <div className="flex items-center gap-3">
              <button
                onClick={openCart}
                className="relative flex items-center gap-2.5 px-4 py-2 bg-[#261910] hover:bg-[#342317] border border-[#523723] hover:border-[#d97742] rounded-md text-xs font-serif font-bold tracking-wider text-[#f5eee6] transition-all duration-300 shadow-md group cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#d97742] group-hover:scale-110 transition-transform" />
                <span>My Orders</span>
                <span className="bg-[#b87333] text-[#120c08] text-[11px] font-bold px-2 py-0.5 rounded-full min-w-[20px] text-center font-sans">
                  {cartCount}
                </span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#cbb8a1] hover:text-[#f5eee6] hover:bg-[#261910] rounded-md transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#18100a] border-b border-[#3a2618] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-left font-serif text-sm font-semibold tracking-wider rounded-md transition-colors ${
                    isActive
                      ? 'bg-[#2b1d13] text-[#f4c28c] border-l-4 border-[#d97742]'
                      : 'text-[#cbb8a1] hover:bg-[#22170f] hover:text-[#f5eee6]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#8c5a2b]" />
                </button>
              );
            })}

            <div className="pt-4 border-t border-[#2d1e13] flex justify-between text-xs text-[#a87139]">
              <span>UR MAIN STOREHOUSE</span>
              <span>EUPHRATES DOCK #4</span>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
