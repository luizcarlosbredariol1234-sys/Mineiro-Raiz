import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, MessageSquare, CheckCircle2, Navigation, HelpCircle, ChevronDown, Star } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Dúvida sobre o cardápio');
  const [message, setMessage] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*MENSAGEM VIA SITE - MINEIRO RAIZ*\n\n` +
      `👤 *Nome:* ${name || 'Não informado'}\n` +
      `📞 *Telefone:* ${phone || 'Não informado'}\n` +
      `📌 *Assunto:* ${subject}\n` +
      `💬 *Mensagem:* ${message || 'Gostaria de falar com o Mineiro Raiz'}\n\n` +
      `_Enviado pelo formulário do site._`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5514998829573?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const faqs = [
    {
      q: 'Vocês fazem entrega em toda a cidade de Chavantes?',
      a: 'Sim! Entregamos tanto no Centro quanto nos bairros de Chavantes - SP. Os pedidos são preparados na hora e enviados bem quentinhos e embalados para viagem.',
    },
    {
      q: 'É possível encomendar centos de pão de queijo e salgados para festas?',
      a: 'Com certeza! Aceitamos encomendas de cento de coxinhas, empadas, pastéis e pães de queijo tradicionais da Canastra. Recomendamos avisar com antecedência pelo WhatsApp (14) 99882-9573.',
    },
    {
      q: 'Quais formas de pagamento são aceitas no balcão e delivery?',
      a: 'Aceitamos Pix (chave no momento do pedido), Cartões de Crédito e Débito (levamos a maquininha sem fio até você) e Dinheiro em espécie.',
    },
    {
      q: 'Qual o melhor horário para pegar pão de queijo saindo do forno?',
      a: 'Temos fornadas contínuas durante o dia todo! Os picos mais disputados são entre as 06h30 e 09h00 da manhã e das 15h30 às 18h00 no café da tarde.',
    },
  ];

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#D71920] relative border-t-8 border-[#FFC700]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with 5 stars badge */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#B51016] text-[#FFC700] border-2 border-[#FFC700] text-xs font-black uppercase tracking-wider shadow-md">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#FFC700] text-[#FFC700]" />
            ))}
            <span className="ml-1 text-white">Atendimento & Localização</span>
          </div>

          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight drop-shadow-md">
            Puxa uma Cadeira e Vem Conversar
          </h2>
          <p className="text-amber-100 font-medium text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Estamos no centro de Chavantes de portas abertas para te receber, ou prontos no WhatsApp para mandar seu pedido no capricho.
          </p>
        </div>

        {/* 2-Column Info & Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Endereço */}
            <div className="p-6 rounded-3xl bg-white border-4 border-[#FFC700] shadow-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#D71920] border-2 border-white ring-2 ring-[#FFC700] flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-black text-base text-stone-950">Nosso Endereço</h4>
                <p className="text-sm font-bold text-stone-900">
                  Rua Altino Arantes, 137 Centro
                </p>
                <p className="text-xs text-stone-600 font-semibold">
                  Chavantes - SP, CEP 18970-007
                </p>
                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Rua+Altino+Arantes,+137+Centro+Chavantes+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#D71920] hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" /> Abrir no Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Telefone & WhatsApp */}
            <div className="p-6 rounded-3xl bg-white border-4 border-[#FFC700] shadow-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#25D366] border-2 border-white ring-2 ring-[#FFC700] flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <Phone className="w-6 h-6 fill-white" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-black text-base text-stone-950">Telefone & WhatsApp</h4>
                <p className="text-xl font-black text-[#D71920]">
                  (14) 99882-9573
                </p>
                <p className="text-xs text-stone-600 font-semibold">
                  Atendimento direto no balcão e delivery rápido
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/5514998829573?text=Ol%C3%A1%20Mineiro%20Raiz!%20Gostaria%20de%20fazer%20um%20pedido."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-700 hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5" /> Chamar no WhatsApp Agora
                  </a>
                </div>
              </div>
            </div>

            {/* Horários */}
            <div className="p-6 rounded-3xl bg-white border-4 border-[#FFC700] shadow-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#D71920] border-2 border-white ring-2 ring-[#FFC700] flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-1 flex-1">
                <h4 className="font-serif font-black text-base text-stone-950">Horário de Funcionamento</h4>
                <div className="space-y-1.5 pt-1 text-xs sm:text-sm font-semibold">
                  <div className="flex justify-between text-stone-800">
                    <span>Segunda a Sábado:</span>
                    <span className="font-black text-stone-950">06:30 às 20:00</span>
                  </div>
                  <div className="flex justify-between text-stone-800">
                    <span>Domingo e Feriados:</span>
                    <span className="font-black text-stone-950">07:00 às 13:00</span>
                  </div>
                </div>
                <p className="text-[11px] text-[#D71920] font-black pt-1">
                  *Café da manhã fresco servido a partir da abertura.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Message / Order Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border-4 border-[#FFC700] shadow-2xl space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black mb-2 border border-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Resposta Rápida pelo WhatsApp
              </div>
              <h3 className="font-serif font-black text-2xl text-stone-950">
                Mande sua mensagem ou encomende para festa
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 mt-1 font-medium">
                Preencha os dados abaixo e clique em enviar para abrir a conversa direta com nosso balcão.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-stone-800 mb-1.5 uppercase tracking-wider">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Como podemos te chamar?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 focus:outline-none focus:border-[#D71920] text-sm bg-stone-50 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-stone-800 mb-1.5 uppercase tracking-wider">
                    Seu Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(14) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 focus:outline-none focus:border-[#D71920] text-sm bg-stone-50 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-stone-800 mb-1.5 uppercase tracking-wider">
                  Assunto da Mensagem
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 focus:outline-none focus:border-[#D71920] text-sm bg-stone-50 font-medium"
                >
                  <option value="Dúvida sobre o cardápio ou pedidos">Dúvida sobre o cardápio ou pedidos</option>
                  <option value="Encomenda de salgados/pães para festa">Encomenda de centos para festa/evento</option>
                  <option value="Desejo fazer um pedido para entrega">Desejo fazer um pedido para entrega</option>
                  <option value="Outro assunto">Outro assunto</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-stone-800 mb-1.5 uppercase tracking-wider">
                  Mensagem ou Detalhes da Encomenda
                </label>
                <textarea
                  rows={4}
                  placeholder="Escreva aqui sua dúvida, quantidade de salgados ou preferência..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 focus:outline-none focus:border-[#D71920] text-sm bg-stone-50 font-medium"
                />
              </div>

              {/* Primary CTA button as required by prompt */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-full bg-[#FFC700] hover:bg-[#D71920] hover:text-white text-stone-950 font-black text-base tracking-wide flex items-center justify-center gap-2 shadow-2xl border-3 border-white active:scale-[0.98] transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Entrar em contato</span>
              </button>
            </form>
          </div>

        </div>

        {/* Perguntas Frequentes (FAQ) */}
        <div className="max-w-3xl mx-auto pt-8 border-t-2 border-white/20">
          <div className="text-center mb-8">
            <h3 className="font-serif font-black text-2xl text-white flex items-center justify-center gap-2 drop-shadow-sm">
              <HelpCircle className="w-6 h-6 text-[#FFC700]" /> Dúvidas Frequentes dos Nossos Clientes
            </h3>
            <p className="text-xs sm:text-sm text-amber-100 font-semibold mt-1">
              Tudo o que você precisa saber sobre nosso atendimento e encomendas.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border-3 border-[#FFC700] overflow-hidden transition-all shadow-md"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif font-black text-sm sm:text-base text-stone-950 hover:text-[#D71920] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#D71920] transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-stone-800 text-xs sm:text-sm leading-relaxed border-t border-stone-200 pt-3 font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
