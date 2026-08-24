import React from 'react';
import type { Product } from '../types';
import { ProductCard } from './ProductCard';
import { ShieldCheck, Award } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onSelectProduct,
  onAddToCart
}) => {
  return (
    <section id="copper-section" className="py-16 lg:py-24 bg-[#120c08] relative border-b border-[#3a2618]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#22160d] border border-[#422d1f] rounded-full text-xs font-serif text-[#d4af37] uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            DIRECT FROM MAGAN MINES
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[#f5eee6]">
            OUR COPPER
          </h2>

          <p className="text-base text-[#cbb8a1] font-sans">
            Every ingot and lump is inspected in our storehouse courtyard prior to merchant dispatch. Select your grade below for immediate river or land transport.
          </p>

          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#b87333] to-transparent mx-auto pt-2"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Microcopy PR Assurance */}
        <div className="mt-12 p-4 bg-[#1a110a] border border-[#342419] rounded-md text-center text-xs font-serif text-[#a89582] flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#d97742]" />
          <span>Quality inspected prior to dispatch. All weights measured in standard Ur Shekels.</span>
        </div>

      </div>
    </section>
  );
};
