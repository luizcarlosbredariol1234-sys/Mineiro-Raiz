import React from 'react';
import { motion } from 'motion/react';
import { UtensilsCrossed, Phone, ArrowDown, Star, CheckCircle2, Flame, Coffee, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#D71920] bg-red-canvas">
      {/* Decorative concentric rings inspired by the logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] rounded-full border-[18px] border-white/10 pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border-[10px] border-[#FFC700]/20 pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* The 5 Stars Arch directly matching the top of the logo */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-1.5"
            >
              <div className="flex items-center gap-1.5 bg-[#B51016] px-5 py-2 rounded-full border-2 border-[#FFC700] shadow-md">
                {[14, 18, 22, 18, 14].map((size, idx) => (
                  <Star
                    key={idx}
                    style={{ width: size, height: size }}
                    className="text-[#FFC700] fill-[#FFC700]"
                  />
                ))}
                <span className="text-white text-xs font-black ml-1.5">Lanchonete & Café • Chavantes - SP</span>
              </div>
            </motion.div>

            {/* Main Headline: O Rei Do Pão de Queijo */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-serif font-black text-white tracking-tight leading-[1.08] text-4xl sm:text-5xl md:text-6xl lg:text-[64px] drop-shadow-md"
            >
              <span className="relative inline-block text-[#FFC700] drop-shadow-lg">
                O Rei Do Pão de Queijo
                <span className="absolute -bottom-1.5 left-0 w-full h-3 bg-white/20 rounded-full -z-10" />
              </span>
            </motion.h1>

            {/* Subheadline with excellent contrast */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-white/95 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl bg-[#B51016]/80 backdrop-blur-md p-5 rounded-3xl border-2 border-white/30 shadow-lg"
            >
              Pão de queijo da Canastra dourado a toda hora, salgados artesanais sequinhos, café no coador de pano e sanduíches fartos de pernil no balcão mais querido de Chavantes.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              {/* Primary CTA (Must perform "Entrar em contato") */}
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FFC700] text-stone-950 font-black text-base tracking-wide border-4 border-white hover:bg-white hover:text-[#D71920] transition-all duration-200 shadow-2xl active:scale-95 group"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Entrar em contato</span>
              </a>

              {/* Secondary Button to Explore Menu */}
              <a
                href="#cardapio"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-[#D71920] font-black text-base border-3 border-[#FFC700] hover:bg-[#FFC700] hover:text-stone-950 transition-all duration-200 shadow-xl"
              >
                <UtensilsCrossed className="w-5 h-5 text-[#D71920]" />
                <span>Ver Cardápio Digital</span>
              </a>
            </motion.div>

            {/* Quality Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="pt-4 grid grid-cols-3 gap-3.5 max-w-xl"
            >
              <div className="bg-white p-3.5 rounded-2xl border-3 border-[#FFC700] shadow-xl text-center">
                <span className="font-serif font-black text-lg sm:text-xl text-[#D71920] block">
                  Canastra
                </span>
                <span className="text-xs text-stone-900 font-black block">
                  Pão de queijo
                </span>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border-3 border-[#FFC700] shadow-xl text-center">
                <span className="font-serif font-black text-lg sm:text-xl text-[#D71920] block">
                  Coador
                </span>
                <span className="text-xs text-stone-900 font-black block">
                  Café no pano
                </span>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border-3 border-[#FFC700] shadow-xl text-center">
                <span className="font-serif font-black text-lg sm:text-xl text-[#D71920] block">
                  Na Chapa
                </span>
                <span className="text-xs text-stone-900 font-black block">
                  Lanches fartos
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Showcase with Official Logo */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative mx-auto max-w-md lg:max-w-none text-center"
            >
              {/* Official Logo Container */}
              <div className="relative inline-block mx-auto">
                <div className="max-w-xs sm:max-w-sm md:max-w-md flex items-center justify-center p-2">
                  <img
                    src="/IMG-20261008-WA0062.jpg"
                    alt="Mineiro Raiz"
                    className="w-auto h-72 sm:h-84 md:h-96 max-w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Floating Live Badge 1: WhatsApp Direto */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 -right-2 sm:-right-4 bg-white p-3.5 rounded-2xl shadow-2xl border-3 border-[#FFC700] flex items-center gap-2.5 max-w-[220px] text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 font-bold shadow-sm">
                    <Phone className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-[#D71920] uppercase tracking-wider block">
                      Peça no WhatsApp
                    </span>
                    <span className="font-serif font-black text-xs text-stone-950 block leading-tight">
                      (14) 99882-9573
                    </span>
                  </div>
                </motion.div>

                {/* Floating Live Badge 2: Fornada Quente */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-4 -left-2 sm:-left-4 bg-white p-3.5 rounded-2xl shadow-2xl border-3 border-[#FFC700] flex items-center gap-2.5 text-left"
                >
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#D71920] flex-shrink-0">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-serif font-black text-xs text-stone-950 block">
                      Fornada Quentinha!
                    </span>
                    <span className="text-[10px] font-black text-[#D71920] block">
                      Pão de queijo da Canastra
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Quick Card */}
              <div className="mt-8 bg-white p-4 rounded-2xl border-3 border-[#FFC700] shadow-xl max-w-sm mx-auto flex items-center justify-between text-xs font-black text-stone-900">
                <span className="flex items-center gap-1.5 text-stone-950">
                  <CheckCircle2 className="w-4 h-4 text-[#D71920]" />
                  Chavantes - SP
                </span>
                <span className="text-[#D71920] uppercase tracking-wider">
                  Rua Altino Arantes, 137
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Wave Divider at Bottom */}
      <div className="flex justify-center mt-12 relative z-10">
        <a
          href="#cardapio"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FFC700] text-xs font-black text-stone-950 border-3 border-white hover:bg-white hover:text-[#D71920] transition shadow-xl uppercase tracking-wider"
        >
          <span>Conheça os sabores</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
