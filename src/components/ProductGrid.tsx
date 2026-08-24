import React from 'react';
import type { Product } from '../types';
import { ProductCard } from './ProductCard';

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
    <section id="copper-section" className="py-20 lg:py-28 bg-[#120c08] border-b border-[#2d1e13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-left border-b border-[#2d1e13] pb-8 mb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-serif text-[#a87139] tracking-widest uppercase block mb-1">
              MERCHANT CATALOGUE • MAGAN COPPER SUPPLY
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-[#f5eee6]">
              OUR COPPER
            </h2>
          </div>

          <p className="text-xs font-sans text-[#a89582] max-w-md leading-relaxed">
            Every ingot and lump is inspected in our storehouse courtyard prior to merchant dispatch. Select your grade below for immediate river or land transport.
          </p>
        </div>

        {/* Editorial Catalogue Rows */}
        <div>
          {products.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              index={idx}
              onSelect={onSelectProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Subtle Editorial Footer Note */}
        <div className="pt-8 text-center text-xs font-serif text-[#a87139] tracking-widest uppercase">
          QUALITY INSPECTED PRIOR TO DISPATCH • ALL WEIGHTS MEASURED IN STANDARD UR SHEKELS
        </div>

      </div>
    </section>
  );
};
