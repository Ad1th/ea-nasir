import React from 'react';
import type { Product } from '../types';
import {
  CopperIngotGraphic,
  RawCopperGraphic,
  PremiumIngotGraphic,
  CopperScrapGraphic
} from './CopperVisuals';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onAddToCart
}) => {
  const renderGraphic = () => {
    switch (product.type) {
      case 'ingot':
        return <CopperIngotGraphic className="w-full h-44 group-hover:scale-105 transition-transform duration-500" />;
      case 'raw':
        return <RawCopperGraphic className="w-full h-44 group-hover:scale-105 transition-transform duration-500" />;
      case 'premium':
        return <PremiumIngotGraphic className="w-full h-44 group-hover:scale-105 transition-transform duration-500" />;
      case 'scrap':
        return <CopperScrapGraphic className="w-full h-44 group-hover:scale-105 transition-transform duration-500" />;
      default:
        return <CopperIngotGraphic className="w-full h-44" />;
    }
  };

  return (
    <div
      onClick={() => onSelect(product)}
      className="bg-[#1c130c] border border-[#3d291b] hover:border-[#d97742] rounded-lg overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col group cursor-pointer relative"
    >
      {/* Badge if present */}
      {product.badge && (
        <div className="absolute top-3 right-3 z-10 bg-[#2b1b11] border border-[#8c5a2b] px-2.5 py-1 rounded text-[10px] font-serif font-bold text-[#d4af37] tracking-widest uppercase">
          {product.badge}
        </div>
      )}

      {/* Visual Product Art Container */}
      <div className="bg-clay-pattern p-4 flex items-center justify-center border-b border-[#342419] relative min-h-[200px]">
        {renderGraphic()}
      </div>

      {/* Product Content Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl font-bold text-[#f5eee6] group-hover:text-[#d97742] transition-colors">
              {product.name}
            </h3>
            <span className="text-[11px] font-serif text-[#a87139] uppercase tracking-wider">
              {product.quality}
            </span>
          </div>

          <p className="text-sm font-sans font-medium text-[#d97742] mt-0.5">
            {product.subtitle}
          </p>

          <p className="text-xs font-sans text-[#a89582] mt-2 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Pricing & Order CTA */}
        <div className="pt-4 border-t border-[#342419] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-serif uppercase tracking-widest text-[#a89582] block">
              PRICE PER {product.unit.toUpperCase()}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-2xl font-black text-[#f5eee6]">
                {product.price}
              </span>
              <span className="text-xs font-serif text-[#d4af37] font-semibold">
                shekels
              </span>
            </div>
          </div>

          <button
            onClick={(e) => onAddToCart(product, e)}
            className="px-4 py-2.5 bg-[#b87333] hover:bg-[#d97742] active:bg-[#a85e27] text-[#120c08] font-serif font-bold text-xs tracking-wider uppercase rounded shadow transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>ORDER NOW</span>
          </button>
        </div>
      </div>
    </div>
  );
};
