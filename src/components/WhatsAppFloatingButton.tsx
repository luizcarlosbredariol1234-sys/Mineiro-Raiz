import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const phone = '5514998829573';
  const message = 'Olá, Mineiro Raiz! Gostaria de consultar o cardápio e fazer um pedido.';
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Friendly Tooltip */}
      {showTooltip && (
        <div className="mb-2 bg-stone-900/95 text-white text-xs font-semibold px-3.5 py-2 rounded-2xl shadow-xl border border-stone-700/60 backdrop-blur-md flex items-center gap-2 animate-bounce">
          <span>☕ Peça seu café & salgado no Zap!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-white p-0.5"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com Mineiro Raiz"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-3 border-white ring-2 ring-[#D71920]"
      >
        {/* Subtle Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10 group-hover:opacity-100" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white text-white drop-shadow-sm" />

        {/* Badge Notification */}
        <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-[#D71920] border-2 border-white flex items-center justify-center text-[10px] font-black shadow-md">
          1
        </span>
      </a>
    </div>
  );
};
