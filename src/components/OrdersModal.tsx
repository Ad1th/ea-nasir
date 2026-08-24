import React, { useState } from 'react';
import type { CartItem } from '../types';
import { ShoppingBag, Trash2, Plus, Minus, X, ArrowRight, FileCheck } from 'lucide-react';
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

    // Trigger copper confetti celebration!
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0704]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-[#170e08] border border-[#523723] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#a89582] hover:text-[#f5eee6] hover:bg-[#2b1b11] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 border-b border-[#342419] bg-[#1e130b] flex items-center gap-3">
          <div className="p-2 bg-[#2b1b11] border border-[#523723] rounded text-[#d97742]">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#f5eee6]">
              MERCHANT TRADE LEDGER
            </h2>
            <p className="text-xs font-serif text-[#a87139] uppercase tracking-wider">
              ACTIVE COPPER ORDERS & SHEKEL ACCOUNTING
            </p>
          </div>
        </div>

        {/* Content Body */}
        {orderSealed ? (
          /* Sealed Order Receipt Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-[#251910] border-2 border-[#d4af37] rounded-full flex items-center justify-center mx-auto text-[#d4af37]">
              <FileCheck className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[10px] font-serif text-[#d4af37] tracking-widest uppercase block">
                TABLET RECORD CREATED
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#f5eee6] mt-1">
                TRADE AGREEMENT OFFICIALLY SEALED
              </h3>
              <p className="text-xs font-serif text-[#a89582] mt-1">
                RECORD REF: <strong className="text-[#d97742]">{sealedOrderCode}</strong>
              </p>
            </div>

            <div className="bg-[#1f140c] border border-[#3d291b] p-4 rounded text-left text-xs font-sans space-y-2">
              <div className="flex justify-between border-b border-[#342419] pb-2">
                <span className="text-[#a89582]">BUYER AGENT:</span>
                <span className="text-[#f5eee6] font-semibold">{buyerName || 'Noble Trader'} ({buyerCity})</span>
              </div>
              <div className="flex justify-between border-b border-[#342419] pb-2">
                <span className="text-[#a89582]">DELIVERY METHOD:</span>
                <span className="text-[#f5eee6] font-semibold">{deliveryMethod}</span>
              </div>
              <div className="flex justify-between font-serif pt-1">
                <span className="text-[#a89582]">TOTAL SILVER DUE:</span>
                <span className="text-[#d4af37] font-bold">{totalShekels} SHEKELS</span>
              </div>
            </div>

            <p className="text-xs font-sans text-[#cbb8a1] italic">
              Your clay accounting tablet has been dispatched to Ea-Nasir's storehouse courtyard. Quality inspection will take place prior to river loading.
            </p>

            <button
              onClick={handleCloseSealed}
              className="w-full py-3.5 bg-[#b87333] hover:bg-[#d97742] text-[#120c08] font-serif font-bold text-xs tracking-wider uppercase rounded shadow transition-all cursor-pointer"
            >
              RETURN TO STOREHOUSE
            </button>
          </div>
        ) : cart.length === 0 ? (
          /* Empty Cart State as specified in Prompt */
          <div className="p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-[#21160d] border border-[#3d291b] rounded-full flex items-center justify-center mx-auto text-[#a89582]">
              <ShoppingBag className="w-8 h-8 stroke-1" />
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-[#f5eee6] tracking-wide">
                NO ACTIVE ORDERS
              </h3>
              <p className="text-sm font-sans text-[#cbb8a1] mt-2">
                Your trade ledger is currently empty.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onBrowse();
              }}
              className="px-8 py-3.5 bg-gradient-to-r from-[#b87333] to-[#d97742] hover:from-[#d97742] hover:to-[#a85e27] text-[#120c08] font-serif font-bold text-xs tracking-wider uppercase rounded shadow transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>BROWSE COPPER</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Active Cart Items List & Checkout Form */
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Cart Items */}
            <div className="space-y-4 max-h-60 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-[#1f140c] border border-[#3a271a] p-4 rounded-md flex items-center justify-between gap-4"
                >
                  <div className="flex-1">
                    <h4 className="font-serif font-bold text-sm text-[#f5eee6]">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-[#d97742]">
                      {item.product.price} shekels per {item.product.unit}
                    </p>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center bg-[#281b11] border border-[#4a3424] rounded">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1.5 text-[#cbb8a1] hover:text-[#f5eee6] transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center font-serif font-bold text-xs text-[#f5eee6]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1.5 text-[#cbb8a1] hover:text-[#f5eee6] transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-right">
                    <span className="font-serif font-bold text-sm text-[#f5eee6] block">
                      {item.product.price * item.quantity} shekels
                    </span>
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-[10px] text-[#e05345] hover:underline flex items-center gap-1 ml-auto mt-1"
                    >
                      <Trash2 className="w-3 h-3" /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Calculation */}
            <div className="p-4 bg-[#24170d] border border-[#4a3424] rounded flex items-center justify-between font-serif">
              <span className="text-xs uppercase tracking-widest text-[#a89582]">TOTAL LEDGER BALANCE</span>
              <div className="text-right">
                <span className="text-2xl font-black text-[#f5eee6]">{totalShekels}</span>
                <span className="text-xs text-[#d4af37] ml-1.5 font-bold">shekels of silver</span>
              </div>
            </div>

            {/* Buyer Checkout Form */}
            <form onSubmit={handleSealAgreement} className="space-y-4 pt-2 border-t border-[#342419]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-serif text-[#cbb8a1] uppercase mb-1">
                    BUYER NAME / MERCHANT HOUSE
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gimil-Sin"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full px-3 py-2 bg-[#1f140c] border border-[#4a3424] focus:border-[#d97742] rounded text-xs text-[#f5eee6] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-serif text-[#cbb8a1] uppercase mb-1">
                    CITY OF DESTINATION
                  </label>
                  <select
                    value={buyerCity}
                    onChange={(e) => setBuyerCity(e.target.value)}
                    className="w-full px-3 py-2 bg-[#1f140c] border border-[#4a3424] focus:border-[#d97742] rounded text-xs text-[#f5eee6] outline-none"
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
                <label className="block text-[11px] font-serif text-[#cbb8a1] uppercase mb-1">
                  PREFERRED TRANSPORT METHOD
                </label>
                <select
                  value={deliveryMethod}
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                  className="w-full px-3 py-2 bg-[#1f140c] border border-[#4a3424] focus:border-[#d97742] rounded text-xs text-[#f5eee6] outline-none"
                >
                  <option value="River Barge (Euphrates)">River Barge (Euphrates) — 7–30 days</option>
                  <option value="Desert Caravan">Desert Caravan — Depends on conditions</option>
                  <option value="Local Storehouse Pickup">Local Storehouse Pickup (Ur)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#b87333] via-[#d97742] to-[#b87333] hover:from-[#d97742] hover:to-[#a85e27] text-[#120c08] font-serif font-bold text-xs tracking-wider uppercase rounded shadow-xl transition-all cursor-pointer"
              >
                SEAL TRADE AGREEMENT (PLACE ORDER)
              </button>
            </form>

          </div>
        )}

      </div>
    </div>
  );
};
