import React from 'react';
import { Heart, MapPin, Phone, ArrowUp, Star, Coffee } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#8E0C10] text-white pt-16 pb-12 border-t-8 border-[#FFC700]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b-2 border-white/20">
          
          {/* Brand & Manifesto */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="flex-shrink-0 flex items-center justify-center">
                <img
                  src="/IMG-20261008-WA0062.jpg"
                  alt="Mineiro Raiz"
                  className="w-auto h-16 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-serif font-black text-2xl text-white tracking-tight block">
                  Mineiro Raiz
                </span>
                <div className="flex items-center gap-1 text-[#FFC700]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed font-medium">
              Lanchonete tradicional em Chavantes - SP. O Rei Do Pão de Queijo servindo café coado no pano, pão de queijo da Canastra e salgados artesanais no capricho do Mineiro.
            </p>
            <div className="text-xs text-[#FFC700] font-black flex items-center gap-1.5 uppercase tracking-wider">
              <span>🥖 Pão de queijo quentinho o dia todo</span>
            </div>
          </div>

          {/* Navegação Rápida */}
          <div className="space-y-3">
            <h4 className="font-serif font-black text-sm text-[#FFC700] uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-bold">
              <li>
                <a href="#inicio" className="text-white hover:text-[#FFC700] transition">
                  Início
                </a>
              </li>
              <li>
                <a href="#cardapio" className="text-white hover:text-[#FFC700] transition">
                  Cardápio Digital & Salgados
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-white hover:text-[#FFC700] transition">
                  O Mineiro & A Lanchonete
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white hover:text-[#FFC700] transition">
                  Contato & Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Endereço & Balcão */}
          <div className="space-y-3">
            <h4 className="font-serif font-black text-sm text-[#FFC700] uppercase tracking-wider">
              Onde Estamos
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-white/90 font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFC700] flex-shrink-0 mt-0.5" />
                <span>Rua Altino Arantes, 137 Centro<br />Chavantes - SP, 18970-007</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#FFC700] flex-shrink-0" />
                <span className="font-black text-white text-base">(14) 99882-9573</span>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div className="space-y-3">
            <h4 className="font-serif font-black text-sm text-[#FFC700] uppercase tracking-wider">
              Horário do Balcão
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm text-white/90">
              <p><strong className="text-[#FFC700]">Segunda a Sábado:</strong> 06:30 às 20:00</p>
              <p><strong className="text-[#FFC700]">Domingo:</strong> 07:00 às 13:00</p>
              <p className="text-xs text-[#FFC700] font-black pt-1">
                Sempre tem café novo passando! ☕
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80 font-medium">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Mineiro Raiz Lanchonete & Café. Feito com</span>
            <Heart className="w-3.5 h-3.5 text-[#FFC700] fill-[#FFC700]" />
            <span>em Chavantes - SP.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-black text-stone-950 hover:bg-white transition px-4 py-2 rounded-full bg-[#FFC700] shadow-md border-2 border-white"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
