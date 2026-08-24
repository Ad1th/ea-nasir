import React, { useState } from 'react';
import type { Product } from '../types';
import {
  CopperIngotGraphic,
  RawCopperGraphic,
  PremiumIngotGraphic,
  CopperScrapGraphic
} from './CopperVisuals';
import { X, Plus, Minus } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const totalShekels = product.price * quantity;

  const renderGraphic = () => {
    switch (product.type) {
      case 'ingot':
        return <CopperIngotGraphic className="w-full h-64" />;
      case 'raw':
        return <RawCopperGraphic className="w-full h-64" />;
      case 'premium':
        return <PremiumIngotGraphic className="w-full h-64" />;
      case 'scrap':
        return <CopperScrapGraphic className="w-full h-64" />;
      default:
        return <CopperIngotGraphic className="w-full h-64" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0704]/90 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#140d08] border border-[#3d2716] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-[#a89582] hover:text-[#f5eee6] transition-colors p-2"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Graphic Header */}
        <div className="p-8 border-b border-[#2d1e13] flex items-center justify-center bg-[#170e09]">
          {renderGraphic()}
        </div>

        {/* Modal Content */}
        <div className="p-8 space-y-6">
          <div>
            <span className="text-xs font-serif text-[#d97742] tracking-widest uppercase block">
              {product.quality} • {product.origin}
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#f5eee6] mt-1">
              {product.name}
            </h2>
          </div>

          <p className="text-sm font-sans text-[#cbb8a1] leading-relaxed">
            {product.detailedDescription}
          </p>

          <div className="py-4 border-y border-[#2d1e13] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-serif uppercase tracking-widest text-[#a89582] block">
                UNIT RATE
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl font-bold text-[#f5eee6]">
                  {totalShekels}
                </span>
                <span className="text-xs font-serif text-[#d4af37] uppercase">
                  shekels of silver
                </span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-serif text-[#a89582] uppercase tracking-wider">QUANTITY:</span>
              <div className="flex items-center border border-[#3d2716] bg-[#1a110a]">
                <button
                  onClick={handleDecrement}
                  className="px-3 py-1.5 text-[#cbb8a1] hover:text-[#f5eee6]"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center font-serif font-bold text-sm text-[#f5eee6]">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  className="px-3 py-1.5 text-[#cbb8a1] hover:text-[#f5eee6]"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <button
            onClick={() => {
              onAddToCart(product, quantity);
              onClose();
            }}
            className="w-full py-4 bg-[#b87333] hover:bg-[#d97742] text-[#120c08] font-serif font-bold text-xs tracking-widest uppercase transition-colors cursor-pointer"
          >
            ADD {quantity} {product.unit.toUpperCase()}(S) TO TRADE LEDGER →
          </button>

          <div className="text-[11px] font-serif text-[#a87139] tracking-wider text-center uppercase">
            Quality inspected prior to dispatch • Dispatched via Euphrates river boat
          </div>
        </div>
      </div>
    </div>
  );
};
