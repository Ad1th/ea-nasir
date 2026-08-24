export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  price: number; // in shekels
  unit: string; // e.g. "ingot", "lump", "basket"
  quality: string;
  origin: string;
  weightApprox: string;
  badge?: string;
  type: 'ingot' | 'raw' | 'premium' | 'scrap';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  title: string;
  content: string;
  rating: number; // 1-5
  date: string;
  city: string;
  verified: boolean;
  isHistoricalComplaint?: boolean;
}

export type NavTab = 'home' | 'about' | 'copper' | 'orders' | 'shipping' | 'reviews' | 'contact' | 'returns';

export interface MerchantRecord {
  id: string;
  code: string;
  title: string;
  sender: string;
  recipient: string;
  locationFound: string;
  dateEst: string;
  status: 'DISPUTED BY MERCHANT' | 'UNDER REVIEW' | 'UNFOUNDED CLAIM' | 'CLOSED';
  excerpt: string;
  fullTranslation: string;
  merchantResponse: string;
}
