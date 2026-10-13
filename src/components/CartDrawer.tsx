import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, Clock, MapPin, CreditCard, ChevronRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [deliveryType, setDeliveryType] = useState<'retirada' | 'entrega'>('entrega');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Pix');
  const [notes, setNotes] = useState('');

  const total = items.reduce((sum, item) => sum + item.item.price * item.quantity, 0);

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    let message = `*NOVO PEDIDO - MINEIRO RAIZ LANCHONETE & CAFÉ* ☕🥖\n\n`;
    if (customerName.trim()) {
      message += `👤 *Cliente:* ${customerName.trim()}\n`;
    }
    message += `🛵 *Tipo:* ${deliveryType === 'entrega' ? 'Entrega em Chavantes' : 'Retirada no Balcão'}\n`;
    if (deliveryType === 'entrega' && address.trim()) {
      message += `📍 *Endereço:* ${address.trim()}\n`;
    }
    message += `💳 *Pagamento:* ${paymentMethod}\n\n`;

    message += `*ITENS DO PEDIDO:*\n`;
    items.forEach((ci) => {
      message += `• ${ci.quantity}x ${ci.item.name} - R$ ${(ci.item.price * ci.quantity).toFixed(2).replace('.', ',')}\n`;
    });

    message += `\n*TOTAL:* R$ ${total.toFixed(2).replace('.', ',')}\n`;

    if (notes.trim()) {
      message += `\n📝 *Observações:* ${notes.trim()}\n`;
    }

    message += `\n_Pedido gerado pelo site Mineiro Raiz. Aguardo confirmação!_`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5514998829573?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm z-50"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed inset-y-0 right-0 max-w-md w-full bg-[#FCFAF7] text-stone-900 shadow-2xl z-50 flex flex-col border-l-4 border-[#FFC700]"
          >
            {/* Header */}
            <div className="p-5 bg-[#D71920] text-white flex items-center justify-between shadow-md border-b-4 border-[#FFC700]">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <img
                    src="/IMG-20261008-WA0062.jpg"
                    alt="Mineiro Raiz"
                    className="w-auto h-12 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-black text-lg text-white">Sua Sacola Mineira</h3>
                  <p className="text-xs text-[#FFC700] font-black">
                    {items.length === 0 ? 'Sacola vazia' : `${items.reduce((acc, i) => acc + i.quantity, 0)} itens adicionados`}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/20 text-white transition-colors"
                aria-label="Fechar sacola"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              {items.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                    <ShoppingBag className="w-10 h-10" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-stone-800">Sua sacola está vazia</h4>
                  <p className="text-sm text-stone-600 max-w-xs mx-auto">
                    Que tal escolher um pão de queijo quentinho ou aquele café coado da roça?
                  </p>
                  <button
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E31837] text-white font-medium text-sm hover:bg-[#BF102A] transition-all shadow-sm"
                  >
                    Ver Nosso Cardápio
                  </button>
                </div>
              ) : (
                <>
                  {/* Items List */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-stone-500 uppercase tracking-wider">
                      <span>Itens Selecionados</span>
                      <button
                        onClick={onClearCart}
                        className="text-red-700 hover:text-red-800 hover:underline flex items-center gap-1 font-bold"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Limpar tudo
                      </button>
                    </div>

                    {items.map((cartItem) => (
                      <div
                        key={cartItem.item.id}
                        className="p-3.5 rounded-xl bg-white border border-[#EADBCE] shadow-sm flex items-center gap-3"
                      >
                        <div className="w-12 h-12 rounded-xl bg-amber-100/80 border border-amber-200 flex items-center justify-center flex-shrink-0 text-amber-900 font-bold">
                          <ShoppingBag className="w-5 h-5 text-[#E31837]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-serif font-bold text-sm text-stone-900 truncate">
                            {cartItem.item.name}
                          </h5>
                          <span className="text-xs text-amber-800 font-semibold block">
                            R$ {cartItem.item.price.toFixed(2).replace('.', ',')} un.
                          </span>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => onUpdateQuantity(cartItem.item.id, -1)}
                              className="w-6 h-6 rounded-md bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 transition"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-bold w-4 text-center">{cartItem.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(cartItem.item.id, 1)}
                              className="w-6 h-6 rounded-md bg-[#E31837] text-white hover:bg-[#BF102A] flex items-center justify-center transition"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-sm text-stone-900 block">
                            R$ {(cartItem.item.price * cartItem.quantity).toFixed(2).replace('.', ',')}
                          </span>
                          <button
                            onClick={() => onRemoveItem(cartItem.item.id)}
                            className="mt-2 text-stone-400 hover:text-red-600 transition"
                            title="Remover item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Delivery & Details Form */}
                  <div className="p-4 bg-white rounded-xl border border-[#EADBCE] space-y-4">
                    <h5 className="font-serif font-bold text-sm text-stone-900 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#D4AF37]" /> Dados para Pedido Rápido
                    </h5>

                    {/* Customer Name */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Seu Nome</label>
                      <input
                        type="text"
                        placeholder="Ex: Maria Aparecida"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#E31837] bg-[#FCFAF7]"
                      />
                    </div>

                    {/* Delivery Mode */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Como prefere receber?</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setDeliveryType('entrega')}
                          className={`py-2 px-3 text-xs font-semibold rounded-lg border transition text-center ${
                            deliveryType === 'entrega'
                              ? 'border-[#E31837] bg-red-50 text-[#BF102A]'
                              : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                          }`}
                        >
                          🛵 Entrega no Bairro
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeliveryType('retirada')}
                          className={`py-2 px-3 text-xs font-semibold rounded-lg border transition text-center ${
                            deliveryType === 'retirada'
                              ? 'border-[#E31837] bg-red-50 text-[#BF102A]'
                              : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                          }`}
                        >
                          🏪 Retirar no Balcão
                        </button>
                      </div>
                    </div>

                    {deliveryType === 'entrega' && (
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          Endereço Completo em Chavantes
                        </label>
                        <input
                          type="text"
                          placeholder="Rua, número, bairro e referência"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="w-full px-3 py-2 text-sm rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#E31837] bg-[#FCFAF7]"
                        />
                      </div>
                    )}

                    {/* Payment Method */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Forma de Pagamento</label>
                      <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#E31837] bg-[#FCFAF7]"
                      >
                        <option value="Pix">Pix (Chave informada no Zap)</option>
                        <option value="Cartão de Crédito/Débito">Cartão (Levamos a maquininha)</option>
                        <option value="Dinheiro">Dinheiro (Levar troco)</option>
                      </select>
                    </div>

                    {/* Optional Notes */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Observações do pedido (opcional)</label>
                      <input
                        type="text"
                        placeholder="Ex: Café sem açúcar, pão bem tostadinho"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#E31837] bg-[#FCFAF7]"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer Summary & WhatsApp CTA */}
            {items.length > 0 && (
              <div className="p-5 bg-white border-t border-[#EADBCE] shadow-lg space-y-3">
                <div className="flex items-center justify-between text-base font-bold text-stone-900">
                  <span className="font-serif">Subtotal do Pedido:</span>
                  <span className="text-xl text-[#E31837]">
                    R$ {total.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <p className="text-xs text-stone-500">
                  Taxa de entrega calculada conforme a distância no centro ou bairros de Chavantes.
                </p>

                <button
                  onClick={handleCheckoutWhatsApp}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:brightness-105 active:scale-[0.98] transition shadow-md"
                >
                  <Send className="w-4 h-4" />
                  Enviar Pedido no WhatsApp ((14) 99882-9573)
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
