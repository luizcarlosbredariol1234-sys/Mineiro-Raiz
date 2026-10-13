import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Users, Utensils, Heart, Sparkles, Clock, Star, Coffee, Flame } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Pão de Queijo Autêntico',
      description: 'Queijo legítimo da Canastra, casquinha dourada e massa puxa-puxa saindo quentinha do forno a toda hora.',
      color: 'text-white',
      bg: 'bg-[#D71920]',
    },
    {
      icon: Users,
      title: 'Balcão do Mineiro',
      description: 'Sob o comando do Mineiro, cada cliente em Chavantes é recebido com amizade e atenção especial.',
      color: 'text-white',
      bg: 'bg-[#D71920]',
    },
    {
      icon: Utensils,
      title: 'Feito na Casa',
      description: 'Temperos frescos, pernil desfiado na chapa na hora e salgados artesanais de dar água na boca.',
      color: 'text-white',
      bg: 'bg-[#D71920]',
    },
    {
      icon: Heart,
      title: 'Café no Coador',
      description: 'Café passado no coador de pano à moda antiga, com grãos selecionados do Sul de Minas.',
      color: 'text-white',
      bg: 'bg-[#D71920]',
    },
  ];

  const highlights = [
    { label: 'Pão de Queijo', title: 'Queijo Canastra', detail: 'Fornadas quentinhas' },
    { label: 'Café no Pano', title: 'Sul de Minas', detail: 'Passado na hora' },
    { label: 'Lanches na Chapa', title: 'Pernil Artesanal', detail: 'Farto e suculento' },
    { label: 'Chavantes', title: 'O Rei Do Pão de Queijo', detail: 'No centro da cidade' },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#D71920] relative overflow-hidden border-t-8 border-[#FFC700]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Block: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Heritage Slate with White & Gold Borders */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="space-y-4">
              {/* Main Box */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border-4 border-[#FFC700] shadow-2xl relative overflow-hidden space-y-6">
                
                {/* Header with Official Logo (No Person Image) */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <img
                      src="/IMG-20261008-WA0062.jpg"
                      alt="Mineiro Raiz"
                      className="w-auto h-18 sm:h-20 object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#D71920] uppercase tracking-widest block">
                      O Dono da Casa
                    </span>
                    <span className="font-serif font-black text-2xl text-stone-900 block">
                      O Mineiro
                    </span>
                    <div className="flex items-center gap-1 text-[#FFC700] mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <h3 className="font-serif font-black text-2xl sm:text-3xl text-stone-950 leading-tight">
                  "Comida boa tem que ter capricho, queijo de verdade e café quentinho no coador."
                </h3>

                <p className="text-sm text-stone-700 italic leading-relaxed border-l-4 border-[#D71920] pl-4 font-semibold">
                  — O Mineiro, cuidando pessoalmente do balcão para servir o autêntico sabor mineiro em Chavantes.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-amber-50 border-2 border-[#FFC700] text-center">
                    <span className="text-xs font-black text-stone-950 block">🧀 Queijo Canastra</span>
                    <span className="text-[11px] text-[#D71920] font-black">Legítimo da serra</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-amber-50 border-2 border-[#FFC700] text-center">
                    <span className="text-xs font-black text-stone-950 block">☕ Sul de Minas</span>
                    <span className="text-[11px] text-[#D71920] font-black">Grãos selecionados</span>
                  </div>
                </div>
              </div>

              {/* Sub-card with Opening Clock */}
              <div className="p-4 rounded-2xl bg-white border-3 border-[#FFC700] flex items-center justify-between gap-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D71920] text-white flex items-center justify-center font-bold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-serif font-black text-sm text-stone-950">
                      Balcão Aberto às 06h30
                    </h5>
                    <p className="text-xs text-stone-600 font-bold">
                      O primeiro bom dia da cidade de Chavantes
                    </p>
                  </div>
                </div>
                <span className="text-xs font-black text-stone-950 uppercase tracking-wider bg-[#FFC700] px-3.5 py-1.5 rounded-full border border-white">
                  Seg a Sáb
                </span>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="mt-4 text-center">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FFC700] text-stone-950 font-black text-xs shadow-xl border-2 border-white">
                <Sparkles className="w-4 h-4 text-[#D71920]" />
                O ponto de encontro mais querido de Chavantes
              </span>
            </div>
          </motion.div>

          {/* Narrative Content on Red Canvas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#B51016] text-[#FFC700] border-2 border-[#FFC700] text-xs font-black uppercase tracking-wider shadow-md">
              O Rei Do Pão de Queijo
            </div>

            <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight drop-shadow-md">
              Uma lanchonete feita de prosa boa, café fresco e capricho no balcão.
            </h2>

            <div className="space-y-4 text-stone-900 text-base leading-relaxed bg-white p-6 rounded-3xl border-4 border-[#FFC700] shadow-xl font-medium">
              <p>
                No comando do <strong>Mineiro</strong>, a lanchonete <strong>Mineiro Raiz</strong> é o ponto de encontro perfeito no centro de <strong>Chavantes</strong> para quem aprecia comida com sabor de verdade, atendimento acolhedor e carinho em cada detalhe.
              </p>
              <p>
                O aroma inconfundível do pão de queijo da Canastra assando logo cedo reúne moradores, trabalhadores e famílias ao redor do balcão. Não tem mistério: é queijo bom, fornada saindo na hora e café coado no pano fresquinho.
              </p>
              <p>
                Aqui cada lanche é preparado com fartura: sanduíche de pernil temperado na chapa com queijo derretido, salgados crocantes e recheados, e a melhor recepção da cidade. Venha tomar um café com o Mineiro!
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FFC700] text-stone-950 font-black text-sm hover:bg-white hover:text-[#D71920] transition shadow-2xl border-2 border-white"
              >
                <span>Venha nos visitar no Centro</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* 4 Pillars Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif font-black text-2xl sm:text-3xl text-white drop-shadow-sm">
              O Que Faz a Nossa Casa Especial
            </h3>
            <p className="text-amber-100 font-semibold text-sm mt-2">
              Qualidade de verdade em cada fornada, xícara servida e sorriso no balcão.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-3xl bg-white border-4 border-[#FFC700] shadow-xl hover:shadow-2xl transition-all space-y-4"
                >
                  <div className={`w-12 h-12 rounded-full ${pillar.bg} border-2 border-white ring-2 ring-[#FFC700] flex items-center justify-center shadow-md`}>
                    <Icon className={`w-6 h-6 ${pillar.color}`} />
                  </div>
                  <h4 className="font-serif font-black text-lg text-stone-950">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quality Strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#B51016] text-white p-8 sm:p-12 shadow-2xl border-4 border-[#FFC700] ring-4 ring-white"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/25">
            {highlights.map((h) => (
              <div key={h.title} className="pt-4 lg:pt-0 lg:px-4">
                <span className="font-serif font-black text-xl sm:text-2xl text-[#FFC700] drop-shadow-md block">
                  {h.title}
                </span>
                <span className="font-black text-sm sm:text-base text-white block mt-1">
                  {h.label}
                </span>
                <span className="text-xs text-amber-200 font-bold block mt-0.5">
                  {h.detail}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
