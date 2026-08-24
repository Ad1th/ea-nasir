import type { Product } from '../types';

export const COPPER_PRODUCTS: Product[] = [
  {
    id: 'copper-ingot',
    name: 'Copper Ingot',
    subtitle: 'Standard copper ingot',
    description: 'For all your needs.',
    detailedDescription: 'Hand-molded standard rectangular copper ingot, smelted according to traditional Mesopotamian metallurgic standards. Ideal for tool manufacture, architectural casting, and standard merchant trade transactions.',
    price: 10,
    unit: 'ingot',
    quality: 'Standard Grade (Magan Sourced)',
    origin: 'Magan Mines via Gulf Fleet',
    weightApprox: 'approx. 4.2 kg (1 talent = 60 minas)',
    badge: 'MOST POPULAR',
    type: 'ingot'
  },
  {
    id: 'raw-copper',
    name: 'Raw Copper',
    subtitle: 'Unrefined copper',
    description: 'For smelters and craftsmen.',
    detailedDescription: 'Coarse raw copper lumps direct from furnace reduction. Contains natural metallic elements suitable for local foundry processing, bronze alloying, and heavy smithing.',
    price: 8,
    unit: 'lump',
    quality: 'Smelter Grade',
    origin: 'Magan Inland Quarries',
    weightApprox: 'approx. 5.0 kg raw mass',
    type: 'raw'
  },
  {
    id: 'premium-ingot',
    name: 'Premium Ingot',
    subtitle: 'High-purity copper',
    description: 'Best quality.',
    detailedDescription: 'Selected high-purity copper ingots reserved for discerning royal contractors and master smiths. Features smooth surface pour lines and superior acoustic resonance when struck.',
    price: 15,
    unit: 'ingot',
    quality: 'High Purity (Merchant Select)',
    origin: 'Magan Deep Vein Reserve',
    weightApprox: 'approx. 4.5 kg refined',
    badge: 'PREMIUM SELECTION',
    type: 'premium'
  },
  {
    id: 'copper-scrap',
    name: 'Copper Scrap',
    subtitle: 'For melting, rework and recycling',
    description: 'For melting, rework and recycling.',
    detailedDescription: 'Clean secondary copper cuttings, ingot trimmings, and foundry fragments packaged in woven palm baskets. Highly economical for alloy blending and small-scale casting.',
    price: 5,
    unit: 'basket',
    quality: 'Recycle Grade',
    origin: 'Ur Merchant Storehouse',
    weightApprox: 'approx. 6.0 kg basket',
    badge: 'VALUE VALUE',
    type: 'scrap'
  }
];
