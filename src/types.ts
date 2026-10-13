export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'salgados' | 'cafes' | 'lanches' | 'doces' | 'combos';
  badge?: string;
  rating: number;
  reviewsCount: number;
  iconName?: string;
  prepTime: string;
  isPopular?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}
