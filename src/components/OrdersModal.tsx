import React, { useState } from 'react';
import type { CartItem } from '../types';
import { X } from 'lucide-react';
import confetti from 'canvas-confetti';

interface OrdersModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onBrowse: () => void;
}

export const OrdersModal: React.FC<OrdersModalProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onBrowse
}) => {
  const [buyerName, setBuyerName] = useState('');
  const [buyerCity, setBuyerCity] = useState('Ur');
  const [deliveryMethod, setDeliveryMethod] = useState('River Barge (Euphrates)');
  const [orderSealed, setOrderSealed] = useState(false);
  const [sealedOrderCode, setSealedOrderCode] = useState('');

  if (!isOpen) return null;

  const totalShekels = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleSealAgreement = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#b87333', '#d97742', '#d4af37', '#8c5a2b']
    });

    const code = `UR-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear() - 3776}BC`;
    setSealedOrderCode(code);
    setOrderSealed(true);
  };

  const handleCloseSealed = () => {
    setOrderSealed(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080503]/90 backdrop-blur-sm animate-in fade-in duration-200">
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

        {/* Modal Header */}
        <div className="p-8 border-b border-[#2d1e13] bg-[#18100a]">
          <span className="text-xs font-serif text-[#a87139] tracking-widest uppercase block">
            STOREHOUSE ACCOUNTING LEDGER
          </span>
          <h2 className="text-2xl font-serif font-bold text-[#f5eee6] mt-1">
            ACTIVE TRADE RESERVATIONS
          </h2>
        </div>

        {/* Body Content */}
        {orderSealed ? (
          <div className="p-8 text-center space-y-6">
            <span className="text-xs font-serif text-[#d4af37] tracking-widest uppercase block">
              TABLET RECORD CREATED
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#f5eee6]">
              TRADE AGREEMENT OFFICIALLY SEALED
            </h3>
            <p className="text-xs font-serif text-[#a89582]">
              RECORD REF: <strong className="text-[#d97742]">{sealedOrderCode}</strong>
            </p>

            <div className="bg-[#18100a] border border-[#3d2716] p-4 text-left text-xs font-serif space-y-2 text-[#a89582]">
              <div className="flex justify-between border-b border-[#2d1e13] pb-2">
                <span>BUYER AGENT:</span>
                <span className="text-[#f5eee6]">{buyerName || 'Noble Trader'} ({buyerCity})</span>
              </div>
              <div className="flex justify-between border-b border-[#2d1e13] pb-2">
                <span>TRANSPORT:</span>
                <span className="text-[#f5eee6]">{deliveryMethod}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span>TOTAL DUE:</span>
                <span className="text-[#d4af37] font-bold">{totalShekels} SHEKELS</span>
              </div>
            </div>

            <button
              onClick={handleCloseSealed}
              className="w-full py-4 bg-[#b87333] hover:bg-[#d97742] text-[#120c08] font-serif font-bold text-xs tracking-widest uppercase transition-colors cursor-pointer"
            >
              RETURN TO STOREHOUSE →
            </button>
          </div>
        ) : cart.length === 0 ? (
          <div className="p-12 text-center space-y-6">
            <h3 className="text-2xl font-serif font-bold text-[#f5eee6]">
              NO ACTIVE ORDERS
            </h3>
            <p className="text-sm font-sans text-[#a89582]">
              Your trade ledger is currently empty.
            </p>
            <button
              onClick={() => {
                onClose();
                onBrowse();
              }}
              className="px-8 py-4 bg-[#b87333] hover:bg-[#d97742] text-[#120c08] font-serif font-bold text-xs tracking-widest uppercase transition-colors cursor-pointer"
            >
              BROWSE COPPER →
            </button>
          </div>
        ) : (
          <div className="p-8 space-y-6">
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="py-3 border-b border-[#2d1e13] flex items-center justify-between gap-4 text-left"
                >
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#f5eee6]">
                      {item.product.name}
                    </h4>
                    <span className="text-xs text-[#d97742] font-serif">
                      {item.product.price} shekels x {item.quantity}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-[#3d2716] bg-[#18100a] text-xs font-serif text-[#f5eee6]">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="px-2 py-1 text-[#a89582] hover:text-[#f5eee6]"
                      >
                        -
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="px-2 py-1 text-[#a89582] hover:text-[#f5eee6]"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-[10px] font-serif text-[#e05345] hover:underline uppercase"
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="py-3 border-y border-[#2d1e13] flex items-center justify-between font-serif">
              <span className="text-xs uppercase tracking-widest text-[#a89582]">TOTAL BALANCE</span>
              <span className="text-2xl font-bold text-[#f5eee6]">{totalShekels} <span className="text-xs text-[#d4af37]">SHEKELS</span></span>
            </div>

            <form onSubmit={handleSealAgreement} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-serif text-[#a87139] uppercase tracking-wider mb-1">
                    BUYER AGENT / HOUSE
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gimil-Sin"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full px-3 py-2 bg-[#120c08] border border-[#3d2716] focus:border-[#d97742] text-xs text-[#f5eee6] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-serif text-[#a87139] uppercase tracking-wider mb-1">
                    CITY DESTINATION
                  </label>
                  <select
                    value={buyerCity}
                    onChange={(e) => setBuyerCity(e.target.value)}
                    className="w-full px-3 py-2 bg-[#120c08] border border-[#3d2716] focus:border-[#d97742] text-xs text-[#f5eee6] outline-none"
                  >
                    <option value="Ur">Ur</option>
                    <option value="Lagash">Lagash</option>
                    <option value="Eridu">Eridu</option>
                    <option value="Babylon">Babylon</option>
                    <option value="Nippur">Nippur</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-serif text-[#a87139] uppercase tracking-wider mb-1">
                  TRANSPORT METHOD
                </label>
                <select
                  value={deliveryMethod}
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                  className="w-full px-3 py-2 bg-[#120c08] border border-[#3d2716] focus:border-[#d97742] text-xs text-[#f5eee6] outline-none"
                >
                  <option value="River Barge (Euphrates)">River Barge (Euphrates) — 7–30 days</option>
                  <option value="Desert Caravan">Desert Caravan — Depends on conditions</option>
                  <option value="Local Storehouse Pickup">Local Storehouse Pickup (Ur)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#b87333] hover:bg-[#d97742] text-[#120c08] font-serif font-bold text-xs tracking-widest uppercase transition-colors cursor-pointer"
              >
                SEAL TRADE AGREEMENT →
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
