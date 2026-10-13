import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone, ChevronRight, Star, Coffee } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Cardápio Digital', href: '#cardapio' },
    { name: 'O Mineiro', href: '#sobre' },
    { name: 'Contato & Balcão', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#D71920]/98 backdrop-blur-md shadow-2xl border-b-4 border-[#FFC700] py-2'
          : 'bg-[#D71920] py-3 sm:py-4 border-b-4 border-[#FFC700]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name & Logo Badge */}
        <a href="#inicio" className="flex items-center gap-3 sm:gap-4 group">
          <div className="flex-shrink-0 flex items-center justify-center">
            <img
              src="/IMG-20261008-WA0062.jpg"
              alt="Mineiro Raiz"
              className="w-auto h-14 sm:h-16 max-w-[80px] object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-black text-2xl sm:text-3xl tracking-tight text-white drop-shadow-md leading-none">
                Mineiro Raiz
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#FFC700] mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 fill-current" />
              ))}
              <span className="text-[11px] font-black text-[#FFC700] tracking-wider uppercase ml-1 block">
                O Rei Do Pão de Queijo • Chavantes
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-black text-white hover:text-[#FFC700] transition-colors relative py-1 drop-shadow-xs after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FFC700] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            aria-label="Abrir sacola de pedidos"
            className="relative px-4 py-2.5 rounded-full bg-white text-stone-950 hover:bg-[#FFC700] transition-all border-2 border-white shadow-lg flex items-center gap-2 group font-black text-xs"
          >
            <ShoppingBag className="w-4 h-4 text-[#D71920] group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Sacola</span>
            {cartCount > 0 && (
              <span className="bg-[#D71920] text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse border border-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* Primary CTA (Must perform "Entrar em contato") */}
          <a
            href="#contato"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FFC700] text-stone-950 font-black text-sm tracking-wide border-2 border-white hover:bg-white hover:text-[#D71920] transition-all shadow-lg shadow-black/20 active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>Entrar em contato</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-2xl text-white hover:text-[#FFC700] md:hidden bg-white/15 border-2 border-white/40"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#D71920] border-b-4 border-[#FFC700] px-4 pt-4 pb-6 shadow-2xl space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-2xl text-white font-black bg-white/10 hover:bg-white hover:text-[#D71920] flex items-center justify-between border border-white/20 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#FFC700]" />
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#FFC700] text-stone-950 font-black text-sm shadow-xl border-2 border-white"
            >
              <Phone className="w-4 h-4" />
              <span>Entrar em contato</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
