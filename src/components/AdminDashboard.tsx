import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, ShoppingBag, FolderOpen, 
  Settings, LogOut, Activity, Menu, X, Plus, 
  Trash2, Edit, Save
} from 'lucide-react';
import { useSiteStore, Product, Category } from '../store/useSiteStore';

type Tab = 'overview' | 'config' | 'products' | 'categories';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`
        fixed lg:static top-0 bottom-0 left-0 z-50 w-64 bg-[#0A0A0A] border-r border-white/5 flex flex-col
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-20 sm:h-24 flex items-center justify-between px-6 border-b border-white/5">
           <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center p-0.5">
              <img src="https://i.imgur.com/qtIpeq8.png" alt="Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black font-heading uppercase italic tracking-tighter leading-tight">Admin</span>
              <span className="text-[9px] text-[#FFC107] font-bold tracking-widest uppercase">System</span>
            </div>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white/50 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 py-6 px-3 flex flex-col gap-2 overflow-y-auto">
          <NavItem 
            icon={<LayoutDashboard size={18} />} 
            label="Visão Geral" 
            active={activeTab === 'overview'} 
            onClick={() => { setActiveTab('overview'); setSidebarOpen(false); }} 
          />
          <NavItem 
            icon={<Settings size={18} />} 
            label="Configuração do Site" 
            active={activeTab === 'config'} 
            onClick={() => { setActiveTab('config'); setSidebarOpen(false); }} 
          />
          <NavItem 
            icon={<ShoppingBag size={18} />} 
            label="Produtos" 
            active={activeTab === 'products'} 
            onClick={() => { setActiveTab('products'); setSidebarOpen(false); }} 
          />
          <NavItem 
            icon={<FolderOpen size={18} />} 
            label="Categorias" 
            active={activeTab === 'categories'} 
            onClick={() => { setActiveTab('categories'); setSidebarOpen(false); }} 
          />
        </nav>

        <div className="p-6 border-t border-white/5">
          <a href="/" className="flex items-center gap-3 px-3 py-2 text-white/50 hover:text-[#FFC107] transition-colors w-full uppercase text-xs font-bold tracking-wider mt-2">
            <LogOut size={18} /> Voltar ao Site
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-20 sm:h-24 border-b border-white/5 px-4 sm:px-8 flex items-center justify-between bg-[#050505]/80 backdrop-blur-md z-30 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-white hover:text-[#FFC107]">
              <Menu size={24} />
            </button>
            <h1 className="text-xl sm:text-2xl font-black font-heading uppercase italic tracking-tight hidden sm:block">
              {activeTab === 'overview' && 'Dashboard'}
              {activeTab === 'config' && 'Configurações'}
              {activeTab === 'products' && 'Produtos Destaque'}
              {activeTab === 'categories' && 'Categorias'}
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#111] border border-white/10 rounded-full flex items-center justify-center">
              <Activity className="w-5 h-5 text-[#FFC107]" />
            </div>
            <div className="flex flex-col text-right hidden sm:flex">
              <span className="text-sm font-bold">Admin User</span>
              <span className="text-[10px] text-[#FFC107] uppercase tracking-widest">Master</span>
            </div>
          </div>
        </header>

        {/* Dynamic Content Area */}
        <div className="flex-1 overflow-auto p-4 sm:p-8 relative w-full h-full">
          {activeTab === 'overview' && <OverviewView />}
          {activeTab === 'config' && <ConfigView />}
          {activeTab === 'products' && <ProductsView />}
          {activeTab === 'categories' && <CategoriesView />}
        </div>
      </main>
    </div>
  );
}

// ---------------- VIEWS ----------------

function OverviewView() {
  const { products, categories } = useSiteStore();
  
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
        <StatCard title="Produtos Ativos" value={products.length.toString()} label="Na loja" icon={<ShoppingBag size={24} className="text-[#FFC107]" />} />
        <StatCard title="Categorias" value={categories.length.toString()} label="Publicadas" icon={<FolderOpen size={24} className="text-[#FFC107]" />} />
      </div>

      <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden">
        <div className="px-4 sm:px-6 py-4 border-b border-white/5 bg-[#111]">
          <h2 className="text-sm font-bold uppercase tracking-widest text-white/80">Acesso Rápido</h2>
        </div>
        <div className="p-6 text-sm text-white/60 leading-relaxed">
          Bem-vindo ao painel administrativo. Aqui você pode gerenciar o conteúdo da página inicial, cadastrar novos produtos que aparecerão na vitrine principal e organizar as categorias. Utilize o menu lateral para navegar entre as sessões.
        </div>
      </div>
    </div>
  );
}

function ConfigView() {
  const { hero, updateHero } = useSiteStore();
  const [logoUrl, setLogoUrl] = useState(hero.logoUrl);
  const [whatsappUrl, setWhatsappUrl] = useState(hero.whatsappUrl);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateHero({ logoUrl, whatsappUrl });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-2xl w-full">
      <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden p-6">
        <h2 className="text-[#FFC107] text-xs font-bold uppercase tracking-widest mb-6">HERO & LINKS EXTERNOS</h2>
        
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-xs uppercase tracking-widest text-white/50 font-bold mb-2">URL do Logo (Hero)</label>
            <input 
              type="text" 
              value={logoUrl}
              onChange={(e) => setLogoUrl(e.target.value)}
              className="w-full bg-[#111] border border-white/10 rounded-lg p-3 text-sm focus:border-[#FFC107] outline-none text-white"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-white/50 font-bold mb-2">Link do WhatsApp</label>
            <input 
              type="text" 
              value={whatsappUrl}
              onChange={(e) => setWhatsappUrl(e.target.value)}
              className="w-full bg-[#111] border border-white/10 rounded-lg p-3 text-sm focus:border-[#FFC107] outline-none text-white"
            />
          </div>
          
          <button 
            onClick={handleSave}
            className="mt-4 bg-[#FFC107] text-black font-bold uppercase tracking-widest text-xs py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-colors"
          >
            <Save size={16} /> {saved ? 'Salvo!' : 'Salvar Alterações'}
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductsView() {
  const { products, addProduct, deleteProduct } = useSiteStore();
  
  const [isAdding, setIsAdding] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({ name: '', price: 0, image: '', category: '', discount: '' });

  const handleAdd = () => {
    if (newProduct.name && newProduct.price !== undefined && newProduct.image) {
      addProduct({ id: `p_${Date.now()}`, ...newProduct } as Product);
      setIsAdding(false);
      setNewProduct({ name: '', price: 0, image: '', category: '', discount: '' });
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[#FFC107] text-xs font-bold uppercase tracking-widest">PRODUTOS VITRINE (MAX 4 RECOMENDADO)</h2>
        <button onClick={() => setIsAdding(!isAdding)} className="bg-[#FFC107] text-black px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center gap-2">
          {isAdding ? <X size={16} /> : <Plus size={16} />} {isAdding ? 'Cancelar' : 'Adicionar'}
        </button>
      </div>

      {isAdding && (
        <div className="bg-[#111] border border-[#FFC107]/50 rounded-2xl p-6 flex flex-col gap-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <input placeholder="Nome do Produto" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} className="bg-[#050505] border border-white/10 rounded-lg p-3 text-sm text-white" />
            <input type="number" placeholder="Preço (10.99)" value={newProduct.price || ''} onChange={e => setNewProduct({...newProduct, price: parseFloat(e.target.value)})} className="bg-[#050505] border border-white/10 rounded-lg p-3 text-sm text-white" />
            <input placeholder="Categoria (ex: Camisetas)" value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})} className="bg-[#050505] border border-white/10 rounded-lg p-3 text-sm text-white" />
            <input placeholder="URL da Foto" value={newProduct.image} onChange={e => setNewProduct({...newProduct, image: e.target.value})} className="bg-[#050505] border border-white/10 rounded-lg p-3 text-sm text-white lg:col-span-2" />
            <input placeholder="Desconto (ex: -10%)" value={newProduct.discount} onChange={e => setNewProduct({...newProduct, discount: e.target.value})} className="bg-[#050505] border border-white/10 rounded-lg p-3 text-sm text-white" />
          </div>
          <button onClick={handleAdd} className="bg-[#25D366] text-black font-bold uppercase tracking-widest text-xs py-3 rounded-lg hover:bg-white transition-colors">
            Salvar Produto
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map(p => (
          <div key={p.id} className="bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden flex flex-col group">
            <div className="h-40 bg-[#111] relative border-b border-white/5">
              <img 
                src={p.image} 
                alt={p.name} 
                referrerPolicy="no-referrer" 
                loading="lazy" 
                onError={(e) => { 
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80"; 
                }}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
              />
              {p.discount && <div className="absolute top-2 left-2 bg-[#FFC107] text-black text-[10px] font-bold px-2 py-0.5 rounded-sm">{p.discount}</div>}
              <button onClick={() => deleteProduct(p.id)} className="absolute top-2 right-2 bg-red-500/80 text-white p-2 rounded-full hover:bg-red-500 transition-colors">
                <Trash2 size={14} />
              </button>
            </div>
            <div className="p-4 flex flex-col">
              <span className="text-[9px] uppercase font-bold tracking-widest text-[#FFC107] mb-1">{p.category}</span>
              <span className="font-bold text-sm mb-2 text-white line-clamp-1">{p.name}</span>
              <span className="text-white/60 text-xs font-mono">R$ {p.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CategoriesView() {
  const { categories, addCategory, deleteCategory } = useSiteStore();
  const [isAdding, setIsAdding] = useState(false);
  const [newCat, setNewCat] = useState<Partial<Category>>({ name: '', image: '', icon: '' });

  const handleAdd = () => {
    if (newCat.name && newCat.image && newCat.icon) {
      addCategory({ id: `c_${Date.now()}`, ...newCat } as Category);
      setIsAdding(false);
      setNewCat({ name: '', image: '', icon: '' });
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[#FFC107] text-xs font-bold uppercase tracking-widest">CATEGORIAS</h2>
        <button onClick={() => setIsAdding(!isAdding)} className="bg-[#FFC107] text-black px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center gap-2">
          {isAdding ? <X size={16} /> : <Plus size={16} />} {isAdding ? 'Cancelar' : 'Adicionar'}
        </button>
      </div>

      {isAdding && (
        <div className="bg-[#111] border border-[#FFC107]/50 rounded-2xl p-6 flex flex-col gap-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Nome da Categoria (ex: CALÇAS)" value={newCat.name} onChange={e => setNewCat({...newCat, name: e.target.value})} className="bg-[#050505] border border-white/10 rounded-lg p-3 text-sm text-white" />
            <input placeholder="Icone/Emoji (ex: 👖)" value={newCat.icon} onChange={e => setNewCat({...newCat, icon: e.target.value})} className="bg-[#050505] border border-white/10 rounded-lg p-3 text-sm text-white" />
            <input placeholder="URL da Foto de Fundo" value={newCat.image} onChange={e => setNewCat({...newCat, image: e.target.value})} className="bg-[#050505] border border-white/10 rounded-lg p-3 text-sm text-white md:col-span-2" />
          </div>
          <button onClick={handleAdd} className="bg-[#25D366] text-black font-bold uppercase tracking-widest text-xs py-3 rounded-lg hover:bg-white transition-colors">
            Salvar Categoria
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map(c => (
          <div key={c.id} className="bg-[#121212] border border-white/5 rounded-xl flex items-center justify-between p-4 group relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img 
                src={c.image} 
                alt={c.name} 
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => { 
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80"; 
                }}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute inset-0 bg-[#000]/60"></div>
            <div className="flex items-center gap-3 relative z-10">
              <span className="text-2xl">{c.icon}</span>
              <span className="font-bold text-sm tracking-wider uppercase text-white">{c.name}</span>
            </div>
            <button onClick={() => deleteCategory(c.id)} className="relative z-10 text-white/50 hover:text-red-500 transition-colors p-2">
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------- UTILS ----------------

function NavItem({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center w-full gap-3 px-3 py-3 rounded-xl transition-all uppercase text-xs font-bold tracking-wider ${active ? 'bg-[#FFC107] text-black shadow-[0_0_15px_rgba(255,193,7,0.3)]' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
    >
      {icon}
      {label}
    </button>
  );
}

function StatCard({ title, value, label, icon }: { title: string, value: string, label: string, icon: React.ReactNode }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 flex flex-col relative overflow-hidden"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#FFC107]">{title}</h3>
        <div className="p-2 bg-[#111] rounded-lg border border-white/5">{icon}</div>
      </div>
      <div className="text-3xl sm:text-4xl font-black font-heading italic mb-1 text-white">{value}</div>
      <div className="text-xs text-white/50">{label}</div>
    </motion.div>
  );
}
