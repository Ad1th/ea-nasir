import React, { useState } from 'react';
import type { Product } from '../types';
import {
  CopperIngotGraphic,
  RawCopperGraphic,
  PremiumIngotGraphic,
  CopperScrapGraphic
} from './CopperVisuals';
import { X, Plus, Minus, ShoppingBag, ShieldCheck, Truck, Award } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0704]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#18100a] border border-[#4a3424] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#a89582] hover:text-[#f5eee6] hover:bg-[#281b11] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Visual Header */}
        <div className="bg-clay-pattern p-6 border-b border-[#342419] flex items-center justify-center relative">
          {renderGraphic()}
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-serif text-[#d4af37] tracking-widest uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>{product.quality}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#f5eee6] mt-1">
              {product.name}
            </h2>
            <p className="text-sm font-sans text-[#d97742] font-semibold mt-0.5">
              {product.subtitle}
            </p>
          </div>

          <p className="text-sm font-sans text-[#cbb8a1] leading-relaxed">
            {product.detailedDescription}
          </p>

          {/* Specifications Box */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-[#21160d] border border-[#3a271a] rounded text-xs font-serif">
            <div>
              <span className="text-[#a89582] block">MINE ORIGIN</span>
              <span className="text-[#f5eee6] font-semibold">{product.origin}</span>
            </div>
            <div>
              <span className="text-[#a89582] block">ESTIMATED MASS</span>
              <span className="text-[#f5eee6] font-semibold">{product.weightApprox}</span>
            </div>
          </div>

          {/* Pricing & Quantity Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-[#342419]">
            <div>
              <span className="text-[10px] font-serif uppercase tracking-widest text-[#a89582] block">
                UNIT PRICE: {product.price} SHEKELS
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl font-black text-[#f5eee6]">
                  {totalShekels}
                </span>
                <span className="text-xs font-serif text-[#d4af37]">
                  shekels of silver
                </span>
              </div>
            </div>

            {/* Quantity adjustment */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-serif text-[#cbb8a1] uppercase">QUANTITY:</span>
              <div className="flex items-center bg-[#251910] border border-[#4a3424] rounded">
                <button
                  onClick={handleDecrement}
                  className="p-2 text-[#cbb8a1] hover:text-[#f5eee6] hover:bg-[#342317] transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-serif font-bold text-sm text-[#f5eee6]">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  className="p-2 text-[#cbb8a1] hover:text-[#f5eee6] hover:bg-[#342317] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={() => {
              onAddToCart(product, quantity);
              onClose();
            }}
            className="w-full py-4 bg-gradient-to-r from-[#b87333] via-[#d97742] to-[#b87333] hover:from-[#d97742] hover:to-[#a85e27] text-[#120c08] font-serif font-bold text-sm tracking-wider uppercase rounded shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>ADD {quantity} {product.unit.toUpperCase()}(S) TO TRADE LEDGER</span>
          </button>

          {/* Guarantees */}
          <div className="space-y-2 pt-2 border-t border-[#342419] text-xs text-[#a89582] font-sans">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#d97742]" />
              <span>Merchant Guarantee: Quality inspected prior to dispatch.</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#d97742]" />
              <span>Shipping Info: Dispatched via Euphrates river boat or inland caravan.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
