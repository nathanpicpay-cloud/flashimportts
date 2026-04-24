import { motion } from 'motion/react';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Mobile Menu */}
        <button className="lg:hidden text-white hover:text-[#FFC107] transition-colors">
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo Text (fallback for smaller screens or simple representation) */}
        <div className="flex items-center gap-2 cursor-pointer">
          <svg className="w-8 h-8 text-[#FFC107]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <div className="flex flex-col hidden sm:flex">
            <span className="text-xl font-black font-heading tracking-tighter uppercase italic text-white leading-none">Flash <span className="text-[#FFC107]">Imports</span></span>
            <span className="text-[9px] font-bold tracking-widest text-[#FFC107] mt-1 border-t border-white/10 pt-0.5">LOJA MASCULINA</span>
          </div>
        </div>

        {/* Desktop Links - Centralized */}
        <div className="hidden lg:flex gap-10 text-[11px] uppercase tracking-widest font-bold font-body">
          <a href="#inicio" className="text-[#FFC107] border-b-2 border-[#FFC107] pb-1">Início</a>
          <a href="#produtos" className="text-white hover:text-[#FFC107] transition-colors pb-1">Produtos</a>
          <a href="#categorias" className="text-white hover:text-[#FFC107] transition-colors pb-1">Categorias</a>
          <a href="#sobre" className="text-white hover:text-[#FFC107] transition-colors pb-1">Sobre Nós</a>
          <a href="#contato" className="text-white hover:text-[#FFC107] transition-colors pb-1">Contato</a>
        </div>

        {/* Icons Right */}
        <div className="flex items-center gap-6">
          <button className="text-white hover:text-[#FFC107] transition-colors duration-200">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-white hover:text-[#FFC107] transition-colors duration-200 hidden sm:block">
            <User className="w-5 h-5" />
          </button>
          <button className="relative text-white hover:text-[#FFC107] transition-colors duration-200">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-[#FFC107] text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
