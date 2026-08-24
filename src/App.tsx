import React, { useState } from 'react';
import type { NavTab, Product, CartItem } from './types';
import { COPPER_PRODUCTS } from './data/copperProducts';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { ProductGrid } from './components/ProductGrid';
import { ProductModal } from './components/ProductModal';
import { HistoricalRecordsSection } from './components/HistoricalRecordsSection';
import { ComplaintModal } from './components/ComplaintModal';
import { ReviewsSection } from './components/ReviewsSection';
import { ShippingSection } from './components/ShippingSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { OrdersModal } from './components/OrdersModal';
import { ReturnsPage } from './components/ReturnsPage';
import { Footer } from './components/Footer';
import { CheckCircle2 } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [complaintModalOpen, setComplaintModalOpen] = useState(false);
  const [ordersModalOpen, setOrdersModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleAddToCart = (product: Product, quantity = 1, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });

    triggerToast(`Added ${quantity} ${product.name}(s) to Trade Ledger!`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartTotalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#120c08] text-[#e8dcc4] font-sans antialiased selection:bg-[#b87333] selection:text-[#ffffff]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2b1b11] border border-[#8c5a2b] text-[#f5eee6] px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 text-xs font-serif animate-in slide-in-from-bottom duration-300">
          <CheckCircle2 className="w-5 h-5 text-[#d4af37]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cartTotalCount}
        openCart={() => setOrdersModalOpen(true)}
      />

      {/* Dynamic Main Body Content */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <>
            <Hero
              onBrowse={() => {
                setActiveTab('copper');
                document.getElementById('copper-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              onContact={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onViewRecord={() => setComplaintModalOpen(true)}
            />
            <TrustStats />
            <ProductGrid
              products={COPPER_PRODUCTS}
              onSelectProduct={(p) => setSelectedProduct(p)}
              onAddToCart={(p, e) => handleAddToCart(p, 1, e)}
            />
            <HistoricalRecordsSection
              onOpenRecordModal={() => setComplaintModalOpen(true)}
            />
            <ReviewsSection
              onOpenRecordModal={() => setComplaintModalOpen(true)}
            />
            <ShippingSection />
            <AboutSection />
            <ContactSection />
          </>
        )}

        {activeTab === 'about' && <AboutSection />}

        {activeTab === 'copper' && (
          <ProductGrid
            products={COPPER_PRODUCTS}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={(p, e) => handleAddToCart(p, 1, e)}
          />
        )}

        {activeTab === 'orders' && (
          <div className="py-16 px-4 max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-serif font-bold text-[#f5eee6]">MERCHANT TRADE LEDGER</h2>
            <p className="text-sm text-[#cbb8a1] font-sans">
              Manage your active order reservations, review silver shekel totals, and seal trade agreements.
            </p>
            <button
              onClick={() => setOrdersModalOpen(true)}
              className="px-8 py-4 bg-[#b87333] hover:bg-[#d97742] text-[#120c08] font-serif font-bold text-xs uppercase tracking-wider rounded shadow-xl cursor-pointer"
            >
              VIEW TRADE LEDGER ({cartTotalCount} ITEMS)
            </button>
          </div>
        )}

        {activeTab === 'shipping' && <ShippingSection />}

        {activeTab === 'reviews' && (
          <ReviewsSection
            onOpenRecordModal={() => setComplaintModalOpen(true)}
          />
        )}

        {activeTab === 'contact' && <ContactSection />}

        {activeTab === 'returns' && (
          <ReturnsPage
            onOpenRecordModal={() => setComplaintModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenRecordModal={() => setComplaintModalOpen(true)}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(p, q) => handleAddToCart(p, q)}
      />

      {/* Complaint Tablet Modal (UET V 81) */}
      <ComplaintModal
        isOpen={complaintModalOpen}
        onClose={() => setComplaintModalOpen(false)}
      />

      {/* Trade Ledger / Orders Modal */}
      <OrdersModal
        isOpen={ordersModalOpen || activeTab === 'orders'}
        onClose={() => {
          setOrdersModalOpen(false);
          if (activeTab === 'orders') setActiveTab('home');
        }}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onBrowse={() => {
          setOrdersModalOpen(false);
          setActiveTab('copper');
        }}
      />

    </div>
  );
}

export default App;
