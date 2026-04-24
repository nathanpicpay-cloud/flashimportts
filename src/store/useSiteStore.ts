import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product { id: string; name: string; price: number; category: string; image: string; discount?: string; }
export interface Category { id: string; name: string; image: string; icon: string; }

interface SiteState {
  hero: { logoUrl: string; whatsappUrl: string; };
  products: Product[];
  categories: Category[];
  updateHero: (data: Partial<SiteState['hero']>) => void;
  addProduct: (product: Product) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  addCategory: (category: Category) => void;
  updateCategory: (id: string, category: Partial<Category>) => void;
  deleteCategory: (id: string) => void;
}

export const useSiteStore = create<SiteState>()(
  persist(
    (set) => ({
      hero: {
        logoUrl: 'https://i.imgur.com/ofizn4V.png',
        whatsappUrl: 'https://wa.me/5575991148518'
      },
      products: [
        { id: "f1", name: "Boné Lacoste Croco", price: 220, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80", category: "Acessórios", discount: "-10%" },
        { id: "f2", name: "Camiseta Armani Ex.", price: 289, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80", category: "Camisetas", discount: "-10%" },
        { id: "f3", name: "Bermuda Jeans", price: 219, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=600&q=80", category: "Bermudas", discount: "-10%" },
        { id: "f4", name: "Tênis Casual Boss", price: 590, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80", category: "Calçados", discount: "-10%" }
      ],
      categories: [
        { id: 'c1', name: 'CAMISETAS', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80', icon: '👕' },
        { id: 'c2', name: 'POLOS', image: 'https://images.unsplash.com/photo-1596755094514-f87e32f85223?auto=format&fit=crop&w=600&q=80', icon: '👔' },
        { id: 'c3', name: 'BERMUDAS', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=600&q=80', icon: '🩳' },
        { id: 'c4', name: 'CALÇAS', image: 'https://images.unsplash.com/photo-1542272604-787c38355620?auto=format&fit=crop&w=600&q=80', icon: '👖' },
        { id: 'c5', name: 'CALÇADOS', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80', icon: '👟' },
        { id: 'c6', name: 'ACESSÓRIOS', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80', icon: '🧢' },
      ],
      updateHero: (data) => set((state) => ({ hero: { ...state.hero, ...data } })),
      addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
      updateProduct: (id, product) => set((state) => ({ products: state.products.map(p => p.id === id ? { ...p, ...product } : p) })),
      deleteProduct: (id) => set((state) => ({ products: state.products.filter(p => p.id !== id) })),
      addCategory: (category) => set((state) => ({ categories: [...state.categories, category] })),
      updateCategory: (id, category) => set((state) => ({ categories: state.categories.map(c => c.id === id ? { ...c, ...category } : c) })),
      deleteCategory: (id) => set((state) => ({ categories: state.categories.filter(c => c.id !== id) })),
    }),
    { name: 'flash-site-storage' }
  )
);
