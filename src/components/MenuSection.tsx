import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  Search,
  Plus,
  Star,
  Clock,
  Coffee,
  Check,
  ShoppingBag,
  Flame,
  Cookie,
  Sandwich,
  Cake,
  Users,
  Wheat,
  Heart,
  Award,
  Sparkles,
} from 'lucide-react';
import { MENU_ITEMS, CATEGORIES } from '../data/menuData';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  onOpenCart: () => void;
  cartCount: number;
}

const renderItemIcon = (iconName?: string) => {
  switch (iconName) {
    case 'Coffee':
      return <Coffee className="w-5 h-5 text-white" />;
    case 'Flame':
      return <Flame className="w-5 h-5 text-white" />;
    case 'Cookie':
      return <Cookie className="w-5 h-5 text-white" />;
    case 'Sandwich':
      return <Sandwich className="w-5 h-5 text-white" />;
    case 'Cake':
      return <Cake className="w-5 h-5 text-white" />;
    case 'Wheat':
      return <Wheat className="w-5 h-5 text-white" />;
    case 'Users':
      return <Users className="w-5 h-5 text-white" />;
    case 'Heart':
      return <Heart className="w-5 h-5 text-white" />;
    case 'Award':
      return <Award className="w-5 h-5 text-white" />;
    default:
      return <Sparkles className="w-5 h-5 text-white" />;
  }
};

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  onOpenCart,
  cartCount,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'todos' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setRecentlyAddedId(item.id);
    setTimeout(() => {
      setRecentlyAddedId(null);
    }, 1500);
  };

  return (
    <section id="cardapio" className="py-20 md:py-28 bg-[#D71920] relative border-t-8 border-[#FFC700]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header styled with logo 5-stars & red badge */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#B51016] text-[#FFC700] border-2 border-[#FFC700] text-xs font-black uppercase tracking-wider shadow-lg">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#FFC700] text-[#FFC700]" />
            ))}
            <span className="ml-1 text-white">Cardápio Digital Mineiro</span>
          </div>

          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight drop-shadow-md">
            Quitutes da Roça & Sabores de Balcão
          </h2>
          <p className="text-amber-100 font-medium text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Todas as delícias preparadas artesanalmente com queijo da Canastra, café coado no pano e aquele capricho inconfundível.
          </p>
        </div>

        {/* Filter Tabs and Search Bar */}
        <div className="mb-10 space-y-5">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-[#D71920] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar quitutes (Ex: pão de queijo, pernil, café...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border-3 border-[#FFC700] text-stone-900 placeholder:text-stone-500 focus:outline-none focus:ring-4 focus:ring-white shadow-xl text-sm font-bold"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-black text-[#D71920] hover:underline"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Categories Pill Buttons */}
          <div className="flex items-center justify-start md:justify-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full font-black text-xs sm:text-sm whitespace-nowrap transition-all duration-200 border-2 shadow-md ${
                    isActive
                      ? 'bg-[#FFC700] text-stone-950 border-white scale-105 shadow-xl shadow-black/25'
                      : 'bg-white text-stone-900 border-[#FFC700] hover:bg-[#FFC700] hover:text-stone-950'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid (High contrast white cards on red background) */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border-4 border-[#FFC700] max-w-lg mx-auto p-8 space-y-4 shadow-2xl">
            <Coffee className="w-12 h-12 text-[#D71920] mx-auto" />
            <h4 className="font-serif font-black text-xl text-stone-950">Nenhum quitute encontrado</h4>
            <p className="text-sm text-stone-700 font-medium">
              Não encontramos nenhum item para a busca "{searchQuery}". Experimente outro termo ou limpe o filtro.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('todos');
              }}
              className="px-6 py-3 rounded-full bg-[#FFC700] text-stone-950 font-black text-xs uppercase tracking-wider border-2 border-white shadow-md"
            >
              Ver todo o cardápio
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border-4 border-[#FFC700] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Decorative corner ring arc */}
                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full border-4 border-[#D71920]/20 pointer-events-none -z-0" />

                <div className="relative z-10 space-y-4">
                  {/* Card Header with Icon styled like the Logo Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#D71920] border-2 border-white ring-2 ring-[#FFC700] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      {renderItemIcon(item.iconName)}
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      {item.badge && (
                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#FFC700] text-stone-950 border border-stone-800/15 shadow-xs">
                          {item.badge}
                        </span>
                      )}
                      {item.prepTime && (
                        <span className="text-[11px] font-bold text-stone-600 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#D71920]" />
                          {item.prepTime}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Prep Time */}
                  <div>
                    <h3 className="font-serif font-black text-xl text-stone-950 group-hover:text-[#D71920] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-stone-700 text-xs font-bold mt-1">
                      <Clock className="w-3.5 h-3.5 text-[#D71920]" />
                      <span>{item.prepTime}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-stone-700 leading-relaxed min-h-[54px] font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Footer with Price and Button */}
                <div className="relative z-10 pt-5 mt-4 border-t-2 border-stone-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-black text-stone-500 uppercase tracking-wider block">
                      Preço
                    </span>
                    <span className="font-serif font-black text-2xl text-[#D71920]">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAdd(item)}
                    className={`px-5 py-2.5 rounded-full font-black text-xs sm:text-sm flex items-center gap-1.5 transition-all active:scale-95 shadow-md border-2 border-white ${
                      recentlyAddedId === item.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#D71920] hover:bg-[#B51016] text-white'
                    }`}
                  >
                    {recentlyAddedId === item.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Adicionado!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Pedir</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Floating Cart Indicator inside Section */}
        {cartCount > 0 && (
          <div className="mt-12 text-center">
            <button
              onClick={onOpenCart}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFC700] text-stone-950 font-black text-sm shadow-2xl hover:bg-white transition active:scale-98 border-3 border-white"
            >
              <ShoppingBag className="w-5 h-5 text-[#D71920]" />
              <span>Ver {cartCount} {cartCount === 1 ? 'item na sacola' : 'itens na sacola'} e pedir no WhatsApp</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
