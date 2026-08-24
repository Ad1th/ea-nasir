import React from 'react';
import type { Product } from '../types';
import {
  CopperIngotGraphic,
  RawCopperGraphic,
  PremiumIngotGraphic,
  CopperScrapGraphic
} from './CopperVisuals';

interface ProductCardProps {
  product: Product;
  index: number;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index,
  onSelect,
  onAddToCart
}) => {
  const indexStr = String(index + 1).padStart(2, '0');

  const renderGraphic = () => {
    switch (product.type) {
      case 'ingot':
        return <CopperIngotGraphic className="w-full h-52 transition-transform duration-500 group-hover:scale-105" />;
      case 'raw':
        return <RawCopperGraphic className="w-full h-52 transition-transform duration-500 group-hover:scale-105" />;
      case 'premium':
        return <PremiumIngotGraphic className="w-full h-52 transition-transform duration-500 group-hover:scale-105" />;
      case 'scrap':
        return <CopperScrapGraphic className="w-full h-52 transition-transform duration-500 group-hover:scale-105" />;
      default:
        return <CopperIngotGraphic className="w-full h-52" />;
    }
  };

  return (
    <div
      onClick={() => onSelect(product)}
      className="py-10 border-b border-[#2d1e13] grid grid-cols-1 md:grid-cols-12 gap-8 items-center group cursor-pointer"
    >
      {/* Index & Catalogue Number (2 cols) */}
      <div className="md:col-span-2 text-left">
        <span className="font-serif text-3xl font-bold text-[#8c5027] block">
          {indexStr}
        </span>
        <span className="text-[10px] font-serif text-[#a87139] tracking-widest uppercase block mt-1">
          CATALOGUE ITEM
        </span>
      </div>

      {/* Large Image Showcase (4 cols) */}
      <div className="md:col-span-4 flex items-center justify-center p-2">
        {renderGraphic()}
      </div>

      {/* Item Details (4 cols) */}
      <div className="md:col-span-4 text-left space-y-3">
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#f5eee6] group-hover:text-[#d97742] transition-colors">
            {product.name}
          </h3>
          <p className="text-xs font-serif text-[#d97742] uppercase tracking-wider mt-0.5">
            {product.quality}
          </p>
        </div>

        <p className="text-xs font-sans text-[#a89582] leading-relaxed">
          {product.detailedDescription}
        </p>

        <div className="text-xs font-serif text-[#a87139]">
          <span>ORIGIN: {product.origin}</span>
        </div>
      </div>

      {/* Price & Action (2 cols) */}
      <div className="md:col-span-2 text-left md:text-right space-y-4">
        <div>
          <span className="font-serif text-3xl font-black text-[#f5eee6] block">
            {product.price}
          </span>
          <span className="text-[11px] font-serif text-[#d4af37] font-semibold tracking-wider uppercase block">
            SHEKELS / {product.unit.toUpperCase()}
          </span>
        </div>

        <button
          onClick={(e) => onAddToCart(product, e)}
          className="inline-block text-xs font-serif font-bold tracking-widest uppercase text-[#f5eee6] hover:text-[#d97742] transition-colors border-b-2 border-[#d97742] pb-0.5 cursor-pointer"
        >
          ORDER COPPER →
        </button>
      </div>
    </div>
  );
};
